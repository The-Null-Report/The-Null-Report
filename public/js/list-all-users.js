const getAllUsers = async function(e) {
	const allUsers = await User.findAll()
	for(const results of allUsers) {

		const listEl = document.querySelector('.allUsersList');
		listEl.appendChild(
			`<li class="list-group-item"><p>${results.User.fName} ${results.User.lName}</p><button type="button" class="btn btn-danger" id:"deleteUserBtn">Delete User</button></li>`
		);
	};
}