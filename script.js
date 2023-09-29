const skillTreeItem = document.querySelectorAll(".talentTreeItem");
let skillPoint = 2;

const checkSkillPoints = () => {
  if (skillPoint > 0) {
    skillTreeItem.forEach((item) => {
      item.addEventListener("click", onBlockClick);
    });
    skillPoint = skillPoint - 1;
  } else {
    console.log("Немає більше скілл-поінтів");
    skillTreeItem.forEach((item) => {
      item.removeEventListener("click", onBlockClick);
    });
  }
};

const onBlockClick = (event) => {
  let target = event.currentTarget;
  target.classList.add("activeShadowBorder");
  skillTreeItem.forEach((item) => {
    item.removeEventListener("click", onBlockClick);
  });
}

skillTreeItem.forEach((item) => {
  item.addEventListener("click", checkSkillPoints);
});
