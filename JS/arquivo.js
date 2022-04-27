
var cont = 0
var palavra = 'girafa'

var usadas = '' 
var letras = [] 
var underline = []


function tamanho(){
    for(x in palavra){
       var adicionar = underline.push(" _")
    }

    for(i of palavra){
        console.log(i)
        letras.push(i)
        console.log(letras)
    }
    under()
}

function under(){
    for(i of underline){
        console.log(document.getElementById('letra'))
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
    }else if(cont == 6){
        document.getElementById('imagem').src= "../Image/forca6.jpg"
    }
}

function verifica (id){
    cont1 = 0
    if(palavra.includes(id) == true){
        var container = document.getElementById(id);
        container.style.backgroundColor = "#4DFF00"
        for(i of palavra){
            console.log(i)
            if(id == i){
                var removed = underline.splice(cont1, 1, id)
                console.log(underline)
                cont1 += 1
                var virgula = underline.join(' ')
                document.getElementById('letra').innerHTML = virgula
            }else{
                console.log("errou")
                cont1 += 1
            }
        }

    }else{
        console.log("Errou")
        perdeu()
        var container = document.getElementById(id);
        container.style.backgroundColor = "#FF0000"
    }

}

function clique(letra){
    if(usadas.includes(letra) == false){
        usadas = usadas + letra
        verifica(letra)
        console.log(underline)
    }
}


