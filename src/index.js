const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const button = document.querySelector("button");
  button.addEventListener("click", function(){
    fetchData();
  })
});

function fetchData(){
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => {
      document.getElementById("fullname").innerText = json.results[0].name.first;
    } )
}


