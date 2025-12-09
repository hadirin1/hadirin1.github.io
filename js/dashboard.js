function toggleNav(){
  var nav = document.getElementById("sidebar");

  if(nav.classList.contains("show")){
    nav.classList.remove("show");
  }else{
    nav.classList.add("show");
  }
}

function logout(){
  localStorage.removeItem("loginUser");
  window.location.href = "index.html";
}

function generateROM(){
  var admin = JSON.parse(localStorage.getItem("loginUser"));
  var code = "ROM-" + Math.floor(Math.random()*9000+1000);

  var roms = JSON.parse(localStorage.getItem("romMapping")) || {};
  roms[admin.username] = code;
  localStorage.setItem("romMapping", JSON.stringify(roms));

  document.getElementById("romCode").innerText = "Kode ROM: " + code;
}