function init(){
  var button = document.getElementById('entrybutton');

  function handleButtonClick(){
    var inputValue = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = inputValue.value;
    alert("Arina Ovcharenko: " + inputValue.value);
  }

  button.addEventListener('click', handleButtonClick);
  }
  
window.addEventListener('load', init);