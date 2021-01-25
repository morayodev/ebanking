const topUpBtn = document.getElementById("topUpBtn"),
  airtimeBtn = document.getElementById("airtimeBtn"),
  topup = document.getElementById("topup"),
  airtime = document.getElementById("airtime");





topUpBtn.addEventListener("click", openAirtime);
function openAirtime() {
  airtime.style.display = "none";
  topUpBtn.classList.add("active-contact")
  airtimeBtn.classList.remove("active-contact")
  topup.style.display = "block";
}


airtimeBtn.addEventListener("click", openTopup);
function openTopup() {
  airtime.style.display = "block";
  topup.style.display = "none";
  airtimeBtn.classList.add("active-contact")
  topUpBtn.classList.remove("active-contact")
}
