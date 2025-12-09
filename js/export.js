function exportAbsenCSV(){
  let admin = JSON.parse(localStorage.getItem("loginUser"));
  let romMap = JSON.parse(localStorage.getItem("romMapping")) || {};
  let rom = romMap[admin.username];

  let data = JSON.parse(localStorage.getItem("absenData")) || [];
  let rows = "Username,Waktu,ROM\n";

  data.filter(d=>d.rom===rom).forEach(d=>{
    rows += `${d.username},${d.waktu},${d.rom}\n`;
  });

  downloadCSV(rows,"rekap-absen.csv");
}

function exportTugasCSV(){
  let admin = JSON.parse(localStorage.getItem("loginUser"));
  let romMap = JSON.parse(localStorage.getItem("romMapping")) || {};
  let rom = romMap[admin.username];

  let data = JSON.parse(localStorage.getItem("tugasData")) || [];
  let rows = "Username,Tugas,Waktu,ROM\n";

  data.filter(d=>d.rom===rom).forEach(d=>{
    rows += `${d.username},${d.tugas},${d.waktu},${d.rom}\n`;
  });

  downloadCSV(rows,"rekap-tugas.csv");
}

function downloadCSV(data,filename){
  let blob = new Blob([data],{type:"text/csv"});
  let url = window.URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}