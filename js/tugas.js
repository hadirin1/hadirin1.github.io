function kirimTugas(){
  let user = JSON.parse(localStorage.getItem("loginUser"));
  let romInput = document.getElementById("rom").value.trim();
  let tugas = document.getElementById("tugas").value.trim();

  if(!romInput || !tugas){
    alert("Isi kode ROM dan tugas!");
    return;
  }

  let romData = JSON.parse(localStorage.getItem("romMapping"));
  if(!romData){
    alert("Belum ada kode ROM dari admin");
    return;
  }

  let cocok = false;

  for(let admin in romData){
    if(romData[admin].code === romInput){
      cocok = true;
      break;
    }
  }

  if(!cocok){
    alert("Kode ROM salah!");
    return;
  }

  let data = JSON.parse(localStorage.getItem("tugasData")) || [];
  data.push({
    username: user.username,
    rom: romInput,
    tugas: tugas,
    waktu: new Date().toLocaleString()
  });

  localStorage.setItem("tugasData", JSON.stringify(data));
  alert("Tugas berhasil dikirim ✅");
}