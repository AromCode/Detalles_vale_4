// Personaliza estos cinco mensajes con tus propias palabras.
const mensajes = [
 {categoria:"FLOR DE ALEGRÍA",titulo:"Me haces muy feliz",texto:"Valeria, quería decirte algo que a veces doy por hecho: te quiero muchísimo. Tenerte en mi vida hace que hasta los días normales tengan algo especial.",simbolo:"✿"},
 {categoria:"FLOR DE CALMA",titulo:"Ojalá te vieras como te veo yo",texto:"Admiro mucho la persona que eres: tu forma de seguir adelante, de preocuparte por los demás y de ponerle corazón a las cosas. Espero que tú también puedas sentirte orgullosa de ti.",simbolo:"❀"},
 {categoria:"FLOR DE SUEÑOS",titulo:"Estoy de tu lado",texto:"Me encanta verte ir por lo que quieres. Y cuando dudes de ti, acuérdate de que yo sí veo todo lo que vales y voy a estar aquí, echándote porras siempre.",simbolo:"✿"},
 {categoria:"FLOR DE SONRISAS",titulo:"Gracias por ser tú",texto:"Gracias por compartir conmigo tus ocurrencias, tus días buenos y también los no tan buenos. No tienes que hacer nada especial para que te quiera; me basta con que seas tú.",simbolo:"❀"},
 {categoria:"FLOR SORPRESA",titulo:"Una última cosa",texto:"No quería dejar pasar la oportunidad de recordártelo: te quiero con todo mi corazón y me siento muy afortunado de tenerte en mi vida. Esta florecita es para ti, Valeria. ♡ —Arom",simbolo:"✿"}
];

const botones = document.querySelectorAll(".flower-spot");
const contador = document.getElementById("counter");
const reiniciar = document.getElementById("reset");
const modal = document.getElementById("modal");
const categoria = document.getElementById("category");
const titulo = document.getElementById("modalTitle");
const texto = document.getElementById("message");
const simbolo = document.getElementById("modalFlower");
const cerrar = document.getElementById("close");
const aceptar = document.getElementById("okay");
let abiertas = new Set();
let ultimoElemento = null;

function actualizarContador(){ contador.textContent = `${abiertas.size} de ${botones.length} flores abiertas`; }

function mostrarMensaje(indice){
    const dato = mensajes[indice];
    if(!dato) return;
    ultimoElemento = document.activeElement;
    categoria.textContent = dato.categoria;
    titulo.textContent = dato.titulo;
    texto.textContent = dato.texto;
    simbolo.textContent = dato.simbolo;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
    cerrar.focus();
}

function cerrarModal(){
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
    if(ultimoElemento) ultimoElemento.focus();
}

botones.forEach((boton)=>{
    boton.addEventListener("click",()=>{
        const indice = Number(boton.dataset.flower);
        if(!abiertas.has(indice)){
            abiertas.add(indice);
            boton.classList.add("open");
            boton.setAttribute("aria-label",`Flor ${indice+1} abierta. Volver a leer mensaje`);
            actualizarContador();
        }
        mostrarMensaje(indice);
    });
});

cerrar.addEventListener("click",cerrarModal);
aceptar.addEventListener("click",cerrarModal);
modal.addEventListener("click",(evento)=>{ if(evento.target.hasAttribute("data-close")) cerrarModal(); });
document.addEventListener("keydown",(evento)=>{ if(evento.key==="Escape" && modal.classList.contains("open")) cerrarModal(); });

reiniciar.addEventListener("click",()=>{
    abiertas.clear();
    botones.forEach((boton,indice)=>{
        boton.classList.remove("open");
        boton.setAttribute("aria-label",`Abrir flor ${indice+1}`);
    });
    actualizarContador();
});

// Mariposas decorativas: se desactivan si el usuario prefiere menos movimiento.
const capaMariposas = document.getElementById("butterflies");
const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function crearMariposa(){
    const mariposa = document.createElement("span");
    mariposa.className = "butterfly";
    mariposa.textContent = "🦋";
    const duracion = Math.random()*5+9;
    mariposa.style.left = `${Math.random()*90+5}%`;
    mariposa.style.fontSize = `${Math.random()*12+17}px`;
    mariposa.style.animationDuration = `${duracion}s`;
    capaMariposas.appendChild(mariposa);
    window.setTimeout(()=>mariposa.remove(),duracion*1000);
}
if(!movimientoReducido){ crearMariposa(); window.setInterval(crearMariposa,2400); }
actualizarContador();
