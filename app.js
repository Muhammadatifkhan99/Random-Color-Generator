const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click', function () {
    const newColor = makeRandColor();
    const [r, g, b] = newColor.match(/\d+/g).map(Number);
    document.body.style.backgroundColor = newColor;
    h1.style.color = getContrastingColor(r, g, b);
    h1.innerText = newColor;


})


const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
function getContrastingColor(r, g, b) {
    // Formula to calculate brightness based on the RGB values
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? 'black' : 'white'; // If bright, use black text; if dark, use white text
}