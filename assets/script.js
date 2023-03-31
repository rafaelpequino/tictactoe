function setCircleP1() {
   document.getElementById('x-p2').checked = true
}

function setXP1() {
   document.getElementById('circle-p2').checked = true
}

function setCircleP2() {
   document.getElementById('x-p1').checked = true
}

function setXP2() {
   document.getElementById('circle-p1').checked = true
}

let quant = 0

document.getElementById('button-play').addEventListener('click', function () {
   const p1Name = document.getElementById('player-one-name')
   const p2Name = document.getElementById('player-two-name')

   const p1Icon = document.querySelector('input[name="icon-p1"]:checked')
   const p2Icon = document.querySelector('input[name="icon-p2"]:checked')

   if (p1Name.value.length == 0) {
      alert('Insira o nome do jogador 1')
   } else if (p2Name.value.length == 0) {
      alert('Insira o nome do jogador 2')
   } else if (!p1Icon || !p2Icon) {
      alert('Insira o símbolo dos jogadores')
   } else {
      startGame()
   }
})

let turn = 0

function startGame() {
   quant++

   //Estilização
   const linkGameStyleAnt = document.querySelector('link[href="assets/style-game.css"]')
   if (linkGameStyleAnt) {
      linkGameStyleAnt.remove()
   }
   const linkStartStyle = document.querySelector('link[href="assets/style-start.css"]')
   if (linkStartStyle) {
      linkStartStyle.remove()
   }

   const linkGameStyle = document.createElement('link')
   linkGameStyle.rel = "stylesheet";
   linkGameStyle.href = "assets/style-game.css"
   document.head.appendChild(linkGameStyle)
   //Fim da estilização

   const nameP1 = document.getElementById('player-one-name')
   const nameP2 = document.getElementById('player-two-name')   

   let iconSelectedP1 = document.querySelectorAll('input[name="icon-p1"]:checked')[0]
   let iconSelectedP2 = document.querySelectorAll('input[name="icon-p2"]:checked')[0]
   iconP1 = iconSelectedP1.dataset.iconp1 === "circle" ? "O" : "X"
   iconP2 = iconSelectedP2.dataset.iconp2 === "circle" ? "O" : "X"
   

   const h5NameP1 = document.getElementById('nameP1')
   const h5NameP2 = document.getElementById('nameP2')
   const h5Player1 = document.getElementById('h5player1')
   const h5Player2 = document.getElementById('h5player2')

   h5NameP1.innerHTML = nameP1.value + " - " + "<span>" + (iconP1) + "</span>"
   h5NameP2.innerHTML = "<span>" + (iconP2) + "</span>" + " - " + nameP2.value

   
   const fields = document.getElementsByClassName('field')

   if (turn == 0) {
      h5NameP1.style.opacity = "1"
      h5NameP2.style.opacity = "0.5"
      h5Player1.style.fontWeight = "900"
      h5Player2.style.fontWeight = "200"
   } else {
      h5NameP1.style.opacity = "0.5"
      h5NameP2.style.opacity = "1"
      h5Player1.style.fontWeight = "200"
      h5Player2.style.fontWeight = "900"

   }

   let winner = false

   for (let f = 0; f < fields.length; f++) {
      fields[f].addEventListener('click', selected)
      
      function selected () {
         if (winner == true) {
         } else if (fields[f].dataset.checked === "p1" || fields[f].dataset.checked === "p2") {
            alert('Casa já selecionada. Tente outra')
         } else if (turn == 1) {
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "0.5"
            h5Player1.style.fontWeight = "900"
            h5Player2.style.fontWeight = "200"
            fields[f].style.color = "green"
            fields[f].innerText = iconP2
            fields[f].dataset.checked = "p2"
            turn = 0
         } else if (turn == 0) {
            h5NameP1.style.opacity = "0.5"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "200"
            h5Player2.style.fontWeight = "900"
            fields[f].style.color = "red"
            fields[f].innerText = iconP1
            fields[f].dataset.checked = "p1"
            turn = 1
         }

         if (fields[0].dataset.checked == "p1" && fields[1].dataset.checked == "p1" && fields[2].dataset.checked == "p1") {
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[0].style.opacity = "1"
            fields[1].style.opacity = "1"
            fields[2].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[3].dataset.checked == "p1" && fields[4].dataset.checked == "p1" && fields[5].dataset.checked == "p1"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[3].style.opacity = "1"
            fields[4].style.opacity = "1"
            fields[5].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[6].dataset.checked == "p1" && fields[7].dataset.checked == "p1" && fields[8].dataset.checked == "p1"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[6].style.opacity = "1"
            fields[7].style.opacity = "1"
            fields[8].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[0].dataset.checked == "p1" && fields[4].dataset.checked == "p1" && fields[8].dataset.checked == "p1"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[0].style.opacity = "1"
            fields[4].style.opacity = "1"
            fields[8].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[2].dataset.checked == "p1" && fields[4].dataset.checked == "p1" && fields[6].dataset.checked == "p1"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[2].style.opacity = "1"
            fields[4].style.opacity = "1"
            fields[6].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[0].dataset.checked == "p1" && fields[3].dataset.checked == "p1" && fields[6].dataset.checked == "p1"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[0].style.opacity = "1"
            fields[3].style.opacity = "1"
            fields[6].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[1].dataset.checked == "p1" && fields[4].dataset.checked == "p1" && fields[7].dataset.checked == "p1"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[1].style.opacity = "1"
            fields[4].style.opacity = "1"
            fields[7].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[2].dataset.checked == "p1" && fields[5].dataset.checked == "p1" && fields[8].dataset.checked == "p1"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[2].style.opacity = "1"
            fields[5].style.opacity = "1"
            fields[8].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         }

         if (fields[0].dataset.checked == "p2" && fields[1].dataset.checked == "p2" && fields[2].dataset.checked == "p2") {
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[0].style.opacity = "1"
            fields[1].style.opacity = "1"
            fields[2].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[3].dataset.checked == "p2" && fields[4].dataset.checked == "p2" && fields[5].dataset.checked == "p2"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[3].style.opacity = "1"
            fields[4].style.opacity = "1"
            fields[5].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[6].dataset.checked == "p2" && fields[7].dataset.checked == "p2" && fields[8].dataset.checked == "p2"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[6].style.opacity = "1"
            fields[7].style.opacity = "1"
            fields[8].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[0].dataset.checked == "p2" && fields[4].dataset.checked == "p2" && fields[8].dataset.checked == "p2"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[0].style.opacity = "1"
            fields[4].style.opacity = "1"
            fields[8].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[2].dataset.checked == "p2" && fields[4].dataset.checked == "p2" && fields[6].dataset.checked == "p2"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[2].style.opacity = "1"
            fields[4].style.opacity = "1"
            fields[6].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[0].dataset.checked == "p2" && fields[3].dataset.checked == "p2" && fields[6].dataset.checked == "p2"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[0].style.opacity = "1"
            fields[3].style.opacity = "1"
            fields[6].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[1].dataset.checked == "p2" && fields[4].dataset.checked == "p2" && fields[7].dataset.checked == "p2"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[1].style.opacity = "1"
            fields[4].style.opacity = "1"
            fields[7].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"
            winner = true
         } else if (fields[2].dataset.checked == "p2" && fields[5].dataset.checked == "p2" && fields[8].dataset.checked == "p2"){
            for (let i = 0; i < fields.length; i++) {
               fields[i].style.opacity = "0.5"
            }
            fields[2].style.opacity = "1"
            fields[5].style.opacity = "1"
            fields[8].style.opacity = "1"
            
            h5NameP1.style.opacity = "1"
            h5NameP2.style.opacity = "1"
            h5Player1.style.fontWeight = "500"
            h5Player2.style.fontWeight = "500"

            winner = true
         } else {
            let end = 0
            for (let i = 0; i < fields.length; i++) {
               if (fields[i].dataset.checked == "p1" || fields[i].dataset.checked == "p2") {
                  end++
               }               
            }
            if (end == 9) {
               for (let i = 0; i < fields.length; i++) {
                  fields[i].style.opacity = "0.5"
               }
               winner = true
            }
         }
         
      }
   }
}

function backToStart() {
   location.reload()
}

function restart() {
   if (quant % 2 == 1) {
      turn == 1
   }
   const fields = document.getElementsByClassName('field')
   for (let i = 0; i < fields.length; i++) {
      fields[i].innerText = ""
      fields[i].style.opacity = "1"
      fields[i].dataset.checked = null
      winner = false
   }
   startGame()
}