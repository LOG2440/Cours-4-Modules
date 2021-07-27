import getTeams from "./teams.js"; // default import
// Default import et autres fonctions.
// L'import n'a pas besoin d'avoir le même nom que le default export
import capitalize, { splitBySpace } from "./stringModifier.js";

// Tous les export sont placés dans 1 seul objet qu'on utilse comme un namespace
import * as utils from "./utils.js";

function addTeamToDOM(team) {
  const teamNode = document.createElement("li");
  const formattedText = capitalize(team);
  const text = document.createTextNode(formattedText);
  teamNode.appendChild(text);

  document.getElementById("team-display").appendChild(teamNode);
}

document.getElementById("submit-btn").addEventListener("click", () => {
  const input = document.getElementById("team-input");
  if (utils.isInRangeOf(input.value, 0, 40)) {
    utils.printToConsole(splitBySpace(input.value));
    addTeamToDOM(input.value);
    input.value = "";
  }
});

const originalTeams = getTeams();
originalTeams.forEach((x) => addTeamToDOM(x));
