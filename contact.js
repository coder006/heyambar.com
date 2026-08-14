(function () {
  var link = document.querySelector('[data-contact-link]');
  if (!link) return;

  var isAppleTouchDevice = /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || isAppleTouchDevice;

  if (isMobile) {
    link.href = 'mailto:contact@heyambar.com';
    link.removeAttribute('target');
    link.removeAttribute('rel');
  }
})();
