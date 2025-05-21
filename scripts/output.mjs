export function setTitle(course) {
  document.querySelector("h1").textContent = course.name;
  document.querySelector("h2").textContent = course.code;
}

export function renderSections(sections) {
  const tbody = document.querySelector("#sections");
  tbody.innerHTML = ""; // clear current rows

  sections.forEach(section => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${section.sectionNumber}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    `;

    tbody.appendChild(row);
  });
}
