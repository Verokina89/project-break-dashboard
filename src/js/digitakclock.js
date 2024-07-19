const showHour = document.getElementById('hour');
const showDate = document.getElementById('date');
let tips = document.getElementById('tips');
// const clockContainer = document.querySelector('.clockContainer');


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

/*--*/
// function tipsHours() {
//     let isTime = new Date();
//     showHour.innerHTML = now.toLocaleTimeString();

//     let hour = isTime.getHours();
//     let message = '';
//     if (hour >= 0 && hour < 7) {
//         message = 'Es hora de descansar. ¡Apaga y sigue mañana!';
//     } else if (hour >= 7 && hour < 12) {
//         message = '¡Buenos días! Desayuna fuerte y a darle al código.';
//     } else if (hour >= 12 && < 14) {
//         message = 'Echa un rato mas pero no olvides comer.';
//     } else if (hour >= 14 && < 16) {
//         message = '¡Espero que hayas comido!';
//     } else if (hour >= 16 && < 18) {
//         message = '¡Buenas tardes! solo queda el ultimo empujón.';
//     } else if (hour >= 18 && < 22) {
//         message = 'Esto ya son horas extras... ¡Piensa en parar pronto!';
//     } else if (hour >= 22 && < 24) {
//         message = 'Buenas noches, es hora de parar y descansar!';
//     }
//     tips.textContent = message;
// }

// setInterval(tipsHours, 1000);
// tipsHours();
/*--*/
