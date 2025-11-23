document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave por data-scroll
  document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('data-scroll');
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Acordeones
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const open = item.classList.contains('open');

      // cerrar todos dentro del mismo acordeón
      const accordion = item.closest('.accordion');
      accordion.querySelectorAll('.accordion-item').forEach(it => {
        it.classList.remove('open');
        const b = it.querySelector('.accordion-body');
        if (b) b.style.maxHeight = null;
      });

      if (!open) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Modales
  document.querySelectorAll('[data-modal-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-modal-target');
      const backdrop = document.getElementById(id);
      if (backdrop) backdrop.classList.add('active');
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    const closeBtn = backdrop.querySelector('.modal-close');
    closeBtn?.addEventListener('click', () => {
      backdrop.classList.remove('active');
    });
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) backdrop.classList.remove('active');
    });
  });
});
