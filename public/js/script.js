
function openSideMenu() {
	document.querySelector('#side-menu').style.width = '250px';
	// document.getElementById('main').style.marginLeft = '260px';
}

function closeSideMenu() {
	document.querySelector('#side-menu').style.width = '0';
	// document.getElementById('main').style.marginLeft = '1rem';
}

function openQuoteForm() {
	var getQuote = document.querySelector('#get_quote');
	getQuote.style.display = 'block';
	getQuote.style.transition = '1s';
}

function closeQuoteForm() {
	var closeQuote = document.querySelector('#get_quote');
	closeQuote.style.display = 'none';
}


