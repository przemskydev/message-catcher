(() => {
//select elements
    const button = document.querySelector("#submitBtn"),
        messageField = document.querySelector("#textMessage"),
        alertField = document.querySelector(".feedback"),
        passedMessage = document.querySelector(".messageContent");
//add event listener on button element
    button.addEventListener('click', (e) => {
        //prevent the form's default action
        e.preventDefault();

        const removeClass = () => {
            alertField.classList.remove('showFeedback');
        }
        //if first value is empty- show alert, else change text content and remove message filed value
        if (messageField.value == '') {
            alertField.classList.add('showFeedback');
            setTimeout(removeClass, 2500);
        } else {
            passedMessage.textContent = messageField.value;
            messageField.value = '';
        }
    });

})();