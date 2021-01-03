// Variables

const user = document.querySelector("#userField");
const message = document.querySelector("#messageField");
const send = document.querySelector("#send");


// Event Listener for User and Message
send.addEventListener('click', e => {
    e.preventDefault();
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        window.alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        window.alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        window.alert("Please fill out message field before sending");
    } else {
        window.alert(`Message successfully sent to: ${user.value}`);
    }
});