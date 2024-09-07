function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    const exibirDados = document.getElementById("main");

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();;

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa == "") {
        // Se estiver vazio, exibe uma mensagem de erro na seção de resultados
        exibirDados.innerHTML = `<h2 class="mensagem"> < Hey, nada foi digitado aí! > </h2>`;
        // Interrompe a função para evitar processamentos desnecessários
        return;
    };

    // Inicializa uma string vazia para armazenar os resultados
    let exibirPesquisa = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // se ttitulo ou descrição ou tags includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            exibirPesquisa += `
            <div class="exibir-pesquisa">
                <h2>
                    <a href="${dado.linkTexto}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.linkVideo}" target="_blank">Vídeo explicativo</a>
            </div>
            `;
        };
    };

    // Se a palavra não for encontrada
    if (!exibirPesquisa) {
        exibirPesquisa = `<h2 class="mensagem"> < Ops! Não encontramos sua palavra. Tente outra. > </h2>`;
    };
    
    // Atribui os resultados gerados à seção HTML
    exibirDados.innerHTML = exibirPesquisa;
};
