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
  let admin = JSON.parse(localStorage.getItem("loginUser"));
  if(!admin){
    alert("Silakan login sebagai admin dulu");
    return;
  }

  // ROM angka 5 digit
  let code = Math.floor(10000 + Math.random() * 90000).toString();

  let romData = JSON.parse(localStorage.getItem("romMapping")) || {};

  romData[admin.username] = {
    code: code,
    createdAt: Date.now()
  };

  localStorage.setItem("romMapping", JSON.stringify(romData));
  document.getElementById("romCode").innerText = "Kode ROM: " + code;
}