const url = "data/members.json";
const container = document.getElementById("members");
const gridButton = document.getElementById("grid-view");
const listButton = document.getElementById("list-view");

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  container.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${["", "Member", "Silver", "Gold"][member.membership]}</p>
    `;
    container.appendChild(card);
  });
}

gridButton.addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

listButton.addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});

getMembers();
