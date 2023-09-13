document.querySelectorAll(".burger").forEach(function(button) {
    button.addEventListener("click", function() {
      // Добавляем/удаляем класс "active" ко всем элементам с классом "myElement"
      document.querySelectorAll(".main-menu").forEach(function(element) {
        element.classList.toggle("show");
      });
      document.querySelectorAll(".burger .burger-link:nth-child(1)").forEach(function(element) {
        element.classList.toggle("first");
      });
      document.querySelectorAll(".burger .burger-link:nth-child(2)").forEach(function(element) {
        element.classList.toggle("second");
      });
      document.querySelectorAll(".burger .burger-link:nth-child(3)").forEach(function(element) {
        element.classList.toggle("third");
      });
      document.querySelectorAll(".burger").forEach(function(element) {
        element.classList.toggle("active");
      });
    });
  });