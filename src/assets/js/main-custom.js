document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sidebar-dropdown > a').forEach(function(element) {
      element.addEventListener('click', function(e) {
        e.preventDefault()
        // Cerrar todos los submenús
        document.querySelectorAll('.sidebar-submenu').forEach(function(submenu) {
          submenu.style.display = 'none';
        });
  
        var parent = this.parentElement;
  
        if (parent.classList.contains('active')) {
          // Eliminar la clase 'active' de todos los elementos con la clase 'sidebar-dropdown'
          document.querySelectorAll('.sidebar-dropdown').forEach(function(dropdown) {
            dropdown.classList.remove('active');
          });
          // Eliminar la clase 'active' del elemento actual
          parent.classList.remove('active');
        } else {
          // Eliminar la clase 'active' de todos los elementos con la clase 'sidebar-dropdown'
          document.querySelectorAll('.sidebar-dropdown').forEach(function(dropdown) {
            dropdown.classList.remove('active');
          });
          // Abrir el submenú correspondiente
          this.nextElementSibling.style.display = 'block';
          // Añadir la clase 'active' al elemento actual
          parent.classList.add('active');
        }
      });
    });
});
  