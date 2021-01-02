const user = document.querySelector("#userField");
const message = document.querySelector("#messageField");
const send = document.querySelector("#send");

send.addEventListener('click', e => {
    e.preventDefault();
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});