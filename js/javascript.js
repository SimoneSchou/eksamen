
/* https://www.youtube.com/watch?v=eg4e-FObyJ8 - video til en kontaktform */


// Udskreves i consolen for at se om javascriptet virker*/
console.log('Filen virker');


// Her lytter vores javascript på vores knap/input

$(document).ready(function() {
  $('.submit').click(function (event){
      event.preventDefault();
      console.log('clicked button');
      
/*event.preventdefault forhindre at der sker en default action med vores knap, så den ikke sender en formular */
      
      
 //de forskellige values af vores kontaktform
      var fullname = $('.fullname').val();
      var email = $('.email').val();
      var subject = $('.subject').val();
      var message = $('.message').val();
      
      /*udskriver vores user hvad der er galt, samt starter på ny med statusElm.empty*/
      var statusElm = $('.status');
      statusElm.empty();
      
      
      /*i disse 4 afsnit af kode vil koden slå ud hvad der er fejl eller rigtigt når man skriver i kontaktformens felter */
      if(fullname.length >4) {
         statusElm.append('<div>Fulde navn virker</div>');  
      } else {
          statusElm.append('<div>Der er fejl i fulde navn</div>');
      }
      
      // Der skal være et '@' og '.' i email feltet
      if(email.length > 5 && email.includes('@') && email.includes('.')){
          statusElm.append('<div>Email virker</div>');
          /*append betyder at vi kan tilføje javascript til vores html*/
      } else {
          statusElm.append('<div>Der er fejl i mailen</div>');
      }
      
      
      // længden skal være mere eller i lige med 8
      if(subject.length >=8) {
         statusElm.append('<div>Tlf virker</div>'); 
      } else {
          statusElm.append('<div>Der er fejl i tfl feltet</div>');
      }
      
      
    //besked skal være mere eller i lig med 10
        if(message.length >=10) {
         statusElm.append('<div>Besked virker</div>'); 
      } else {
          statusElm.append('<div>Der er fejl i beskedfeltet</div>');
      }
      
      
  })  
}) 
// kontaktform er slut


