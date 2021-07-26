const teams = [
  "Canadiens de Montréal",
  "Tampa Bay Lightning",
  "Buffalo Sabres",
];

function getTeams() {
  return teams;
}

// ne sera jamais mis dans bundle.js si Webpack est en mode "production"
function uselessFunction() {
  const message = "Ceci est un message vide qui ne sera jamais appelé!!";
  console.log(message);
}

module.exports = {
  getTeams: getTeams,
};
