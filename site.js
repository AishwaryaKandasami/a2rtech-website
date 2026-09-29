/* a2rtech — shared behaviour: mobile menu + copy-email button. */
(function () {
  var toggle = document.querySelector('.navtoggle');
  var links = document.getElementById('nav-links');

  if (toggle && links) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      links.classList.toggle('open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setOpen(false);
    });
  }

  var btn = document.getElementById('copy-email');
  var status = document.getElementById('copy-status');
  var addr = document.getElementById('email-address');
  if (btn && addr) {
    var selectAddress = function () {
      try {
        var range = document.createRange();
        range.selectNodeContents(addr);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } catch (e) {}
    };
    btn.addEventListener('click', function () {
      var text = addr.textContent.trim();
      var done = function () { status.textContent = 'Copied. Paste it into your email app.'; };
      var fallback = function () {
        selectAddress();
        status.textContent = 'Address selected — press Ctrl+C or Cmd+C to copy.';
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, fallback);
        } else { fallback(); }
      } catch (e) { fallback(); }
    });
  }
})();
