(() => {
  const data = window.PORTFOLIO;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const repoURL = project => `${data.github}/${project.repo}`;
  let filter = 'all';
  let lastTrigger;
  const dialog = document.getElementById('case-dialog');
  document.getElementById('summary').textContent = data.summary;
  document.getElementById('positioning').textContent = data.positioning;
  document.getElementById('about-position').textContent = data.positioning;
  for (const id of ['linkedin','contact-linkedin']) document.getElementById(id).href = data.linkedin;
  document.getElementById('github').href = data.github;
  document.getElementById('email').href = data.linkedin;
  document.getElementById('email').target = '_blank';
  document.getElementById('email').rel = 'noopener noreferrer';
  if (data.figma) { document.getElementById('figma').href=data.figma; document.getElementById('figma').hidden=false; }
  document.getElementById('year').textContent = new Date().getFullYear();
  const selected = () => data.projects.filter(p => filter === 'all' || p.category === filter);
  function render() {
    const projects = selected();
    document.getElementById('project-count').textContent = `${projects.length} projects`;
    document.getElementById('projects').innerHTML = projects.map(p => `
      <article class="project-card">
        <div class="project-visual ${escape(p.visual)}"><span class="visual-label">${escape(p.sector)}</span><div class="pipeline-mini">${p.flow.map((step,i)=>`${i?'<i aria-hidden="true">→</i>':''}<span>${escape(step)}</span>`).join('')}</div><span class="visual-caption">Workflow overview · ${escape(p.status)}</span></div>
        <div class="card-body"><div class="card-meta"><span>PROJECT ${escape(p.number)} / ${escape(p.category)}</span><span>${escape(p.status)}</span></div><h3>${escape(p.title)}</h3><p class="teaser">${escape(p.teaser)}</p><p class="value"><strong>INTENDED BUSINESS VALUE</strong>${escape(p.value)}</p><div class="stack">${p.stack.map(s=>`<span>${escape(s)}</span>`).join('')}</div><div class="card-actions"><button data-case="${escape(p.id)}" aria-label="Read case study: ${escape(p.title)}">Read case study ↗</button><a href="${escape(repoURL(p))}" target="_blank" rel="noopener noreferrer" aria-label="Source code: ${escape(p.title)}">Source code ↗</a></div></div>
      </article>`).join('');
  }
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    filter=button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    render();
  }));
  document.getElementById('projects').addEventListener('click', event => {
    const button=event.target.closest('[data-case]'); if(!button)return;
    const p=data.projects.find(p=>p.id===button.dataset.case);lastTrigger=button;
    document.getElementById('case-content').innerHTML=`<h2 id="case-title">${escape(p.title)}</h2><p>${escape(p.status)} · ${p.stack.map(escape).join(' / ')}</p>${[['Problem',p.problem],['Implementation',p.solution],['Intended business value',p.value],['Repository evidence',p.evidence],['Validation still needed',p.limitation],['Next evaluation',p.evaluation]].map(([title,body])=>`<section class="case-block"><h3>${title}</h3><p>${escape(body)}</p></section>`).join('')}<a class="source-link" href="${escape(repoURL(p))}/blob/main/${escape(p.sourcePath)}" target="_blank" rel="noopener noreferrer">Read source documentation on GitHub ↗</a>`;
    dialog.showModal();
  });
  document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>lastTrigger?.focus());
  document.querySelectorAll('.download').forEach(button=>button.addEventListener('click',()=>{
    const label=filter==='all'?'IT and AI Engineering':filter==='IT'?'IT and Web Engineering':'AI and Data Engineering';
    const blob=window.buildPortfolioPDF(data,selected(),label);
    const url=URL.createObjectURL(blob); const a=document.createElement('a');
    a.href=url;a.download=`Rifqi_Afta_Ronanda_Portfolio_${filter}.pdf`;document.body.append(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),30000);
    document.getElementById('download-status').textContent=`Portfolio PDF downloaded with ${selected().length} projects. ${label}.`;
  }));
  render();
})();
