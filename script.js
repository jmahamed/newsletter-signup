function validateForm() {
    const emailInput = document.querySelector('#e-mail');
    const errorMessage = document.querySelector('.error-msg');
    var email = emailInput.value.trim();

    if (email === '')  {
        emailInput.classList.add('error');
        errorMessage.style.display = 'inline';
    } else if (!email.includes('@')) {
        emailInput.classList.add('error');
        errorMessage.style.display = 'inline';
    } else {
        document.getElementById("myForm").submit();
        window.location.href = 'success.html';
    }
}