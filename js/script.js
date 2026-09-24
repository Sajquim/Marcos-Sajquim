/* =====================================================================
   CONFIGURACIÓN
   ===================================================================== */

// URL del audio que sonara de fondo si se llegara a colocar. Si no se quiere audio, dejar la cadena vacía.
const AUDIO_URL = "assets/audio/background_music.mp3";
const NOMBRE_GRADUADO = "Marcos Andrés Sajquim Sajquim";
const CARRERA = "Médico y Cirujano";
const UNIVERSIDAD = "Universidad San Carlos de Guatemala";
const LUGAR = "Restaurante & Museo: Tertulianos";
const FECHA = "Sábado, 26 de Septiembre de 2026";
const ANTESDE = "Viernes, 25 de Septiembre de 2026";
const HORA = "18:30 hrs";
const SALON = 'Pérgola "La Vid"';
const SALON_TYPE = "Pérgola";
const SALON_NAME = '"La Vid"';
const DIRECCION = "14 Avenida 5-26, Zona 3, Quetzaltenango";
const IGLESIA = "Jesús de la Buena Esperanza";
const HORA_MISA = "17:30 hrs";
const SELLO = "MS";

const INVITACIONES = {
  7015: {
    familia: "Familia Sajquim Sajquim",
    invitados:
      "Lisbeth Sajquim Estacuy, Cristian Moisés Sajquim, Erick Rubén Sajquim",
  },

  TaL: {
    familia: "Familia Gómez Sajquim",
    invitados:
      "Ing. Oscar Gómez, Sra. Lidia Sajquim de Gómez, Luis Pablo Gómez Sajquim",
  },

  TaS: {
    familia: "Familia de León Sajquim",
    invitados:
      "Sr. Guillermo De León, Sra. Soledad Sajquim de De León, Eddy Samuél De León Sajquim",
  },
  ToL: {
    familia: "Familia Rojas Sajquim",
    invitados:
      "Sr. Luis Rojas, Srta. Ligia Rojas Sajquim, Ing. Carlos Rojas Sajquim, Ing. Ángel Rojas Sajquim",
  },
  ToE: {
    familia: "Ing. Edwin Sajquim y Sra.",
    invitados: "Ing. Edwin Sajquim, Sra. Evelyn",
  },
  ToM: {
    familia: "Ing. Mario Sajquim y Sra.",
    invitados: "Ing. Mario Sajquim, Sra. Elizabeth de Sajquim",
  },
  P: {
    familia: "Primas",
    invitados:
      "Lic. Carola Nimatuj, Lic. Patricia Quemé, Sra. Claudia Quemé, Lic. Gaby Gonzales, Sra. Brenda López",
  },
  DrVictorSajquim: {
    familia: "Familia Sajquim Sajquim",
    invitados:
      "MSc. Victor Manuel Sajquim, Lic. Lucrecia Ivonne Gonzales, José Andrés Gonzales",
  },
  PaL: {
    familia: "Lisseth Gómez y Familia",
    invitados:
      "Sr. Freddy Macario, Dra. Lisseth Gómez de Macario, Adriana Macario",
  },
  PaN: {
    familia: "Norma De León y Familia",
    invitados: "Sr. Mario Palma, Sra. Norma De León De Palma, Enzo Palma",
  },
  PoA: {
    familia: "Alejandro De León y Familia",
    invitados: "Sr. Alejandro De León, Dra. Mayra de De León",
  },
  PoE: {
    familia: "Estuardo Rojas y Familia",
    invitados:
      "Sr. Estuardo Rojas Sajquim, Sra. Glendy De Rojas, Jimena Rojas, Rafael Rojas",
  },
  PaR: {
    familia: "Rocio Sajquim",
    invitados: "Lic. Rocio Sajquim",
  },
  PaNM: {
    familia: "Nidia Sajquim y Familia",
    invitados: "Sr. David Antonio Martínez, Sra. Nidia Sajquim, e Hijo",
  },
  PoM: {
    familia: "Mario José Sajquim y Familia",
    invitados:
      "Sr. Mario José Sajquim, Lic. Yuly López de Sajquim, Mario Sajquim",
  },
  FT: {
    familia: "Dra. Flor Tax",
    invitados: "Dra. Flor de María Tax Mendoza",
  },
  MS: {
    familia: "Dr. Michael Sacor",
    invitados: "Dr. Michael Saúl Sacor Delgado",
  },
  MC: {
    familia: "Dr. Marlon Calderón",
    invitados: "Dr. Marlon David Calderón Calderón",
  },
  JM: {
    familia: "Jacqueline Morales",
    invitados: "Srta. Jacqueline Guadalupe Morales Rodas",
  },
  NS: {
    familia: "Nicolas Sapón",
    invitados: "Nicolas Alexander Sapón Tiu",
  },
  BR: {
    familia: "Boris Rodas",
    invitados: "Boris Jonatan Estuardo Rodas Castillo",
  },
  IO: {
    familia: "Dra. Ixchel Osorio",
    invitados: "Dra. Ixchel Mariah Isabel Osorio Sucuquí",
  },
  VJ: {
    familia: "Jorge Sierra y Odilea",
    invitados: "Sr. Jorge Sierra, Srta. Ody Sierra",
  },
  IT: {
    familia: "Dra. Fransheska Tayún",
    invitados: "Dra. Irma Fransheska Tayún Rojas",
  },
  JJ: {
    familia: "Familia Pérez Vásquez",
    invitados:
      "Dr. José Juan Pérez, Dra. Ana Iris Vásquez Cifuentes,  e, Hijos",
  },
  ARuV: {
    familia: "Rudy Velásquez y Sra.",
    invitados: "Sr. Rudy Velásquez, y Sra.",
  },
  ARoV: {
    familia: "Robin Velásquez",
    invitados: "Sr. Robin Velásquez",
  },
  CWG: {
    familia: "Ingeniera Wendy Gonzalez",
    invitados: "Ingeniera Wendy Gonzalez",
  },
};

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

/* =====================================================================
   ELEMENTOS
   ===================================================================== */

const envelopeScreen = document.getElementById("envelopeScreen");
const envelopeButton = document.getElementById("envelopeButton");
const envelopeHint = document.getElementById("envelopeHint");
const invitation = document.getElementById("invitation");

const audioToggle = document.getElementById("audioToggle");
const audioIconOn = document.getElementById("audioIconOn");
const audioIconOff = document.getElementById("audioIconOff");
const bgAudio = document.getElementById("bgAudio");

let muted = false;

document.querySelectorAll(".nombre_graduado").forEach((elemento) => {
  elemento.textContent = NOMBRE_GRADUADO;
});

document.querySelectorAll(".carrera").forEach((elemento) => {
  elemento.textContent = CARRERA;
});

document.querySelectorAll(".universidad").forEach((elemento) => {
  elemento.textContent = UNIVERSIDAD;
});

document.querySelectorAll(".lugar").forEach((elemento) => {
  elemento.textContent = LUGAR;
});

document.querySelectorAll(".fecha").forEach((elemento) => {
  elemento.textContent = FECHA;
});

document.querySelectorAll(".hora").forEach((elemento) => {
  elemento.textContent = HORA;
});

document.querySelectorAll(".salon").forEach((elemento) => {
  elemento.textContent = SALON;
});
document.querySelectorAll(".salon_type").forEach((elemento) => {
  elemento.textContent = SALON_TYPE;
});
document.querySelectorAll(".salon_name").forEach((elemento) => {
  elemento.textContent = SALON_NAME;
});

document.querySelectorAll(".direccion").forEach((elemento) => {
  elemento.textContent = DIRECCION;
});

document.querySelectorAll(".sello").forEach((elemento) => {
  elemento.textContent = SELLO;
});
document.querySelectorAll(".antesde").forEach((elemento) => {
  elemento.textContent = ANTESDE;
});
document.querySelectorAll(".iglesia").forEach((elemento) => {
  elemento.textContent = IGLESIA;
});
document.querySelectorAll(".horamisa").forEach((elemento) => {
  elemento.textContent = HORA_MISA;
});
/* =====================================================================
   AUDIO (opcional)
   ===================================================================== */

if (AUDIO_URL) {
  bgAudio.src = AUDIO_URL;
  bgAudio.volume = 0.5;
  audioToggle.hidden = false;
  audioToggle.disabled = true; // se habilita cuando el audio puede reproducirse

  bgAudio.addEventListener("canplay", () => {
    audioToggle.disabled = false;
  });

  audioToggle.addEventListener("click", () => {
    muted = !muted;
    bgAudio.muted = muted;
    audioToggle.setAttribute(
      "aria-label",
      muted ? "Reproducir audio" : "Silenciar audio",
    );
    audioIconOn.hidden = muted;
    audioIconOff.hidden = !muted;
  });
}

function playAudioOnReveal() {
  if (AUDIO_URL && !muted) {
    bgAudio.play().catch(() => {
      /* el navegador puede bloquear el autoplay; no pasa nada si falla */
    });
  }
}

/* =====================================================================
   APERTURA DEL SOBRE
   ===================================================================== */

// Duraciones en milisegundos.
const OPEN_DURATION = reduceMotion ? 50 : 2300; // tiempo hasta que el sobre "termina" de abrirse
const EXIT_DURATION = reduceMotion ? 50 : 600; // tiempo que tarda la pantalla del sobre en desvanecerse

let isOpening = false;

envelopeButton.addEventListener("click", () => {
  if (isOpening) return;
  isOpening = true;

  envelopeButton.classList.add("is-opening");
  envelopeHint.textContent = "Abriendo…";
  playAudioOnReveal();

  setTimeout(() => {
    // El sobre ya "abrió": ahora se desvanece toda la pantalla del sobre.
    envelopeScreen.classList.add("is-leaving");

    setTimeout(() => {
      envelopeScreen.hidden = true;
      invitation.hidden = false;

      // Forzar reflow antes de añadir la clase para que la transición se vea.
      void invitation.offsetWidth;
      invitation.classList.add("is-visible");

      initScrollReveal();
    }, EXIT_DURATION);
  }, OPEN_DURATION);
});

/* =====================================================================
   REVELADO AL HACER SCROLL (fade-up)
   ===================================================================== */

function initScrollReveal() {
  const targets = invitation.querySelectorAll(".fade-up");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0.1 },
  );

  targets.forEach((el) => observer.observe(el));
}

const parametros = new URLSearchParams(window.location.search);
const apellido = parametros.get("familia");

const datosFamilia = INVITACIONES[apellido];

if (datosFamilia) {
  const invitados = datosFamilia.invitados
    .split(",")
    .map((nombre) => nombre.trim());

  const numero_invitados = invitados.length;

  document.getElementById("numeroInvitados").textContent = numero_invitados;

  const listaInvitados = document.getElementById("listaInvitados");

  invitados.forEach((nombre) => {
    const elemento = document.createElement("li");
    elemento.textContent = nombre;
    listaInvitados.appendChild(elemento);
  });
}

const whatsappMessage =
  "https://wa.me/+50230446296?text=%C2%A1Hola%21%20" +
  INVITACIONES[apellido]["familia"] +
  "%20confirma%20asistencia%20a%20la%20cena%20de%20graduaci%C3%B3n%20de%20" +
  NOMBRE_GRADUADO +
  ".";

const enlace = document.querySelector("#enlace-whatsapp");

// Cambiar la URL de forma directa
enlace.href = whatsappMessage;
