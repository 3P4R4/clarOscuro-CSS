// Este código solo se usa para recordar la selección del tema
const themeSwitch = document.querySelector('.switch');
themeSwitch.checked = localStorage.getItem('switchTema') === 'true';

themeSwitch.addEventListener('change', function(e) {
    if (e.currentTarget.checked === true) {
        // Agregar artículo al almacenamiento local
        localStorage.setItem('switchTema', 'true');
    } else {
        // Eliminar elemento si el tema vuelve a la normalidad
        localStorage.removeItem('switchTema');
    }
});

/******************************************************************************/