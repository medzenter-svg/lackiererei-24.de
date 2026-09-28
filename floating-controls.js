(() => {
  if (document.querySelector('.workshop-float,.whatsapp-float')) return;

  const isRussian = document.documentElement.lang === 'ru' || location.pathname.includes('/ru/');
  const marker = '/lackiererei-24.de/';
  const markerIndex = location.pathname.indexOf(marker);
  const siteRoot = markerIndex >= 0
    ? location.pathname.slice(0, markerIndex + marker.length)
    : '/';

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = `${siteRoot}floating-controls.css?v=20260929-0022`;
  document.head.appendChild(stylesheet);

  const appointment = document.createElement('a');
  appointment.className = 'workshop-float';
  appointment.href = `${siteRoot}${isRussian ? '?lang=ru' : ''}#kontakt`;
  appointment.setAttribute('aria-label', isRussian ? 'Записаться в автосервис' : 'Werkstatt-Termin anfragen');
  appointment.innerHTML = `<span>${isRussian ? 'Записаться в автосервис' : 'Werkstatt-Termin anfragen'}</span><b aria-hidden="true"></b>`;

  const whatsapp = document.createElement('a');
  whatsapp.className = 'whatsapp-float';
  whatsapp.href = 'https://wa.me/4917624402933?text=Guten%20Tag%2C%20ich%20m%C3%B6chte%20eine%20Anfrage%20stellen.';
  whatsapp.target = '_blank';
  whatsapp.rel = 'noopener';
  whatsapp.setAttribute('aria-label', isRussian ? 'Открыть WhatsApp' : 'WhatsApp-Chat öffnen');
  whatsapp.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.1 19.75L3 29l6.4-1.82A13 13 0 1 0 16 3Zm0 23.6c-2.08 0-4.02-.6-5.65-1.64l-.4-.25-3.8 1.08 1.12-3.69-.27-.42A10.58 10.58 0 1 1 16 26.6Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.58a9.6 9.6 0 0 1-1.77-2.2c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.07 1.29 3.28c.16.21 2.24 3.42 5.42 4.8.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37Z"/></svg>';

  document.body.append(appointment, whatsapp);
})();
