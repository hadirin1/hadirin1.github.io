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
  let code = "ROM-" + Math.random().toString(36).substring(2,6).toUpperCase();

  let romData = JSON.parse(localStorage.getItem("romMapping")) || {};

  romData[admin.username] = {
    code: code,
    createdAt: new Date().getTime() // waktu dibuat
  };

  localStorage.setItem("romMapping", JSON.stringify(romData));

  document.getElementById("romCode").innerText = "Kode ROM: " + code + " (24 Jam)";
}
function hapusRomExpired(){
  let romData = JSON.parse(localStorage.getItem("romMapping")) || {};
  let sekarang = new Date().getTime();
  let batas = 24 * 60 * 60 * 1000;

  for(let admin in romData){
    if(sekarang - romData[admin].createdAt > batas){
      delete romData[admin];
    }
  }

  localStorage.setItem("romMapping", JSON.stringify(romData));
}

// jalankan otomatis saat buka dashboard
hapusRomExpired();