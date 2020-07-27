(function (){
    var matches = 0;
    var images = [];
    var flippedCards = [];

    for (var i = 0; i<12; i++) {
        var img = {
            src: "img/"+ i +".png",
            id: i % 6
        };
        images.push(img);
    }
    startGame();

    function startGame(){
        flippedCards = [];
        images = randomSort(images);

        var frontFaces = document.getElementsByClassName("front");

        for (var i=0; i < 12; i++) {
            var card = document.querySelector("#card" + i);
            card.style.left = i % 6 === 0 ? 10 + "px" : i % 6 * 205 + 10 + "px";
            card.style.top = i < 6 ? 33 + "px" : 266 + "px";

            card.addEventListener("click",flipCard, false);

            frontFaces[i].style.background = "url('"+ images[i].src +"')";
            frontFaces[i].setAttribute("id",images[i].id);
        }
    }
    
    function randomSort(oldArray) {
        //console.log(Math.floor(Math.random()*11));
        //var arrTeste = ["banana","morango","maca"];
        //console.log(arrTeste.length);

        var newArray = [];

        while(newArray.length !== oldArray.length) {
            var i = Math.floor(Math.random()*oldArray.length);

            if(newArray.indexOf(oldArray[i]) < 0) {
                newArray.push(oldArray[i]);
            }
        }

        return newArray;
    }

    function flipCard(){
        if(flippedCards.length < 2) {
            var faces = this.getElementsByClassName("face");

            if(faces[0].classList.length > 2) {
                return;
            }
            
            faces[0].classList.toggle("flipped");
            faces[1].classList.toggle("flipped");

            flippedCards.push(this);

            if(flippedCards.length === 2){
                if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
                    flippedCards[0].childNodes[1].classList.toggle("match");
                    flippedCards[0].childNodes[3].classList.toggle("match");
                    flippedCards[1].childNodes[1].classList.toggle("match");
                    flippedCards[1].childNodes[3].classList.toggle("match");

                    //matchCardSign();

                    matches++;
                    flippedCards = [];
                    if (matches === 6) {
                        res.innerHTML = 'Quer jogar novamente?'
                    }
        
                }
            }
        } else {
            flippedCards[0].childNodes[1].classList.toggle("flipped");
            flippedCards[0].childNodes[3].classList.toggle("flipped");
            flippedCards[1].childNodes[1].classList.toggle("flipped");
            flippedCards[1].childNodes[3].classList.toggle("flipped");

            flippedCards = [];
        }
        
    }


}());