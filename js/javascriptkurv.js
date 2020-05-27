/*nu kommer js for kurv*/

const getKurvBtnElement = document.getElementById("getKurv");
/*her får vi vores knap til at lytte når der trykkes på button/ getkurv*/
getKurvBtnElement.addEventListener("click", getKurv);


/* referer vores json fil med javascriptet via vores function */
function getKurv() {
    fetch('json/kurvdata.json')
        .then((res) => res.json())
    
    /*hvor vores data kommer fra*/
        .then((data) => {
            let output = '';
        
        /* her bliver der refereret til data med vores class i html filen hvor filerne der efter arbejder sammen */
            data.forEach(function (index) {
                output += `
              <ul class="list-group mb-3">

                <li class="list-group-item"><img src="${index.path}" alt="car"/></li>
                <li class="list-group-item"><span>Produkt:</span> ${index.Produkt}</li>
                <li class="list-group-item"><span>Pris:</span> ${index.Pris}</li>
               
              </ul>
            `;
            })
        /*her bruger vi output til at indsætte indholdet i vores html */
            document.getElementById("output").innerHTML = output;
        })
}
