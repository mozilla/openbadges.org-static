/*document.addEventListener('DOMContentLoaded', function() {

 var buttons = document.querySelectorAll('.menu-button');
 var active = ('menuitem-is-open');

 function closeMenus() {
 for (var i = 0; i < buttons.length; i++) {

 var button = buttons[i];
 var menuId = button.getAttribute('aria-controls');
 var menu = document.getElementById(menuId);
 var state = menu.getAttribute('aria-hidden');

 if (state == 'false') {
 menu.setAttribute('aria-hidden', 'true');
 button.parentNode.classList.remove(active);
 }
 }
 }

 function openMenu(event) {

 var button = event.target;
 var menuId = button.getAttribute('aria-controls');
 var menu = document.getElementById(menuId);
 var state = menu.getAttribute('aria-hidden');

 if (state == 'false') {
 menu.setAttribute('aria-hidden', 'true');
 button.parentNode.classList.remove(active);
 } else {
 closeMenus();

 menu.setAttribute('aria-hidden', 'false');
 button.parentNode.classList.add(active);
 }
 }

 for (var i = 0; i < buttons.length; i++) {
 buttons[i].addEventListener('click', openMenu);
 }
 });
 */
(function ($) {
    $(function () {
        $('.menu-button').parent()
            .on('mouseenter', function (event) {
                var $t = $(this);
                var menuId = $t.find('.menu-button').attr('aria-controls');
                var menu = $('#' + menuId);

                menu.attr('aria-hidden', 'false');
                $t.addClass('menuitem-is-open');
            })
            .on('mouseleave', function (event) {
                window.abc = window.setTimeout(function () {
                    var $t = $('.menuitem-is-open');
                    var menuId = $t.find('.menu-button').attr('aria-controls');
                    var menu = $('#' + menuId);

                    menu.attr('aria-hidden', 'true');
                    $t.removeClass('menuitem-is-open');
                }, 1000);
            });
    });

})(jQuery);

