const toggleReviewedHandler = async function(e) {
	e.preventDefault();

	const reviewedBtn = document.querySelector('#reviewed');
	if (reviewedBtn.is(':checked')) {
	
		const response = await fetch('/:id', {
			method: 'PUT',
			body: JSON.stringify({
				reviewed: true
			})
		});
			
			if(response.ok) {
				$('.message').text('Article has been reviewed');
				const myModal = document.querySelector('.modal');
				myModal.focus();
			}else{
				$('.message').text(`Something went wrong.
				Article has not been flagged as reviewed.`);
				const myModal = document.querySelector('.modal');
				myModal.focus();
			}
	}
}
