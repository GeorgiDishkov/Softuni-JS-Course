function solve() {
  const input = document.getElementById(`input`).value;

  let splited = input.split(`.`).filter((el) => el != "");

  for (let i = 0; i < splited.length; i += 3) {
    let result = [];
    for (let z = 0; z < 3; z++) {
      if (splited[i + z]) {
        result.push(splited[i + z]);
      }
    }
    let paragraph = result.join('.') + `.`;
    document.getElementById(`output`).innerHTML += `<p>${paragraph}</p>`;
    result += ``;
  }
}
