var loginFormEl = document.getElementById('loginForm');

function handleForm(event) {
    event.preventDefault();

    // console.log(event +'just event');
    // console.log(event.target +'just event & target');
    // console.log(event.target.name +'just event & target & name');
    // console.log(event.target.first +'just event & target first name');
    console.log(event.target.first.value +'How Jacob makes it appear to show the value of imput with the name attribute of _first_');
    console.log(event.target.last.value +'How Jacob makes it appear to show the value of imput with the name attribute of _last_');
    console.log(event.target.campaign.value +'How Jacob makes it appear to show the value of imput with the name attribute of _campaign_');
}


loginFormEl.addEventListener('submit', handleForm);