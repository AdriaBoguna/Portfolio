const skillsContent = [
  {
    title: "Frontend",
    description:
      "Es mi área fuerte de conocimiento y la que más me entusiasma pues tienes relación directa con el cliente. Domino HTML, CSS y JAVASCRIPT nativos y durante mi proceso también he aprendido a utilizar frameworks como Vue, React y jQuery.",
    logos: [
      "./files/html.svg",
      "./files/css.svg",
      "./files/js.svg",
      "./files/vue.svg",
      "./files/jquery.png",
    ],
  },
  {
    title: "Backend",
    description:
      "Trabajo con la gestión de bases de datos NoSQL, como MongoDB, y bases de datos relacionales, como PostgreSQL y MySQL, además de ser un desarrollador experimentado en C#. Sin duda, es un área en la que me gustaría seguir formándome y ampliando mis habilidades para mantenerme actualizado y ser más eficiente en la resolución de problemas.",
    logos: [
      "./files/node.svg",
      "./files/charpp.png",
      "./files/mongo.svg",
      "./files/Postgresql.png",
    ],
  },
  {
    title: "Tools",
    description:
      "Utilizo GitLab y GitHub, y sigo aprendiendo otras herramientas de interés para futuros proyectos",
    logos: ["./files/git.svg"],
  },
  {
    title: "Methodologies",
    description:
      "Mi formación en los próximos meses icluye conocimientos de AGILE, TDD (Test-Driven Development) y BDD (Behavior-Driven Development)",
    logos: ["./files/scrum.svg"],
  },
];

const buttons = document.querySelectorAll("[data-button]");
const skillsMain = document.querySelector(".skills__main");

function updateContent(index) {
  const content = skillsContent[index];

  const titleElement = document.createElement("h3");
  titleElement.classList.add("skills__h3");
  titleElement.textContent = content.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("skills__p");
  descriptionElement.textContent = content.description;

  const logosContainer = document.createElement("div");
  logosContainer.classList.add("skills__logos");

  content.logos.forEach((logo) => {
    const logoElement = document.createElement("img");
    logoElement.src = logo;
    logoElement.classList.add("skills__img");
    logosContainer.appendChild(logoElement);
  });

  skillsMain.innerHTML = "";
  skillsMain.appendChild(titleElement);
  skillsMain.appendChild(descriptionElement);
  skillsMain.appendChild(logosContainer);
}


function createSkillsViewMobile(skill) {
    const mainElement = document.createElement("article");
    mainElement.classList.add("skills__main");

    const titleElement = document.createElement("h3");
    titleElement.classList.add("skills__h3");
    titleElement.textContent = skill.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("skills__p");
    descriptionElement.textContent = skill.description;

    const logosContainer = document.createElement("div");
    logosContainer.classList.add("skills__logos");

    skill.logos.forEach((logo) => {
        const logoElement = document.createElement("img");
        logoElement.src = logo;
        logoElement.classList.add("skills__img");
        logosContainer.appendChild(logoElement);
    });

    mainElement.appendChild(titleElement);
    mainElement.appendChild(descriptionElement);
    mainElement.appendChild(logosContainer);

    skillsMain.innerHTML = '';
    skillsMain.appendChild(mainElement);
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((otherButton) => {
      otherButton.classList.remove("skills__active");
    });
    button.classList.add("skills__active");

    document.querySelector(".skills__bar").style.top = `${index * 2.5}rem`;

    updateContent(index);
  });
});

buttons[0].classList.add("skills__active");
document.querySelector(".skills__bar").style.top = "0rem";
updateContent(0);


// Observador de medios
const mediaQuery = window.matchMedia('(max-width: 768px)');

// Listener para el observador de medios
mediaQuery.addListener(handleTabletChange);
// Llamar al listener inmediatamente
handleTabletChange(mediaQuery);

// Manejar el cambio de tamaño de pantalla
function handleTabletChange(e) {
    const skillsContainer = document.querySelector('.skills__container');
    // Verificar si los medios de consulta coinciden
    if (e.matches) {
        // Si es menor o igual a 768px
        skillsContainer.classList.remove('skills__container--desktop');
        skillsContainer.classList.add('skills__container--mobile');
        createSkillsViewMobile(skillsContent[0]);
    } else {
        skillsContainer.classList.remove('skills__container--mobile');
        skillsContainer.classList.add('skills__container--desktop');
        updateContent(0);
    }
};