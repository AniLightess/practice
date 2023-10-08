const skill_tree_item = document.querySelectorAll(".talent_tree_item");
let skill_point = 1;

const onSkill_tree_item_click_style = (event) => {
	let target = event.currentTarget;
	if (skill_point > 0) {
		target.classList.add("active_shadow_border");
		skill_point--;
	}
};

skill_tree_item.forEach((item) => {
	item.addEventListener("click", onSkill_tree_item_click_style);
});
