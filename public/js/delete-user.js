const deleteUser = async function(e) {
	e.preventDefault();

	// const deleteUserBtn = document.querySelector('#deleteUserBtn');
	document.querySelector('#deleteUserBtn').addEventListener('click', function(){
		const response = await fetch('/:id', {
			method: 'DELETE',
			})
		
			if(response.ok) {
			$('.message').text('The user has been deleted.');
			const myModal = document.querySelector('.modal');
			myModal.focus();
		}else{
			$('.message').text(`Something went wrong.
			The user was not deleted.`);
			const myModal = document.querySelector('.modal');
			myModal.focus();
		};		
	});	
};