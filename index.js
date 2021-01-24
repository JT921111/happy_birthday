function start(){
  document.getElementById('start').style.visibility = "hidden";
  document.getElementById('bg').style.backgroundImage = "url(party.png)";
  document.getElementById('bg').style.backgroundSize = "100%";
  document.getElementById('birth').style.visibility = "visible";
  document.getElementById('11').style.visibility = "visible";
  document.getElementById('12').style.visibility = "visible";
  document.getElementById('13').style.visibility = "visible";
  document.getElementById('14').style.visibility = "visible";
  document.getElementById('21').style.visibility = "visible";
  document.getElementById('22').style.visibility = "visible";
  document.getElementById('23').style.visibility = "visible";
  document.getElementById('24').style.visibility = "visible";
  document.getElementById('25').style.visibility = "visible";
  document.getElementById('11').style.left = "20%";
  document.getElementById('12').style.left = "40%";
  document.getElementById('13').style.left = "60%";
  document.getElementById('14').style.left = "80%";
  document.getElementById('21').style.left = "7%";
  document.getElementById('22').style.left = "33%";
  document.getElementById('23').style.left = "50%";
  document.getElementById('24').style.left = "77%";
  document.getElementById('25').style.left = "93%";
  var i = 0;
  setInterval(function(){
    document.getElementById('11').style.top = (i + 15) % 100 + "vh";
    document.getElementById('12').style.top = (i + 40) % 100 + "vh";
    document.getElementById('13').style.top = (i + 3) % 100 + "vh";
    document.getElementById('14').style.top = (i + 55) % 100 + "vh";
    document.getElementById('21').style.top = (i + 30) % 100 + "vh";
    document.getElementById('22').style.top = (i + 5) % 100 + "vh";
    document.getElementById('23').style.top = (i + 60) % 100 + "vh";
    document.getElementById('24').style.top = (i + 0) % 100 + "vh";
    document.getElementById('25').style.top = (i + 20) % 100 + "vh";
    i += 1;
    if(i > 100){
      i = 0;
    }
  },100)
}