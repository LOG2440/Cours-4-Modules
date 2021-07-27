import { getTeams } from "./teams.js";

function addTeamToDOM(team) {
  const teamNode = document.createElement("li");
  const text = document.createTextNode(team);
  teamNode.appendChild(text);

  document.getElementById("team-display").appendChild(teamNode);
}

document.getElementById("submit-btn").addEventListener("click", () => {
  const input = document.getElementById("team-input");
  if (input.value.length > 0) {
    addTeamToDOM(input.value);
    input.value = "";
  }
});

const originalTeams = getTeams();
originalTeams.forEach((x) => addTeamToDOM(x));
