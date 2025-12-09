window.onload = loadRekap;

function loadRekap(){
  let table = document.getElementById("rekapAbsen");
  let data = JSON.parse(localStorage.getItem("absenData")) || [];

  table.innerHTML = `
    <tr>
      <th>No</th>
      <th>Username</th>
      <th>Kode ROM</th>
      <th>Waktu</th>
    </tr>
  `;

  if(data.length === 0){
    table.innerHTML += `
      <tr>
        <td colspan="4" style="text-align:center;">BELUM ADA ABSEN</td>
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
        <td>${item.waktu || "-"}</td>
      </tr>
    `;
  });
}
function hapusRekapAbsen(){

  let user = JSON.parse(localStorage.getItem("loginUser"));
  if(!user || user.role !== "admin"){
    alert("Hanya admin yang bisa menghapus data!");
    return;
  }
  let konfirmasi = confirm("Yakin mau hapus semua data absen?");
  if(!konfirmasi) return;

  localStorage.removeItem("absenData");
  alert("Semua data absen berhasil dihapus ✅");
  loadRekap();
}
