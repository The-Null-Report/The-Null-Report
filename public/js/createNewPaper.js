var modal = document.getElementById("myModal");


const createNewPaper = async () => {
    modal.style.display = "block";
};

document.querySelector('#createNewPaper').addEventListener('click', createNewPaper);
