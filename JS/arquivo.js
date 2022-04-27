
var cont = 0
var palavra = 'jaboticaba'

var usadas = '' 
var letras = [] 
var underline = []

var termina = false
var vitoria = 0

function tamanho(){
    for(x in palavra){
       var adicionar = underline.push(" _")
    }

    for(i of palavra){
        letras.push(i)
    }
    under()
}

function under(){
    for(i of underline){
        document.getElementById('letra').innerHTML += i
    }

}


function perdeu (){
    cont += 1
    if (cont == 1){
        document.getElementById('imagem').src= "../Image/forca1.jpg"
    }else if(cont == 2){
        document.getElementById('imagem').src= "../Image/forca2.jpg"
    }else if(cont == 3){
        document.getElementById('imagem').src= "../Image/forca3.jpg"
    }else if(cont == 4){
        document.getElementById('imagem').src= "../Image/forca4.jpg"
    }else if(cont == 5){
        document.getElementById('imagem').src= "../Image/forca5.jpg"
    }else if(cont == 6 && termina == false){
        document.getElementById('imagem').src= "../Image/forca6.jpg"
        termina = true
        inicialModal('alo')
    }
}

function verifica (id){
    cont1 = 0
    if(palavra.includes(id) == true){
        var container = document.getElementById(id);
        container.style.backgroundColor = "#4DFF00"
        for(i of palavra){
            if(id == i){
                vitoria += 1
                var removed = underline.splice(cont1, 1, id)
                cont1 += 1
                var virgula = underline.join(' ')
                document.getElementById('letra').innerHTML = virgula
            }else{
                cont1 += 1
            }
        }
        vitoria1()

    }else{
        if(termina == false){
            perdeu()
            var container = document.getElementById(id);
            container.style.backgroundColor = "#FF0000"
        }
    }

}

function clique(letra){
    if(usadas.includes(letra) == false){
        usadas = usadas + letra
        verifica(letra)
    }
}

function inicialModal(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
}

function fechar(){
    const modal = document.getElementById('alo')
    modal.classList.remove('mostrar')
}

function jogarNovamente(){
    const modal = document.getElementById('alo')
    modal.classList.remove('mostrar')
    console.log(usadas)
    document.getElementById('imagem').src= "../Image/forca0.jpg"
    for(x of usadas){
        var container = document.getElementById(x)
        container.style.backgroundColor = 'white'
    }
    cont = 0
    usadas = '' 
    letras = [] 
    underline = []
    termina = false 
    document.getElementById('letra').innerHTML = ''
    tamanho()
}

function vitoria1(){
    var teste = palavra.length
    console.log(teste)
    console.log(vitoria)
    if(vitoria == teste){
        console.log("Ganhou")
        inicialModal('ganhador')
    }
}

function fechar1(){
    const modal = document.getElementById('ganhador')
    modal.classList.remove('mostrar')
}


