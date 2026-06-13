/* NAVBAR scroll */
const nav = document.getElementById("nav");
const toggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true },
);

/* Menu mobile */
toggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

/* Typewriter no hero */
const fullName = "Mateus Vieira";
const nameEl = document.getElementById("typewriter-name");
let charIndex = 0;

function typeName() {
  if (charIndex <= fullName.length) {
    nameEl.textContent = fullName.slice(0, charIndex);
    charIndex++;
    setTimeout(typeName, charIndex === 1 ? 600 : 70);
  }
}

const githubUsername = "Matt0820";
const githubProjectsCount = 6;
const projectsGrid = document.getElementById("projects-grid");

function formatDate(dateString) {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

function createProjectCard(repo) {
  const description = repo.description
    ? repo.description
    : "Sem descrição disponível.";
  const language = repo.language ? repo.language : "Tecnologia não informada";
  return `
        <article class="project-card reveal">
          <div>
            <h3 class="project-card__title">${repo.name}</h3>
            <p class="project-card__desc">${description}</p>
          </div>
          <div class="project-card__meta">
            <span class="project-tag">${language}</span>
            <span class="project-stat">★ ${repo.stargazers_count}</span>
            <span class="project-stat">${formatDate(repo.pushed_at)}</span>
          </div>
          <div class="project-footer">
            <a class="project-link" href="${repo.html_url}" target="_blank" rel="noopener">ver no GitHub</a>
            ${repo.homepage ? `<a class="project-link" href="${repo.homepage}" target="_blank" rel="noopener">ver demo</a>` : ""}
          </div>
        </article>
      `;
}

async function loadGitHubProjects() {
  if (!projectsGrid) return;
  const endpoint = `https://api.github.com/users/${githubUsername}/repos?per_page=${githubProjectsCount}&sort=pushed`;
  try {
    const response = await fetch(endpoint, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) throw new Error(`GitHub API retornou ${response.status}`);
    const repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      projectsGrid.innerHTML = `
            <div class="project-card project-card--placeholder">
              <p class="project-card__title">Nenhum repositório público encontrado.</p>
            </div>`;
      return;
    }

    projectsGrid.innerHTML = repos.map(createProjectCard).join("");
    document
      .querySelectorAll(".projects-grid .project-card.reveal")
      .forEach((el) => observer.observe(el));
  } catch (err) {
    projectsGrid.innerHTML = `
          <div class="project-card project-card--placeholder">
            <p class="project-card__title">Não foi possível carregar os projetos.</p>
            <p class="project-card__desc">Verifique sua conexão ou tente novamente mais tarde.</p>
          </div>`;
    console.error(err);
  }
}

loadGitHubProjects();

/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

reveals.forEach((el) => observer.observe(el));

/* Hero: anima imediatamente e dispara typewriter */
document.querySelectorAll(".hero .reveal").forEach((el, i) => {
  setTimeout(
    () => {
      el.classList.add("visible");
      if (i === 0) setTimeout(typeName, 300);
    },
    200 + i * 160,
  );
});
