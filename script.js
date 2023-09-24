let blockItems = document.querySelectorAll(".talentTreeItem");

let changeShadow = (event) => {
  let target = event.currentTarget;
  target.style.boxShadow = "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px";
  
}

blockItems.forEach((item) => {
  item.addEventListener("click", changeShadow)
});