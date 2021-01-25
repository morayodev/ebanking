const groupBtn = document.getElementById("groupBtn"),
  contactBtn = document.getElementById("contactBtn"),
  contact = document.getElementById("contactDiv"),
  group = document.getElementById("group"),
  addBtn = document.getElementById("addBtn");





groupBtn.addEventListener("click", openGroup);
function openGroup() {
  group.style.display = "block";
  groupBtn.classList.add("active-contact")
  contactBtn.classList.remove("active-contact")
  contact.style.display = "none";
  addBtn.style.display = "none";
}


contactBtn.addEventListener("click", openContact);
function openContact() {
  group.style.display = "none";
  contact.style.display = "block";
  contactBtn.classList.add("active-contact")
  groupBtn.classList.remove("active-contact")
  addBtn.style.display = "block";
}
