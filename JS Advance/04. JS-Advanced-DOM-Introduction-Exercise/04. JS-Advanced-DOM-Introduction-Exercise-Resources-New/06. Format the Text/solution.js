function solve() {
  let text = document.getElementById(`input`).value;
  document.getElementById(`input`).id = `output`

  let splitedText = text.split(`.`);


  for (let i = 0; i < splitedText.length; i+=3) {
    let separates = splitedText[i]+splitedText[i+1]+splitedText[i+2] + `DOT`
    document.getElementById(`output`).innerHTML = separates;
  }
}