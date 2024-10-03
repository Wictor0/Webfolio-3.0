// Comportamental
window.scrollBy({
  behavior: "smooth",
});

// Links Downbar
document.getElementById("linkedinBtn").addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/wictormelo/", "_blank");
});

document.getElementById("githubBtn").addEventListener("click", function () {
  window.open("https://github.com/Wictor0", "_blank");
});

document.getElementById("instagramBtn").addEventListener("click", function () {
  window.open("https://www.instagram.com/wictormannuel", "_blank");
});

document.getElementById("WhatsappBtn").addEventListener("click", function () {
  window.open("https://wa.me/5581992048220", "_blank");
});

// Top Bar (Sessões/Sumário)
document.getElementById("Homebtn").addEventListener("click", function () {
  document
    .getElementById("home")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("Sobremimbtn").addEventListener("click", function () {
  document
    .getElementById("aboutme")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("Portifoliobtn").addEventListener("click", function () {
  document.getElementById("portifolio").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("Skillsbtn").addEventListener("click", function () {
  document
    .getElementById("skills")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("Carreirabtn").addEventListener("click", function () {
  document
    .getElementById("career")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("Contatobtn").addEventListener("click", function () {
  document
    .getElementById("contact")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

// Botão de voltar pro topo
document
  .getElementById("back-to-the-topbtn")
  .addEventListener("click", function () {
    document
      .getElementById("home")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  });

document.getElementById("Arrowbtn").addEventListener("click", function () {
  document
    .getElementById("home")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

//Links Home
document
  .getElementById("linkedintopBtn")
  .addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/wictormelo/", "_blank");
  });

document.getElementById("githubtopBtn").addEventListener("click", function () {
  window.open("https://github.com/Wictor0", "_blank");
});

document
  .getElementById("instagramtopBtn")
  .addEventListener("click", function () {
    window.open("https://www.instagram.com/wictormannuel", "_blank");
  });

document.getElementById("ZapHomeBtn").addEventListener("click", function () {
  window.open("https://wa.me/5581992048220", "_blank");
});

document.getElementById("curriculumbtn").addEventListener("click", function () {
  window.open("Currículos/Wictor Melo - Currículo Profissional.pdf", "_blank");
});

//Portifólio
document.getElementById("mungangabtn").addEventListener("click", function () {
  window.open("munganga.com.br", "_blank");
});

document.getElementById("agorabtn").addEventListener("click", function () {
  window.open(
    "https://www.linkedin.com/posts/wictormelo_agora-activity-7242698936908435456-8qhT?utm_source=share&utm_medium=member_desktop",
    "_blank"
  );
});

// linguagem
document.getElementById("engbtn").addEventListener("click", function () {
  window.open("index_en.html", "_self");
});

document.getElementById("ptbtn").addEventListener("click", function () {
  window.open("index.html", "_self");
});
