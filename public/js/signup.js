const signupFormHandler = async function (event) {
    console.log('Hey you clicked me!');
    event.preventDefault();

    const nameEl = document.querySelector('#name-signup');
    const emailEl = document.querySelector('#email-signup');
    const passwordEl = document.querySelector('#password-signup');

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            fName: nameEl.value,
            lName: nameEl.value,
            password: passwordEl.value,
            email: emailEl.value,
            admin: false,
            reviewer: false,
            reviewerRequestPending: false,
            areaOfStudy: 'Undecided',
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to sign up');
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);