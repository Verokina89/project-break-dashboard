const imgBackground = ['../assets/img/backgroud/dogs-7275314_1280.jpg',
'../assets/img/backgroud/boat-house-2881457_1280.jpg',
'../assets/img/backgroud/IMG_1522.jpeg',
'../assets/img/backgroud/geeks-2894621_1280.jpg',
'../assets/img/backgroud/keyboard-5017973_1280.jpg',
'../assets/img/backgroud/macbook-606763_1280.jpg',
'../assets/img/backgroud/nature-conservation-4352793_1280.jpg',
'../assets/img/backgroud/pc-1207886_1280.jpg',
'../assets/img/backgroud/plans-1867745_1280.jpg',
'../assets/img/backgroud/sea-bridge-1748162_1280.jpg',
'../assets/img/backgroud/IMG_0163.jpeg',
'../assets/img/backgroud/IMG_0139.jpeg',
'../assets/img/backgroud/IMG_0080.jpeg',
'../assets/img/backgroud/hoja-fresca-refleja-verde-vibrante-rocio-manana-generado-ia_188544-15521.jpg',
'../assets/img/backgroud/IMG_4434.jpeg',
'../assets/img/backgroud/IMG_0169.jpeg',
'../assets/img/backgroud/IMG_0225.jpeg',
'../assets/img/backgroud/IMG_0297.jpeg',
'../assets/img/backgroud/IMG_0604.jpeg',
'../assets/img/backgroud/IMG_1373.jpeg',
'../assets/img/backgroud/IMG_1475.jpeg',
'../assets/img/backgroud/IMG_1579.jpeg',
'../assets/img/backgroud/IMG_2453.jpeg',
'../assets/img/backgroud/IMG_8436.jpeg',
'../assets/img/backgroud/IMG_2472.jpeg',
'../assets/img/backgroud/IMG_3916.jpeg',
'../assets/img/backgroud/IMG_9617.jpeg',

]

const backgroudRandom = () => {
    const body = document.body
    const backgroudBody = Math.floor(Math.random() * imgBackground.length)

    body.style.backgroundImage = `url(${imgBackground[backgroudBody]})`
}
setInterval(backgroudRandom,15000)
backgroudRandom()