// TODO: Finish the display paper logic if needed
const displayPaper = async function(e){
	e.preventDefault();

	document.querySelector('.link').addEventListener('click', function(){
		const response = await fetch('/:id', {
			method: 'GET',
		})
		if(response.ok){
			
		}
	});
	
	
}