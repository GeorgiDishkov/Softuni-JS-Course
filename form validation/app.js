const text = document.getElementById("textid");
const numberId = document.getElementById("numid");
let result = [];

let textCheck = false;
let numCheck = false;
let chooseCheck = false;
let radioCheck = false;
let boxCheck = false;

function checkInputs() {
  //get values from the input
  const textValue = text.value.trim();
  const numberValue = numberId.value.trim();



  if (textValidation(textValue)) {
    setSuccessFor(text);
    result.push(textValue)
    textCheck = true;
  } else {
    setErrorFor(text);
  }
  if (numberValidation(numberValue)) {
    setSuccessFor(numberId);
    result.push(numberValue)
  } else {
    setErrorFor(numberId);
  }
  if(textCheck == true ||numCheck == false ||chooseCheck == false ||radioCheck == false || boxCheck == false){
    document.getElementById("resid").innerHTML=(result.join(`\n`))
  };

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


