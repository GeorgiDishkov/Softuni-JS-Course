window.addEventListener("load", solve)

function solve() {
  const publishBtn = document.querySelector(`#publish-btn`);
  const clearBtn = document.querySelector(`#clear-btn`);
  const luContent = document.querySelector(`#review-list`);
  const publishList = document.querySelector(`#published-list`);

  publishBtn.addEventListener(`click`, onPublish);
  clearBtn.addEventListener(`click`, onClear);
  luContent.addEventListener(`click`, onContent);


  function onPublish() {
    //take info
    const title = document.querySelector(`#post-title`);
    const category = document.querySelector(`#post-category`);
    const content = document.querySelector(`#post-content`);
    // check for empty content
    if (title.value, category.value, content.value) {
      createList(title.value, category.value, content.value);

      //clear inputs
      title.value = ``;
      category.value = ``;
      content.value = ``;
    }
  }
  function onClear() {
    let allPublish = Array.from(publishList.children)
    allPublish.forEach(e => e.remove());
  }

  function onContent(e) {
    if (e.target.tagName == `BUTTON`) {
      if (e.target.textContent == `Edit`) {
        let currentLi = e.target.parentNode
        let currentContent = currentLi.children[0].children;
        let title = currentContent[0].textContent;
        let category = currentContent[1].textContent.split(`Category: `)[1];
        let content = currentContent[2].textContent.split(`Content: `)[1];

        document.querySelector(`#post-title`).value = title;
        document.querySelector(`#post-category`).value = category;
        document.querySelector(`#post-content`).value = content;

        currentLi.remove();
      } else if (e.target.textContent == `Approve`) {
        let currentLi = e.target.parentNode;
        move(currentLi)
      }
    }

  }

  function move(element) {
    let elemetns = Array.from(element.children);
    elemetns.forEach(e => {
      if (e.tagName == `BUTTON`) {
        e.remove();
      }
    });
    publishList.appendChild(element);
  }
  //create list itam
  function createList(title, category, content) {
    let liEl = document.createElement(`li`);
    liEl.classList = `rpost`;

    let article = document.createElement(`article`);

    let header = document.createElement(`h4`);
    header.textContent = title;
    article.appendChild(header);

    let categoryP = document.createElement(`p`);
    categoryP.textContent = `Category: ${category}`;
    article.appendChild(categoryP);

    let categoryC = document.createElement(`p`);
    categoryC.textContent = `Content: ${content}`;
    article.appendChild(categoryC);
    liEl.appendChild(article);

    let approveBtn = document.createElement(`button`);
    approveBtn.textContent = `Approve`;
    approveBtn.classList = `action-btn approve`;
    liEl.appendChild(approveBtn);

    let editBtn = document.createElement(`button`);
    editBtn.textContent = `Edit`;
    editBtn.classList = `action-btn edit`;
    liEl.appendChild(editBtn);
    luContent.appendChild(liEl);
  }
}
