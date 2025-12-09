function kirimAbsen(){
  let user = JSON.parse(localStorage.getItem("loginUser"));
  let romInput = document.getElementById("rom").value.trim();

  if(!romInput){
    alert("Masukkan kode ROM!");
    return;
  }

  let romData = JSON.parse(localStorage.getItem("romMapping"));
  if(!romData){
    alert("Kode ROM belum dibuat admin!");
    return;
  }

  let cocok = false;
  let waktuBuat = 0;

  for(let admin in romData){
    if(romData[admin].code === romInput){
      cocok = true;
      waktuBuat = romData[admin].createdAt;
      break;
    }
  }

  if(!cocok){
    alert("Kode ROM salah!");
    return;
  }

  // cek kadaluarsa 24 jam
  let now = Date.now();
  let limit = 24 * 60 * 60 * 1000;

  if(now - waktuBuat > limit){
    alert("Kode ROM sudah kadaluarsa!");
    return;
  }

  let data = JSON.parse(localStorage.getItem("absenData")) || [];
  data.push({
    username: user.username,
    rom: romInput,
    waktu: new Date().toLocaleString()
  });

  localStorage.setItem("absenData", JSON.stringify(data));
  alert("Absen berhasil ✅");
}