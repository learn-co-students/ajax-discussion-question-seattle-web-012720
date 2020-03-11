const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

function showUser(data) {
  const newObj = data.results[0];
  console.log(newObj)
  newObj.fullname = `${newObj['name']['title']} ${newObj['name']['first']} ${newObj['name']['last']}`
  document.getElementById("fullname").textContent = newObj.fullname;
  document.getElementById("email").textContent = newObj.email;
  document.getElementById("phone").textContent = newObj.phone;
  document.getElementById("cell").textContent = newObj.cell;
  document.getElementById("date_of_birth").textContent = newObj['dob']['date'];
  document.getElementById("city").textContent = newObj.location.city;
  document.getElementById("state").textContent = newObj.location.state;
  document.getElementById("postcode").textContent = newObj.location.postcode;
  document.getElementById("street").textContent = `${newObj.location.street.number} ${newObj.location.street.name}`;
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const button = document.querySelector("button")
   button.addEventListener("click", function() {
      fetch("https://randomuser.me/api/")
        .then(resp => resp.json())
        .then(json => showUser(json))
   });
});