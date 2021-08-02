document.getElementById('1').addEventListener("click", retriveData);

function retriveData() {
    console.log("naber")
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.txt', true);
  xhr.onload = function () {
      console.log("buradayıms")
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };
  xhr.send()
}
