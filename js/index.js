/* ==========================================================================
   CODECELL · interactions · 2025/26
   ========================================================================== */

/* -------------------- data -------------------- */
const ROSTER = [
  /* Committee Heads */
  {n:"Amandeep Singh", r:"Committee Head", s:"head", img:"Amandeep_2025-26.png", gh:"amandeeep02", url:"https://amandeep-singh.xyz"},
  {n:"Viraj Bhartiya", r:"Committee Head", s:"head", img:"Viraj_2025-26.png", gh:"virajbhartiya", url:"https://virajbhartiya.com"},

  /* Technical */
  {n:"Omik Acharya",        r:"Tech Head", s:"tech", img:"Omik_2025-26.png", gh:"OmikAcharya"},
  {n:"Aditya Belgaonkar",   r:"Tech Team", s:"tech", img:"Aditya_2025-26.png", gh:"adityabelgaonkar05"},
  {n:"Kumar Tanay",         r:"Tech Team", s:"tech", img:"Kumar_2025-26.png", gh:"tkshsbcue"},
  {n:"Vivek Jain",          r:"Tech Team", s:"tech", img:"Vivek_2025-26.png", gh:"vivekjain488", url:"https://vivek-jain.xyz"},
  {n:"Anmol Rai",           r:"Tech Team", s:"tech", img:"Anmol_2025-26.png", gh:"spooodieman"},
  {n:"Ashwera Hasan",       r:"Tech Team", s:"tech", img:"Ashwera_2025-26.png", gh:"ashwera"},
  {n:"Samagra Agarwal",     r:"Tech Team", s:"tech", img:"Samagra_2025-26.png", gh:"Samagra78"},
  {n:"Shantanav Mukherjee", r:"Tech Team", s:"tech", img:"Shantanav_2025-26.png", gh:"Soundcreates"},
  {n:"Tanuj Adarkar",       r:"Tech Team", s:"tech", img:"Tanuj_2025-26.png", gh:"Tanuj-A06"},
  {n:"Vinayak Pai",         r:"Tech Team", s:"tech", img:"Vinayak_2025-26.png", gh:"Vinayak314"},
  {n:"Bhoumik Sangle",      r:"Tech Team", s:"tech", img:"Bhoumik_2025-26.png", gh:"happypeepo"},
  {n:"Dhruv Kumar",         r:"Tech Team", s:"tech", img:"Dhruv_2025-26.png", gh:"dhruvwarriorr", url:"https://www.dhruvwarriorr.xyz"},
  {n:"Pranav Mendon",       r:"Tech Team", s:"tech", img:"Pranav_2025-26.png", gh:"pranavmendon"},
  {n:"Shaurya",             r:"Tech Team", s:"tech", img:"Shaurya_2025-26.png", gh:null},

  /* Creative */
  {n:"Aditi Singh",       r:"Creative Head", s:"creative", img:"Aditi_2025-26.png", gh:"aditisingh02", url:"https://aditi-singh.xyz"},
  {n:"Akanksha Agroya",   r:"Creative Team", s:"creative", img:"Akanksha_2025-26.png", gh:"akankshaagroya"},
  {n:"Amrit Nigam",       r:"Creative Team", s:"creative", img:"Amrit_2025-26.png", gh:"Amrit-Nigam", url:"https://amritnigam.xyz"},
  {n:"Ameya Deore",       r:"Creative Team", s:"creative", img:"Ameya_2025-26.png", gh:"AmeyaDeore"},
  {n:"Dhanya Shukla",     r:"Creative Team", s:"creative", img:"Dhanya_2025-26.png", gh:"DS-paris"},
  {n:"Divyanshi Yadav",   r:"Creative Team", s:"creative", img:"Divyanshi_2025-26.png", gh:"Divyanshi760"},
  {n:"Purva Pote",        r:"Creative Team", s:"creative", img:"Purva_2025-26.png", gh:"purva-pote"},
  {n:"Anchita Sahu",      r:"Creative Team", s:"creative", img:"Anchita_2025-26.png", gh:"anchita84"},
  {n:"Mitali Paul",       r:"Creative Team", s:"creative", img:"Mitali_2025-26.png", gh:"mitalimeow"},

  /* Marketing */
  {n:"Rishi Shanbhag",       r:"Marketing Head", s:"mark", img:"Rishi_2025-26.png", gh:"rishishanbhag"},
  {n:"Chaitanya Dhamdhere",  r:"Marketing Team", s:"mark", img:"Chaitanya_2025-26.png", gh:"chaitu0608"},
  {n:"Dharmik Chandel",      r:"Marketing Team", s:"mark", img:"Dharmik_2025-26.png", gh:"dharmikchandel"},
  {n:"Shreyans Tatiya",      r:"Marketing Team", s:"mark", img:"Shreyans_2025-26.png", gh:"Percobain", url:"https://www.shreyanstatiya.tech"},
  {n:"Arshia Dang",          r:"Marketing Team", s:"mark", img:"Arshia_2025-26.png", gh:"arshiadang"},
  {n:"Harshil Ravariya",     r:"Marketing Team", s:"mark", img:"Harshil_2025-26.png", gh:"theharshilravariya"},
  {n:"Parth Panwar",         r:"Marketing Team", s:"mark", img:"Parth_2025-26.png", gh:"parthpanwar"},
  {n:"Samaira Sharma",       r:"Marketing Team", s:"mark", img:"Samaira_2025-26.png", gh:"samairaxox"},
  {n:"Shravika Mhatre",      r:"Marketing Team", s:"mark", img:"Shravika_2025-26.png", gh:"shravikamhatre64"},
  {n:"Srushti Talandage",    r:"Marketing Team", s:"mark", img:"Srushti_2025-26.png", gh:"Srushti-T18"},
  {n:"Rudrakshi Acharyya",   r:"Marketing Team", s:"mark", img:"Rudrakshi_2025-26.png", gh:"rudrxkshi"},
  {n:"Yash Agroya",          r:"Marketing Team", s:"mark", img:"Yash_2025-26.png", gh:"Sparkey19"}
];

const GROUPS = [
  {id:"head", rgnum:"§ 01 ─ Committee",  title:"The Two-Headed Helm" },
  {id:"tech", rgnum:"§ 02 ─ Engineering", title:"Keepers of the Keyboard" },
  {id:"creative", rgnum:"§ 03 ─ Creative", title:"Those Who Draw the Map" },
  {id:"mark", rgnum:"§ 04 ─ Outreach",   title:"The Town Criers" }
];

const EVENTS = [
  {
    tag:"Flagship · Annual",
    season:"October",
    title:"<b>Code</b>Spree",
    blurb:"Our annual algorithmic gauntlet. Two hundred minds, six hours, one leaderboard. The problem set is cruel by design; the after-party is generous by design.",
    href:"/codespree/",
    watermark:"Spree"
  },
  {
    tag:"Hackathon · 36h",
    season:"March",
    title:"<b>Crack</b>AThon",
    blurb:"Thirty-six hours, sleeplessness mandatory. Teams ship something real: scoped, demoed, and judged by people who have shipped things themselves.",
    href:"/crackathon/",
    watermark:"Hack"
  },
  {
    tag:"Workshop Series",
    season:"Year-round",
    title:"Month of <b>MERN</b>",
    blurb:"Four weeks, one stack, thirty-ish first-time shippers. We build a functioning app from nothing, together, in public, and argue over CSS the entire time.",
    href:"/month-of-mern/",
    watermark:"MERN"
  },
  {
    tag:"Competitive",
    season:"Onsite",
    title:"ICPC <b>Circuit</b>",
    blurb:"Practice rounds, mock contests, and the occasional humiliation by a well-disguised segment tree. The lab lights stay on until someone solves D.",
    href:"/icpc/",
    watermark:"ICPC"
  },
  {
    tag:"Community",
    season:"Weekly",
    title:"Code <b>Spree Weekly</b>",
    blurb:"Short-form problem solving every week. Low stakes, high frequency; the kind of practice that turns strangers into a team by semester's end.",
    href:"/cwc/",
    watermark:"CWC"
  },
  {
    tag:"Feature · 2026",
    season:"Spring",
    title:"A <b>Festival</b> of Code",
    blurb:"We are throwing the largest student coding festival western India has ever seen. Talks, a 12-hour competitive onslaught, vendor hall, demo night, and a closing keynote from someone you've actually heard of. Details under embargo.",
    href:"#join",
    watermark:"Festival",
    feature:true
  }
];

const GALLERY = [
  { src:"static/images/compressed/gallery/1.jpg", caption:"Launch Night · 2024", cls:"g1" },
  { src:"static/images/compressed/gallery/14.jpg", caption:"Hack Floor · 36h", cls:"g2" },
  { src:"static/images/compressed/gallery/7.jpg", caption:"Workshop · MERN", cls:"g3" },
  { src:"static/images/compressed/gallery/20.jpg", caption:"Judging Panel", cls:"g4" },
  { src:"static/images/compressed/gallery/3.jpg", caption:"Opening Keynote", cls:"g5" },
  { src:"static/images/compressed/gallery/11.jpg", caption:"Team Handover", cls:"g6" },
  { src:"static/images/compressed/gallery/18.jpg", caption:"Finals · CodeSpree", cls:"g7" },
  { src:"static/images/compressed/gallery/22.jpg", caption:"The Audience", cls:"g8" },
  { src:"static/images/compressed/gallery/9.jpg",  caption:"Late Night Debug", cls:"g9" }
];

const CHANNELS = [
  { num:"01", name:"Discord", handle:"the lounge · daily chatter · pinned lore", href:"/join-discord/" },
  { num:"02", name:"Instagram", handle:"@kjsce.codecell · pictures, posters, receipts", href:"https://instagram.com/kjsce.codecell" },
  { num:"03", name:"GitHub", handle:"github.com/kjsce-codecell · the source lives here", href:"https://github.com/kjsce-codecell" },
  { num:"04", name:"Write in", handle:"codecell@somaiya.edu · the slower, sincerer channel", href:"mailto:codecell@somaiya.edu" },
  { num:"05", name:"Apply", handle:"recruitment opens each June · prepare a portfolio", href:"/apply/" }
];

/* -------------------- init -------------------- */
document.addEventListener('DOMContentLoaded', () => {
  buildTicker();
  buildDispatch();
  buildRoster();
  buildGallery();
  buildChannels();
  stampDateBits();
  initReveal();
  initScrollSpy();
  initPreloader();
});

/* -------------------- preloader -------------------- */
function initPreloader(){
  const pre = document.getElementById('preloader');
  if (!pre) return;
  const hide = () => pre.classList.add('hidden');
  window.addEventListener('load', () => setTimeout(hide, 1400));
  setTimeout(hide, 2600);
}

/* -------------------- ticker -------------------- */
function buildTicker(){
  const track = document.querySelector('.ticker-track');
  if (!track) return;

  const today = new Date();
  const pad = n => String(n).padStart(2,'0');
  const stamp = `${today.getFullYear()}·${pad(today.getMonth()+1)}·${pad(today.getDate())}`;

  const phrases = [
    `<b>Transmission</b> from the Somaiya Engineering Campus`,
    `Folio № <b>XIV</b> · MMXXV — MMXXVI`,
    `Established MMXII · Still here, still shipping`,
    `Current roster: <b>${ROSTER.length}</b> engineers, artists & talkers`,
    `Recruitment opens again each June`,
    `Dispatch timestamp ${stamp}`,
    `The best code is read more than it is written — <b>Guy L. Steele</b>`,
    `Compile. Panic. Ship. Repeat.`,
    `Committee heads: <b>Amandeep</b> & <b>Viraj</b>`,
    `A hack is a correct answer to a question that was not asked`
  ];

  const block = phrases.map(p => `<span>${p}<i class="dot"></i></span>`).join('');
  track.innerHTML = block + block;
}

/* -------------------- dispatch (events) -------------------- */
function buildDispatch(){
  const grid = document.getElementById('dispatch-grid');
  if (!grid) return;

  grid.innerHTML = EVENTS.map((e, i) => {
    const span = e.feature ? 'span-12 feature' : (i === 0 ? 'span-8' : (i === 1 ? 'span-4' : 'span-6'));
    const delay = (i % 6) * 90;
    return `
      <a class="dispatch-card ${span} reveal" href="${e.href}" style="--d:${delay}ms" ${e.feature ? `data-watermark="${e.watermark}"` : ''}>
        <div class="kick">
          <span>${e.tag}</span>
          <b>${e.season}</b>
        </div>
        <div>
          <h3>${e.title}</h3>
          <p>${e.blurb}</p>
        </div>
        <div class="foot">
          <span class="tag">Read on →</span>
          <span class="arr">→</span>
        </div>
      </a>`;
  }).join('');
}

/* -------------------- roster -------------------- */
function buildRoster(){
  const host = document.getElementById('roster-host');
  if (!host) return;

  host.innerHTML = GROUPS.map(g => {
    const people = ROSTER.filter(p => p.s === g.id);
    if (!people.length) return '';
    const cards = people.map((p, i) => {
      const isHead = /Head/i.test(p.r);
      const headCls = isHead ? ' is-head' : '';
      const links = [];
      if (p.url) links.push(`<a href="${p.url}" target="_blank" rel="noopener">site</a>`);
      if (p.gh)  links.push(`<a href="https://github.com/${p.gh}" target="_blank" rel="noopener">gh/${p.gh}</a>`);
      const del = (i % 12) * 50;
      return `
        <div class="member${headCls} reveal" style="--d:${del}ms">
          <div class="portrait">
            <span class="tag">№ ${String(ROSTER.indexOf(p)+1).padStart(2,'0')}</span>
            <img src="static/images/team-2025-26/${p.img}" alt="${p.n}" loading="lazy" onerror="this.style.opacity=0.15;this.alt='';">
          </div>
          <div>
            <div class="name">${p.n}</div>
            <div class="role">${p.r}</div>
          </div>
          <div class="links">
            ${links.join('')}
          </div>
        </div>`;
    }).join('');

    return `
      <div class="roster-group reveal">
        <div class="roster-group-head">
          <div class="rgnum">${g.rgnum}</div>
          <h4>${g.title}</h4>
          <div class="rgcount">${String(people.length).padStart(2,'0')} members</div>
        </div>
        <div class="roster-grid">${cards}</div>
      </div>`;
  }).join('');
}

/* -------------------- gallery -------------------- */
function buildGallery(){
  const host = document.getElementById('gallery-host');
  if (!host) return;
  host.innerHTML = GALLERY.map((g, i) => `
    <figure class="${g.cls} reveal" style="--d:${(i%6)*80}ms">
      <img src="${g.src}" alt="${g.caption}" loading="lazy" onerror="this.parentElement.style.display='none'">
      <figcaption>${g.caption}</figcaption>
    </figure>`).join('');
}

/* -------------------- channels -------------------- */
function buildChannels(){
  const host = document.getElementById('channels-host');
  if (!host) return;
  host.innerHTML = CHANNELS.map(c => `
    <a class="channel reveal" href="${c.href}" ${/^https?:|^mailto:/.test(c.href) ? 'target="_blank" rel="noopener"' : ''}>
      <span class="cnum">${c.num}</span>
      <span class="cname">${c.name}</span>
      <span class="chandle">${c.handle}</span>
    </a>`).join('');
}

/* -------------------- date bits -------------------- */
function stampDateBits(){
  const iss = document.querySelector('[data-issue]');
  if (iss) {
    const d = new Date();
    const pad = n => String(n).padStart(2,'0');
    const day = d.toLocaleDateString('en-GB', { weekday:'long' });
    iss.innerHTML = `${day.toUpperCase()} · ${pad(d.getDate())}.${pad(d.getMonth()+1)}.${d.getFullYear()}`;
  }
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
}

/* -------------------- reveal on scroll -------------------- */
function initReveal(){
  const nodes = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !nodes.length) {
    nodes.forEach(n => n.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  nodes.forEach(n => io.observe(n));

  /* safety net — after 2.5s reveal anything still hidden (for screenshots,
     JS-disabled observers, users who don't scroll, etc.) */
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(n => n.classList.add('in'));
  }, 2500);
}

/* -------------------- nav active-section spy -------------------- */
function initScrollSpy(){
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length) return;
  const map = new Map();
  links.forEach(a => {
    const id = a.getAttribute('href').slice(1);
    const sec = document.getElementById(id);
    if (sec) map.set(sec, a);
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      const link = map.get(e.target);
      if (!link) return;
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  map.forEach((_, sec) => io.observe(sec));

  /* smooth scroll for hash links */
  links.forEach(a => a.addEventListener('click', (ev) => {
    const href = a.getAttribute('href');
    if (!href || href.length < 2) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    ev.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }));
}
