const uploadFile = function(event) {
    event.preventDefault();

    console.log('hey you clicked me!');

    const input = document.querySelector('input[type="file"]');
    
    const upload = fetch('api/user/upload', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' }
    });
}

document.querySelector('#submit-btn').addEventListener('submit', uploadFile);