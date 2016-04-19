document.addEventListener('DOMContentLoaded', function() {

  var toctrigger = document.querySelector('.tableofcontentstrigger');
  var container = document.querySelector('.l-tableofcontents');
  var active = 'tableofcontentstrigger-is-active';
  var windowwidth = window.innerWidth;

  function toggleMenu(event) {
    var trigger = event.target;
    var tocId = trigger.getAttribute('aria-controls');
    var toc = document.getElementById(tocId);
    var tocstate = toc.getAttribute('aria-hidden');

    if (tocstate == 'true') {
      toc.setAttribute('aria-hidden', 'false');
      trigger.classList.add(active);
    } else {
      toc.setAttribute('aria-hidden', 'true');
      trigger.classList.remove(active);
    }
  }

  function scrollMenu(event) {
    var scrolled = 'l-tableofcontents-is-scrolled';
    var distance_from_top = document.body.scrollTop || document.documentElement.scrollTop;

    if (windowwidth >= 960 && distance_from_top >= 156) {
        container.querySelector('div').classList.add(scrolled);
    } else {
      container.querySelector('div').classList.remove(scrolled);
    }
  }

  if (!!toctrigger) {
    toctrigger.addEventListener('click', toggleMenu);
    window.addEventListener('scroll', scrollMenu);

    window.addEventListener('resize', function() {
      windowwidth = window.innerWidth;
    });
  }
  
});
