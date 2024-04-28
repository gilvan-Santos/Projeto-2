document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Form").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obter os valores do formulário e remover espaços em branco extras
        let nomes = document.getElementById("nome").value.trim();
        let tel = document.getElementById("telefone").value.trim();

        // Verificar se o nome ou telefone já existem na tabela de contatos
        let table = document.getElementById("Table");
        let rows = table.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].getElementsByTagName("td");
            if (cells.length >= 2) {
                let existingNome = cells[0].textContent.trim();
                let existingTelefone = cells[1].textContent.trim();  existingTelefone === tel 
                if (existingNome === nomes  ) {
                    alert("Este contato já existe na lista.");
                    return; // Impede a adição de contatos duplicados
                }
                if(existingTelefone === tel ){
                    alert("Este Telefone já existe na lista.");
                    return; // Impede a adição de telefones duplicados
                }
            }
        }

        // Criar uma nova linha na tabela de contatos
        var newRow = table.getElementsByTagName("tbody")[0].insertRow();
        newRow.insertCell().textContent = nomes;
        newRow.insertCell().textContent = tel;

        // Limpar os campos do formulário após adicionar o novo contato
        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    });
});
