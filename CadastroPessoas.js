const dados = new Array();

function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1 class="tourney">EmpresasDev!</h1>
        <p class= "joan-regular">Cadastro de Usuários</p>
        <button onclick="openAlert()">Novo Usuário</button>
        <div class="content">
        </div>
    `;
}


function openAlert() {
    const modal = document.getElementById('myModal');
    modal.style.display = "block";
}

function addRowToTable(dado) {
    const tbody = document.querySelector('tbody');

    // Cria uma nova linha
    const tr = document.createElement('tr');

    // Célula para ID
    const td2 = document.createElement('td');
    td2.innerText = dado.ID;

    // Célula para Foto
    const td3 = document.createElement('td');
    const img = document.createElement('img');
    img.src = dado.Foto; // Substitua com o caminho da imagem
    img.width = 30; // Ajuste o tamanho conforme necessário
    img.height = 30;
    td3.appendChild(img);

    // Célula para Nome
    const td4 = document.createElement('td');
    td4.innerText = dado.Nome;

    // Célula para Telefone
    const td5 = document.createElement('td');
    td5.innerText = dado.Telefone;

    // Célula para Profissão
    const td6 = document.createElement('td');
    td6.innerText = dado.Profissão;

    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    tbody.appendChild(tr); // Adiciona a nova linha ao tbody existente
}




const masculino = 'https://cdn-icons.flaticon.com/svg/3917/3917705.svg?token=exp=1712459792~hmac=fac0ca4bff68aaea465491af308a61fa';
const feminino = 'https://www.flaticon.com/svg/vstatic/svg/3917/3917711.svg?token=exp=1711931047~hmac=6b458945d02d58f3313f80dd3e754bd3';


function loadData() {
    
    dados.push({
        ID: 1, Foto: masculino, 
        Nome: 'João', 
        Idade: 25, 
        Telefone:51012345678, 
        Profissão: 'QA'
    });
    dados.push({
        ID: 2, 
        Foto: 'https://www.flaticon.com/svg/vstatic/svg/3917/3917711.svg?token=exp=1711931047~hmac=6b458945d02d58f3313f80dd3e754bd3', 
        Nome: 'Maria', 
        Idade: 30, 
        Telefone:5111111111, 
        Profissão: 'RH'
    });
    dados.push({
        ID: 3, 
        Foto: 'https://www.flaticon.com/svg/vstatic/svg/3917/3917705.svg?token=exp=1711931720~hmac=4df2d501908734dac35716bb4872d74a', 
        Nome: 'José', 
        Idade: 35, 
        Telefone:5122222222, 
        Profissão: 'CEO'
    });
    
}

function createTable() {
    const app = document.getElementById('app');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const thr = document.createElement('tr');
    
    // Cabeçalho para ID
    const th2 = document.createElement('th');
    th2.innerText = 'ID';
    
    // Cabeçalho para Foto
    const th3 = document.createElement('th');
    th3.innerText = 'Foto';
    
    // Cabeçalho para Nome
    const th4 = document.createElement('th');
    th4.innerText = 'Nome';
    
    // Cabeçalho para Telefone
    const th5 = document.createElement('th');
    th5.innerText = 'Telefone';
    
    // Cabeçalho para Profissão
    const th6 = document.createElement('th');
    th6.innerText = 'Profissão';

    thr.appendChild(th2);
    thr.appendChild(th3);
    thr.appendChild(th4);
    thr.appendChild(th5);
    thr.appendChild(th6);
    
    thead.appendChild(thr);
    const tbody = document.createElement('tbody');

    dados.forEach ((dado) => {
        const tr = document.createElement('tr');
        
        // Célula para ID
        const td2 = document.createElement('td');
        td2.innerText = dado.ID;
        
        // Célula para Foto
        const td3 = document.createElement('td');
        const img = document.createElement('img');
        img.src = dado.Foto; // Substitua com o caminho da imagem
        img.width = 30; // Ajuste o tamanho conforme necessário
        img.height = 30;
        td3.appendChild(img);
        
        // Célula para Nome
        const td4 = document.createElement('td');
        td4.innerText = dado.Nome;
        
        // Célula para Telefone
        const td5 = document.createElement('td');
        td5.innerText = dado.Telefone;
        
        // Célula para Profissão
        const td6 = document.createElement('td');
        td6.innerText = dado.Profissão;

        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        tbody.appendChild(tr);
    });
    
    table.appendChild(thead);
    table.appendChild(tbody);
    app.appendChild(table);
}


function styleTable() {
    const style = document.createElement('style');
    style.textContent = `
        .user-table {
            border-collapse: collapse;
            width: 80%;
            margin: 0 auto;
            border-radius: 10px;
            overflow: hidden;
        }
        .user-table th,
        .user-table td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        .user-table th {
            background-color: #f2f2f2;
        }
        .user-table tr:last-child td {
            border-bottom: none;
        }
        .user-table img {
            border-radius: 50%;
        }
        #app {
            text-align: center;
            margin-top: 50px;
        }
    `;
    document.head.appendChild(style);
}

function showData() {
    // for de iteração pelo indice e tamanho do array
    for (let i = 0; i < dados.length; i++) {
        console.log(dados[i]);
    }

    // iteração pelo elementos do array no array
    dados.forEach(function mostra(item) {
        console.log(item);
    });
    dados.forEach((item) => console.log(item));

    // iteração pelos indices dos elementos do array
    for (let it in dados) {
        console.log(dados[it]);
    }
}
