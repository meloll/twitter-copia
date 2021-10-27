/*
diaHoje = new Date();
dia = diaHoje.getDate();
mes = diaHoje.getMonth()+1;
ano = diaHoje.getYear()+1900;
 */           
//document.write("Data: "+dia+"/"+mes+"/"+ano);
//console.log("Hello World!!")

alert("Você foi hackeado!!");


/*while(true){
    
    k = prompt("Digite o valor da temperatura em C°:","");
    if(k==-1){
        break;
    }
    f=(1.8*k+32);
    alert(k+"C° em "+f+"F°");
    alert("Digite -1 para sair.");

    
}*/




function conv(){
    var k= document.getElementById('n1');
    f=0;
    f=(1.8*k.value+32);
    alert(f+"F°");
}

/********************************************/
function imc(){
    h = prompt("Digite sua altura:","");
    p = prompt("Digite seu peso:","");

    imc = p/(h*h);
    alert("Seu IMC: "+imc.toFixed(2));
}

function fatorial(form){
    var n = parseInt(form.n.value);
    fat=1;
    for(i=1;i<=n;i++){
        fat*=i
    }
    form.re.value = fat;
}

function soma(form){
   
    var a = parseFloat(form.n1.value);
    var b = parseFloat(form.n2.value);

    return a+b;
}

function sub(form){
    var a = parseFloat(form.n1.value);
    var b = parseFloat(form.n2.value);

    return a-b;

}
function div(form){
    var a = parseFloat(form.n1.value);
    var b = parseFloat(form.n2.value);

    return a/b;

}

function multi(form){
    var a = parseFloat(form.n1.value);
    var b = parseFloat(form.n2.value);

    return a*b;

}

function calc(form){

    var op = form.op.value;

    if(op=='+'){
        form.re.value = soma(form);
    }
    if(op=='-'){
        form.re.value = sub(form);

    }
    if(op=='/'){
        form.re.value = div(form);
    }

    if(op=='*'){
        form.re.value = multi(form);
    }

}




function somaN(){
    var num=0;
    var valor=0;
    while(num!='='){
        num=prompt("Digite um numero para ser somado:");
        if(num!='='){
            valor += parseFloat(num);
        }
    }
    alert("O resultado da soma é: "+valor);
}
