function adicionarContato(){
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;


    if (nome !== "" && telefone !== "") {
        var table = document.getElementById("tabelaContatos");
        var row = table.insertRow (-1)
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = nome;
        cell2.innerHTML = telefone;

        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha os campos corretamente.");
    } 
}

function limparTabela() {
    var table = document.getElementById("tabelaContatos");
    var rowCount = table.rows.length;
    for (var i = 1; i < rowCount; i++) {
      table.deleteRow(1);
    }
  }