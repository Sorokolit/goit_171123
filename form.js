const userNameField = document.querySelector('#user-name');
const userEmailField = document.querySelector('#user-email');
const formSubmitBtn = document.querySelector('#form-submit-btn');
const formContainer = document.querySelector('#form');


formContainer.addEventListener('submit', function (event) {
    event.preventDefault();
});

formSubmitBtn.addEventListener('click', function () {
    
    const formData = new FormData(formContainer);
    
    console.log('Дані форми готуються до відправки');
    
    fetch('/', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }).then(function() {
        alert('Дякую, що відправили форму!');
    }).catch(function() {
        alert('Сталася помилка, спробуйте пізніше.');
    })
    
    /*
    fetch('/', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString()
    }).then(function () {
        alert('Дякую, що відправили форму!');
    }).catch(function () {
        alert('Сталася помилка, спробуйте пізніше.');
    })
    */
});

/*
formSubmitBtn.addEventListener('click', function () {
    console.log('Form was clicked');
});
*/

//console.log('All is ok!');

//console.log(userNameField);

//alert('Дякую, ваші дані збережені!')

