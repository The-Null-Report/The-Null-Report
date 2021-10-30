const getPendingPapers = async function(e){
	e.preventDefault();
	
	const pendingPapers = await Paper.findAll({
			where: {
				reviewed: false
			}	
	})

	for(const results of pendingPapers){
		const listEl = document.querySelector('.list-group');
		listEl.appendChild(
			`<li class="list-group-item">
			<input class="form-check-input me-1" id="reviewer" type="checkbox" value="" aria-label=""><button class='link'>${Paper.title}</link></li>`
		);
	};
};