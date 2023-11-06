let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
let point = localStorage.getItem("points")

let score = JSON.parse(localStorage.getItem("scores")) || [];
let username = document.getElementById('username');

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;

// document.querySelector("td.score").innerHTML = score;
document.querySelector("td.user").innerHTML = score;


// Get the restart button element by its ID
const restartButton = document.getElementById('restart');

 // Add a click event listener to the restart button
 restartButton.addEventListener('click', restartQuiz) 

 function restartQuiz() {
    // Reset question_count and points to initial values
    question_count = 0;
    points = 0;

    location.href = "quiz.html";
 }


 // storing the points in local storage
 const lastScore = {
    lastScore: points,
    name: username.value,
  };
  score.push(lastScore);
//   score.sort((a, b) => b.lastScore - a.lastScore);
//   score.splice(5);

  const scores = JSON.stringify(score);
  localStorage.setItem("scores", scores);




 


