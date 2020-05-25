

//https://www.youtube.com/watch?v=eg4e-FObyJ8 - video til en kontaktform //
console.log('Filen virker');

$(document).ready(function() {
  $('.submit').click(function (event){
      event.preventDefault()
      console.log('clicked button')
      
      var fullname = $('.fullname').val()
      var email = $('.email').val()
      var subject = $('.subject').val()
      var message = $('.message').val()
      var statusElm = $('.status')
      statusElm.empty()
      
      
      
      
      if(fullname.length >4) {
         statusElm.append('<div>Fuldenavn virker</div>')  
      } else {
          statusElm.append('<div>Der er fejl i fuldenavn</div>')
      }
      
      
      if(email.length > 5 && email.includes('@') && email.includes('.')){
          statusElm.append('<div>Email virker</div>')
      } else {
          statusElm.append('<div>Der er fejl i mailen</div>')
      }
      
      
      
      if(subject.length >=8) {
         statusElm.append('<div>Tlf virker</div>')  
      } else {
          statusElm.append('<div>Der er fejl i tfl feltet</div>')
      }
      
      
      
        if(message.length >=10) {
         statusElm.append('<div>Besked virker</div>')  
      } else {
          statusElm.append('<div>Der er fejl i beskedfeltet</div>')
      }
      
      
  })  
})







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
