// Minimal JS: carousel, dashboard population, small behaviors
document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle (mobile)
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', (!expanded).toString());
    navList.style.display = expanded ? 'none' : 'flex';
  });

  // Simple carousel logic
  const track = document.getElementById('carousel-track');
  const slides = track ? track.children : [];
  let idx = 0;
  function showSlide(i){
    if(!track) return;
    idx = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
  }
  document.querySelector('.carousel-btn.prev')?.addEventListener('click', () => showSlide(idx-1));
  document.querySelector('.carousel-btn.next')?.addEventListener('click', () => showSlide(idx+1));
  // auto-advance
  setInterval(()=> showSlide(idx+1), 5000);

  // Example data for today's classes and parayanams.
  // Replace links with your Google Form URLs.
  const schedule = [
    { time: '05:30 PM', title: 'Vedic Parayanam', type: 'Parayanam', leader: 'Sundar', form: 'https://forms.gle/YOUR_GOOGLE_FORM_2'},
    { time: '06:00 PM', title: 'Bharatanatyam — Beginners', type: 'Class', leader: 'Radha', form: 'https://forms.gle/YOUR_GOOGLE_FORM_1'},
    { time: '07:30 PM', title: 'Community Bhajans', type: 'Event', leader: 'Group', form: 'https://forms.gle/YOUR_GOOGLE_FORM_4'},
  ];

  // Populate dashboard with items matching today (this is sample: show all)
  const dash = document.getElementById('dashboard-list');
  if(dash){
    schedule.forEach(item => {
      const el = document.createElement('div');
      el.className = 'dashboard-item';
      el.innerHTML = `
        <div class="item-left">
          <div class="item-time">${item.time}</div>
          <div>
            <div class="item-title"><strong>${escapeHtml(item.title)}</strong></div>
            <div class="item-meta">${escapeHtml(item.type)} • ${escapeHtml(item.leader)}</div>
          </div>
        </div>
        <div class="item-actions">
          <a class="btn -cta" href="${item.form}" target="_blank" rel="noopener">Join</a>
        </div>
      `;
      dash.appendChild(el);
    });
  }

  // Announcement marquee pause on hover (if desired)
  const annStrip = document.querySelector('.announcement-strip');
  if(annStrip){
    annStrip.addEventListener('mouseenter', ()=> annStrip.style.animationPlayState = 'paused');
    annStrip.addEventListener('mouseleave', ()=> annStrip.style.animationPlayState = 'running');
  }

});

// very small escape to avoid injection if dynamic
function escapeHtml(str){ return String(str).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }