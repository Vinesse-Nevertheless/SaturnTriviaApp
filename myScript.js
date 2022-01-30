
    //create play method for the confirmation sound
    function play()
    {
    var audio = new Audio('Saturn_sound.mp3');
    audio.play();
    }

    //Color buttons and fields and play confirmation sound according to whether the answer is correct or not
    function colorGreen(ans, pId)
        {
            ans.style.backgroundColor = '#74c798';
            document.getElementById(pId).innerHTML = "Correct!";
            play();
        }
    function colorRed(ans, pId)
        {
            ans.style.backgroundColor = '#EE9191';
            document.getElementById(pId).innerHTML = "Incorrect";
        }


//called by the form listener to check the user's response for correctness
    function checker1()
        {
            var response1 = document.querySelector('#check1');
            if(response1.value == "no" || response1.value == "NO" || response1.value == "No")
            {
                colorGreen(response1, "fill1");
            }
            else
            {
            colorRed(response1, "fill1");
            }
        }

    function checker2()
        {
         var response2 = document.querySelector('#check2');
            if(response2.value == 82 || response2.value == "eighty-two" || response2.value == "Eighty-two")
            {
                colorGreen(response2, "fill2");
            }
            else
            {
            colorRed(response2, "fill2");
            }
        }


//form listener for the clicking of onsubmit to submit free answer form
    function flisten()
        {
            document.querySelector('form').addEventListener('submit', checker1, checker2)
         }
    document.addEventListener('DOMContentLoaded', flisten);

//Get the button:
    mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
         } else {
       mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
