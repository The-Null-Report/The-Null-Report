

const getPendingReviewers = async function(e){
	e.preventDefault();
	
	const pendingReviewers = await User.findAll({
			where: {
				reviewerRequestPending: true
			}	
	})

	for(const results of pendingReviewers){
		const listEl = document.querySelector('.list-group');
		listEl.appendChild(
			`<li class="list-group-item">
			<input class="form-check-input me-1" id="reviewer" type="checkbox" value="" aria-label="">${User.firstName} ${User.lastName}</li>`
		);
	};
};

