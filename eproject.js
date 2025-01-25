
    //hero-section transition
    $(document).ready(

      function () {
        $('.hidden').each(
          function (index) {
            $(this).delay(index * 500).fadeIn(1000);
          }

        );
      }
    );
