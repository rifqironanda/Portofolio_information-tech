// Edit this file to update both the website and downloaded PDF.
window.PORTFOLIO = {
  name: 'Rifqi Afta Ronanda',
  headline: 'Turning data into useful decisions.',
  summary: 'I connect engineering thinking, machine learning, and clear interfaces to build practical tools for research and operations.',
  positioning: 'Engineering Physics background at Universitas Gadjah Mada. Exploring IT and AI engineering opportunities with companies in Japan.',
  github: 'https://github.com/rifqironanda',
  linkedin: 'https://www.linkedin.com/in/rifqiaftaronanda/',
  figma: '', // Add your verified public Figma URL here.
  projects: [
    {
      id:'solar', number:'01', title:'Solar operations monitor', category:'AI', sector:'ENERGY & OPERATIONS', status:'Research prototype',
      teaser:'Make unusual inverter behaviour easier to investigate.',
      problem:'Low solar output can come from weather or unusual operating conditions. Teams need context before deciding what to inspect.',
      solution:'A CSV-to-dashboard workflow combining data validation, an irradiance and temperature baseline, Isolation Forest per inverter, and explainable alerts.',
      value:'Designed to help operations teams prioritise inspections and interpret underperformance with environmental context.',
      evidence:'Repository documents CSV validation, inverter filtering, actual-versus-expected charts, and alert-logic unit tests.',
      limitation:'No measured downtime reduction or verified fault-detection accuracy. Ambient temperature is a proxy; plant-specific calibration and maintenance records are needed.',
      evaluation:'Next validation: precision, recall, false alerts per day, detection latency, and confirmed maintenance events.',
      stack:['Python','Streamlit','Isolation Forest'],
      repo:'fault_detection_solar_operation_monitoring', sourcePath:'README.md',
      sourceSha:'96883813085b5029b4afc34362b70cb04a67adc4',
      flow:['CSV validation','Physical baseline','Per-inverter ML','Inspection alerts'], visual:'solar'
    },
    {
      id:'evidence', number:'02', title:'Local AI evidence database', category:'AI', sector:'RESEARCH & KNOWLEDGE', status:'Local MVP',
      teaser:'Keep document summaries connected to a reviewable workflow.',
      problem:'Literature review involves repetitive PDF extraction, summarisation, and organising evidence for later review.',
      solution:'Local PDF discovery and page-text extraction with PyMuPDF, Ollama summaries, SQLite storage, and a manual validation state.',
      value:'Designed to reduce repetitive document handling while keeping processing local and human review explicit.',
      evidence:'Documented architecture separates documents, page text, summaries, and validations. No cloud LLM API is required by the default pipeline.',
      limitation:'No measured time savings. Reliable claim extraction and citation verification remain roadmap items; summaries require human validation.',
      evaluation:'Next validation: summary faithfulness, page-text coverage, processing time, and reviewer correction rate.',
      stack:['Python','Ollama','SQLite'], repo:'AI_Agents-for-build-evidence-database', sourcePath:'README.md', sourceSha:'dd8dc4c29a54d84a740c95446c2e7ca96445986b',
      flow:['PDF collection','Text extraction','Local summary','Human validation'], visual:'evidence'
    },
    {
      id:'banking', number:'03', title:'Quantum banking research hub', category:'IT', sector:'FINANCIAL RESEARCH', status:'Interactive web application',
      teaser:'Translate complex technical research into an accessible interface.',
      problem:'Research materials, demonstrations, and report drafts can be difficult to navigate when they live in separate tools.',
      solution:'A React dashboard with 30 presentation materials, interactive labs, an outline editor, local-first storage, and optional Supabase synchronisation.',
      value:'Brings reading, demonstrations, and drafting into one workflow to support research communication and structured review.',
      evidence:'Repository documents responsive navigation, an outline editor, Supabase Auth and Row Level Security, revision history, and offline fallback.',
      limitation:'Research communication tool. No claim of bank deployment, regulatory endorsement, or measured productivity improvement.',
      evaluation:'Next validation: task completion, mobile usability, accessibility, and reliable offline-to-online synchronisation.',
      stack:['React','Supabase','CSS'], repo:'quantum_computing_for_banking', sourcePath:'README.md', sourceSha:'84e3fd01bf1e67cceaeae937bf140a87cdd1a90f',
      flow:['Research modules','Interactive labs','Outline editor','Local / cloud storage'], visual:'banking'
    },
    {
      id:'audio', number:'04', title:'Soundscape analysis pipeline', category:'AI', sector:'ENVIRONMENTAL DATA', status:'Research pipeline',
      teaser:'Organise recordings into patterns that a researcher can review.',
      problem:'Audio collections need consistent representations before similarities and unusual recordings can be explored.',
      solution:'MFCC, spectral and temporal features; statistical aggregation; PCA; KMeans clustering; and Isolation Forest outlier detection.',
      value:'Creates reusable features, cluster labels, and outlier indicators to support exploratory review of environmental recordings.',
      evidence:'Repository specifies feature, label, and outlier array outputs with a repeatable Python workflow.',
      limitation:'Clusters are not verified species or semantic labels. No demonstrated biodiversity metric or commercial monitoring outcome.',
      evaluation:'Next validation: cluster interpretability, expert review, feature stability, and sensitivity to recording conditions.',
      stack:['Python','MFCC','PCA / KMeans'], repo:'model-labeling-soundscape-ecology', sourcePath:'README.md', sourceSha:'32a4469d7c7c5393351398399865302a83bf6cf4',
      flow:['Audio recordings','Feature extraction','Clustering','Outlier review'], visual:'audio'
    },
    {
      id:'nihongo', number:'05', title:'Manabi Japanese learning dashboard', category:'IT', sector:'EDUCATION & WEB', status:'Learning application',
      teaser:'Turn study materials into a guided practice experience.',
      problem:'Self-study benefits from a clear path through lessons, practice, feedback, and progress tracking.',
      solution:'A responsive React interface with 18 Irodori Starter lessons, text-to-speech, graded quizzes, timed practice, and local progress storage.',
      value:'Supports independent study through immediate explanations and a consistent lesson-to-practice workflow.',
      evidence:'Repository documents 18 lessons, 30-question practice sets, responsive layouts, and localStorage progress.',
      limitation:'Independent practice application, not an official JLPT or JFT-Basic simulator. Learning gains and language proficiency are not claimed.',
      evaluation:'Next validation: learner task completion, quiz correctness, mobile accessibility, and progress persistence.',
      stack:['React','Web Speech API','localStorage'], repo:'belajar_nihongo', sourcePath:'README.md', sourceSha:'905b43283dcdcf0813b01e5ad5822079d42d807d',
      flow:['Can-do lesson','Guided practice','Instant feedback','Saved progress'], visual:'nihongo'
    }
  ]
};
