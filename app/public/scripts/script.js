const resultsList = document.getElementById('works_list');
const searchBar = document.getElementById('searchBar');
let results = [];

searchBar.addEventListener('keyup', (e) => {
	const searchString = (e.target.value).toLowerCase();
	const filteredResults = results.filter(item => {
		return item.title.toLowerCase().includes(searchString);
	});

	clearResults(resultsList);

	displayResults(filteredResults, e.target.value);

});	

const clearResults = function(parent) {

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

const createItem = function(item) {

	const link = document.createElement('a');
	link.setAttribute('href', `/works/${item._id}`);
	link.setAttribute('class', 'list-group-item list-group-item-action');
	link.textContent = item.title;

	return link;

}

const displayResults = function(resultsArray, searchStr) {	

	if(!resultsArray.length) {
		resultsList.appendChild(noResults(searchStr));
		return;
	}

	resultsArray.forEach(item => {
		resultsList.appendChild(createItem(item));
	});

}

const loadResults = async () => {
	
	try {

		const res = await fetch('/api/works');
		const data = await res.json();
		results = data.works.data;
		

	} catch(err) {

		console.error(err);

	}

}

loadResults();


