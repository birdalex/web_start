$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $(".next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});