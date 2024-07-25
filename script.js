const imgBackground = ['../../src/assets/img/backgroud/dogs-7275314_1280.jpg',
    '../../src/assets/img/backgroud/boat-house-2881457_1280.jpg',
'../../src/assets/img/backgroud/IMG_1522.jpeg',
'../../src/assets/img/backgroud/geeks-2894621_1280.jpg',
'../../src/assets/img/backgroud/keyboard-5017973_1280.jpg',
'../../src/assets/img/backgroud/macbook-606763_1280.jpg',
'../../src/assets/img/backgroud/nature-conservation-4352793_1280.jpg',
'../../src/assets/img/backgroud/pc-1207886_1280.jpg',
'../../src/assets/img/backgroud/plans-1867745_1280.jpg',
'../../src/assets/img/backgroud/sea-bridge-1748162_1280.jpg',
'../../src/assets/img/backgroud/IMG_0163.jpeg',
'../../src/assets/img/backgroud/IMG_0139.jpeg',
'../../src/assets/img/backgroud/IMG_0080.jpeg',
'../../src/assets/img/backgroud/hoja-fresca-refleja-verde-vibrante-rocio-manana-generado-ia_188544-15521.jpg',
'../../src/assets/img/backgroud/IMG_4434.jpeg'
]

const backgroudRandom = () => {
    const body = document.body
    const backgroudBody = Math.floor(Math.random() * imgBackground.length)

    body.style.backgroundImage = `url(${imgBackground[backgroudBody]})`
}
setInterval(backgroudRandom,15000)
backgroudRandom()