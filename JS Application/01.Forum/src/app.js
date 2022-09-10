import { takeInfo , } from './util.js'
import { submit , refresh } from './reqests.js'

refresh();
let formInfo = document.querySelector(`form`);
let container = document.querySelector(`.topic-container`);

formInfo.addEventListener(`submit`, (e) => {
    e.preventDefault();
    if (takeInfo(formInfo) !== undefined) {
        let [...info] = takeInfo(formInfo)
        if (e.submitter.className === `public`) {
            submit(...info);
            formInfo.reset();
        }
    } if (e.submitter.className === `cancel`) {
        formInfo.reset();
    }
})

container.addEventListener(`click` , (e) => {
    let currentTarget = e.currentTarget;
    let children = currentTarget.children;
    let secondChild = children[0];
    console.log(children[0].children);
})