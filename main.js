let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete item
itemList.addEventListener('click', removeItem);
// filtter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById('item').value;

    // creating new li element
    let li = document.createElement("li");

    // adding class to li element
    li.className = "list-group-item";

    // adding text to node with input value
    li.appendChild(document.createTextNode(newItem));

    //displaying on the web
    itemList.appendChild(li);

    //creating button
    let delBtn = document.createElement('button');

    //adding classess to btn
    delBtn.className = 'btn btn-danger btn-sm float-right delete';

    // adding text node
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    let text = e.target.value.toLowerCase();
    // rabing all the lis
    let items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function (items) {
        let itemName = items.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1) {
            items.style.display = 'block';
        }else{
            items.style.display = 'none';
        }
    });
}