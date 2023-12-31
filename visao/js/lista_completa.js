$(document).ready(function (e) {
  $("#mensagem-campo-vazio-cadastro-edita-itens-lista").hide();

  $("#mensagem-itens-lista-cadastrado").hide();

  $("#mensagem-itens-lista-editado").hide();

  $("#mensagem-falha-cadastro-edita-itens-lista").hide();

  $("#mensagem-lista-compras-excluida-sucesso").hide();

  $("#mensagem-falha-exclusao-lista-compras").hide();

  $("#mensagem-item-lista-excluido-sucesso").hide();

  $("#mensagem-falha-exclusao-item-lista").hide();

  $("#mensagem-campo-vazio-procura-por-periodo-lista-compra").hide();

  $("#mensagem-falha-buscar-por-periodo-lista-compra").hide();

  $("#mensagem-falha-buscar-lista-de-compras-cadastro-edita-itens-lista").hide();

  $("#mensagem-falha-buscar-produtos-cadastro-edita-itens-lista").hide();

  $("#mensagem-falha-buscar-lista-com-produtos-edita").hide();

  $("#mensagem-falha-buscar-lista-compras").hide();
  
  debugger;

  let url_lista_compras = window.location.href;

  let url_alterar_lista_compras = "codigo_lista_compras_itens_alterar=";

  let indice_busca_codigo_lista = url_lista_compras.indexOf(url_alterar_lista_compras);

  let recebe_codigo_lista_compras_itens_alterar = url_lista_compras.substring(indice_busca_codigo_lista + 35);

  console.log("Codigo para alteração de lista de compras:" + recebe_codigo_lista_compras_itens_alterar);

  if (
    url_lista_compras ===
    "http://localhost/compras/visao/index.php?pagina=cadastro_lista_compras"
  ) {
    debugger;
    $.ajax({
      url: "../api/ListaComprasAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_lista_compras: "buscar_lista_compras",
      },
      success: function (retorno_busca_lista_compras) {
        debugger;
        if (retorno_busca_lista_compras != "") {
          var popula_option = "";
          for (
            var indice = 0;
            indice < retorno_busca_lista_compras.length;
            indice++
          ) {
            popula_option +=
              "<option value='" +
              retorno_busca_lista_compras[indice].codigo_lista +
              "'>" +
              retorno_busca_lista_compras[indice].titulo_lista +
              "</option>";
          }

          $("#itens-lista-cadastrados").append(popula_option);
        }else{
          let select_lista_compras = document.querySelector(
            "#itens-lista-cadastrados"
          );
          
          select_lista_compras.selectedIndex = 0;
        }
      },
      error: function (xhr, status, error) 
      {
        let select_lista_compras = document.querySelector(
          "#itens-lista-cadastrados"
        );
        
        select_lista_compras.selectedIndex = 0;
        $("#corpo-falha-buscar-lista-de-compras-cadastro-itens-lista").html("Falha ao buscar listas de compras:" + error);
        $("#mensagem-falha-buscar-lista-de-compras-cadastro-edita-itens-lista").show();
        $("#mensagem-falha-buscar-lista-de-compras-cadastro-edita-itens-lista").fadeOut(4000);
      },
    });

    $.ajax({
      url: "../api/ProdutosAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_produtos: "buscar_produtos",
      },
      success: function (retorno_buscar_produtos) {
        debugger;
        if(retorno_buscar_produtos != "")
        {
          var popula_opcoes_produtos = "";
          for (
            var indice = 0;
            indice < retorno_buscar_produtos.length;
            indice++
          ) {
            popula_opcoes_produtos +=
              "<option value='" +
              retorno_buscar_produtos[indice].codigo_produto +
              "'> " +
              retorno_buscar_produtos[indice].nome_produto +
              "</option>";
          }
          $("#itens-produtos-cadastrados").append(popula_opcoes_produtos);
          $("#adicionar-item-lista").prop("disabled", false);
        }else{
          $("#itens-produtos-cadastrados").append("<option value='ns'>Nenhum registro localizado</option>");
          $("#adicionar-item-lista").prop("disabled", true);
        }
      },
      error: function (xhr, status, error) 
      {
          $("#corpo-falha-buscar-produtos-cadastro-itens-lista").html("Falha ao buscar produtos:" + error);
          $("#mensagem-falha-buscar-produtos-cadastro-edita-itens-lista").show();
          $("#mensagem-falha-buscar-produtos-cadastro-edita-itens-lista").fadeOut(4000);
      },
    });
  } else if (url_lista_compras === "http://localhost/compras/visao/index.php?pagina=consultar_lista_compras") {
    debugger;

    $("#registros-lista-compras").append("<td colspan='3' class='text-center'>Nenhum registro localizado</td>");

    $.ajax({
      url: "../api/ListaComprasAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_lista_compras: "busca_lista_compras_com_itens",
      },
      success: function (retorno_buscar_lista_compras_com_itens) {
        debugger;

        if(retorno_buscar_lista_compras_com_itens != "")
        {
          let popular_opcoes_listas_compras_com_itens = "";

          for (let indice = 0; indice < retorno_buscar_lista_compras_com_itens.length; indice++) {
            popular_opcoes_listas_compras_com_itens +=
              "<option value='" + retorno_buscar_lista_compras_com_itens[indice].codigo_lista + "'>" + retorno_buscar_lista_compras_com_itens[indice].titulo_lista + "</option>";
          }
  
          $("#lista-compras-com-itens-busca").append(popular_opcoes_listas_compras_com_itens);
        }else{
          let select_pesquisa_lista_compras_itens = document.querySelector(
            "#lista-compras-com-itens-busca"
          );
          
          select_pesquisa_lista_compras_itens.selectedIndex = 0;
  
          $("#corpo-falha-buscar-lista-compras").html("Falha ao buscar lista de compras com itens:" + error);
          $("#mensagem-falha-buscar-lista-compras").show();
          $("#mensagem-falha-buscar-lista-compras").fadeOut(4000);  
        }
      },
      error: function (xhr, status, error) 
      {
        let select_pesquisa_lista_compras_itens = document.querySelector(
          "#lista-compras-com-itens-busca"
        );
        
        select_pesquisa_lista_compras_itens.selectedIndex = 0;

        $("#corpo-falha-buscar-lista-compras").html("Falha ao buscar lista de compras com itens:" + error);
        $("#mensagem-falha-buscar-lista-compras").show();
        $("#mensagem-falha-buscar-lista-compras").fadeOut(4000);
      },
    });
  } else if (url_lista_compras === "http://localhost/compras/visao/index.php?pagina=cadastro_lista_compras&codigo_lista_compras_itens_alterar=" + recebe_codigo_lista_compras_itens_alterar) {
    debugger;

    $.ajax({
      url: "../api/ListaComprasAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_lista_compras: "busca_lista_compras_somente",
      },
      success: function (retorno_busca_lista_compras) {
        debugger;
        if (retorno_busca_lista_compras != "") {

          if(retorno_busca_lista_compras != "")
          {
            var popula_option = "";
            for (
              var indice = 0;
              indice < retorno_busca_lista_compras.length;
              indice++
            ) {
              popula_option +=
                "<option value='" +
                retorno_busca_lista_compras[indice].codigo_lista +
                "'>" +
                retorno_busca_lista_compras[indice].titulo_lista +
                "</option>";
            }

            $("#itens-lista-cadastrados").append(popula_option);
          }else{

            let select_pesquisa_lista_compras_itens = document.querySelector(
              "#itens-lista-cadastrados"
            );
            
            select_pesquisa_lista_compras_itens.selectedIndex = 0;

            $("#mensagem-falha-buscar-lista-de-compras-cadastro-edita-itens-lista").html("Falha ao buscar lista de compras:" + retorno_busca_lista_compras);
            $("#mensagem-falha-buscar-lista-de-compras-cadastro-edita-itens-lista").show();
            $("#mensagem-falha-buscar-lista-de-compras-cadastro-edita-itens-lista").fadeOut(4000);
          }
        }
      },
      error: function (xhr, status, error) 
      {
        let select_pesquisa_lista_compras_itens = document.querySelector(
          "#itens-lista-cadastrados"
        );
        
        select_pesquisa_lista_compras_itens.selectedIndex = 0;

        $("#mensagem-falha-buscar-lista-de-compras-cadastro-edita-itens-lista").html("Falha ao buscar lista de compras:" + error);
        $("#mensagem-falha-buscar-lista-de-compras-cadastro-edita-itens-lista").show();
        $("#mensagem-falha-buscar-lista-de-compras-cadastro-edita-itens-lista").fadeOut(4000);
      },
    });

    $.ajax({
      url: "../api/ProdutosAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_produtos: "buscar_produtos",
      },
      success: function (retorno_buscar_produtos) {
        debugger;
        
        if(retorno_buscar_produtos != "")
        {
          var popula_opcoes_produtos = "";
          for (
            var indice = 0;
            indice < retorno_buscar_produtos.length;
            indice++
          ) {
            popula_opcoes_produtos +=
              "<option value='" +
              retorno_buscar_produtos[indice].codigo_produto +
              "'> " +
              retorno_buscar_produtos[indice].nome_produto +
              "</option>";
          }
          $("#itens-produtos-cadastrados").append(popula_opcoes_produtos);
        }else{
          $("itens-produtos-cadastrados").html("");
          $("#corpo-falha-buscar-produtos-cadastro-itens-lista").html("Falha ao buscar produtos:" + retorno_buscar_produtos);
          $("#mensagem-falha-buscar-produtos-cadastro-edita-itens-lista").show();
          $("#mensagem-falha-buscar-produtos-cadastro-edita-itens-lista").fadeOut(4000);
        }
      },
      error: function (xhr, status, error) 
      {
          $("itens-produtos-cadastrados").html("");
          $("#corpo-falha-buscar-produtos-cadastro-itens-lista").html("Falha ao buscar produtos:" + error);
          $("#mensagem-falha-buscar-produtos-cadastro-edita-itens-lista").show();
          $("#mensagem-falha-buscar-produtos-cadastro-edita-itens-lista").fadeOut(4000);
      },
    });

    $("#titulo-tela-produtos").html("Alterar Lista de Compras");
    let elemento_botao_itens_lista = $("[name='botao_produto']");
    $(elemento_botao_itens_lista).attr("id", "editar-itens-lista");
    $("#editar-itens-lista").html("Editar");

    $("#adicionar-item-lista").prop("disabled", true);

    $("#itens-produtos-cadastrados").prop("disabled", true);

    $.ajax({
      url: "../api/ListaComprasAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_lista_compras: "busca_lista_compras_itens_especifico",
        valor_codigo_lista_compras_itens_especifico: recebe_codigo_lista_compras_itens_alterar
      },
      success: function (retorno_buscar_lista_compras_com_itens) {
        debugger;
        console.log(retorno_buscar_lista_compras_com_itens);
        if (retorno_buscar_lista_compras_com_itens != "") {

          if(retorno_buscar_lista_compras_com_itens != "")
          {
            let recebe_tabela_itens = document.querySelector("#itens-lista-final");

            let recebe_codigo_lista_compras = "";


            for (let indice = 0; indice < retorno_buscar_lista_compras_com_itens.length; indice++) {
              recebe_codigo_lista_compras = retorno_buscar_lista_compras_com_itens[indice].CodigoLista;
              $('#itens-produtos-cadastrados option[value=' + retorno_buscar_lista_compras_com_itens[indice].CodigoItensListaProdutos + ']').prop('selected', true);

              recebe_tabela_itens.innerHTML +=
                "<tr>" +
                "<td><input type='text' class='form-control input-default' name='nome_adicionado' value='" + retorno_buscar_lista_compras_com_itens[indice].NomeDoProduto + "'/>" +
                "<input type='hidden' name='codigo_itens_lista_para_produtos_alterar' id='codigo-itens-lista-para-produtos-alterar' value='" + retorno_buscar_lista_compras_com_itens[indice].CodigoItensListaProdutos + "'/>" +
                "<input type='hidden' name='codigo_itens_lista_alterar' value='" + retorno_buscar_lista_compras_com_itens[indice].CodigoItensLista + "'/>" +
                "</td>" +
                "<td><input type='text' class='form-control input-default' name='quantidade_adicionado' value='" + retorno_buscar_lista_compras_com_itens[indice].Quantidade + "'/></td>" +
                "</tr>";
            }
            $("#itens-lista-cadastrados").val(recebe_codigo_lista_compras);
          }else{
            $("#itens-lista-cadastrados").html("");
            $("#corpo-falha-buscar-lista-com-produtos-edita").html("Falha ao buscara lista de compras com itens:" + retorno_buscar_lista_compras_com_itens);
            $("#mensagem-falha-buscar-lista-com-produtos-edita").show();
            $("#mensagem-falha-buscar-lista-com-produtos-edita").fadeOut(4000);
          }
        }
      },
      error: function (xhr, status, error) {
        $("#itens-lista-cadastrados").html("");
        $("#corpo-falha-buscar-lista-com-produtos-edita").html("Falha ao buscara lista de compras com itens:" + error);
        $("#mensagem-falha-buscar-lista-com-produtos-edita").show();
        $("#mensagem-falha-buscar-lista-com-produtos-edita").fadeOut(4000);
      },
    });
  }
});

$("#lista-compras-com-itens-busca").change(function (e) {
  e.preventDefault();
  debugger;

  $.ajax({
    url: "../api/ListaComprasAPI.php",
    type: "GET",
    dataType: "json",
    data: {
      processo_lista_compras: "busca_lista_compras_itens",
      valor_codigo_lista_compras_itens: $("#lista-compras-com-itens-busca").val()
    },
    success: function (retorno_buscar_lista_compras_itens) {
      debugger;
      if (retorno_buscar_lista_compras_itens != "") {

        let recebe_tabela_lista_compras_itens = document.querySelector("#registros-lista-compras");
        $("#registros-lista-compras").html("");
        for (let indice = 0; indice < retorno_buscar_lista_compras_itens.length; indice++) {
          recebe_tabela_lista_compras_itens.innerHTML +=
            "<tr>" +
            "<td>" + retorno_buscar_lista_compras_itens[indice].NomeDoProduto + "</td>" +
            "<td>" + retorno_buscar_lista_compras_itens[indice].Quantidade + "</td>" +
            "<td><a href='index.php?pagina=cadastro_lista_compras&codigo_lista_compras_itens_alterar=" + retorno_buscar_lista_compras_itens[indice].CodigoLista + "'><i class='fa fa-pencil fa-lg' aria-hidden='true' title='Editar Lista de Compras'></i></a></td>" +
            "<td><a href='#' onclick=excluir_item_lista(" + retorno_buscar_lista_compras_itens[indice].CodigoItensLista + ",event);><i class='fa fa-trash fa-lg' aria-hidden='true' title='Excluir Item Lista'></i></a></td>" +
            "</tr>";
        }

        $("#registros-lista-compras").append(recebe_tabela_lista_compras_itens);
      } else {
        $("#registros-lista-compras").html("");
        $("#registros-lista-compras").append("<td colspan='3' class='text-center'>Nenhum registro localizado</td>");
      }
    },
    error: function (xhr, status, error) 
    {
      let select_pesquisa_lista_compras_itens = document.querySelector(
        "#lista-compras-com-itens-busca"
      );
      
      select_pesquisa_lista_compras_itens.selectedIndex = 0;

      $("#corpo-falha-buscar-lista-compras").html("Falha ao buscar lista de compras com itens:" + error);
      $("#mensagem-falha-buscar-lista-compras").show();
      $("#mensagem-falha-buscar-lista-compras").fadeOut(4000);

      $("#registros-lista-compras").html("");
      $("#registros-lista-compras").append("<td colspan='3' class='text-center'>Nenhum registro localizado</td>");
    },
  });


});

$("#adicionar-item-lista").click(function (e) {
  e.preventDefault();
  debugger;
  let recebe_tabela_itens = document.querySelector("#itens-lista-final");

  if($("#itens-produtos-cadastrados :selected").val() === "ns")
  {
    alert("Favor cadastrar produtos para cadastrar na lista de compras");
  }else{
    $("#itens-produtos-cadastrados :selected").each(function () {
      recebe_tabela_itens.innerHTML +=
        "<tr>" +
        "<td><input type='text' class='form-control input-default' name='nome_adicionado' value='" +
        this.text +
        "'/><input type='hidden' name='codigo_nome_produto' value='" +
        this.value +
        "'/></td>" +
        "<td><input type='text' class='form-control input-default' name='quantidade_adicionado'/></td>" +
        "</tr>";
    });
  }
});

$("#limpar-cadastro-lista-compras-itens").click(function(e){
  e.preventDefault();
  debugger;

  let select_lista_compras = document.querySelector(
    "#itens-lista-cadastrados"
  );
  
  select_lista_compras.selectedIndex = 0;

  $("#itens-produtos-cadastrados").val("");

  $("#itens-lista-final").html("");
});

$(document).on("click", "#cadastrar-lista-itens", function (e) {
  e.preventDefault();
  debugger;

  let lista_codigo = Array();

  let lista_itens_compra = Array();

  let lista_quantidade = Array();

  let recebe_codigo_lista = $("#itens-lista-cadastrados").val();

  $("input[name='codigo_nome_produto']").each(function (indice, valor) {
    lista_itens_compra.push(this.value);
  });

  for (let indice = 0; indice < lista_itens_compra.length; indice++) {
    lista_codigo.push(recebe_codigo_lista);
  }

  $("input[name='quantidade_adicionado']").each(function (indice, valor) {
    lista_quantidade.push(this.value);
  });

  if (
    recebe_codigo_lista != "Selecione" &&
    lista_itens_compra.length > 0 &&
    lista_quantidade.length > 0
  ) {
    $.ajax({
      url: "../api/ItensListaAPI.php",
      type: "post",
      dataType: "json",
      data: {
        processo_itens_lista: "cadastrar_itens_lista",
        valores_codigo_lista_compra: lista_codigo,
        valores_codigo_itens_compra: lista_itens_compra,
        valores_quantidade_itens: lista_quantidade,
      },
      success: function (retorno_cadastra_itens_lista) {
        debugger;
        if (retorno_cadastra_itens_lista != "") {
          $("#corpo-itens-lista-cadastrado").html(
            "Lista de compras cadastrada com sucesso"
          );
          $("#mensagem-itens-lista-cadastrado").show();
          $("#mensagem-itens-lista-cadastrado").fadeOut(4000);
        } else {
          $("#corpo-falha-cadastro-edita-itens-lista").html(
            "Falha ao cadastrar lista de compras:" +
            retorno_cadastra_itens_lista
          );
          $("#mensagem-falha-cadastro-edita-itens-lista").show();
          $("#mensagem-falha-cadastro-edita-itens-lista").fadeOut(4000);
        }
      },
      error: function (xhr, status, error) {
        $("#corpo-falha-cadastro-edita-itens-lista").html(
          "Falha ao cadastrar lista de compras:" + error
        );
        $("#mensagem-falha-cadastro-edita-itens-lista").show();
        $("#mensagem-falha-cadastro-edita-itens-lista").fadeOut(4000);
      },
    });
  } else if (recebe_codigo_lista === "Selecione") {
    $("#corpo-campo-vazio-cadastro-edita-itens-lista").html(
      "Favor selecione a lista de compras que deseja"
    );
    $("#mensagem-campo-vazio-cadastro-edita-itens-lista").show();
    $("#mensagem-campo-vazio-cadastro-edita-itens-lista").fadeOut(4000);
  } else if (lista_itens_compra.length === 0) {
    $("#corpo-campo-vazio-cadastro-edita-itens-lista").html(
      "Favor adicionar os itens que deseja na lista de compras"
    );
    $("#mensagem-campo-vazio-cadastro-edita-itens-lista").show();
    $("#mensagem-campo-vazio-cadastro-edita-itens-lista").fadeOut(4000);
  } else if (lista_quantidade.length === 0) {
    $("#corpo-campo-vazio-cadastro-edita-itens-lista").html(
      "Favor adicionar a quantidade aos itens da lista de compras"
    );
    $("#mensagem-campo-vazio-cadastro-edita-itens-lista").show();
    $("#mensagem-campo-vazio-cadastro-edita-itens-lista").fadeOut(4000);
  }
});

$(document).on("click", "#editar-itens-lista", function (e) {
  e.preventDefault();
  debugger;

  let lista_codigo_produtos_alterar = Array();

  let lista_codigo_itens_lista_alterar = Array();

  let lista_quantidade_alterar = Array();

  let lista_codigo_itens_lista_para_alterar = Array();

  $("input[name='codigo_itens_lista_alterar']").each(function (indice, valor) {
    lista_codigo_itens_lista_para_alterar.push(this.value);
  });

  let recebe_codigo_lista_alterar = $("#itens-lista-cadastrados").val();

  $("input[name='codigo_itens_lista_para_produtos_alterar']").each(function (indice, valor) {
    if (this.value != "") {
      lista_codigo_produtos_alterar.push(this.value);
    } else {
      return;
    }
  });

  for (let indice = 0; indice < lista_codigo_produtos_alterar.length; indice++) {
    lista_codigo_itens_lista_alterar.push(recebe_codigo_lista_alterar);
  }

  $("input[name='quantidade_adicionado']").each(function (indice, valor) {
    lista_quantidade_alterar.push(this.value);
  });

  $.ajax({
    url: "../api/ItensListaAPI.php",
    type: "POST",
    dataType: "json",
    data: {
      processo_itens_lista: "editar_itens_lista",
      valores_codigo_para_lista_alterar: lista_codigo_itens_lista_alterar,
      valores_codigo_para_produtos_alterar: lista_codigo_produtos_alterar,
      valores_quantidade_aterar: lista_quantidade_alterar,
      valores_codigo_itens_lista_alterar: lista_codigo_itens_lista_para_alterar,
      metodo: "PUT",
    },
    success: function (retorno_edita_produtos) {
      debugger;
      if (retorno_edita_produtos === true) {
        $("#corpo-itens-lista-editado").html("Lista de compras alterada com sucesso");
        $("#mensagem-itens-lista-editado").show();
        $("#mensagem-itens-lista-editado").fadeOut(4000);
      } else {
        $("#corpo-falha-cadastro-edita-itens-lista").html("Lista de compras alterada com sucesso");
        $("#mensagem-falha-cadastro-edita-itens-lista").show();
        $("#mensagem-falha-cadastro-edita-itens-lista").fadeOut(4000);
      }
    },
    error: function (xhr, status, error) {
      $("#corpo-falha-cadastro-edita-itens-lista").html(error);
      $("#mensagem-falha-cadastro-edita-itens-lista").show();
      $("#mensagem-falha-cadastro-edita-itens-lista").fadeOut(4000);
    },
  });
});

$("#excluir-lista").click(function (e) {
  e.preventDefault();

  debugger;

  let recebe_codigo_lista_compras_excluir = $("#lista-compras-com-itens-busca").val();

  if (recebe_codigo_lista_compras_excluir != "" && recebe_codigo_lista_compras_excluir != "Selecione") {

    let decisao_excluir_lista_compras = window.confirm("Tem certeza que deseja excluir a lista de compras?");

    if (decisao_excluir_lista_compras === true) {

      let registros_codigo_lista_compras_excluir = Array();

      for (let indice = 0; indice < 1; indice++) {
        var valores_codigo_lista_compras = {
          codigo_lista_compras: recebe_codigo_lista_compras_excluir
        };
      }

      registros_codigo_lista_compras_excluir.push(valores_codigo_lista_compras);

      $.ajax({
        url: "../api/ListaComprasAPI.php",
        type: "DELETE",
        dataType: "json",
        cache: false,
        data: JSON.stringify({
          processo_lista_compras: "excluir_lista_compras",
          lista_codigos_compras: registros_codigo_lista_compras_excluir,
        }),
        success: function (retorno_excluir_lista_compras) {
          debugger;
          if (retorno_excluir_lista_compras === true) {
            $("#corpo-mensagem-lista-compras-excluida-sucesso").html("Lista de compras excluida com sucesso");
            $("#mensagem-lista-compras-excluida-sucesso").show();
            $("#mensagem-lista-compras-excluida-sucesso").fadeOut(4000);

            setTimeout(function () {
              $.ajax({
                url: "../api/ListaComprasAPI.php",
                type: "GET",
                dataType: "json",
                data: {
                  processo_lista_compras: "busca_lista_compras_com_itens",
                },
                success: function (retorno_buscar_lista_compras_com_itens) {
                  debugger;
                  $("#lista-compras-com-itens-busca").html("<option value='Selecione'>Selecione</option>");
                  if (retorno_buscar_lista_compras_com_itens != "") {
                    let popular_opcoes_listas_compras_com_itens = "";

                    for (let indice = 0; indice < retorno_buscar_lista_compras_com_itens.length; indice++) {
                      popular_opcoes_listas_compras_com_itens +=
                        "<option value='" + retorno_buscar_lista_compras_com_itens[indice].codigo_lista + "'>" + retorno_buscar_lista_compras_com_itens[indice].titulo_lista + "</option>";
                    }

                    $("#lista-compras-com-itens-busca").append(popular_opcoes_listas_compras_com_itens);
                    $("#registros-lista-compras").html("");
                    $("#registros-lista-compras").append("<td colspan='3' class='text-center'>Nenhum registro localizado</td>");
                  } else {
                    $("#registros-lista-compras").html("");
                    $("#registros-lista-compras").append("<td colspan='3' class='text-center'>Nenhum registro localizado</td>");
                  }
                },
                error: function (xhr, status, error) {
                  let select_pesquisa_lista_compras_itens = document.querySelector(
                    "#lista-compras-com-itens-busca"
                  );
                  
                  select_pesquisa_lista_compras_itens.selectedIndex = 0;
          
                  $("#corpo-falha-buscar-lista-compras").html("Falha ao buscar lista de compras com itens:" + error);
                  $("#mensagem-falha-buscar-lista-compras").show();
                  $("#mensagem-falha-buscar-lista-compras").fadeOut(4000);
                },
              });
            }, 1000);
          }
        },
        error: function (xhr, status, error) {
          $("#corpo-falha-exclusao-lista-compras").html(error);
          $("#mensagem-falha-exclusao-lista-compras").show();
          $("#mensagem-falha-exclusao-lista-compras").fadeOut(4000);
        },
      });
    } else {
      $("#corpo-falha-exclusao-lista-compras").html("Exclusão cancelada");
      $("#mensagem-falha-exclusao-lista-compras").show();
      $("#mensagem-falha-exclusao-lista-compras").fadeOut(4000);
    }
  } else {
    $("#corpo-falha-exclusao-lista-compras").html("Favor selecionar a lista de compras que deseja excluir");
    $("#mensagem-falha-exclusao-lista-compras").show();
    $("#mensagem-falha-exclusao-lista-compras").fadeOut(4000);
  }
});

$("#pesquisar-lista-por-periodo").click(function(e){
  e.preventDefault();
  debugger;
  
  let recebe_data_lista_compras_data_inicial_americano = $("#data-lista-compras-periodo-inicial").val().split(" ")[0]
  .split("/")
  .reverse()
  .join("-");;

  let recebe_data_lista_compras_data_final_americano = $("#data-lista-compras-periodo-final").val().split(" ")[0]
  .split("/")
  .reverse()
  .join("-");;



  if(recebe_data_lista_compras_data_inicial_americano != "" && recebe_data_lista_compras_data_final_americano != "")
  {
    $.ajax({
      url: "../api/ListaComprasAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_lista_compras: "buscar_lista_compras_por_periodo_especifico",
        valor_data_inicio_periodo:recebe_data_lista_compras_data_inicial_americano,
        valor_data_final_periodo:recebe_data_lista_compras_data_final_americano,
      },
      success: function (retorno_busca_lista_compras_por_periodo_especifico) 
      {
        debugger;

        console.log(retorno_busca_lista_compras_por_periodo_especifico);

        let recebe_tabela_pesquisa_por_periodo = document.querySelector("#registros-lista-compras-por-periodo");

        $("#registros-lista-compras-por-periodo").html("");

        if(retorno_busca_lista_compras_por_periodo_especifico != "")
        {
          for (let indice = 0; indice < retorno_busca_lista_compras_por_periodo_especifico.length; indice++) {
            recebe_tabela_pesquisa_por_periodo += 
            "<tr>"+
              "<td>" + retorno_busca_lista_compras_por_periodo_especifico[indice].nome_da_lista + "</td>"+
              "<td>" + retorno_busca_lista_compras_por_periodo_especifico[indice].nomes_dos_produtos + "</td>"+
              "<td>" + retorno_busca_lista_compras_por_periodo_especifico[indice].total_de_quantidade + "</td>"+
            "</tr>";
          }

          $("#registros-lista-compras-por-periodo").append(recebe_tabela_pesquisa_por_periodo);
        }else{
          $("#registros-lista-compras-por-periodo").html("");
          $("#registros-lista-compras-por-periodo").append("<td colspan='3' class='text-center'>Nenhum registro localizado</td>");
        }
      },
      error:function(xhr,status,error)
      {
        $("#corpo-falha-buscar-por-periodo-lista-compra").html("Falha ao buscar lista de compra por periodo:" + error);
        $("#mensagem-falha-buscar-por-periodo-lista-compra").show();
        $("#mensagem-falha-buscar-por-periodo-lista-compra").fadeOut(4000);
      },
    });
  }else if(recebe_data_lista_compras_data_inicial_americano === "")
  {
    $("#corpo-campo-vazio-procura-por-periodo-lista-compra").html("Favor preencher a data inicial para pesquisar a lista de compras desejada");
    $("#mensagem-campo-vazio-procura-por-periodo-lista-compra").show();
    $("#mensagem-campo-vazio-procura-por-periodo-lista-compra").fadeOut(4000);
  }else if(recebe_data_lista_compras_data_final_americano === "")
  {
    $("#corpo-campo-vazio-procura-por-periodo-lista-compra").html("Favor preencher a data final para pesquisar a lista de compras desejada");
    $("#mensagem-campo-vazio-procura-por-periodo-lista-compra").show();
    $("#mensagem-campo-vazio-procura-por-periodo-lista-compra").fadeOut(4000);
  }
});

function excluir_item_lista(recebe_codigo_itens_lista,event)
{
  event.preventDefault();

  debugger;

  let recebe_decisao_excluir_itens_lista = window.confirm("Tem certeza que deseja excluir o item da lista de compras?");

  if(recebe_decisao_excluir_itens_lista === true)
  {
    if(recebe_codigo_itens_lista != "")
    {
      let registros_codigo_itens_lista_excluir = Array();

      for (let indice = 0; indice < 1; indice++) {
        var valores_codigo_itens_lista = {
          codigo_itens_lista: recebe_codigo_itens_lista
        };
      }

      registros_codigo_itens_lista_excluir.push(valores_codigo_itens_lista);

      $.ajax({
        url: "../api/ItensListaAPI.php",
        type: "DELETE",
        dataType: "json",
        cache: false,
        data: JSON.stringify({
          processo_itens_lista: "excluir_itens_lista_compras",
          lista_codigos_itens_lista_compras: registros_codigo_itens_lista_excluir,
        }),
        success: function (retorno_excluir_itens_lista) 
        {
          debugger;
          if(retorno_excluir_itens_lista === true)
          {
            $("#corpo-mensagem-item-lista-excluido-sucesso").html("Item excluído com sucesso da lista de compras");
            $("#mensagem-item-lista-excluido-sucesso").show();
            $("#mensagem-item-lista-excluido-sucesso").fadeOut(4000);

            setTimeout(function () {
              $.ajax({
                url: "../api/ListaComprasAPI.php",
                type: "GET",
                dataType: "json",
                data: {
                  processo_lista_compras: "busca_lista_compras_itens",
                  valor_codigo_lista_compras_itens: $("#lista-compras-com-itens-busca").val()
                },
                success: function (retorno_buscar_lista_compras_itens) {
                  debugger;
                  if (retorno_buscar_lista_compras_itens != "") {
                    let recebe_tabela_lista_compras_itens = document.querySelector("#registros-lista-compras");
                    $("#registros-lista-compras").html("");
                    for (let indice = 0; indice < retorno_buscar_lista_compras_itens.length; indice++) {
                      recebe_tabela_lista_compras_itens.innerHTML +=
                        "<tr>" +
                        "<td>" + retorno_buscar_lista_compras_itens[indice].NomeDoProduto + "</td>" +
                        "<td>" + retorno_buscar_lista_compras_itens[indice].Quantidade + "</td>" +
                        "<td><a href='index.php?pagina=cadastro_lista_compras&codigo_lista_compras_itens_alterar=" + retorno_buscar_lista_compras_itens[indice].CodigoLista + "'><i class='fa fa-pencil fa-lg' aria-hidden='true' title='Editar Lista de Compras'></i></a></td>" +
                        //  "<td><a href='#' onclick=excluir_lista(" + retorno_buscar_lista_compras_itens[indice].Codigo_Lista + ",event);><i class='fa fa-trash fa-lg' aria-hidden='true' title='Excluir Lista'></i></a></td>"+
                        "<td><a href='#' onclick=excluir_item_lista(" + retorno_buscar_lista_compras_itens[indice].CodigoItensLista + ",event);><i class='fa fa-trash fa-lg' aria-hidden='true' title='Excluir Item Lista'></i></a></td>" +
                        "</tr>";
                    }
            
                    $("#registros-lista-compras").append(recebe_tabela_lista_compras_itens);
                  } else {
                    $("#registros-lista-compras").html("");
                    $("#registros-lista-compras").append("<td colspan='3' class='text-center'>Nenhum registro localizado</td>");
                  }
                },
                error: function (xhr, status, error) {
                  let select_pesquisa_lista_compras_itens = document.querySelector(
                    "#lista-compras-com-itens-busca"
                  );
                  
                  select_pesquisa_lista_compras_itens.selectedIndex = 0;
            
                  $("#corpo-falha-buscar-lista-compras").html("Falha ao buscar lista de compras com itens:" + error);
                  $("#mensagem-falha-buscar-lista-compras").show();
                  $("#mensagem-falha-buscar-lista-compras").fadeOut(4000);
            
                  $("#registros-lista-compras").html("");
                  $("#registros-lista-compras").append("<td colspan='3' class='text-center'>Nenhum registro localizado</td>");
                },
              });
            },1000);
          }else{
            $("#corpo-falha-exclusao-item-lista").html("Falha ao excluir item da lista de compras");
            $("#mensagem-falha-exclusao-item-lista").show();
            $("#mensagem-falha-exclusao-item-lista").fadeOut(4000);
          }
        },
        error:function(xhr,status,error)
        {
          $("#corpo-falha-exclusao-item-lista").html("Falha ao excluir item da lista de compras:" + error);
          $("#mensagem-falha-exclusao-item-lista").show();
          $("#mensagem-falha-exclusao-item-lista").fadeOut(4000);
        },
      });
    }else{
      $("#corpo-falha-exclusao-item-lista").html("Falha ao excluir item da lista de compras, favor escolher o item para exclusão");
      $("#mensagem-falha-exclusao-item-lista").show();
      $("#mensagem-falha-exclusao-item-lista").fadeOut(4000);
    }
  }else{
      $("#corpo-falha-exclusao-item-lista").html("Exclusão cancelada com sucesso");
      $("#mensagem-falha-exclusao-item-lista").show();
      $("#mensagem-falha-exclusao-item-lista").fadeOut(4000);
  }
}