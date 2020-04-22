
document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  callInfo();
});

// listens for button click
function callInfo() {
  const button = document.querySelector('button');
  button.addEventListener('click', function(e) {
    fetchData();
  })
}

// GETS data passes it to elements
function fetchData() {
  fetch('https://randomuser.me/api/')
  .then(resp => {return resp.json(); })
  .then(data => { 
    data.results.forEach(obj => 
      createInfo(obj) )
  })
}

// assigns elements to appropriate info
function createInfo(obj) {
    const nameTag = document.getElementById('fullname')
    nameTag.innerText = `${obj.name.first} ${obj.name.last}`

    const emailTag = document.getElementById('email')
    emailTag.innerText = obj.email

    const streetTag = document.getElementById('street')
    streetTag.innerText = `${obj.location.street.number} ${obj.location.street.name}`

    const cityTag = document.getElementById('city')
    cityTag.innerText = obj.location.city
    
    const stateTag = document.getElementById('state')
    stateTag.innerText = obj.location.state

    const postcodeTag = document.getElementById('postcode')
    postcodeTag.innerText = obj.location.postcode

    const phoneTag = document.getElementById('phone')
    phoneTag.innerText = obj.phone

    const cellTag = document.getElementById('cell')
    cellTag.innerText = obj.cell

    const dobTag = document.getElementById('date_of_birth')
    dobTag.innerText = obj.dob.date
}



