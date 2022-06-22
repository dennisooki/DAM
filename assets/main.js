

 function welcome(){
if (document.getElementById('textInput').value=="")
{
  alert("No name entered!");
}
else {
document.getElementById('futureWelcome').innerHTML='Hello '+document.getElementById('textInput').value+ ',welcome to the bootcamp';

}     

  }
