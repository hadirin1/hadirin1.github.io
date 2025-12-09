window.onload=function(){
  let user = JSON.parse(localStorage.getItem("loginUser"));
  document.getElementById("nama").innerText = user.username;
  document.getElementById("role").innerText = user.role;

  // tampilkan ROM kalau admin
  let roms = JSON.parse(localStorage.getItem("romMapping")) || {};
  if(user.role==="admin"){
    document.getElementById("rom").innerText = roms[user.username] || "Belum dibuat";
  }
}