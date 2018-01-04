// $(window).load(function() {
//   // stickyFooter.init({
//   //   selectorWrap: '[data-sticky-wrap]',
//   //   selectorFooter: '[data-sticky-footer]',
//   //   callback: function () {}
//   // });
// });
$(function () {
  $('img').on('dragstart', function (event) {
      event.preventDefault();
  });
});