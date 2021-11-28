const text = document.querySelector('#text')
const config = { lang: 'he-IL' }
const recognition = new webkitSpeechRecognition(config)

function speechToText() {
	recognition.start()
	recognition.onresult = event => {
		text.textContent = event.results[0][0].transcript
	}
}

function textToSpeech() {
	const synth = new SpeechSynthesisUtterance(text.textContent)
	speechSynthesis.speak(synth)
}

// HTML --->

// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>Document</title>
// 	</head>
// 	<body>
// 		<div>
// 			<button onclick="speechToText()">speech To Text</button>
// 		</div>
// 		<div>
// 			<button onclick="textToSpeech()">text To Speech</button>
// 		</div>
// 		<div>
// 			<h1>text:</h1>
// 			<p id="text"></p>
// 		</div>
// 		<script src="./app.js"></script>
// 	</body>
// </html>
