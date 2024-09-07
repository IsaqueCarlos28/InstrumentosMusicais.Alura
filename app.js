
function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    
    let CampoPesquisa = document.getElementById("Campo-Pesquisa").value

    if(!CampoPesquisa) {
        section.innerHTML = "nenhuma pesquisa"
        return
    }

    console.log(CampoPesquisa )

    CampoPesquisa = CampoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let tipo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada instrumento de corda e constrói o HTML.
    for (let instrumento of cordas) {

        titulo = instrumento.titulo.toLowerCase()
        tipo = instrumento.tipo.toLowerCase()
        descricao = instrumento.descricao.toLowerCase()
        tags = instrumento.tags.toLowerCase()


        //se no titulo inclui CampoPesquisa
        if (instrumento.titulo.includes(CampoPesquisa) || instrumento.tipo.includes(CampoPesquisa)|| instrumento.descricao.includes(CampoPesquisa) || instrumento.tags.includes(CampoPesquisa)) { 

      // Cria uma div com as informações do instrumento e adiciona à string de resultados.
      resultados += `
        <div class="item-resultado">
          <h2> ${instrumento.titulo} </h2>  
          <h3> ${instrumento.tipo} </h3>     
          <p class="descricao-meta"> ${instrumento.descricao} </p>  
          <a href="${instrumento.link}" target="_blank"> comprar${instrumento.titulo}</a>  
        </div>
      `;
        }
    }
  
    // Itera sobre cada instrumento de percussão e constrói o HTML.
    for (let instrumento of percussao) {

        titulo = instrumento.titulo.toLowerCase()
        tipo = instrumento.tipo.toLowerCase()
        descricao = instrumento.descricao.toLowerCase()

        //se no titulo inclui CampoPesquisa
        if (instrumento.titulo.includes(CampoPesquisa) || instrumento.tipo.includes(CampoPesquisa)|| instrumento.descricao.includes(CampoPesquisa)) { 
      // Cria uma div com as informações do instrumento e adiciona à string de resultados.
      resultados += `
        <div class="item-resultado">
          <h2> ${instrumento.titulo} </h2>  
          <h3> ${instrumento.tipo} </h3>     
          <p class="descricao-meta"> ${instrumento.descricao} </p>  
          <a href="${instrumento.link}" target="_blank">${instrumento.link}</a>  
        </div>
      `;
        }
    }
  
    // Itera sobre cada instrumento de sopro e constrói o HTML.
    for (let instrumento of sopro) {

        titulo = instrumento.titulo.toLowerCase()
        tipo = instrumento.tipo.toLowerCase()
        descricao = instrumento.descricao.toLowerCase()

        //se no titulo inclui CampoPesquisa
        if (instrumento.titulo.includes(CampoPesquisa) || instrumento.tipo.includes(CampoPesquisa)|| instrumento.descricao.includes(CampoPesquisa)) { 
      // Cria uma div com as informações do instrumento e adiciona à string de resultados.
      resultados += `
        <div class="item-resultado">
          <h2> ${instrumento.titulo} </h2>  
          <h3> ${instrumento.tipo} </h3>     
          <p class="descricao-meta"> ${instrumento.descricao} </p>  
          <a href="${instrumento.link}" target="_blank">${instrumento.link}</a>  
        </div>
      `;
        }
    }
    
    for (let instrumento of eletrico) {

        titulo = instrumento.titulo.toLowerCase()
        tipo = instrumento.tipo.toLowerCase()
        descricao = instrumento.descricao.toLowerCase()
        tags = instrumento.tags.toLowerCase()


        //se no titulo inclui CampoPesquisa
        if (instrumento.titulo.includes(CampoPesquisa) || instrumento.tipo.includes(CampoPesquisa)|| instrumento.descricao.includes(CampoPesquisa) || instrumento.tags.includes(CampoPesquisa)) { 

      // Cria uma div com as informações do instrumento e adiciona à string de resultados.
      resultados += `
        <div class="item-resultado">
          <h2> ${instrumento.titulo} </h2>  
          <h3> ${instrumento.tipo} </h3>     
          <p class="descricao-meta"> ${instrumento.descricao} </p>  
          <a href="${instrumento.link}" target="_blank"> comprar${instrumento.titulo}</a>  
        </div>
      `;
        }
    }

    if (!resultados) {
        section.innerHTML = "nada foi encontrado"
        return
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados gerados.
    section.innerHTML = resultados;
  }