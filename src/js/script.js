const info = document.querySelector('article');
const infoBox = document.querySelector('.info_box');
const btnTijera = document.getElementById('btn_tijera');
const btnSenoro = document.getElementById('btn_senoro');
const btnSopa = document.getElementById('btn_sopa');
const btnEditorial = document.getElementById('btn_editorial');
const btnMatch = document.getElementById('btn_match');
const btnManjar = document.getElementById('btn_manjar');

//CLICKLAND = Abrir info
btnTijera.addEventListener('click', (ev) => {
  info.classList.replace('info_off', 'info_on');
  printTijera();
});
btnSenoro.addEventListener('click', (ev) => {
  info.classList.replace('info_off', 'info_on');
  printSenoro();
});
btnSopa.addEventListener('click', (ev) => {
  info.classList.replace('info_off', 'info_on');
  printSopa();
});
btnEditorial.addEventListener('click', (ev) => {
  info.classList.replace('info_off', 'info_on');
  printEditorial();
});
btnMatch.addEventListener('click', (ev) => {
  info.classList.replace('info_off', 'info_on');
  printMatch();
});
btnManjar.addEventListener('click', (ev) => {
  info.classList.replace('info_off', 'info_on');
  printManjar();
});
//Cerrar info
info.addEventListener('click', (ev) => {
  info.classList.replace('info_on', 'info_off');
  let txt = '';
});

//Pintar texts
function printTijera() {
  txt = `
        <h3 class="info_max">TIJERA</h3>
        <div class="info_icon">
            <h5>HTML / CSS / JAVASCRIPT</h5>
            <h5>Illustrator</h5>
        </div>
        <p>Pequeño juego web de azar con el que podrás jugar a Piedra, Papel y Tijera contra el "ordenador"</p>
        <button class="info_btn"><a href="https://raquelpz.github.io/pptijera/" target="_blank"><p>WEB</p></a></button>
        `;
  infoBox.innerHTML = txt;
}
function printSenoro() {
  txt = `
        <h3 class="info_max">SEÑORO</h3>
        <div class="info_icon">
          <h5>Illustrator / Indesign / Photoshop</h5>
        </div>
        <p>Juego de mesa illustrado con un pequeño librito</p>
        <button class="info_btn"><a href="t_senoro.html" target="_blank"><p>GALERY</p></a></button>
        `;
  infoBox.innerHTML = txt;
}
function printSopa() {
  txt = `
        <h3 class="info_max">SOPA</h3>
        <p>Pequeño juego de cartas con ilustraciones a mano y tratadas con photoshop</p>
        <div class="info_icon">
            <h5>HTML / CSS / REACT</h5>
            <h5>Photoshop</h5>
            <h5>Ilustración a mano</h5>
            </div>
        <button class="info_btn"><a href="t_sopa.html" target="_blank"><p>GALERY</p></a></button>
        <button class="info_btn"><a href="error.html" target="_blank"><p>WEB</p></a></button>
        `;
  infoBox.innerHTML = txt;
}
function printEditorial() {
  txt = `
        <h3 class="info_max">EDITORIAL</h3>
        <div class="info_icon">
            <h5>Illustrator / Indesign / Photoshop</h5>
            <h5>Ilustración a mano</h5>
          </div>
        <p>Colección de algunos diseños de portadas de libros en mi paso por editoriales</p>
        <button class="info_btn"><a href="t_editorial.html" target="_blank"><p>GALERY</p></a></button>
        `;
  infoBox.innerHTML = txt;
}
function printMatch() {
  txt = `
        <h3 class="info_max">MATCH</h3>
        <div class="info_icon">
            <h5>HTML / CSS / REACT / SQL</h5>
        </div>
        <p>Buscador web que muestra una recopilación de personajes de una base de datos</p>
        <button class="info_btn"><a href="https://beta.adalab.es/modulo-3-evaluacion-final-RaquelPZ/" target="_blank"><p>WEB</p></a></button>
        `;
  infoBox.innerHTML = txt;
}
function printManjar() {
  txt = `
        <div class="info_pix"></div>
        <h3 class="info_max">MANJAR</h3>
        <div class="info_icon">
            <h5>Illustrator / Indesign</h5>
        </div>
        <p>Diseño de marca para un restaurante y su respectiva cartelería</p>
        <button class="info_btn"><a href="t_manjar.html" target="_blank"><p>GALERY</p></a></button>
        <div class="info_pix"></div>
        `;
  infoBox.innerHTML = txt;
}