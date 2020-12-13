const worksList = document.getElementById('works_list');
const searchBar = document.getElementById('searchBar');
let works = [];

searchBar.addEventListener('keyup', (e) => {
	const searchString = (e.target.value).toLowerCase();
	const filteredWorks = works.filter(work => {
		return work.title.toLowerCase().includes(searchString);
	});

	clearWork(worksList);

	displayWorks(filteredWorks, e.target.value);

});	

const clearWork = function(parent) {

	while(parent.firstChild) {
		parent.firstChild.remove();
	}

	return;

}

const noResults = function(searchStr) {
	const span = document.createElement('span');
	span.setAttribute('class', 'list-group-item list-group-item-action');
	span.textContent = `No results found for "${searchStr}"`;

	return span;

}

const createWork = function(work) {

	const link = document.createElement('a');
	link.setAttribute('href', `/works/${work._id}`);
	link.setAttribute('class', 'list-group-item list-group-item-action');
	link.textContent = work.title;

	return link;

}

const displayWorks = function(worksArray, searchStr) {	

	if(!worksArray.length) {
		worksList.appendChild(noResults(searchStr));
		return;
	}

	worksArray.forEach(item => {
		worksList.appendChild(createWork(item));
	});

}

const loadWorks = async () => {
	
	try {

		const res = await fetch('/api/works');
		const data = await res.json();
		works = data.works.data;
		

	} catch(err) {

		console.error(err);

	}

}

loadWorks();

// async function postFormDataAsJson({ url, formData }) {
// 	const plainFormData = Object.fromEntries(formData.entries());
// 	const formDataJsonString = JSON.stringify(plainFormData);

// 	const fetchOptions = {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 			Accept: "application/json",
// 		},
// 		body: formDataJsonString,
// 	};

// 	const response = await fetch(url, fetchOptions);

// 	if (!response.ok) {
// 		const errorMessage = await response.text();
// 		throw new Error(errorMessage);
// 	}

// 	return response.json();
// }

// async function handleFormSubmit(event) {
// 	event.preventDefault();

// 	const form = event.currentTarget;
// 	const url = form.action;

// 	try {
// 		const formData = new FormData(form);
//     const responseData = await postFormDataAsJson({ url, formData });
    
//     const { success, message } = responseData;

//     if(success) {
//       console.log(message);
//       window.location.reload();
//     }
    
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// const submitForm = document.getElementById("form_work");
// submitForm.addEventListener("submit", handleFormSubmit);)
