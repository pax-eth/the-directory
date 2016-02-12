

<!-- Client is a JSON object that includes status -->

var out = function() {
    document.getElementById('out')
  }

if client.status <= 0.5 {
  template. 

}

var el;
function charCount() {
  var textEntered, charDisplay, counter;
  textEntered = document.getElementById('broadcast').value;
  charDisplay = document.getElementById('charactersLeft');
  counter = (512 - (textEntered.length));
  charDisplay.textContent = counter;
}

/*Add if statement to charCount, so that a class is added to broadcasts in the case of overrun.*/

el = document.getElementById('broadcast');
el.addEventListener('keypress', charCount, false);
