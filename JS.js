const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]

let numberslist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const ALPHABETSend= 25;
const alphabetsend= 51;
const numbersend =61;

let pass = document.getElementById("password")
let numbers = document.getElementById("numbers")
//let symbols = document.getElementById("symbols")
//console.log(characters[62]) 
//length of password 15
//randomly chosen 

function generateFullpass()
{
    let code = ""
    for(let i = 0 ; i<15;i++)
    {
        let indice =Math.floor(Math.random()*characters.length)
        code+=characters[indice]

    }

    return code
}

function generateWithoutsymbols()
{
    let code = ""
    for(let i = 0 ;i<15;i++)
    {
        let indice = Math.floor(Math.random()*characters.length)
        if(indice<numbersend+1)
        {
            code+=characters[indice]
        }
        else{
            i--
        }
    }
    return code
}

function generateWithoutNumbers()
{
    let code = ""
    for(let i = 0 ;i<15;i++)
    {
        let indice = Math.floor(Math.random()*characters.length)
        if(indice <alphabetsend || indice>numbersend)
        {
            code+=characters[indice]
 
        }
        else{
            i--
        }
    }
    return code

}

function generatecode_nosymbols_nonumbers()
{
    let code = ""
    for(let i = 0 ;i<15;i++)
    {
        let indice = Math.floor(Math.random()*characters.length)
        if(indice <alphabetsend)
        {
            code+=characters[indice]

        }
        else{
            i--
        }

    }
    return code

}

function generatecode()
{
    
    if(numbers.checked==true && symbols.checked==true)
    {
        pass.textContent=generateFullpass()
    }else if(numbers.checked==true && symbols.checked==false)
    {
        pass.textContent=generateWithoutsymbols()
    }
    else if(numbers.checked==false && symbols.checked==true)
    {
        pass.textContent=generateWithoutNumbers()
    }
    else{
        pass.textContent=generatecode_nosymbols_nonumbers()
    }

}


