const boton = document.querySelector('.switch');
const configUser = window.matchMedia('(prefers-color-scheme: oscuro)');
const localConfig = localStorage.getItem('tema');
if (localConfig === 'oscuro') {
    document.body.classList.toggle('.switch')
} else if (localConfig === 'claro') {
    document.body.classList.toggle('.switch')
}
boton.addEventListener('click', () => {
    let colorTema;
    if (configUser.matches) {
        // Entramos con modo oscuro
        document.body.classList.toggle('.switch')
        colorTema = document.body.classList.contains('.switch') ? 'claro' : 'oscuro'

    } else {
        document.body.classList.toggle('.switch')
        colorTema = document.body.classList.contains('.switch') ? 'oscuro' : 'claro'
    }
    localStorage.setItem('tema', colorTema)
})