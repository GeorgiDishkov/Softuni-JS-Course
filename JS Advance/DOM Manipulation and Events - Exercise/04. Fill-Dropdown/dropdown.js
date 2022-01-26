function addItem() {
    const text = document.getElementById(`newItemText`).value;
    const value = document.getElementById(`newItemValue`).value;
    const content = document.getElementById(`menu`);

    if(text != `` && value != ``) {
        const options = document.createElement('option');
        options.value = value;
        options.textContent = text;
    
        content.appendChild(options);
    
        document.getElementById(`newItemText`).value = ``;
        document.getElementById(`newItemValue`).value = ``;
    }
}