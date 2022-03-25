/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};



const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let anio = 2022
  let nuevoNombre = document.querySelector("#nombre");
  nuevoNombre = prompt("¿Cual es tu Nombre?");
  datosPersona.nombre = nuevoNombre
  let nuevaEdad = document.querySelector("#edad");
  nuevaEdad = prompt("¿Año de Nacimiento?");
  datosPersona.edad = nuevaEdad == 0 ? "0" : anio - nuevaEdad
  let nuevaCiudad = document.querySelector("#ciudad");
  nuevaCiudad = prompt("¿En que ciudad vives?");
  datosPersona.ciudad = nuevaCiudad
  let nuevoInteres = document.querySelector("#javascript");
  nuevoInteres = confirm("Te interesa JavaScript");
  datosPersona.interesPorJs = nuevoInteres ? "Si" : "No"

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector("#nombre").innerText = datosPersona.nombre;
  document.querySelector("#edad").innerText = datosPersona.edad;
  document.querySelector("#ciudad").innerText = datosPersona.ciudad;
  document.querySelector("#javascript").innerText = datosPersona.interesPorJs;

}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let cont = document.querySelector('#fila')
  cont.innerHTML='';
  for(let card of listado){
    cont.innerHTML+= `<div class ="caja">
    <img src = ${card.imgUrl} alt ${card.lenguajes}>
    <p class = "lenguajes">Lenguajes: ${card.lenguajes}</p>
    <p class = "bimestre">Bimestre: ${card.bimestre}</p>
    </div>`
    };
    materiasBtn.removeEventListener('click', recorrerListadoYRenderizarTarjetas)
   //document.querySelector('#fila').classList.toggle('#fila')
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let press = document.querySelector('#sobre-mi');
press.onkeypress

/* --------------------- farkbarn ocultando botón -----------------------------*/
document.getElementById('ocultar-materias').style.display = 'none';
