let speech = new SpeechSynthesisUtterance


let voices = [];

let voiceSelect = document.getElementById("dropDown");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => (dropDown.options[i]) = new Option(voice.name,i))
};

voiceSelect.addEventListener("change",() =>{
    speech.voice = voices[voiceSelect.value]
})

document.getElementById("subBtn").addEventListener("click", () =>{
    speech.text = document.getElementById("txt-area").value
    window.speechSynthesis.speak(speech)
})

