var link = document.querySelector(".order-button");
      var popup = document.querySelector(".order-form");

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.toggle("order-form-show");
        });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (popup.classList.contains("order-form-show")) {
            evt.preventDefault();
            popup.classList.remove("order-form-show");
          }
        }
      });