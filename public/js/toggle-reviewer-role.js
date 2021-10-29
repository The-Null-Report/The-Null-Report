const toggleReviewerHandler = async function(e) {
	e.preventDefault();

	const reviewerBtn = document.querySelector('#reviewer');
	if (reviewerBtn.is(':checked')) {
	
		const response = await fetch('/:id', {
			method: 'PUT',
			body: JSON.stringify({
				reviewer: true
			})
		});
			
			if(response.ok) {
				$('.message').text('Reviewer Role successfully assigned');
				const myModal = document.querySelector('.modal');
				myModal.focus();
			}else{
				$('.message').text(`Something went wrong.
				Reviewer role has not been assigned.`);
				const myModal = document.querySelector('.modal');
				myModal.focus();
			}
	}
}
