const langform = document.getElementById("lang-form");
langform.onsubmit = function() {
    console.log('submitted');
}

function changelang() {
    langval = document.getElementById('select-lang');
    lang = langval.value;
    console.log(lang);
}

console.log('this');
    