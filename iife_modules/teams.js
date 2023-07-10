TEAM_APP.getTeams = (function () {
  const teams = [
    "Canadiens de Montréal",
    "Tampa Bay Lightning",
    "Buffalo Sabres",
  ];

  return function getTeams() {
    return teams;
  }
})();
