const st="Seguir";
const st2="Seguindo";

function meuNome(){
    let nome="Guilherme (:";
    alert(nome);
}

function seguirUser(){
  
  if(document.getElementById("seguir").value==st){
      document.getElementById("seguir").value = st2;
  }
  else{
    document.getElementById("seguir").value = st;
  }

} 

const Pessoa = {
     nome: {
         primeiroNome:"Guilherme ",
         segundoNome:"Melo",
         ultimoNome:"Barros"
     },

    idade: 19,
    endereco: {
      rua: "Rua Logo ali",
      numero: 10,
      cep: "00125487-142",
      cidade: "São Paulo"
    },
    familia: [
      "mae",
      "pai"
    ],
    pets: [
      "Bola",
      "Yhorm"
    ]
  }



//Pessoa.pets.forEach(element => alert(element));
Pessoa.pets.forEach(element => console.log(element));




