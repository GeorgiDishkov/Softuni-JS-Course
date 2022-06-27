window.addEventListener(`load`, solve)

function solve() {

  const make = document.querySelector(`#make`);
  const model = document.querySelector(`#model`);
  const year = document.querySelector(`#year`);
  const fuel = document.querySelector(`#fuel`);
  const originCost = document.querySelector(`#original-cost`);
  const sellingCost = document.querySelector(`#selling-price`);
  const publishContainer = document.querySelector(`#table-body`)
  const sellContainer = document.querySelector(`#cars-list`);
  const profit = document.querySelector(`#profit`);

  console.log(profit.textContent);

  const subBtn = document.querySelector(`div`);

  subBtn.addEventListener(`click`, publish)
  function publish(e) {
    e.preventDefault();


    if (e.target.tagName == `BUTTON`) {
      if (e.target.textContent == `Publish`) {

        let currentMake = make.value;
        let currentModel = model.value;
        let currentyear = year.value;
        let currentFuel = fuel.value;
        let currentOrgCost = originCost.value;
        let currentSellCost = sellingCost.value;

        if (currentMake !== `` && currentModel !== `` && currentyear !== `` && currentFuel !== `` && currentOrgCost !== `` && currentSellCost !== ``) {

          currentOrgCost = Number(currentOrgCost);
          currentSellCost = Number(currentSellCost);

          if (currentOrgCost < currentSellCost) {



            let data = [];
            data.push(currentMake, currentModel, currentyear, currentFuel, currentOrgCost, currentSellCost);

            root(data);
            make.value = ``;
            model.value = ``;
            originCost.value = ``;
            sellingCost.value = ``;
            year.value = ``;
            fuel.value = ``;

          }
        }
      } else if (e.target.textContent == `Edit`) {

        onEdit();
      } else if (e.target.textContent == `Sell`) {

        onSell();
      }
      {

      }


      function root(data) {

        let tr = document.createElement(`tr`);
        tr.classList = `row`;

        for (const row of data) {
          let td = document.createElement(`td`);
          td.textContent = row
          tr.appendChild(td);
        }

        let td = document.createElement(`td`);
        let editBtn = document.createElement(`button`);
        editBtn.textContent = `Edit`;
        editBtn.classList = `action-btn edit`;
        td.appendChild(editBtn);
        let sellBtn = document.createElement(`button`);
        sellBtn.textContent = `Sell`;
        sellBtn.classList = `action-btn sell`;
        td.appendChild(sellBtn)

        tr.appendChild(td);
        publishContainer.appendChild(tr)
      }
    }

    function onEdit() {
      let row = e.target.parentNode.parentNode;


      make.value = row.children[0].textContent;
      model.value = row.children[1].textContent;
      year.value = row.children[2].textContent;
      fuel.value = row.children[3].textContent.toLowerCase();
      originCost.value = row.children[4].textContent;
      sellingCost.value = row.children[5].textContent;

      row.remove()
    }

    function onSell() {

      let row = e.target.parentNode.parentNode;


      let make = row.children[0].textContent;
      let model = row.children[1].textContent;
      let year = row.children[2].textContent;
      let fuel = row.children[3].textContent.toLowerCase();
      let originCost = Number(row.children[4].textContent);
      let sellingCost = Number(row.children[5].textContent);

      row.remove()

      let li = document.createElement(`li`);
      li.classList = `each-list`;
      let makeAndModel = document.createElement(`span`);
      makeAndModel.textContent = `${make} ${model}`;
      let newYear = document.createElement(`span`);
      newYear.textContent = year
      let sellPrice = document.createElement(`span`);
      sellPrice.textContent = sellingCost-originCost;

      li.appendChild(makeAndModel)
      li.appendChild(newYear)
      li.appendChild(sellPrice)

      sellContainer.appendChild(li);

      let price = profit.textContent;
      price = Number(price);
      price += Number(sellPrice.textContent);


      profit.textContent = price.toFixed(2);
    }
  }
}