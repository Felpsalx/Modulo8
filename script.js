const form = document.getElementById('Contact');
const Nomes = document.getElementById('Nome');
const Numeros = document.getElementById('Numero');
const Nome = [];
const Numero = [];
let Criarlinhas = '';

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    CriarNovalinha();
    atualizaLista();
});

function CriarNovalinha(){
    if(Nome.includes(Nomes.value || Numeros.value)){
        alert(`O contato de ${Nomes.value} numero: ${Numeros.value} ja foram inseridos`);
    }else{
        Nome.push(Nomes.value);
        Numero.push(parseFloat(Numeros.value));
    
        let linha = '<tr>';
        linha += `<td>${Nomes.value}</td>`;
        linha += `<td>${Numeros.value}</td>`;
        linha += `</tr>`;
        Criarlinhas += linha;
    };
    Nomes.value = '';
    Numeros.value = '';
};

function atualizaLista(){
    const Tabela = document.querySelector('tbody');
    Tabela.innerHTML = Criarlinhas;
};




