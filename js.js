function decodeBase64() {
    var base64Input = document.getElementById("base64-input").value;
    var decodedText = atob(base64Input);
    document.getElementById("decoded-text").value = decodedText;
}

function contaVogaisConsoantes() {
    var decodedText = document.getElementById("decoded-text").value;
    var vogais = decodedText.match(/[aeiou]/gi);
    var consonants = decodedText.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    document.getElementById("vowel-count").textContent = vogais ? vogais.length : 0;
    document.getElementById("consonant-count").textContent = consonants ? consonants.length : 0;
}