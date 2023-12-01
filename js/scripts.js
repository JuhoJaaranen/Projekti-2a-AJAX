//buttoniin tuleva funktio, johon sisältyy molemmat pyyntöjä tekevät funktiot
function getCats(){
  getCatImage();
  getCatFact();
}

//funktio joka hakee kissakuvan, ja lisää sen sivustolle
function getCatImage(){
  var xhr = new XMLHttpRequest();
  
  //funktio jatkuu XMLHttpRequestin tilan muutoksesta
    xhr.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        
        //tarkistetaan onko pyynnön tila ja status DONE ja OK
      console.log(this.responseText);
      var data = JSON.parse(this.responseText);
      var imageUrl = data[0].url;

      //liitetään saatu kuva kissa-elementtiin
      document.getElementById("kissa").src = imageUrl;


  }
  };
//kerrotaan mitä pyynnöllä halutaan tehdä, eli saada dataa kyseisestä linkistä
  xhr.open("GET","https://api.thecatapi.com/v1/images/search", true);
  xhr.send();
  }

//funktio joka hakee kissafaktan, ja lisää sen kuvan alle
function getCatFact(){
  var xhr1 = new XMLHttpRequest();
  
  //funktio jatkuu XMLHttpRequestin tilan muutoksesta
  xhr1.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
     
      //tarkistetaan onko pyynnön tila ja status DONE ja OK
    console.log(this.responseText);
    var factdata = JSON.parse(this.responseText);
    var fakta = factdata;

    //liitetään saatu teksti fakta-elementtiin
    document.getElementById("fakta").innerHTML = fakta.fact;
     }
  };
  
//kerrotaan mitä pyynnöllä halutaan tehdä, eli saada dataa kyseisestä linkistä
  xhr1.open("GET","https://catfact.ninja/fact", true);
  xhr1.send();
 }



