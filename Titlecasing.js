var string =prompt("Enter sentence");
var stringtocapital = string.toLowerCase().split(" ");
      for(var i = 0; i< stringtocapital.length; i++){
         sentence[i] = stringtocapital[i][0].toUpperCase() + stringtocapital[i].slice(1);
      }
   console.log(stringtocapital.join(" "));

// >> "Guvi task one"
// << "Guvi Task One"
