
// There's an algorithms tournament taking place in which teams of programmers
// compete against each other to solve algorithmic problems as fast as possible.
// Teams compete in a round robin, where each team faces off against all other
// teams. Only two teams compete against each other at a time, and for each
// competition, one team is designated the home team, while the other team is the
// away team. In each competition there's always one winner and one loser; there
// are no ties. A team receives 3 points if it wins and 0 points if it loses. The
// winner of the tournament is the team that receives the most amount of points.



// tracking how many wins a team has
//return the team that has the most wins
//use an obj to track wins
//pointer in each array


//could have kept track of winner in first iteration
function tournamentWinner(competitions, results) {

    const obj = {};

    for (let i = 0; i < competitions.length; i++) {
      const home = competitions[i][0];
      const away = competitions[i][1];

      if (results[i] === 0) {
        if (obj[away]) obj[away] = obj[away] + 1
        if(!obj[away]) obj[away] = 1;
      } else {
        if (obj[home]) obj[home] = obj[home] + 1
        if(!obj[home]) obj[home] = 1;
      };

      console.log(obj)
    };

    let winner;

    for (let team of Object.keys(obj)) {
      if (!winner || obj[team] > obj[winner]) winner = team
    }

    return winner;
}
