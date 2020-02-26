const button = document.querySelector("#submitBtn");

button.addEventListener('click', (e) => {
    e.preventDefault();

    const messageField = document.querySelector("#textMessage"),
        alertField = document.querySelector(".feedback"),
        passedMessage = document.querySelector(".messageContent");

    const removeClass = () => {
        alertField.classList.remove('showFeedback');
    }

    if (messageField.value == '') {
        alertField.classList.add('showFeedback');
        setTimeout(removeClass, 2500);
    } else {
        passedMessage.textContent = messageField.value;
        messageField.value = '';
    }
})