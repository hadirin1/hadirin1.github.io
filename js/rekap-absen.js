window.onload=function(){
  let admin = JSON.parse(localStorage.getItem("loginUser"));
  let roms = JSON.parse(localStorage.getItem("romMapping")) || {};
  let rom = roms[admin.username];

  let data = JSON.parse(localStorage.getItem("absenData")) || [];
  let html="";

  data.filter(d=>d.rom===rom).forEach(d=>{
    html+=`
      <div class="card">
        <b>${d.username}</b><br>
        ${d.waktu}<br>
        ROM: ${d.rom}
      </div>
    `;
  });
  document.getElementById("list").innerHTML=html||"Belum ada data";
}