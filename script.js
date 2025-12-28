function startTimer(button, link){
  let timeLeft = 15;
  let text = button.nextElementSibling;

  button.disabled = true;
  button.innerText = "⏳ Please wait...";
  text.innerText = "Wait " + timeLeft + " sec";

  let timer = setInterval(function(){
    timeLeft--;
    text.innerText = "Wait " + timeLeft + " sec";

    if(timeLeft <= 0){
      clearInterval(timer);
      button.disabled = false;
      button.classList.add("active");
      button.innerText = "✅ Continue";
      text.innerText = "You can continue now";

      button.onclick = function(){
        window.open(link, "_blank");
      };
    }
  },1000);
}
