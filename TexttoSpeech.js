

function speak() {
    var text = document.getElementById("input").value;
    if (text.trim() !== "") {
        var utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    } else {
        alert("Please enter some text");
    }
}
