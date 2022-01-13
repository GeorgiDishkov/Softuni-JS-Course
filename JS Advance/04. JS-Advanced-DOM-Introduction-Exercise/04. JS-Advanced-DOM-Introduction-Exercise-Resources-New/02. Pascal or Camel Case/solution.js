function solve() {
  const firstElement = document.getElementById(`text`).value;
  const secondElement = document.getElementById(`naming-convention`).value;

  let splitedText = firstElement.split(` `);
  let rightText = ``;

  console.log(splitedText);
  if (secondElement == `Camel Case`) {
    let temp = splitedText.shift().toLowerCase();
    rightText += temp;
    for (const line of splitedText) {
      let firstLatter = line.slice(0, 1).toUpperCase();
      rightText += firstLatter + line.slice(1).toLowerCase();
    }
    document.getElementById(`result`).textContent = rightText;
  } else if (secondElement == `Pascal Case`) {
    for (const line of splitedText) {
      let firstLatter = line.slice(0, 1).toUpperCase();
      rightText += firstLatter + line.slice(1).toLowerCase();
    }
    document.getElementById(`result`).textContent = rightText;
  } else {
    document.getElementById(`result`).textContent = `Error!`
  }
}