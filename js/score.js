/**
 * Created by gabedriggs1 on 10/13/15.
 */
/**
 * Created by gabedriggs1 on 10/13/15.
 */
var team1Score = 0;
var team2Score = 0;
function quaffle(team){
    if (team == "1") {
        team1Score += 10;
        document.getElementById("team1").innerHTML = team1Score;
    }
    else {
        team2Score += 10;
        document.getElementById("team2").innerHTML = team2Score;

    }
}
function snitch(team){
    if (team == "1") {
        team1Score += 30;
        document.getElementById("team1").innerHTML = team1Score;
        whoWon();
    }
    else {
        team2Score += 30;
        document.getElementById("team2").innerHTML = team2Score;
        whoWon();

    }
}
function whoWon(){
    if (team1Score > team2Score){
        alert("Team 1 wins!");
    }
    else {
        alert("Team 2 Wins!");
    }
}