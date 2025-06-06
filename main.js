const especialidades = [
  {
    titulo: 'Derecho Internacional Privado',
    descripcion: 'Nos desarrollamos con solvencia en materia de contratación internacional, desarrollo de negocios, sucesiones, familia y demás aspectos del Derecho Internacional Privado, cuidando los intereses de nuestros clientes ante las diversas contingencias de su vida personal y patrimonial.'
  },
  {
    titulo: 'Derecho Tributario, Penal Tributario y Aduanero',
    descripcion: 'Contamos con un equipo especializado en asesoramiento tributario, penal tributario y aduanero, acompañando al cliente desde la planificación fiscal hasta la representación en sede administrativa y judicial.'
  },
  {
    titulo: 'Derecho Comercial, Societario y Corporativo',
    descripcion: 'Acompañamos a las empresas desde su nacimiento hasta su evolución, creando estructuras jurídicas a medida y resolviendo con eficiencia sus desafíos comerciales y societarios.'
  }
  // Agregás más objetos si querés
];

let indice = 0;

const titulo = document.getElementById('area-titulo');
const descripcion = document.getElementById('area-descripcion');
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');

function mostrarEspecialidad(i) {
  titulo.textContent = especialidades[i].titulo;
  descripcion.textContent = especialidades[i].descripcion;
}

btnAnterior.addEventListener('click', () => {
  indice = (indice - 1 + especialidades.length) % especialidades.length;
  mostrarEspecialidad(indice);
});

btnSiguiente.addEventListener('click', () => {
  indice = (indice + 1) % especialidades.length;
  mostrarEspecialidad(indice);
});



  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollY = window.scrollY;
    const zoom = 1 + scrollY * 0.0004; // Ajustá el valor para más/menos zoom
    hero.style.setProperty('--zoom-scale', zoom);
  });
