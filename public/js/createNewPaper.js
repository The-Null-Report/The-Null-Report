const submitPaper = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="paper-title"]').value.trim();
    const author = document.querySelector('input[name="paper-author"]').value.trim();
    const subject = document.querySelector('input[name="paper-subject"]').value.trim();
    const input = document.querySelector('input[type="file"]');
    
    if (!title || !author || !subject) {
        window.alert('Missing inputs!');
    } else {
        await fetch(`/api/paper`, {
            method:'POST',
            body: JSON.stringify({ title, author, subject }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        await fetch('api/upload', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: input.files[0],
        });

        document.location.replace('/dashboard');
    }
};

document.querySelector('#new-paper-form').addEventListener('submit', submitPaper);