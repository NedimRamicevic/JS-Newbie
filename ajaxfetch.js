document.getElementById("1").addEventListener("click", retriveData);

function retriveData() {
  console.log("naber");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.onload = function () {
    console.log("buradayıms");
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };
  xhr.send();
}

document.getElementById("2").addEventListener("click", loadUser);

function loadUser() {
  console.log("naber");
  const xhr1 = new XMLHttpRequest();
  xhr1.open("GET", "data.json", true);
  console.log(xhr1.readyState);
  xhr1.onload = function () {
    console.log(xhr1.readyState);
    if (this.status === 200) {
      console.log(this.responseText);
      const user = JSON.parse(xhr1.responseText);
      const output = `<ul class="collection">
        <li class="collection-item avatar">
          <img src="${user.avatar}" alt="" class="circle">
          <span class="title">Title</span>
          <p>${user.first_name}<br>
             ${user.last_name}
          </p>
          <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
        </ul>`;
      document.querySelector(".naber").innerHTML = output;
      document.querySelector(".naber").
    }
  };
  xhr1.send();
}
