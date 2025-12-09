window.onload=function(){
  let admin = JSON.parse(localStorage.getItem("loginUser"));
  let roms = JSON.parse(localStorage.getItem("romMapping")) || {};
  let rom = roms[admin.username];

  let data = JSON.parse(localStorage.getItem("tugasData")) || [];
  let html="";

  data.filter(d=>d.rom===rom).forEach(d=>{
    html+=`
      <div class="card">
        <b>${d.username}</b><br>
        ${d.tugas}<br>
        ${d.waktu}<br>
        ROM: ${d.rom}
      </div>
    `;
  });

  document.getElementById("list"window.onload = loadTugas;

function loadTugas(){
  let table = document.getElementById("rekapTugas");
  let data = JSON.parse(localStorage.getItem("tugasData")) || [];

  table.innerHTML = `
    <tr>
      <th>No</th>
      <th>Username</th>
      <th>Kode ROM</th>
      <th>Tugas</th>
      <th>Waktu</th>
    </tr>
  `;

  if(data.length === 0){
    table.innerHTML += `
      <tr>
        <td colspan="5" style="text-align:center;">BELUM ADA TUGAS</td>
      </tr>
    `;
    return;
  }

  data.forEach(function(item, i){
    table.innerHTML += `
      <tr>
        <td>${i+1}</td>
        <td>${item.username || "-"}</td>
        <td>${item.rom || "-"}</td>
        <td>${item.tugas || "-"}</td>
        <td>${item.waktu || "-"}</td>
      </tr>
    `;
  });
}).innerHTML=html||"Belum ada data";
}