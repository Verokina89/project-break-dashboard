const showHour = document.getElementById('hour');
const showDate = document.getElementById('date');

let date = new Date();
let weekday = ['Domingo','Lunes','Martes','Miercoles','Miercoles','Jueves','Viernes','Sabado'];
let yearMonth = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

showDate.innerHTML = `
${weekday[date.getDay()]},
${date.getDate()} de ${yearMonth[date.getMonth()]} de
${date.getFullYear()}
`;

setInterval(() => {
    let hour = new Date();
    showHour.innerHTML = hour.toLocaleTimeString();
},1000);