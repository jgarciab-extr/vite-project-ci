// 1. Importamos la imagen para que Vite procese la ruta y la optimice en el build
import logoUrl from './../assets/logo.png'

export function Navbar() {
    // 2. Contenedor principal de la barra
    const nav = document.createElement('nav');
    nav.className = 'navbar';

    // 3. Contenedor de Marca (Logo + Título)
    const brand = document.createElement('div');
    brand.className = 'nav-brand';

    const img = document.createElement('img');
    img.src = logoUrl;
    img.alt = 'Logo de la página';
    img.className = 'nav-logo';

    const title = document.createElement('span');
    title.className = 'nav-title';
    title.textContent = 'Mi Proyecto Vite';

    brand.append(img, title);

    // 4. Lista de enlaces de navegación (UL)
    // ¡IMPORTANTE!: Asignamos la clase 'nav-links' para que coincida con el CSS
    const ul = document.createElement('ul');
    ul.className = 'nav-links';

    const links = [
        { text: 'Inicio', href: '#inicio' },
        { text: 'Servicios', href: '#servicios' },
        { text: 'Contacto', href: '#contacto' },
    ];

    links.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.textContent = item.text;
        a.href = item.href;

        li.append(a);
        ul.append(li);
    });

    // 5. Botón Hamburguesa con sus 3 barras (spans)
    const burgerBtn = document.createElement('button');
    burgerBtn.className = 'burger-btn';
    burgerBtn.setAttribute('aria-label', 'Abrir menú');

    for (let i = 0; i < 3; i++) {
        burgerBtn.append(document.createElement('span'));
    }

    // 6. EVENTO CLICK: Activa o desactiva la clase 'active' en el menú y 'open' en el botón
    burgerBtn.addEventListener('click', () => {
        ul.classList.toggle('active');
        burgerBtn.classList.toggle('open');
    });

    // Cerramos el menú automáticamente cuando se hace click en cualquier enlace (útil en móvil)
    ul.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            ul.classList.remove('active');
            burgerBtn.classList.remove('open');
        });
    });

    // 7. Insertamos en el orden correcto en el DOM:
    // Primero la marca (izquierda), luego la lista de enlaces, y finalmente el botón hamburguesa
    nav.append(brand, ul, burgerBtn);

    return nav;
}