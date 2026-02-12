const profile = {
  name: "Govinda Hemanth",
  github: "#",
  linkedin: "#",
  email: "#"
};

document.getElementById("name").textContent = profile.name;

fetch("./data/projects.json")
.then(res => res.json())
.then(projects => {
  const container = document.getElementById("projects");
  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
    container.appendChild(div);
  });
});
