function iniciarOJogo(){
var name = prompt("DIGA SEU NOME!").toUpperCase();
alert("OLÁ, "+name+", BEM VINDO, VAMOS JOGAR O JOGO DA FORCA! ANTES DE COMEÇAR, IREI LHE DAR ALGUMAS INFORMAÇÕES SOBRE O JOGO, VAMOS LÁ?!")
alert("-VAMOS GERAR UMA PALAVRA QUE VOCÊ TERÁ DE ACERTAR, MAS CALMA... MOSTRAREMOS A QUANTIDADE DE LETRAS QUE A PALAVRA POSSUI!\n-VOCÊ TERÁ QUE SUGERIR UMA LETRA POR VEZ, SE A LETRA EXISTIR NA PALAVRA SUBSTITUIREMOS NA POSIÇÃO CORRESPONDENTE!\n-VOCÊ SÓ PODERÁ ERRAR 6 VEZES")
alert("AGORA VAMOS SORTEAR SUA PALAVRA, ESTÁ PRONTO?!")

var user_quer_jogar = true;

while(user_quer_jogar==true){
var erro = 0;
var stickman =  "_________\n|           |\n|\n|\n|\n|";
var letra_do_user;
var sorteio = (Math.floor(Math.random()*4)+1)
var paises = ["brasil","alemanha","estados unidos","belgica"];

if(sorteio==1){
    alert("SORTEAMOS  SUA  PALAVRA!\n\nA CATEGORIA É: PAÍSES\n\nELA POSSUI 6 LETRAS!\n_ _ _ _ _ _")
let x = ["B","R","A","S","I","L"];
let y = ["_","_","_","_","_","_"];
let i = true;
//\n\nÔ\n/|\\\n/ \\
    while(i==true){
        letra_do_user = prompt(`DIGA UMA LETRA!\n${stickman}\n\n${y.join(" ")}`).toUpperCase()
        if(letra_do_user==x[0]){
            y[0] = letra_do_user
        }
        if(letra_do_user==x[1]){
            y[1] = letra_do_user
        }
        if(letra_do_user==x[2]){
            y[2] = letra_do_user
        }
        if(letra_do_user==x[3]){
            y[3] = letra_do_user
        }
        if(letra_do_user==x[4]){
            y[4] = letra_do_user
        }
        if(letra_do_user==x[5]){
            y[5] = letra_do_user
        }
        if(letra_do_user!= x[0] && letra_do_user!= x[1] && letra_do_user!= x[2] && letra_do_user!= x[3] &&letra_do_user!= x[4] && letra_do_user!= x[5] && letra_do_user!=""){
        erro++
        if(erro==1){
            stickman = "_________\n|           |\n|          Ô\n|\n|\n|"  
        }
        if(erro==2){
            stickman = "_________\n|           |\n|          Ô\n|         / \n|\n|"  
        }
        if(erro==3){
            stickman = "_________\n|           |\n|          Ô\n|         / |\n|\n|"  
        }
        if(erro==4){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|\n|"  
        }
        if(erro==5){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|          /\n|"  
        }
        if(erro==6){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|          / \\\n|"
           alert(`VOCÊ PERDEU O JOGO, A PALAVRA CERTA ERA:\n${stickman}\n\nBRASIL`)
           i = false;
        } 
    }
    if(letra_do_user==""){
        alert("POR FAVOR, DIGA UMA LETRA!")
    }
    if(y[0]==x[0] && y[1]==x[1] && y[2]==x[2] && y[3]==x[3] && y[4]==x[4] && y[5]==x[5]){
     alert("VOCÊ ACERTOU A PALAVRA, PARABÉNS!\n\n"+y.join(""))
    i = false;       
    }
  }
}
if(sorteio==2){
    alert("SORTEAMOS  SUA  PALAVRA!\n\nA CATEGORIA É: PAÍSES\n\n ELA POSSUI 8 LETRAS!\n_ _ _ _ _ _ _ _")
let x = ["A","L","E","M","A","N","H","A"];
let y = ["_","_","_","_","_","_","_","_"];
let i = true
    while(i==true){
        letra_do_user = prompt(`DIGA UMA LETRA!\n${stickman}\n\n${y.join(" ")}`).toUpperCase()
        if(letra_do_user==x[0]){
            y[0] = letra_do_user
        }
        if(letra_do_user==x[1]){
            y[1] = letra_do_user
        }
        if(letra_do_user==x[2]){
            y[2] = letra_do_user
        }
        if(letra_do_user==x[3]){
            y[3] = letra_do_user
        }
        if(letra_do_user==x[4]){
            y[4] = letra_do_user
        }
        if(letra_do_user==x[5]){
            y[5] = letra_do_user
        }
        if(letra_do_user==x[6]){
            y[6] = letra_do_user
        }
        if(letra_do_user==x[7]){
            y[7] = letra_do_user
        }
        if(letra_do_user!= x[0] && letra_do_user!= x[1] && letra_do_user!= x[2] && letra_do_user!= x[3] &&letra_do_user!= x[4] && letra_do_user!= x[5] && letra_do_user!= x[6] && letra_do_user!= x[7] && letra_do_user!=""){
        erro++
        if(erro==1){
            stickman = "_________\n|           |\n|          Ô\n|\n|\n|"  
        }
        if(erro==2){
            stickman = "_________\n|           |\n|          Ô\n|         / \n|\n|"  
        }
        if(erro==3){
            stickman = "_________\n|           |\n|          Ô\n|         / |\n|\n|"  
        }
        if(erro==4){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|\n|"  
        }
        if(erro==5){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|          /\n|"  
        }
        if(erro==6){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|          / \\\n|"
           alert(`VOCÊ PERDEU O JOGO, A PALAVRA CERTA ERA:\n${stickman}\n\nALEMANHA`)
            i = false;
        } 
    }
    if(letra_do_user==""){
        alert("POR FAVOR, DIGA UMA LETRA!")
    }
    if(y[0]==x[0] && y[1]==x[1] && y[2]==x[2] && y[3]==x[3] && y[4]==x[4] && y[5]==x[5] && y[6]==x[6] && y[7]==x[7]){
     alert("VOCÊ ACERTOU A PALAVRA, PARABÉNS!\n\n"+y.join(""))
    i = false;       
    }
  }
}
if(sorteio==3){
    alert("SORTEAMOS  SUA  PALAVRA!\n\nA CATEGORIA É: PAÍSES\n\nELA POSSUI 13 LETRAS!\n_ _ _ _ _ _ _   _ _ _ _ _ _")
let x = ["E","S","T","A","D","O","S","  ","U","N","I","D","O","S"];
let y = ["_","_","_","_","_","_","_","  ","_","_","_","_","_","_"];
let i = true;

    while(i==true){
        letra_do_user = prompt(`DIGA UMA LETRA!\n${stickman}\n\n${y.join(" ")}`).toUpperCase()
        if(letra_do_user==x[0]){
            y[0] = letra_do_user
        }
        if(letra_do_user==x[1]){
            y[1] = letra_do_user
        }
        if(letra_do_user==x[2]){
            y[2] = letra_do_user
        }
        if(letra_do_user==x[3]){
            y[3] = letra_do_user
        }
        if(letra_do_user==x[4]){
            y[4] = letra_do_user
        }
        if(letra_do_user==x[5]){
            y[5] = letra_do_user
        }
        if(letra_do_user==x[6]){
            y[6] = letra_do_user
        }
        if(letra_do_user==x[8]){
            y[8] = letra_do_user
        }
        if(letra_do_user==x[9]){
            y[9] = letra_do_user
        }
        if(letra_do_user==x[10]){
            y[10] = letra_do_user
        }
        if(letra_do_user==x[11]){
            y[11] = letra_do_user
        }
        if(letra_do_user==x[12]){
            y[12] = letra_do_user
        }
        if(letra_do_user==x[13]){
            y[13] = letra_do_user
        }
        if(letra_do_user!= x[0] && letra_do_user!= x[1] && letra_do_user!= x[2] && letra_do_user!= x[3] &&letra_do_user!= x[4] && letra_do_user!= x[5] && letra_do_user!= x[6] && letra_do_user!= x[8] && letra_do_user!= x[9] && letra_do_user!= x[10] && letra_do_user!= x[11] && letra_do_user!= x[12] && letra_do_user!= x[13] && letra_do_user!=""){
        erro++
        if(erro==1){
            stickman = "_________\n|           |\n|          Ô\n|\n|\n|"  
        }
        if(erro==2){
            stickman = "_________\n|           |\n|          Ô\n|         / \n|\n|"  
        }
        if(erro==3){
            stickman = "_________\n|           |\n|          Ô\n|         / |\n|\n|"  
        }
        if(erro==4){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|\n|"  
        }
        if(erro==5){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|          /\n|"  
        }
        if(erro==6){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|          / \\\n|"
           alert(`VOCÊ PERDEU O JOGO, A PALAVRA CERTA ERA:\n${stickman}\n\nESTADOS UNIDOS`)
           i = false;
        } 
    }
    if(letra_do_user==""){
        alert("POR FAVOR, DIGA UMA LETRA!")
    }
    if(y[0]==x[0] && y[1]==x[1] && y[2]==x[2] && y[3]==x[3] && y[4]==x[4] && y[5]==x[5] && y[6]==x[6] && y[8]==x[8] && y[9]==x[9] && y[10]==x[10] && y[11]==x[11] && y[12]==x[12] && y[13]==x[13]){
     alert("VOCÊ ACERTOU A PALAVRA, PARABÉNS!\n\n"+y.join(""))
    i = false;       
    }
  }
}
if(sorteio==4){
    alert("SORTEAMOS  SUA  PALAVRA!\n\nA CATEGORIA É: PAÍSES\n\nELA POSSUI 7 LETRAS!\n _ _ _ _ _ _ _")
let x = ["B","E","L","G","I","C","A"];
let y = ["_","_","_","_","_","_","_",];
let i = true;

    while(i==true){
        letra_do_user = prompt(`DIGA UMA LETRA!\n${stickman}\n\n${y.join(" ")}`).toUpperCase()
        if(letra_do_user==x[0]){
            y[0] = letra_do_user
        }
        if(letra_do_user==x[1]){
            y[1] = letra_do_user
        }
        if(letra_do_user==x[2]){
            y[2] = letra_do_user
        }
        if(letra_do_user==x[3]){
            y[3] = letra_do_user
        }
        if(letra_do_user==x[4]){
            y[4] = letra_do_user
        }
        if(letra_do_user==x[5]){
            y[5] = letra_do_user
        }
        if(letra_do_user==x[6]){
            y[6] = letra_do_user
        }
        if(letra_do_user!= x[0] && letra_do_user!= x[1] && letra_do_user!= x[2] && letra_do_user!= x[3] &&letra_do_user!= x[4] && letra_do_user!= x[5] && letra_do_user!= x[6] && letra_do_user!=""){
        erro++
        if(erro==1){
            stickman = "_________\n|           |\n|          Ô\n|\n|\n|"  
        }
        if(erro==2){
            stickman = "_________\n|           |\n|          Ô\n|         / \n|\n|"  
        }
        if(erro==3){
            stickman = "_________\n|           |\n|          Ô\n|         / |\n|\n|"  
        }
        if(erro==4){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|\n|"  
        }
        if(erro==5){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|          /\n|"  
        }
        if(erro==6){
            stickman = "_________\n|           |\n|          Ô\n|         / | \\\n|          / \\\n|"
           alert(`VOCÊ PERDEU O JOGO, A PALAVRA CERTA ERA:\n${stickman}\n\nBELGICA`)
           i = false;
        } 
    }
    if(letra_do_user==""){
        alert("POR FAVOR, DIGA UMA LETRA!")
    }
    if(y[0]==x[0] && y[1]==x[1] && y[2]==x[2] && y[3]==x[3] && y[4]==x[4] && y[5]==x[5] && y[6]==x[6]){
     alert("VOCÊ ACERTOU A PALAVRA, PARABÉNS!\n\n"+y.join(""))
    i = false;       
    }
  }
}
var pergunta = confirm("VOCÊ DESEJA JOGAR NOVAMENTE?")
if (pergunta == true) {
    user_quer_jogar = true
} else {
    alert("OBRIGADO PELA PARTICIPAÇÃO, "+name+", ESPERO QUE TENHA SE DIVERTIDO E ESPERO VER VOCÊ AQUI NOVAMENTE!")
    user_quer_jogar = false
}
}
// apresentação do jogo, perguntar se quer jogar novamente, repetição de letra certas e erradas
}
