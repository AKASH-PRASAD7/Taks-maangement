console.log("Running");

const btnclose = document.querySelector('.close');
const close = document.querySelector('.add1');
const modal = document.querySelector('.popup');
const btn_crt = document.getElementById('btn_crt');

btn_crt.addEventListener('click', () => {
    modal.style.display = 'block';
});
close.addEventListener('click', () => {
    modal.style.display = 'none';
});
btnclose.addEventListener('click', () => {
    modal.style.display = 'none';
});