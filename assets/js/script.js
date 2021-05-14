$(document).ready(function () {
  //Smooth Scroll
  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(gato).offset().top,
        },
        800,
        function () {
          window.location.hash = gato;
        }
      );
    }
  });

  //Cambio de color del navbar al hacer scroll
  $(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
  });

  //Tooltip Sección Quienes Somos
  $('[data-toggle="tooltip"]').tooltip();

  //Hover Sección Destacados (ingreso del cursor)
  $(".col-md-3").hover(
    function () {
      $(this).animate({ marginTop: "-=1%" }, 200);
    },

    //Hover Sección Destacados (salida del cursor)
    function () {
      $(this).animate({ marginTop: "0%" }, 200);
    }
  );
});
