export function Section(titulo, descripcion = '') {
    const section = document.createElement('section');
    section.className = 'content-section';

    const h2 = document.createElement('h2');
    h2.textContent = titulo;
    section.append(h2);

    if (descripcion) {
        const p = document.createElement('p');
        p.textContent = descripcion;
        section.append(p);
    }

    return section;
}