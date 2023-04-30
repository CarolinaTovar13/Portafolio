let cardsInfo = [
    {
        "img":"https://static.vecteezy.com/system/resources/thumbnails/022/424/590/small_2x/java-logo-editorial-free-vector.jpg",
        "info":"Java"
    },

    {
        "img":"https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png",
        "info":"JavaScript"
    },
    {
        "img":"https://static.vecteezy.com/system/resources/thumbnails/015/426/347/small_2x/html-icon-html-file-format-extension-line-icon-free-vector.jpg",
        "info":"HTML"
    },
    {
        "img":"https://static.vecteezy.com/system/resources/thumbnails/015/814/137/small_2x/css-file-icon-design-free-vector.jpg",
        "info":"CSS"
    },
    {
        "img":"https://media.trustradius.com/product-logos/AO/aB/ELNHUV66020H.PNG",
        "info":"Spring y Spring boot"
    },
    {
        "img":"https://repository-images.githubusercontent.com/359227289/ef3db800-a415-11eb-9f73-5c2615ca7174",
        "info":"Git y GituHub"
    },
    {
        "img":"https://img.freepik.com/vector-gratis/ilustracion-devops-diseno-plano_23-2149364438.jpg?w=2000",
        "info":"Bootstrao, Trello, Figma, Scrum,"
    }

]

let softSkills = [
    
    {
        "img":"https://img.freepik.com/free-vector/creative-thinking-original-suggestion-non-standard-decision-problem-solving-man-with-big-lightbulb-cartoon-character-innovative-development_335657-2110.jpg?w=740&t=st=1682815044~exp=1682815644~hmac=41304e5916da34523f8bf95e3c44394f836b78257195374b843bb4fcb758d069",
        "info":"Problem Solving"
    },

    {
        "img":"https://img.freepik.com/free-vector/unified-communication-abstract-concept_335657-3038.jpg?w=740&t=st=1682815494~exp=1682816094~hmac=6739511c33c39494581275aaee4b5b37b104bc43355920c91cdad0df35242f4f",
        "info":"Communication"
    },
    {
        "img":"https://img.freepik.com/free-vector/kids-online-lessons-illustration_52683-36549.jpg?w=740&t=st=1682815125~exp=1682815725~hmac=2d915313d84b9f9e150620f74d0486a1c33dbd68b7ef9b3138e250069f34da90",
        "info":"Self-learning"
    },
    {
        "img":"https://img.freepik.com/free-vector/time-management-concept-illustration_114360-1098.jpg?w=740&t=st=1682815569~exp=1682816169~hmac=266f355427a928e33238597d8147f1621828fd11d38c186c52c4f96abdcf21cd",
        "info":"Time management"
    },  
    {
        "img":"https://img.freepik.com/free-vector/where-concept-illustration_114360-8770.jpg?w=740&t=st=1682815260~exp=1682815860~hmac=b2f828a5da28c9a55cbcb38b36f6e0b7447726fbeb1e8276fc2743b8ad1126a1",
        "info":"Future Orientacion"
    },
    {
        "img":"https://img.freepik.com/free-vector/mindfulness-concept-illustration_114360-875.jpg?w=740&t=st=1682815409~exp=1682816009~hmac=0a6a86718eace39a445994e57415b6dba69b546f6622bd38a4bec72e062fecc2",
        "info":"Self-directed"
    },

]


let cardsProgramming = document.getElementsByClassName("programmingCards")

window.addEventListener("load", function(event){
    cardsInfo.forEach(e => {

        let hardSkill=`
        
        <div class="containerCart1">
        <div class="cart1">
        <div class="frontCart1" style="background-image: url(${e.img});" ></div>
        <div class="backCart1">
              <p>${e.info}</p>
        </div>
      </div>
    </div>

    <style>
.containerCart1{
    width: 20vw;
    height: 20vw;

}
.containerCart1:hover > .cart1{
    cursor: pointer;
    transform: rotateY(180deg);
}

.cart1{
    position: relative;
    transition: transform 1500ms;
    transform-style: preserve-3d;
}


.frontCart1, .backCart1{
    width: 20vw;
    height: 20vw;
    box-shadow: 0 0 5px 2px #89969f88;;
    position: absolute;
    backface-visibility: hidden;
    border-radius:1rem;
}

.frontCart1{
    background-image: url(${e.img});
    background-size: 100%;
}


.backCart1{
    text-justify:auto;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    font-size: 25vw;
    background-color: #e5e5f7;
    opacity: 0.8;
    background: linear-gradient(135deg, #93bedcbe 25%, transparent 25%) -10px 0/ 20px 20px, 
    linear-gradient(225deg, #b1d2ebbd 25%, transparent 25%) -10px 0/ 20px 20px, 
    linear-gradient(315deg, #81b9e2a9 25%, transparent 25%) 0px 0/ 20px 20px, 
    linear-gradient(45deg, #abc5d8e4 25%, #c1d2dec4 25%) 0px 0/ 20px 20px;
    transform: rotateY(180deg);
}

.backCart1 p {
    font-size: 3vw;
    margin: 10%;
}
</style> `

    cardsProgramming[0].insertAdjacentHTML("beforeend",hardSkill)
        
    });
})


let softProgramming = document.getElementsByClassName("softCards")

window.addEventListener("load", function(event){
    softSkills.forEach(e => {

        let card=`

        <div class="containerCart1">
        <div class="cart1">
        <div class="frontCart1" style="background-image: url(${e.img});" ></div>
        <div class="backCart1">
              <p>${e.info}</p>
        </div>
      </div>
    </div>

    <style>
.containerCart1{
    width: 20vw;
    height: 20vw;

}
.containerCart1:hover > .cart1{
    cursor: pointer;
    transform: rotateY(180deg);
}

.cart1{
    position: relative;
    transition: transform 1500ms;
    transform-style: preserve-3d;
}


.frontCart1, .backCart1{
    width: 20vw;
    height: 20vw;
    box-shadow: 0 0 5px 2px #89969f88;;
    position: absolute;
    backface-visibility: hidden;
}

.frontCart1{
    background-image: url(${e.img});
    background-size: 100%;
}


.backCart1{
    text-justify:auto;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    font-size: 2vw;
    background-color: #e5e5f7;
    opacity: 0.8;
    background: linear-gradient(135deg, #93bedcbe 25%, transparent 25%) -10px 0/ 20px 20px, 
    linear-gradient(225deg, #b1d2ebbd 25%, transparent 25%) -10px 0/ 20px 20px, 
    linear-gradient(315deg, #81b9e2a9 25%, transparent 25%) 0px 0/ 20px 20px, 
    linear-gradient(45deg, #abc5d8e4 25%, #c1d2dec4 25%) 0px 0/ 20px 20px;
    transform: rotateY(180deg);
}

.backCart1 p {
    margin: 10%;
}
</style>
    `

    softProgramming[0].insertAdjacentHTML("beforeend",card)
        
    });
})