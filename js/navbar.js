
let navBarItems = document.getElementsByClassName("navBarItems");
for (const item of navBarItems) {
  item.onclick = function(){
    for(const forClass of navBarItems){
      forClass.classList.add("oniDrugi");
    }
    item.classList.remove("oniDrugi");
  }
}