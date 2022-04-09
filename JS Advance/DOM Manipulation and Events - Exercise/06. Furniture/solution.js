function solve() {
  const container = document.querySelectorAll(`.table tbody`)[0];
  document.getElementById(`container`).addEventListener(`click`, onClick);

  function onClick(e) {
    let [input, output] = e.target.parentNode.querySelectorAll(`textarea`);
    let sum = 0;
    let dFactor = 0;
    let products = [];
    // $ Add prodict $ // 
    if (e.target.tagName == `BUTTON` && e.target.textContent == `Generate`) {
      let parsed = JSON.parse(input.value);
      for (const obj of parsed) {
        const row = document.createElement(`tr`);

        const imgId = document.createElement(`img`);
        imgId.src = obj.img;
        const cellImg = document.createElement(`td`);
        cellImg.appendChild(imgId);
        row.appendChild(cellImg);

        const nameId = document.createElement(`p`);
        nameId.textContent = obj.name;
        const cellName = document.createElement(`td`);
        cellName.appendChild(nameId);
        row.appendChild(cellName);

        const priceId = document.createElement(`p`);
        priceId.textContent = Number(obj.price);
        const cellPrice = document.createElement(`td`);
        cellPrice.appendChild(priceId);
        row.appendChild(cellPrice);

        const dFactorId = document.createElement(`p`);
        dFactorId.textContent = Number(obj.decFactor);
        const cellDFactor = document.createElement(`td`);
        cellDFactor.appendChild(dFactorId);
        row.appendChild(cellDFactor);
        
        const checkB = document.createElement(`input`);
        checkB.type = 'checkbox';
        const cellCheck = document.createElement(`td`);
        cellCheck.appendChild(checkB);
        row.appendChild(cellCheck);

        container.appendChild(row);
      }
      // $ Take info for prodict $ //
    } else if (e.target.tagName == `BUTTON` && e.target.textContent == `Buy`) {
      const checked = Array.from(document.querySelectorAll(`input[type="checkbox"]:checked`));
      for (const check of checked) {
        let parent = check.parentElement.parentElement;
        products.push(parent.children[1].textContent.trim());
        sum += Number(parent.children[2].textContent);
        dFactor += Number(parent.children[3].textContent);
      }
      output.value = (`Bought furniture: ${products.join`, `}\nTotal price: ${sum}\nAverage decoration factor: ${(dFactor/checked.length).toFixed(2)}`)
    }
  }
}


/*
<tbody>
<tr>
<td>
    <img
        src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg">
</td>
<td>
    <p>Office chair</p>
</td>
<td>
    <p>160</p>
</td>
<td>
    <p>0.5</p>
</td>
<td>
    <input type="checkbox" disabled />
</td>
</tr>
</tbody>
*/