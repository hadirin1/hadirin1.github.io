function kirimAbsen(){
  let user = JSON.parse(localStorage.getItem("loginUser"));
  let romInput = document.getElementById("rom").value.trim();

  let romData = JSON.parse(localStorage.getItem("romMapping")) || {};

  let cocok = false;
  let waktuBuat = 0;

  // Cari apakah kode cocok
  for(let admin in romData){
    if(romData[admin].code === romInput){
      cocok = true;
      waktuBuat = romData[admin].createdAt;
      break;
    }
  }

  if(!cocok){
    alert("Kode ROM tidak valid!");
    return;
  }

  // Cek expired 24 jam
  let sekarang = new Date().getTime();
  let batas = 24 * 60 * 60 * 1000;

  if(sekarang - waktuBuat > batas){
    alert("Kode ROM sudah kadaluarsa!");
    return;
  }

  // Simpan absen
  let data = JSON.parse(localStorage.getItem("absenData")) || [];
  data.push({
    username: user.username,
    rom: romInput,
    waktu: new Date().toLocaleString()
  });

  localStorage.setItem("absenData", JSON.stringify(data));
  alert("Absen berhasil ✅");
}