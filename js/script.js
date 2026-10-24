const g = document.getElementById('glow');
addEventListener('pointermove', e => { g.style.setProperty('--x', e.clientX + 'px'); g.style.setProperty('--y', e.clientY + 'px') }, { passive: true });

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

const mail = 'holandanycollas@gmail.com', ct = document.getElementById('ct');

document.getElementById('copy').addEventListener('click', async () => {
    let ok = false;
    try { await navigator.clipboard.writeText(mail); ok = true } catch (e) {
        try { const t = document.createElement('textarea'); t.value = mail; document.body.appendChild(t); t.select(); ok = document.execCommand('copy'); t.remove() } catch (_) { }
    }
    ct.textContent = ok ? 'E-mail copiado' : 'Copie: ' + mail;
    setTimeout(() => ct.textContent = mail, 2000);
});