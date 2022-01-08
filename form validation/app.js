const text = document.getElementById("textid");
const numberId = document.getElementById("numid");
const selected = document.getElementById("cars");
const firstCB = document.getElementById("ch1");
const secondCB = document.getElementById("ch2");

let result = [];

let textCheck = false;
let numCheck = false;
let chooseCheck = false;
let radioCheck = false;
let boxCheck1 = false;
let boxCheck2 = false;
 
function checkInputs() {
  //get values from the input
  const selectValue = selected.value.trim();
  const textValue = text.value.trim();
  const numberValue = numberId.value.trim();



  if (textValidation(textValue)) {
    setSuccessFor(text);
    result.push(textValue)
    textCheck = true;
  } else {
    setErrorFor(text);
    textCheck = false;
  }
  if (numberValidation(numberValue)) {
    setSuccessFor(numberId);
    result.push(numberValue)
    numCheck = true;
  } else {
    setErrorFor(numberId);
    numCheck = false;
  }
  if (selectValue != ``) {
    chooseCheck = true;
    result.push(selectValue);
  }
  if (document.getElementById("r1").checked) {
    result.push(document.getElementById("r1").value)
    radioCheck = true;
  }
  else if (document.getElementById('r2').checked) {
    result.push(document.getElementById("r2").value)
    radioCheck = true;
  }
  if(firstCB.checked) {
    result.push(firstCB.value.trim());
    boxCheck1 = true;
  }else{
    result.push("Unchecked")
    boxCheck1 = false
  } if(secondCB.checked) {
    result.push(secondCB.value.trim());
    boxCheck2 = true;
  }else{
    result.push("Unchecked")
    boxCheck2 = false
  }
  if (textCheck == true && numCheck == true && chooseCheck == true && radioCheck == true && (boxCheck1 == true || boxCheck2 == true)) {
    document.getElementById("resid").innerHTML = (`Text : ${result[0]} \nNumbers : ${result[1]}\nChoose : ${result[2]}\nRadioButton : ${result[3]}\nCheckbox 1 - ${result[4]}\nCheckbox 2 - ${result[5]} `)
    result = [];
  }else {
    document.getElementById("resid").innerHTML = ("Missing parts")
  }
}



// ------------funcions--------------

function textValidation(text) {
  let flag = true;
  let splitedText = text.split(``);
  for (const line of splitedText) {
    let isNumber = Number(line);
    isNumber = isNumber.toString()
    if (isNumber != `NaN`) {
      flag = false;
      break;
    }
  }
  if (flag && text != ``) {
    return true;
  } else {
    return false;
  }
}
function numberValidation(number) {
  let splitedNum = number.toString().split(``);
  let flag = true;
  for (let line of splitedNum) {
    let numCheck = Number(line).toString();
    if (numCheck == `NaN`) {
      flag = false;
      break;
    }
  }
  if (flag && number != ``) {
    return true;
  } else {
    return false;
  }
}
// -------------- error/success ------------
function setErrorFor(input) {
  const formControl = input.parentElement; // .form-control div

  const small = formControl.querySelector("small");

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement; // .form-control div

  //add error class
  formControl.className = "form-control success";
}

// -------------X-------------


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});


