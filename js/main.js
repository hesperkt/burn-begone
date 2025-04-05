document.querySelector("button").addEventListener("click", checkUVI)

function checkUVI() {
    let latitude = document.querySelector(".latitude").value
    let longitude = document.querySelector(".longitude").value
    const url = `https://currentuvindex.com/api/v1/uvi?latitude=${latitude}&longitude=${longitude}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("h2 span").innerText = data.now.uvi
        })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

let acc = document.getElementsByClassName("accordion")

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  })
} 