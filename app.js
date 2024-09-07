function mostrarTudo() {
  // Seleciona o elemento HTML com o ID 'main' e armazena em 'resultados'
  // Este elemento será o container onde os resultados serão exibidos
  const resultados = document.getElementById("main");

  // Limpa o conteúdo HTML anterior do elemento 'resultados'
  // Isso garante que a cada chamada da função, os resultados sejam atualizados
  resultados.innerHTML = "";

  // Itera sobre cada elemento (dado) do array 'dados'
  dados.forEach(dado => {
    // Cria um novo elemento HTML <div> para cada resultado
    const resultadoDiv = document.createElement("div");

    // Adiciona a classe 'item-resultado' à div criada
    // Essa classe provavelmente contém estilos CSS para formatar a aparência dos resultados
    resultadoDiv.classList.add("item-resultado");

    // Define o conteúdo HTML da div, utilizando template literals para inserir os dados do objeto 'dado'
    // Cria um título (<h2>), um link para o texto completo e um link para o vídeo
    resultadoDiv.innerHTML = `
      <h2>
        <a href="${dado.linkTexto}" target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.linkVideo}" target="_blank">Vídeo explicativo</a>
    `;

    // Ordena o array 'dados' por título em ordem alfabética
    dados.sort((a, b) => {
      if (a.titulo < b.titulo) return -1;
      return 1; // Sempre retorna 1, independentemente da comparação
    });

    // Adiciona a div criada como filho do elemento 'resultados'
    // Isso insere a nova div dentro da seção de resultados na página
    resultados.appendChild(resultadoDiv);
  });
}
