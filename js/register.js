function registerAccount(){
  let role = document.getElementById("role").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({role,username,password});
  localStorage.setItem("users",JSON.stringify(users));

  alert("Akun berhasil dibuat");
  window.location.href="index.html";
}