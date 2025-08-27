// Tiny sparkle on CTA hover
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    btn.style.boxShadow = `0 10px 24px rgba(102,227,255,.25), 0 0 60px rgba(139,92,246,.25)`;
    btn.style.backgroundImage = `radial-gradient(200px 200px at ${x}px ${y}px, rgba(255,255,255,.18), transparent 40%), linear-gradient(135deg, var(--brand), var(--accent))`;
  });
  btn.addEventListener('mouseleave', ()=>{
    btn.style.backgroundImage = `linear-gradient(135deg, var(--brand), var(--accent))`;
  });
});