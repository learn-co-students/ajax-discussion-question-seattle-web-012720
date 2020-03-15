
const userURL = 'https://randomuser.me/api/'

document.addEventListener("DOMContentLoaded", () => {
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const street = document.getElementById("street");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const postcode = document.getElementById("postcode");
  const phone = document.getElementById("phone");
  const cell = document.getElementById("cell");
  const dateOfBirth = document.getElementById("date_of_birth");
  const image = document.getElementById("profile_picture");

  document.getElementsByClassName('btn btn-primary')[0].addEventListener('click', () => {
    fetch(userURL).then(resp => resp.json()).then(data => {
      const user = data.results[0];
      const name = user.name
      fullname.innerText = name.title + ' ' + name.first + ' ' + name.last;
      email.innerText = user.email;
      const location = user.location;
      street.innerText = location.street.number + ' ' + location.street.name;
      city.innerText = location.city;
      state.innerText = location.state;
      postcode.innerText = location.postcode;
      phone.innerText = user.phone;
      cell.innerText = user.cell;
      dateOfBirth.innerText = user.dob.date.substring(0, 10);
      image.src = user.picture.thumbnail;

    });
  });
});
