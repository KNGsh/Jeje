const profile = {
  name: "Sarah Johnson", handle: "sarah.cares", title: "Certified Nursing Assistant",
  avatar: "https://cdn.magicpatterns.com/patterns/generated-images/420a58e6-f0bc-495e-8708-350dd4f0b200.jpg",
  location: "Austin, Texas", email: "sarah.johnson.cna@email.com"
};
const highlights = [
  {id:"care",label:"Patient care",icon:"♥",tone:"hi-rose",items:["Activities of daily living (ADLs)","Bathing, grooming & oral care","Feeding assistance & I/O tracking","Incontinence & catheter care","Post-mortem care"]},
  {id:"clinical",label:"Clinical",icon:"⚕",tone:"hi-blue",items:["Vital signs & pulse oximetry","Blood glucose monitoring","Weight & height measurements","Skin checks & pressure injury prevention","Specimen collection"]},
  {id:"safety",label:"Safety",icon:"✓",tone:"hi-green",items:["Hoyer & gait-belt transfers","Fall prevention protocols","Range-of-motion exercises","Infection control & PPE","Restraint-free care practices"]},
  {id:"comms",label:"Communication",icon:"☏",tone:"hi-amber",items:["EHR charting (PointClickCare)","SBAR shift handoffs","Family & caregiver updates","Dementia-friendly communication","Bilingual: English & Spanish"]},
  {id:"education",label:"Education",icon:"✧",tone:"hi-violet",items:["Austin Community College · 2025","Nurse Aide Training Program (120 hours)","LVN prerequisites in progress","Anatomy & Physiology I — A"]}
];
const posts = [
  {id:"p1",image:"https://cdn.magicpatterns.com/patterns/generated-images/35705b63-f01c-43fc-9cd9-b70d84f2c010.jpg",alt:"Nursing team celebrating an Employee of the Month award",caption:"Employee of the Month 🏆 So grateful to work with a team that shows up for each other and for our residents every single shift.",tag:"Milestone",date:"March 2026",likes:248,comments:[["denise.rn","So well deserved! Our unit is lucky to have you 💛"],["riverbend.health","Congratulations Sarah!"]]},
  {id:"p2",image:"https://cdn.magicpatterns.com/patterns/generated-images/5755739c-5d53-4a33-b753-8f289bca089c.jpg",alt:"Sarah helping an elderly resident walk with a walker",caption:"Care that starts with listening. Small things — a warm greeting, an unhurried walk, noticing a change in appetite — make a real difference to someone’s day.",tag:"About me",date:"Feb 2026",likes:312,comments:[["michael.r","This is exactly how you cared for my dad. Thank you."]]},
  {id:"p3",image:"https://cdn.magicpatterns.com/patterns/generated-images/055447ba-3f8d-484b-a7ac-004686f85d81.jpg",alt:"Sarah doing a puzzle with an elderly woman in a memory care lounge",caption:"Dementia Care Specialist ✨ Completed essentiALZ Level 1 with the Alzheimer’s Association. Calm, patient, person-centered.",tag:"Certification",date:"Feb 2026",likes:187,comments:[["angela.lvn","Proud of you! Memory care needs more people like you."]]},
  {id:"p4",image:"https://cdn.magicpatterns.com/patterns/generated-images/2483eb85-0015-4899-835e-2e288d5a90ce.jpg",alt:"Hands taking a pulse oximetry reading on an elderly patient",caption:"1,800+ bedside hours and 100% on-time charting in PointClickCare. Accurate vitals = safer handoffs.",tag:"Clinical",date:"Jan 2026",likes:164,comments:[["charge.nurse","Your SBAR handoffs are always on point."]]},
  {id:"p5",image:"https://cdn.magicpatterns.com/patterns/generated-images/cb9b0c65-814e-460e-afd6-ed33c4602333.jpg",alt:"Nurse aide certificate with a stethoscope and daisies on a table",caption:"Officially a Certified Nurse Aide 🎓 Texas Registry #TX-48213. This is where it all began.",tag:"Milestone",date:"Sep 2025",likes:401,comments:[["mom","Grandma would be so proud of you 🥹"],["acc.nursing","Congratulations, graduate!"]]},
  {id:"p6",image:profile.avatar,alt:"Portrait of Sarah Johnson in scrubs",caption:"Hi, I’m Sarah 👋 Currently completing LVN prerequisites and looking for a team that values growth, safety, and genuinely person-centered care.",tag:"Intro",date:"Aug 2025",likes:529,comments:[["austin.health.jobs","Sending you a DM!"]]}
];
const experiences = [
  {role:"Certified Nursing Assistant",place:"Riverbend Health & Rehabilitation Center",location:"Austin, TX",period:"Oct 2025 – Present",type:"Full-time · 12-hr day shifts",current:true,points:["Provide direct care for 10–12 residents per shift on a 24-bed short-term rehab unit.","Record vitals, intake/output, and ADL documentation in PointClickCare with 100% on-time charting.","Assist physical therapy with transfers and ambulation for post-orthopedic patients.","Recognized as “Employee of the Month” (March 2026) for teamwork and resident feedback."]},
  {role:"CNA Clinical Externship",place:"Sunrise Memory Care",location:"Round Rock, TX",period:"Aug 2025 – Sep 2025",type:"100 supervised clinical hours",current:false,points:["Supported residents living with Alzheimer’s and dementia during meals, activities, and personal care.","Practiced redirection and de-escalation techniques under RN supervision."]},
  {role:"Patient Care Volunteer",place:"St. David’s Medical Center",location:"Austin, TX",period:"Jan 2025 – Jul 2025",type:"Volunteer · 4 hrs / week",current:false,points:["Delivered comfort rounds, refilled water, and escorted patients and visitors.","Developed a foundation in hospital etiquette, HIPAA, and patient privacy."]}
];
const credentials = [
  ["Certified Nurse Aide (CNA)","Texas Health & Human Services","Issued Sep 2025 · Registry #TX-48213"],
  ["Basic Life Support (BLS)","American Heart Association","Valid through Sep 2027 · eCard verified"],
  ["Dementia Care Specialist","Alzheimer’s Association","Completed Feb 2026 · essentiALZ Level 1"],
  ["Infection Control & Prevention","Relias Learning","Completed Dec 2025 · 8 CE hours"]
];
const reviews = [
  ["DC","Denise Carter, RN","Charge Nurse, Riverbend Health","Sarah is one of the most reliable aides on our unit. She notices subtle changes in residents and reports them right away. That kind of attention keeps people safe."],
  ["MR","Michael R.","Family member of a resident","My father was nervous after his knee surgery. Sarah was patient, kind, and always explained what she was doing. We felt he was in good hands every single day."],
  ["AB","Angela Brooks, LVN","Clinical Instructor, Sunrise Memory Care","During her externship Sarah showed real maturity with our memory care residents. Calm, warm, and quick to learn. I’d hire her again in a heartbeat."]
];
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const modal = $("#modal"), modalBody = $("#modal-body");
let activeTab = "posts", activePost = null, liked = false, saved = false;
let highlightIndex = 0, slideIndex = 0, highlightTimer = null;

$("#year").textContent = new Date().getFullYear();
$("#highlights").innerHTML = highlights.map((h,i)=>`<button class="highlight" data-highlight="${i}" aria-label="View ${esc(h.label)} highlight"><span class="highlight-ring"><span class="highlight-icon ${h.tone}">${h.icon}</span></span><span class="highlight-label">${esc(h.label)}</span></button>`).join("");

function renderTab(tab) {
  activeTab = tab;
  $$(".tab").forEach(b => { const on=b.dataset.tab===tab; b.classList.toggle("active",on); b.setAttribute("aria-selected",String(on)); });
  const root=$("#tab-content");
  if(tab==="posts") root.innerHTML=`<div class="post-grid">${posts.map((p,i)=>`<button class="post-tile" data-post="${p.id}" aria-label="Open post: ${esc(p.tag)}"><img src="${p.image}" alt="${esc(p.alt)}" loading="${i>2?'lazy':'eager'}"><span class="post-tag">${esc(p.tag)}</span><span class="post-overlay"><span>♥ ${p.likes}</span><span>▢ ${p.comments.length}</span></span></button>`).join("")}</div>`;
  if(tab==="experience") root.innerHTML=`<div class="cards-list">${experiences.map(e=>`<article class="experience-card"><div class="experience-head"><span class="experience-icon">▣</span><div><h3>${esc(e.role)}${e.current?'<span class="current">Current</span>':''}</h3><div class="company">${esc(e.place)}</div><div class="meta">${esc(e.period)} · ⌖ ${esc(e.location)} · ${esc(e.type)}</div></div></div><ul>${e.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></article>`).join("")}</div>`;
  if(tab==="credentials") root.innerHTML=`<p class="credentials-note">All credentials are current and available for verification on request.</p><div class="credentials-grid">${credentials.map(c=>`<article class="credential-card"><span class="credential-icon">✧</span><div><h3>${esc(c[0])} <span class="verified">✓</span></h3><p>${esc(c[1])}</p><p class="detail">${esc(c[2])}</p></div></article>`).join("")}</div>`;
  if(tab==="reviews") root.innerHTML=`<div class="reviews-grid">${reviews.map(r=>`<figure class="review-card"><figcaption class="review-person"><span class="initials">${esc(r[0])}</span><span><strong>${esc(r[1])}</strong><small>${esc(r[2])}</small></span></figcaption><div class="stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“${esc(r[3])}”</blockquote><p class="liked">♥ Liked by sarah.cares</p></figure>`).join("")}</div>`;
}
renderTab("posts");

function showModal(html, wide=false) { clearTimeout(highlightTimer); modalBody.innerHTML=html; modal.classList.toggle("wide",wide); modal.hidden=false; document.body.style.overflow="hidden"; $(".modal-close").focus(); }
function closeModal(){modal.hidden=true;document.body.style.overflow="";clearTimeout(highlightTimer);activePost=null;}
function openMessage(){
  showModal(`<div class="message-heading"><img src="${profile.avatar}" alt=""><div><strong>${profile.name}</strong><small>Usually replies within one business day</small></div></div><div class="message-body"><div class="hello"><img src="${profile.avatar}" alt=""><p>Hi! 👋 Hiring for a CNA or patient care role? Tell me about the unit and shift — references available on request.</p></div><form class="message-form" id="message-form" novalidate><div class="form-row"><div class="field"><label for="name">Your name</label><input id="name" name="name" placeholder="Jane Doe" autocomplete="name"><span class="error" data-error="name"></span></div><div class="field"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="jane@hospital.org" autocomplete="email"><span class="error" data-error="email"></span></div></div><div class="field"><label for="org">Facility (optional)</label><input id="org" name="org" placeholder="e.g. Riverbend Health"></div><div class="field"><label for="message">Message</label><textarea id="message" name="message" rows="4" placeholder="Tell me about the role, shift, and unit…"></textarea><span class="error" data-error="message"></span></div><button class="send-btn" type="submit">➤ Send message</button></form></div>`);
}
function openPost(id){
  const p=posts.find(x=>x.id===id); if(!p)return; activePost=id; liked=false;saved=false;
  showModal(`<div class="post-modal-grid"><img class="post-modal-image" src="${p.image}" alt="${esc(p.alt)}"><div class="post-modal-content"><div class="post-modal-head"><img src="${profile.avatar}" alt=""><div><strong>${profile.handle}</strong><small>${profile.location}</small></div><span class="tag-pill">${esc(p.tag)}</span></div><div class="post-copy"><p><strong>${profile.handle}</strong> ${esc(p.caption)}</p>${p.comments.map(c=>`<p class="comment"><strong>${esc(c[0])}</strong>${esc(c[1])}</p>`).join("")}</div><div class="post-actions"><div class="action-row"><button class="action-icon ${liked?'selected':''}" data-like aria-label="Like post">♥</button><span class="action-icon" aria-hidden="true">♧</span><button class="action-icon" data-share aria-label="Share post">↗</button><button class="action-icon save ${saved?'selected':''}" data-save aria-label="Save post">▣</button></div><p class="like-count" id="like-count">${(p.likes).toLocaleString()} likes</p><span class="post-date">${esc(p.date)}</span></div></div></div>`,true);
}
function renderHighlight(){
  const h=highlights[highlightIndex], item=h.items[slideIndex];
  const progress=h.items.map((_,i)=>`<div class="progress-track"><div class="progress-fill" style="width:${i<slideIndex?'100%':'0%'}"></div></div>`).join("");
  showModal(`<div class="highlight-modal"><div class="progress-bars">${progress}</div><div class="highlight-user"><img src="${profile.avatar}" alt=""><strong>${profile.handle}</strong><small>· ${esc(h.label)}</small></div><div class="highlight-center"><span class="big-icon ${h.tone}">${h.icon}</span><p>${esc(item)}</p><span class="slide-count">${slideIndex+1} of ${h.items.length}</span></div><div class="highlight-controls"><button data-prev>← Previous</button><button data-next>Next →</button></div></div>`);
  highlightTimer=setTimeout(nextHighlight,3500);
}
function nextHighlight(){const h=highlights[highlightIndex];if(slideIndex<h.items.length-1)slideIndex++;else if(highlightIndex<highlights.length-1){highlightIndex++;slideIndex=0;}else{closeModal();return;}renderHighlight();}
function prevHighlight(){if(slideIndex>0)slideIndex--;else if(highlightIndex>0){highlightIndex--;slideIndex=highlights[highlightIndex].items.length-1;}renderHighlight();}

document.addEventListener("click",e=>{
  const message=e.target.closest("[data-message]"); if(message){openMessage();return;}
  const tab=e.target.closest("[data-tab]");if(tab){renderTab(tab.dataset.tab);return;}
  const high=e.target.closest("[data-highlight]");if(high){highlightIndex=Number(high.dataset.highlight);slideIndex=0;renderHighlight();return;}
  const post=e.target.closest("[data-post]");if(post){openPost(post.dataset.post);return;}
  if(e.target.closest("[data-close]")){closeModal();return;}
  if(e.target.closest("[data-next]")){nextHighlight();return;}
  if(e.target.closest("[data-prev]")){prevHighlight();return;}
  if(e.target.closest("[data-like]")){liked=!liked;const p=posts.find(x=>x.id===activePost);$("[data-like]").classList.toggle("selected",liked);$("#like-count").textContent=(p.likes+(liked?1:0)).toLocaleString()+" likes";return;}
  if(e.target.closest("[data-save]")){saved=!saved;$("[data-save]").classList.toggle("selected",saved);$("[data-save]").textContent=saved?"▣":"▣";return;}
  if(e.target.closest("[data-share]")){const p=posts.find(x=>x.id===activePost);if(navigator.share)navigator.share({title:"Sarah's post",text:p.caption}).catch(()=>{});else if(navigator.clipboard)navigator.clipboard.writeText(p.caption).then(()=>alert("Post caption copied."));return;}
});
document.addEventListener("submit",e=>{
  if(e.target.id!=="message-form")return;
  e.preventDefault();
  const form=e.target, data=new FormData(form), name=String(data.get("name")||"").trim(), email=String(data.get("email")||"").trim(), message=String(data.get("message")||"").trim();
  const errors={name:name?"":"Please enter your name.",email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)?"":"Please enter a valid email.",message:message.length>=10?"":"Message should be at least 10 characters."};
  Object.entries(errors).forEach(([k,v])=>{const el=$(`[data-error="${k}"]`);el.textContent=v;});
  if(Object.values(errors).some(Boolean))return;
  const btn=$(".send-btn",form);btn.disabled=true;btn.textContent="Sending…";
  setTimeout(()=>{
    const safeMessage=esc(message);
    const body=$(".message-body");
    body.innerHTML=`<div class="hello"><img src="${profile.avatar}" alt=""><p>Hi! 👋 Hiring for a CNA or patient care role? Tell me about the unit and shift — references available on request.</p></div><div class="sent-message"><p>${safeMessage}</p></div><div class="sent-box" role="status"><h3>Message ready</h3><p>This is a front-end demo. No message was actually sent. Connect a backend or email service to deliver messages.</p><button class="send-btn" data-again>Send another message</button></div>`;
  },700);
});
document.addEventListener("click",e=>{if(e.target.closest("[data-again]"))openMessage();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)closeModal();if(!modal.hidden&&e.key==="ArrowRight"&&$(".highlight-modal"))nextHighlight();if(!modal.hidden&&e.key==="ArrowLeft"&&$(".highlight-modal"))prevHighlight();});
