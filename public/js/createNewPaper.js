var modal = document.getElementById("myModal");

const createNewPaper = async () => {
    modal.style.display = "block";
};

const submitPaper = async() => {
    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    
    if (title && author && subject) {
        const response = await fetch(`/api/paper`, {
            method:'POST',
            body: JSON.stringify({title, author, subject, publishBy}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

document.querySelector('#createNewPaper').addEventListener('click', createNewPaper);
document.querySelector('#submitPaper').addEventListener('click', submitPaper);