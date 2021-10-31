const uploadFile = function(event) {
    event.preventDefault();

    const input = document.querySelector('input[type="file"]');
    
    const upload = fetch('api/user/upload', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: input.files[0],
    });
}

document.querySelector('#submit-btn').addEventListener('click', uploadFile);