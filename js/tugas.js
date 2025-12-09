function kirimTugas(){
  let user = JSON.parse(localStorage.getItem("loginUser"));
  let romInput = document.getElementById("rom").value;
  let tugas = document.getElementById("tugas").value;

  let roms = JSON.parse(localStorage.getItem("romMapping")) || {};
  let validRom = Object.values(roms);

  if(!validRom.includes(romInput)){
    alert("Kode ROM salah!");
    return;
  }

  let data = JSON.parse(localStorage.getItem("tugasData")) || [];
  data.push({
    username:user.username,
    rom:romInput,
    tugas:tugas,
    waktu:new Date().toLocaleString()
  });

  localStorage.setItem("tugasData",JSON.stringify(data));
  alert("Tugas terkirim");
}