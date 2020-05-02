// Calls fetch with the url and the document text
// On response it populates the article text with the highlighting

var text = document.body.innerText

function unicodeToChar(text) {
	return text.replace(/\\u[\dA-F]{4}/gi, 
	      function (match) {
	           return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
	      });
}

const googleCloudFunction = "https://us-central1-texthighlight-274101.cloudfunctions.net/sentenceHighlight"

// With the response I want to open a popup to display the results

fetch(
	googleCloudFunction, {
		method: 'POST',
		body: JSON.stringify(text),
		headers: {
			"Context-Type": 'application/json'
		} 
	}
).then(response => { return response.json() })
.then(res => {	
	$.each(res, function( index, value ) {
		value = unicodeToChar(value).replace(/\\n/g, '');
		document.body.innerHTML = document.body.innerHTML.split(value).join('<span style="background-color: #fff799;">' + value + '</span><span class="tooltiptext">'Similar sentence'</span>');
	});
}).catch(error => console.error('Error: ', error));




