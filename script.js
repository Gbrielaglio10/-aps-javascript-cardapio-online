alert("MERCADO NACIONAL DE ARMAS DE FOGO");// Exibe uma mensagem inicial ao usuário
let nome=prompt("DIGITE SEU NOME");// pede o nome do usuario
let idade=prompt("DIGITE SUA IDADE");//pede a idade
let nomeformato= nome.toUpperCase();//transforma o nome em letra maiscula
alert("seja bem-vindo ao cardapio de armas de fogo\n" + nomeformato);//da as boas vindas ao usuario falando o nome dele

if(idade<18){//verifica a idade
    alert("voce nao tem idade suficiente para comprar armas de fogo");//exibe a mensagem
}
else{//se voce passar na verificaçao da idade irar aparecer essa lista de armas para voce comprar
    let armas =[
        {nome:"--1-pistola glock--" preco:"2000\n"}
        {nome:"--2-fuzil 762--" preco:"5000\n"},
        {nome:"--3-revolver 38--" preco:"1500\n"},
        {nome:"--4-metralhadora ak47--" preco:"10000\n"},
        {nome:"--5-espingarda garrucha veia--" preco:"2500\n"},
        {nome:"--6-magnum .50--" preco:"30000\n"}
    ]
    function exibirarmas(){//nome da minha funçao
        let lista ="lista de armas:\n"//vartiavel lista
        for(let i=0; i<armas.length;i++){//aqui é um looping para contar,o i começa com zero e se ele for menor q a lista,vai adicionando mais um,e depois chama lista d arma com array i
            lista +="arma:"+armas[i].nome+"preco:"+armas[i].preco;       }
  alert(lista);  }
function comprararma(){//mais uma funçao
    let escolha;
    do{exibirarmas();//aqui é uma outra estrutura de repetiçao, aqui voce tem q digitar o numero q esteja na lista,caso digite o numero errado vai ter q escolher o numero certo
     escolha= parseInt(prompt("DIGITE O NUMERO DA ARMA QUE DESEJA COMPRAR"));
    if(escolha>=1 && escolha<=armas.length){//aqui e um verificador com um sistema de subtrair,pq a lista comeca no indice zero,ou seja se eu escolho o numero 1,vou escolher o indice zero,o numero dois é o indice 1
        let armaescolhida=armas[escolha-1];
        alert("voce escolheu a arma:"+armaescolhida.nome+"preco:"+armaescolhida.preco);// aqui eu exibo e chamo a variavel armaescolhida,vai imprimir o nome e preco..sendo q a arma escolhida tinha recebido armas la em cima..junto com o sistema de subtracao
    }else{
        alert("numero da arma inalido");
     } }while(escolha<1 || escolha>armas.length);//enquanto nao estiver nos paramentros irar repetir ate escolher uma opcao valida para comprararma
    }
comprararma();//chama a funcao
    
