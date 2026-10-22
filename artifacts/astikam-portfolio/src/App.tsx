import { ArrowDown, ArrowRight, ArrowUpRight, AtSign, Award, Cloud, Code2, Database, Languages, Mail, MapPin, Phone, Trophy } from 'lucide-react';
import type { ReactNode } from 'react';

const projects = [
  {
    number: '01',
    name: 'Smart / Sketchpad Reporting',
    type: 'DATA ENGINEERING',
    summary: 'A Spring Batch ETL layer that brings Cloud SQL, Bigtable and Oracle together into scheduled or on-demand reporting.',
    flow: ['Cloud SQL', 'Bigtable', 'Oracle', 'Reports'],
    accent: 'sage',
    icon: Database,
  },
  {
    number: '02',
    name: 'CODE',
    fullName: 'Card Optimization and Decision Engine',
    type: 'BACKEND SYSTEMS',
    summary: 'A Spring Boot decisioning service on Kubernetes, using Bigtable for high-throughput, low-latency decisions.',
    flow: ['Request', 'Spring Boot', 'Bigtable', 'Decision'],
    accent: 'gold',
    icon: Code2,
  },
  {
    number: '03',
    name: 'Slack Proxy Server',
    type: 'INTEGRATIONS',
    summary: 'A lightweight interaction model that routes application traffic through Slack slash commands.',
    flow: ['Slash cmd', 'Slack', 'Proxy', 'Application'],
    accent: 'blue',
    icon: ArrowRight,
  },
  {
    number: '04',
    name: 'Azure SAP Sizer',
    type: 'CLOUD & COST',
    summary: 'Custom SAP sizing recommendations designed to support more resource- and cost-efficient planning.',
    flow: ['Workload', 'Sizing inputs', 'Recommendations'],
    accent: 'sage',
    icon: Cloud,
  },
];

const experience = [
  { company: 'Accenture', role: 'Data Engineering, Management & Governance Specialist', date: 'Jul 2026 — Present', note: 'Building data pipelines, database integrations and cloud solutions. Delivered two projects and contributed to an agentic AI framework.', current: true },
  { company: 'Accenture', role: 'Packaged App Development Senior Analyst', date: 'Aug 2024 — Jul 2026', note: 'Delivered data-focused application development across cloud and integration work.' },
  { company: 'Capgemini', role: 'Professional 1 · Software Engineer', date: 'Jul 2022 — Aug 2024', note: 'Software engineering with subject-matter expertise for integrations.' },
  { company: 'Tata Consultancy Services', role: 'Assistant System Engineer', date: 'Nov 2020 — Jul 2022', note: 'Built a strong foundation in enterprise engineering and delivery.' },
];

const skillGroups = [
  { label: 'Languages', items: ['Java', 'Scala', 'Python'] },
  { label: 'Backend & orchestration', items: ['Spring Boot', 'Spring Batch', 'Airflow', 'Jinja'] },
  { label: 'Google Cloud', items: ['Bigtable', 'BigQuery', 'Composer', 'Dataproc'] },
  { label: 'Infrastructure', items: ['Docker', 'Kubernetes', 'OpenShift', 'EC2'] },
  { label: 'Data & delivery', items: ['MySQL', 'Redis', 'Git', 'GitHub Actions', 'CI/CD'] },
];

const credentials = [
  ['Google Cloud', 'Cloud Digital Leader'],
  ['Microsoft', 'Azure Fundamentals · AZ-900'],
  ['Google Cloud', 'Enterprise Agent Development'],
  ['Google Cloud', 'Gemini Enterprise Deployment'],
  ['Recognition', 'GeeksforGeeks JOB-A-THON 7.0'],
];

function SectionHeading({ index, eyebrow, title, note }: { index: string; eyebrow: string; title: ReactNode; note?: string }) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">
      <div>
        <div className="section-kicker mb-4"><span className="mr-3 text-[#a5a294]">{index}</span>{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      {note && <p className="max-w-md text-[15px] leading-7 text-[#69717a] md:justify-self-end">{note}</p>}
    </div>
  );
}

function DataDiagram({ project }: { project: typeof projects[number] }) {
  return (
    <div className={`diagram diagram-${project.accent}`} aria-label={`${project.name} system flow`}>
      <div className="diagram-label mono"><span>FLOW / {project.number}</span><span>CONCEPTUAL</span></div>
      <div className="flow-row">
        {project.flow.map((item, index) => (
          <div className="flow-node-wrap" key={item}>
            <div className={`flow-node ${index === project.flow.length - 1 ? 'flow-node-end' : ''}`}>
              <span className="flow-node-mark">{index === 0 ? 'IN' : index === project.flow.length - 1 ? 'OUT' : `0${index}`}</span>
              <span>{item}</span>
            </div>
            {index < project.flow.length - 1 && <span className="flow-connector"><span /></span>}
          </div>
        ))}
      </div>
      <div className="diagram-footer"><span>ENGINEERED FOR CLARITY</span><span className="diagram-status"><i /> SYSTEM THINKING</span></div>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio-shell min-h-[100dvh]">
      <a href="#main" className="skip-link" data-testid="link-skip-content">Skip to content</a>
      <header className="top-nav fixed inset-x-0 top-0 z-30 border-b border-[#dcd8cc]">
        <div className="page-wrap flex h-[72px] items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-3" aria-label="Astikam Singh — home" data-testid="link-home">
            <span className="brand-mark display">AS<span>.</span></span>
            <span className="hidden text-[12px] font-semibold tracking-[.02em] text-[#303b46] sm:block">ASTIKAM SINGH</span>
          </a>
          <nav aria-label="Main navigation" className="mobile-nav flex items-center gap-6 text-[12px] font-medium text-[#626b72]">
            <a className="nav-link" href="#work" data-testid="link-nav-work">Work</a>
            <a className="nav-link" href="#experience" data-testid="link-nav-experience">Experience</a>
            <a className="nav-link" href="#about" data-testid="link-nav-about">About</a>
            <a className="nav-contact" href="#contact" data-testid="link-nav-contact">Let’s talk <ArrowUpRight size={13} /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero-grid relative min-h-[740px] pt-[72px]">
          <div className="page-wrap relative grid min-h-[668px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10 max-w-[660px]">
              <div className="hero-enter mb-8 inline-flex items-center gap-2 border border-[#d2d7c9] bg-[#f7f5ed]/80 px-3 py-2 text-[11px] text-[#526359]">
                <span className="availability-dot" />
                <span className="mono tracking-[.04em]">DATA · BACKEND · CLOUD</span>
                <span className="mx-1 h-3 w-px bg-[#d2d7c9]" />
                <MapPin size={12} /><span>India</span>
              </div>
              <h1 className="hero-enter delay-1 display max-w-[720px] text-[clamp(54px,8vw,100px)] font-bold leading-[.94] text-[#202a37]">
                Complex data.<br /><span className="hero-accent">Clear outcomes.</span>
              </h1>
              <p className="hero-enter delay-2 mt-8 max-w-[480px] text-[17px] leading-8 text-[#626b72]">
                I’m Astikam Singh — an engineer making dependable systems from data pipelines, backend services and cloud infrastructure.
              </p>
              <div className="hero-enter delay-3 mt-9 flex flex-wrap items-center gap-3">
                <a href="#work" className="primary-link" data-testid="link-explore-work">Explore selected work <ArrowDown size={15} /></a>
                <a href="https://flowcv.me/astikamsingh" target="_blank" rel="noreferrer" className="text-link" data-testid="link-resume">View resume <ArrowUpRight size={14} /></a>
              </div>
              <div className="hero-enter delay-3 mt-12 flex items-center gap-5 border-t border-[#d8d5ca] pt-5">
                <div><strong className="display text-[27px] font-bold text-[#24313a]">5<span className="text-[#36785d]">+</span></strong><span className="ml-2 text-[12px] text-[#71777a]">years engineering</span></div>
                <span className="h-8 w-px bg-[#d8d5ca]" />
                <div className="text-[12px] leading-5 text-[#71777a]">Currently at <strong className="block font-semibold text-[#303b46]">Accenture · India</strong></div>
              </div>
            </div>

            <div className="hero-art relative mx-auto w-full max-w-[480px] lg:justify-self-end" aria-label="Illustration of data moving through a dependable system">
              <div className="art-top mono"><span>FIG. 01</span><span>FROM SOURCES TO SIGNAL</span></div>
              <div className="architecture">
                <div className="architecture-label mono">A SYSTEM, MADE LEGIBLE</div>
                <svg className="architecture-lines" viewBox="0 0 460 330" role="img" aria-label="Data flow connecting source systems to a reporting layer">
                  <path d="M95 75 C165 75 157 165 224 165 S290 75 365 75" />
                  <path d="M95 165 C150 165 170 165 224 165 S310 165 365 165" />
                  <path d="M95 255 C165 255 157 165 224 165 S290 255 365 255" />
                  <path className="flow-dash" d="M95 75 C165 75 157 165 224 165 S290 75 365 75 M95 165 C150 165 170 165 224 165 S310 165 365 165 M95 255 C165 255 157 165 224 165 S290 255 365 255" />
                  {[['Cloud SQL', 'SOURCE', 31, 54], ['Bigtable', 'STORE', 31, 144], ['Oracle', 'SOURCE', 31, 234], ['Pipelines', 'TRANSFORM', 178, 144], ['Reports', 'OUTPUT', 329, 54], ['Services', 'OUTPUT', 329, 234]].map(([name, label, x, y]) => (
                    <g key={String(name)} transform={`translate(${x} ${y})`} className="diagram-box">
                      <rect width="100" height="42" rx="3" />
                      <text x="10" y="16" className="svg-kicker">{label}</text>
                      <text x="10" y="32" className="svg-name">{name}</text>
                      <circle cx="88" cy="12" r="3" />
                    </g>
                  ))}
                  <circle cx="230" cy="165" r="8" className="hub" />
                  <circle cx="230" cy="165" r="15" className="hub-ring" />
                </svg>
                <div className="architecture-foot mono"><span>CONNECT</span><span>TRANSFORM</span><span>DELIVER</span></div>
              </div>
              <div className="art-caption"><span className="caption-rule" />Good engineering should make complexity easier to trust.</div>
            </div>
          </div>
          <div className="hero-index mono"><span>01 / 05</span><span>SCROLL TO EXPLORE</span></div>
        </section>

        <section id="work" className="section-pad bg-[#edeae0]">
          <div className="page-wrap">
            <SectionHeading index="01" eyebrow="Selected work" title={<>Systems that do<br className="hidden md:block" /> the quiet heavy lifting.</>} note="A selection of engineering work across data consolidation, decisioning, integrations and cloud planning. Project names and flows describe the work; no private demo links are published." />
            <div className="project-list">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className="project-card group grid border-t border-[#d2d0c6] py-8 md:grid-cols-[.82fr_1.18fr] md:gap-12 md:py-10" key={project.number} data-testid={`card-project-${project.number}`}>
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-5 flex items-center justify-between">
                          <span className="section-kicker">{project.type}</span>
                          <span className="mono text-[11px] text-[#989589]">{project.number} / 04</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="project-icon"><Icon size={19} strokeWidth={1.6} /></div>
                          <div>
                            <h3 className="display text-[28px] font-bold leading-tight tracking-[-.055em] text-[#202a37]">{project.name}</h3>
                            {'fullName' in project && <p className="mt-1 text-[12px] font-medium text-[#67716e]">{project.fullName}</p>}
                          </div>
                        </div>
                        <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-[#69717a]">{project.summary}</p>
                      </div>
                      <p className="mt-7 flex items-center gap-2 text-[11px] text-[#829087]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#50836b]" /> Project overview · private implementation</p>
                    </div>
                    <DataDiagram project={project} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad">
          <div className="page-wrap">
            <SectionHeading index="02" eyebrow="Experience" title={<>Built through<br className="hidden md:block" /> the work.</>} note="Five-plus years across enterprise engineering teams, growing from foundational systems delivery to data, cloud and integration ownership." />
            <div className="experience-layout grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="experience-aside">
                <div className="aside-stat display">05<span>+</span></div>
                <div className="mono mt-2 text-[10px] uppercase tracking-[.12em] text-[#738078]">Years in engineering</div>
                <div className="aside-divider" />
                <p className="max-w-[245px] text-[14px] leading-7 text-[#69717a]">A steady progression from software engineering fundamentals to systems that connect data, applications and cloud platforms.</p>
                <div className="mt-8 flex items-center gap-2 text-[12px] text-[#68766c]"><span className="availability-dot" /> Currently building at Accenture</div>
              </div>
              <div className="timeline-line relative space-y-0">
                {experience.map((job, index) => (
                  <article key={`${job.company}-${job.date}`} className="timeline-item relative grid gap-2 pb-9 pl-9 md:grid-cols-[1fr_auto]">
                    <span className={`timeline-dot absolute left-0 top-[5px] h-[15px] w-[15px] rounded-full border ${job.current ? 'border-[#3d8062] bg-[#3d8062]' : 'border-[#a6aaa0] bg-[#f4f1e8]'}`} />
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="display text-[21px] font-bold tracking-[-.04em] text-[#26313a]">{job.company}</h3>
                        {job.current && <span className="current-tag">CURRENT</span>}
                      </div>
                      <p className="text-[14px] font-semibold text-[#43514e]">{job.role}</p>
                      <p className="mt-2 max-w-[530px] text-[13px] leading-6 text-[#747a7b]">{job.note}</p>
                    </div>
                    <span className="mono pt-1 text-[10px] tracking-[.02em] text-[#86877f] md:text-right">{job.date}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="toolkit-section section-pad bg-[#202a37] text-[#f4f1e8]">
          <div className="page-wrap">
            <SectionHeading index="03" eyebrow="Engineering toolkit" title={<>The right tools<br className="hidden md:block" /> for the real problem.</>} note="Languages, frameworks and platforms I’ve worked with across application engineering, data systems and cloud delivery." />
            <div className="toolkit-grid grid gap-px overflow-hidden border border-[#44505a] bg-[#44505a] md:grid-cols-2">
              {skillGroups.map((group, index) => (
                <div className={`toolkit-group ${index === skillGroups.length - 1 ? 'md:col-span-2' : ''}`} key={group.label}>
                  <div className="mono mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[.13em] text-[#99b6a8]"><span className="toolkit-index">0{index + 1}</span>{group.label}</div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => <span className="skill-chip" key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad">
          <div className="page-wrap">
            <SectionHeading index="04" eyebrow="The person behind the systems" title={<>Engineering is<br className="hidden md:block" /> a team sport.</>} note="A little beyond the stack: the foundations, recognition and people-first pursuits that keep me curious." />
            <div className="about-grid grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="about-panel education-panel">
                <div className="panel-heading"><span className="panel-icon"><Award size={17} /></span><span className="section-kicker">Education</span></div>
                <p className="mono mt-9 text-[10px] uppercase tracking-[.1em] text-[#778078]">2016 — 2020</p>
                <h3 className="display mt-3 max-w-[390px] text-[28px] font-bold leading-tight tracking-[-.05em] text-[#202a37]">B.Tech, Computer Science</h3>
                <p className="mt-3 text-[14px] text-[#67716e]">Pranveer Singh Institute of Technology</p>
                <div className="panel-bottom-line" />
                <p className="mono text-[10px] text-[#7d847d]">FOUNDATION / 01</p>
              </div>
              <div className="about-panel credentials-panel">
                <div className="panel-heading"><span className="panel-icon"><Award size={17} /></span><span className="section-kicker">Credentials & recognition</span></div>
                <div className="credential-list mt-6">
                  {credentials.map(([issuer, title], index) => (
                    <div className="credential-row" key={title}>
                      <span className="mono text-[10px] text-[#8a8c82]">0{index + 1}</span>
                      <div><p className="text-[13px] font-semibold text-[#35413e]">{title}</p><p className="mt-1 text-[11px] text-[#7b817e]">{issuer}</p></div>
                      {index === credentials.length - 1 && <Trophy size={14} className="ml-auto text-[#a87c3f]" />}
                    </div>
                  ))}
                </div>
              </div>
              <div className="about-panel personal-panel lg:col-span-2">
                <div className="personal-copy">
                  <div className="panel-heading"><span className="panel-icon"><Trophy size={17} /></span><span className="section-kicker">Beyond the keyboard</span></div>
                  <h3 className="display mt-6 text-[30px] font-bold tracking-[-.055em] text-[#202a37]">A competitive streak,<br />in a good way.</h3>
                  <p className="mt-4 max-w-[400px] text-[14px] leading-7 text-[#69717a]">Football and table tennis have both brought tournament medals — and a reminder that good outcomes come from reading the play, trusting the team and staying in it.</p>
                </div>
                <div className="sports-board">
                  <div className="sport-mark"><span className="sport-ball">F</span><span className="mono">FOOTBALL</span><strong>TOURNAMENT<br />MEDALIST</strong><span className="sport-rule" /></div>
                  <div className="sport-mark"><span className="sport-ball sport-ball-table">TT</span><span className="mono">TABLE TENNIS</span><strong>TOURNAMENT<br />MEDALIST</strong><span className="sport-rule" /></div>
                  <div className="sports-court" aria-hidden="true"><span /><i /><b /></div>
                </div>
              </div>
              <div className="language-strip lg:col-span-2">
                <Languages size={16} className="text-[#36785d]" />
                <span className="mono text-[10px] uppercase tracking-[.12em] text-[#798079]">Languages</span>
                <span className="language-item">English</span><span className="language-dot">/</span><span className="language-item">Hindi</span>
                <span className="language-note">Comfortable across teams and contexts</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section relative overflow-hidden bg-[#dce8de]">
          <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
          <div className="page-wrap relative z-10 py-24 md:py-32">
            <div className="section-kicker mb-6"><span className="mr-3 text-[#8ca091]">05</span>Start a conversation</div>
            <h2 className="display max-w-[800px] text-[clamp(48px,8vw,92px)] font-bold leading-[.94] tracking-[-.07em] text-[#202a37]">Let’s make the<br /><span className="contact-accent">complex dependable.</span></h2>
            <p className="mt-7 max-w-[420px] text-[15px] leading-7 text-[#586860]">For engineering roles, collaboration or a thoughtful conversation about data systems — my inbox is open.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="contact-button" href="mailto:astikamsingh491@gmail.com" data-testid="link-email"><Mail size={16} /> astikamsingh491@gmail.com <ArrowUpRight className="ml-auto" size={16} /></a>
              <a className="contact-button contact-button-secondary" href="tel:+918126831633" data-testid="link-phone"><Phone size={16} /> +91 81268 31633 <ArrowUpRight className="ml-auto" size={16} /></a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-[#63736a]">
              <span className="inline-flex items-center gap-2"><AtSign size={13} /> Based in India</span>
              <a href="https://flowcv.me/astikamsingh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#2d694e]" data-testid="link-contact-resume">Resume profile <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-bar bg-[#202a37] text-[#c4c9c4]">
        <div className="page-wrap flex flex-col gap-4 py-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="mono tracking-[.08em]" data-testid="link-footer-home">ASTIKAM SINGH <span className="text-[#6ba184]">/</span> ENGINEER</a>
          <span className="text-[#949e9b]">Built on curiosity, care and a respect for systems that last.</span>
          <a href="#home" className="inline-flex items-center gap-2 hover:text-white" data-testid="link-back-top">Back to top <ArrowUpRight size={12} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
