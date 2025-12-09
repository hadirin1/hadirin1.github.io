function kirimAbsen(){
  let user = JSON.parse(localStorage.getItem("loginUser"));
  let romInput = document.getElementById("rom").value;

  let roms = JSON.parse(localStorage.getItem("romMapping")) || {};
  let validRom = Object.values(roms);

  if(!validRom.includes(romInput)){
    alert("Kode ROM salah!");
    return;
  }

  let data = JSON.parse(localStorage.getItem("absenData")) || [];
  data.push({
    username:user.username,
    rom:romInput,
    waktu:new Date().toLocaleString()
  });

  localStorage.setItem("absenData",JSON.stringify(data));
  alert("Absen berhasil");
}