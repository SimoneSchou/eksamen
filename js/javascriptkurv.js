/*nu kommer js for kurv*/

const getKurvBtnElement = document.getElementById("getKurv");


getKurvBtnElement.addEventListener("click", getKurv);



function getKurv() {
    fetch('json/kurvdata.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (index) {
                output += `
              <ul class="list-group mb-3">

                <li class="list-group-item"><img src="${index.path}" alt="car"/></li>
                <li class="list-group-item"><span>Produkt:</span> ${index.Produkt}</li>
                <li class="list-group-item"><span>Pris:</span> ${index.Pris}</li>
               
              </ul>
            `;
            })
            document.getElementById("output").innerHTML = output;
        })
}
