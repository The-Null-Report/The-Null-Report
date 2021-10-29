const uploadFile = function() {
    const response = fetch('api/user/upload', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
    });
}

document.querySelector('#upload-btn').addEventListener('click', uploadFile);