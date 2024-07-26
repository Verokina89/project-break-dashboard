//obtener referencia a los elementos del DOM
const formLink = document.getElementById('formLink')
const nameLink = document.getElementById('inputName')
const inputLink = document.getElementById('inputLink')
const buttonLink = document.getElementById('buttonLink')
const linkList = document.getElementById('linkList')

//funcion para renderizar un enlace.
const savedLinks = (name, link, index) => {
 
    const listItem = document.createElement('li'); 
    const anchorageUrl = document.createElement('a');

    anchorageUrl.textContent = name;
    anchorageUrl.href = link;
    anchorageUrl.target = '_blank';

    //boton de eliminar.
    const buttonDelete = document.createElement('button');

    buttonDelete.textContent = 'X';
    // buttonDelete.style.marginLeft = '1px';
    buttonDelete.onclick = () => {
        deleteLink(index);
    };

    listItem.appendChild(anchorageUrl);
    listItem.appendChild(buttonDelete);
    linkList.appendChild(listItem);

};
// console.log();

//arrow funtion para cargar enlaces en localStorage (persistentes), parsear y renderizar en la lista de enlaces.
const loadLinks = () => {
const links = JSON.parse(localStorage.getItem('links')) || [];

    links.forEach((link, index) => savedLinks(link.name, link.url, index));
};
//funcin para borra un enlace 
const deleteLink = (index) => {
const links = JSON.parse(localStorage.getItem('links')) || [];
    //elimina el enlace del array
    links.splice(index, 1); 
    //guarda el array actualizado en localStorage
    localStorage.setItem('links', JSON.stringify(links));
    //renderiza nuevamente todos loa enlaces
    renderLinks();
};

//funcion para renderizar(los enlaces nuevos).
const renderLinks = () => {
    //limpia lista.
    linkList.innerHTML = ''; 
    //carga y renderiza desde localStorage.
    loadLinks();
};


//añadir enlace (evento que se ejecutar al cliclar el botón), 
buttonLink.addEventListener('click', (event) => {
//evita comportamiento por defecto del form.
    event.preventDefault(); 
    
    const name = nameLink.value;
    const link = inputLink.value;
    if (name && link) {
        const links = JSON.parse(localStorage.getItem('links')) || [];
        links.push({name, url: link});
        // guarda en localStorage
        localStorage.setItem('links', JSON.stringify(links));
        //rendeliza todos los enlaces.
        renderLinks();
        //Limpiar campos del formulario.
        nameLink.value = '';
        inputLink.value = '';

    } else {
        alert('Debes completar los campos antes de añadir el enlace.')
    }
    //aqui lo que hace es prevenir la recarga, accede a los valores(input), llama la funcion savedLink(con la que renderizamos) para añadir y guarda en locasStorage,para limpiar finalmente.
});

document.addEventListener('DOMContentLoaded', renderLinks);
//Y aqui asegura que carguen los enlaces contenidos en localStorage persistan al refresh de la web. 












// buttonLink.addEventListener('click', function(event) {
//     event.preventDefault(); /* evita el evento de recargar la pagina*/

//     const name = nameLink.value;
//     const link = inputLink.value;

//     if(name && link) {
//         const listItem = document.createElement('li'); /**crear elemento lista */
//         const anchor = document.createElement('a'); /**crear el enlace */
//         anchor.href = link;
//         anchor.textContent = name;
//         anchor.target = '_blank'; /*abrir enlace en nueva pestaña */

//         listItem.appendChild(anchor); /*añadir enlace a la lista*/
//         linkList.appendChild(listItem); /**añadir elemento de la lista a la nueva lista */

//     } else {
//         alert('Completa los campos antes de añadir tu enlace')
//     }

// });

