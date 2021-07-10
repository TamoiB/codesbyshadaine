var add = document.getElementById('addInput');
var newItem = document.getElementById('doInput');
var clear = document.getElementById('clear');
var list= document.getElementById('list');
var listers = document.querySelector('#list')
listItem = document.getElementsByTagName('li');
var todo;  
//Adding To do task
add.addEventListener('click', addItemToList)
newItem.addEventListener('keydown', function (e) {
  if (e.code === "Enter") {
    addItemToList();
  }
})
function addItemToList() {
  if (newItem.value != ''){
    todo = '<li>' + newItem.value + '</li>';
    list.innerHTML += todo;
  save();
newItem.value = ' '
}else{
  return
}
}
//Removing to do task
listers.addEventListener('click', (e) => {
  var h = e.target;
  if (h.classList.contains('checked')) {
    h.parentNode.removeChild(h)
    save();
  } else {
    h.classList.add('checked')
    save()
  }
}, false)
//Clear All
clear.addEventListener('click', () => {
  list.innerHTML = ' '
  save()
})
//Saving todo
 function save () { 
  window.localStorage.myitems = list.innerHTML;
  }

//Restore List 
function restore() {
    if (window.localStorage !== null) {
      list.innerHTML = window.localStorage.myitems; 
    }
}
restore();