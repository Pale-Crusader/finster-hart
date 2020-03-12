var loginFormEl = document.getElementById('loginForm');

function handleForm(event) {
    event.preventDefault();

    console.log(event);       
    console.log(event.target.first.value);
    console.log(event.target.last.value);
    console.log(event.target.campaign.value);
}


loginFormEl.addEventListener('submit', handleForm);