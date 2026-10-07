// Dependency-free, selectable-text A4 PDF. ASCII content uses embedded standard
// PDF fonts. Source URLs are clickable annotations; no network service is used.
window.buildPortfolioPDF = function(data, projects, role) {
  const clean = text => String(text).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[–—]/g,'-').replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/[^\x20-\x7e]/g,' ');
  const escape = text => clean(text).replace(/([\\()])/g,'\\$1');
  const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');
  const width=(s,size,bold=false)=>{ctx.font=`${bold?'bold ':''}${size}px Arial`;return ctx.measureText(clean(s)).width;};
  const pages=[];let page;
  function newPage(){page={commands:[],links:[],y:757};pages.push(page);text('RIFQI AFTA RONANDA / PORTFOLIO',48,800,8,true);line(48,783,547,783);}
  function text(s,x,y,size=10,bold=false,color='0.12 0.23 0.20'){page.commands.push(`BT /${bold?'F2':'F1'} ${size} Tf ${color} rg 1 0 0 1 ${x} ${y} Tm (${escape(s)}) Tj ET`);}
  function line(x,y,x2,y2){page.commands.push(`0.82 0.86 0.81 RG 0.6 w ${x} ${y} m ${x2} ${y2} l S`);}
  function paragraph(s,size=10,bold=false,maxWidth=499){
    const words=clean(s).split(/\s+/);let row='';
    for(const word of words){if(row&&width(row+' '+word,size,bold)>maxWidth){text(row,48,page.y,size,bold);page.y-=size*1.45;row=word;}else row+=(row?' ':'')+word;}
    if(row){text(row,48,page.y,size,bold);page.y-=size*1.45;}
  }
  function section(label,body){paragraph(label.toUpperCase(),8,true);paragraph(body,10);page.y-=9;}
  function link(label,url){text(label,48,page.y,10,false,'0.25 0.39 0.25');page.links.push({x:48,y:page.y-3,w:Math.min(width(label,10),499),h:15,url});page.y-=22;}
  newPage();
  paragraph(data.name,30,true);page.y-=10;paragraph(role,16);page.y-=25;
  paragraph(data.headline,24);page.y-=12;paragraph(data.summary,12);page.y-=18;paragraph(data.positioning,11);page.y-=25;
  section('Focus','Practical data workflows, machine learning, responsive web applications, and clear technical communication.');
  section('Selected work',projects.map(p=>p.title).join(' | '));
  section('How to read this portfolio','Each case separates the implemented workflow from its intended business value and remaining validation. Commercial outcomes, production deployments, and performance gains are not claimed without evidence.');
  link('GitHub / rifqironanda',data.github);link('LinkedIn / Rifqi Afta Ronanda',data.linkedin);if(data.figma)link('Figma / Design work',data.figma);
  page.y-=15;paragraph('Repository documentation reviewed: 7 October 2026. LinkedIn is provided as a profile link; detailed employment information has not been independently reviewed for this edition.',9);
  for(let i=0;i<projects.length;i++){
    if(i%2===0)newPage();
    const p=projects[i];
    paragraph(`${p.number} / ${p.title}`,17,true);paragraph(`${p.status} | ${p.stack.join(' / ')}`,9);page.y-=12;
    section('Problem',p.problem);section('Implementation',p.solution);section('Intended business value',p.value);section('Evidence',p.evidence);section('Validation needed',p.limitation);
    link('View project documentation on GitHub',`${data.github}/${p.repo}/blob/main/${p.sourcePath}`);
    if(i%2===0&&i+1<projects.length){line(48,page.y,547,page.y);page.y-=28;}
  }
  pages.forEach((p,i)=>{page=p;text(`${role} | ${i+1} / ${pages.length}`,48,32,8,false);});
  const objects=[null];const add=s=>{objects.push(s);return objects.length-1;};
  const catalog=add(''),root=add('');const normal=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');const bold=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
  const ids=[];
  for(const p of pages){const stream=p.commands.join('\n');const content=add(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);const annotations=p.links.map(l=>add(`<< /Type /Annot /Subtype /Link /Rect [${l.x} ${l.y} ${l.x+l.w} ${l.y+l.h}] /Border [0 0 0] /A << /S /URI /URI (${escape(l.url)}) >> >>`));ids.push(add(`<< /Type /Page /Parent ${root} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${normal} 0 R /F2 ${bold} 0 R >> >> /Contents ${content} 0 R /Annots [${annotations.map(n=>`${n} 0 R`).join(' ')}] >>`));}
  objects[catalog]=`<< /Type /Catalog /Pages ${root} 0 R >>`;objects[root]=`<< /Type /Pages /Kids [${ids.map(n=>`${n} 0 R`).join(' ')}] /Count ${ids.length} >>`;
  let pdf='%PDF-1.4\n';const offsets=[0];for(let i=1;i<objects.length;i++){offsets.push(pdf.length);pdf+=`${i} 0 obj\n${objects[i]}\nendobj\n`;}
  const start=pdf.length;pdf+=`xref\n0 ${objects.length}\n0000000000 65535 f \n`;for(let i=1;i<objects.length;i++)pdf+=`${String(offsets[i]).padStart(10,'0')} 00000 n \n`;pdf+=`trailer\n<< /Size ${objects.length} /Root ${catalog} 0 R >>\nstartxref\n${start}\n%%EOF`;
  return new Blob([pdf],{type:'application/pdf'});
};
