const classifier = ml5.imageClassifier('MobileNet');

function gotResult(error, results) {
	const element = document.getElementById('result');
	element.style.fontWeight = 700;
	if (error) {
		element.innerHTML = error;
	} else {
		let num = results[0].confidence * 100;
		element.innerHTML = results[0].label + '<br>Confidence: ' + num.toFixed(2) + '%';
	}
}

function handleSubmit(event) {
	event.preventDefault();
	document.getElementById('result').innerHTML = 'Lādē attēlu...';
	const newImage = document.createElement('img');
	newImage.src = document.getElementById('img-src').value;
	console.log('augstums', newImage.height);
	newImage.crossOrigin = 'anonymous';
	newImage.onload = function () {
		classifier.classify(this, gotResult);
	};

	document.getElementById('image').innerHTML = '';
	document.getElementById('image').appendChild(newImage);
}
