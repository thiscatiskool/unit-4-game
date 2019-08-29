$(document).ready(function () {
    var randomNumber;
    var wins = 0
    var loses = 0
    var crystal1;
    var crystal2; 
    var crystal3;
    var crystal4; 
    var score = 0
    var buttonAdds = 0
    
    function getRandom() {
      var min = 30;
      var max = 50;
      return Math.floor(Math.random() * (max - min + 1)) + min;  
    };

    randomNumber = getRandom();

    $('#randomNumber').text(randomNumber);

    crystal1 = function gem1Number(min, max) {
        min = Math.ceil(1);
        max = Math.floor(9);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    $('#crystal1').val(crystal1)
    //console.log(crystal1)

    crystal2 = function gem2Number(min, max) {
        min = Math.ceil(1);
        max = Math.floor(9);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    $('#crystal2').val(crystal2)
    //console.log(crystal2)

    crystal3 = function gem3Number(min, max) {
        min = Math.ceil(1);
        max = Math.floor(9);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    $('#crystal3').val(crystal3)
    //console.log(crystal3)

    crystal4 = function gem4Number(min, max) {
        min = Math.ceil(1);
        max = Math.floor(9);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    $('#crystal4').val(crystal4)
    //console.log(crystal4)
    

      $( "button" ).on( "click", function() {
          //use (this) you call the function itself.  if you dont use (this) then it will only take the value of the first button

          //also the value of the button is currently in a string format so we have to turn it into an integer for the math properties to work properly.  so we parseInt the entire function value
        buttonAdds += parseInt($(this).val())
        //here we are just taking the value of the integer we have above and showing just the text format. 
        $('#randomNumberSum').text(buttonAdds);

        gameOver();
        //alert( $( this ).val() );
        //alert(buttonAdds)
        

        
      })

      $('#score').text("Your total score is: " + score)


    $('#wins').text('Wins: ' + wins);
    $('#loses').text('Loses: ' + loses);


    function gameOver(){  
        if (buttonAdds === randomNumber){
            alert('You Win'),
            wins++;
            // update the page to display new wins
            // reset a bunch of variables  to 0, generate new random numbers (crystal/total)
        } else if (buttonAdds > randomNumber){
            alert('You lose'),
            loses++;
            // update the page to display new losses
            // reset a bunch of variables  to 0, generate new random numbers (crystal/total)
        }
    
    }
    })

