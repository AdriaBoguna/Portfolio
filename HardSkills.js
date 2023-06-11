const skillsContent = [
  {
    title: "Frontend",
    description:
      "Es mi área fuerte de conocimiento y la que más me entusiasma pues tienes relación directa con el cliente. Domino <strong>HTML</strong>, <strong>CSS3</strong> y <strong>JavaScript</strong>, junto con frameworks y librerías como <strong>Vue.js</strong> y <strong>jQuery</strong>. Durante mi proceso también he aprendido <strong>Bootstrap4</strong> para diseño responsivo y preprocesadores CSS como <strong>LESS</strong> y <strong>SASS</strong>.  Actualmente, estoy enfocado en perfeccionar mis habilidades en <strong>React</strong> y <strong>Angular</strong>.",
    logos: [
      { src: "./files/html.svg", name: "HTML" },
      { src: "./files/css.svg", name: "CSS" },
      { src: "./files/js.svg", name: "JavaScript" },
      { src: "./files/vue.svg", name: "Vue" },
      { src: "./files/jquery.png", name: "jQuery" },
      { src: "./files/bootstrap.png", name: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    description:
      "Trabajo con la gestión de bases de datos NoSQL, como <strong>MongoDB</strong>, y bases de datos relacionales, como <strong>PostgreSQL</strong> y <strong>MySQL</strong>, además de ser un desarrollador experimentado en <strong>C#</strong>. También tengo experiencia en <strong>APIs RESTful</strong> utilizando <strong>Node.js/Express</strong> y <strong>Swagger</strong>. Sin duda, es un área en la que me gustaría seguir formándome y ampliando mis habilidades para mantenerme actualizado y ser más eficiente en la resolución de problemas.",
    logos: [
      { src: "./files/node.svg", name: "Node.JS" },
      { src: "./files/charpp.png", name: "C#" },
      { src: "./files/mongo.svg", name: "MongoDB" },
      { src: "./files/Postgresql.png", name: "Postgres" },
      { src: "./files/swagger.png", name: "Swagger" },
    ],
  },
  {
    title: "Tools",
    description:
      "Trabajo con <strong>GitLab</strong> y <strong>GitHub</strong> para control de versiones y colaboración en proyectos. <br>Además, utilizo <strong>Unity</strong> y <strong>Blender</strong> para el desarrollo de videojuegos y creación de modelos 3D. Mi aprendizaje es constante y sigo aprendiendo otras herramientas de interés para futuros proyectos.",
    logos: [
      { src: "./files/git.svg", name: "Git" },
      { src: "./files/unity3.png", name: "Unity" },
      { src: "./files/blender.png", name: "Blender" },
    ],
  },
  {
    title: "Methodologies",
    description:
      "Mi formación actual abarca metodologías como <strong>OOP</strong> y <strong>CI/CD</strong> (Integración continua / Entrega continua). Sin embargo, durante el próximo año tengo la intención de expandir mis conocimientos para incluir metodologías como <strong>AGILE</strong>, <strong>TDD</strong> (Test-Driven Development) y <strong>BDD</strong> (Behavior-Driven Development), entre otras.",
    logos: [
      { src: "./files/oop.png", name: "OOP" },
      { src: "./files/cicd.png", name: "CI/CD" },
      { src: "./files/scrum.svg", name: "Scrum" }
    ],
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
  descriptionElement.innerHTML = content.description;

  const logosContainer = document.createElement("div");
  logosContainer.classList.add("skills__logos");

  content.logos.forEach((logo) => {
    const logoElement = document.createElement("img");
    logoElement.src = logo.src;
    logoElement.title = logo.name;
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