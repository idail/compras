$(document).ready(function (e) {
  $("#mensagem-campo-vazio-cadastro-edita-itens-lista").hide();

  $("#mensagem-itens-lista-cadastrado").hide();

  $("#mensagem-itens-lista-editado").hide();

  $("#mensagem-falha-cadastro-edita-itens-lista").hide();
  
  debugger;

  let url_lista_compras = window.location.href;

  let url_alterar_lista_compras = "codigo_lista_compras_itens_alterar=";

  let indice_busca_codigo_lista = url_lista_compras.indexOf(url_alterar_lista_compras);

  let recebe_codigo_lista_compras_itens_alterar = url_lista_compras.substring(indice_busca_codigo_lista + 35);

  console.log(recebe_codigo_lista_compras_itens_alterar);

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
        }
      },
      error: function (xhr, status, error) {},
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
        console.log(retorno_buscar_produtos);
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
      },
      error: function (xhr, status, error) {},
    });
  }else if(url_lista_compras === "http://localhost/compras/visao/index.php?pagina=consultar_lista_compras")
  {
    debugger;

    $.ajax({
      url: "../api/ListaComprasAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_lista_compras: "busca_lista_compras_com_itens",
      },
      success: function (retorno_buscar_lista_compras_com_itens) 
      {
        debugger;
        let popular_opcoes_listas_compras_com_itens = "";

        for (let indice = 0; indice < retorno_buscar_lista_compras_com_itens.length; indice++)
        {
          popular_opcoes_listas_compras_com_itens +=
          "<option value='" + retorno_buscar_lista_compras_com_itens[indice].codigo_lista + "'>" + retorno_buscar_lista_compras_com_itens[indice].titulo_lista + "</option>";
        }

        $("#lista-compras-com-itens-busca").append(popular_opcoes_listas_compras_com_itens);
      },
      error:function(xhr,status,error)
      {
        console.log(error);
      },
    });

    /*$.ajax({
      url: "../api/ListaComprasAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_lista_compras: "busca_lista_compras_itens",
      },
      success: function (retorno_buscar_lista_compras_itens) 
      {
        debugger;
        console.log(retorno_buscar_lista_compras_itens);
        $("#registros-lista-compras").html("");
        if(retorno_buscar_lista_compras_itens != "")
        {
           let recebe_tabela_lista_compras_itens = document.querySelector("#registros-lista-compras");

           for (let indice = 0; indice < retorno_buscar_lista_compras_itens.length; indice++) {
            recebe_tabela_lista_compras_itens.innerHTML +=
            "<tr>"+
             "<td>" + retorno_buscar_lista_compras_itens[indice].ListaDeCompras + "</td>"+
             "<td>" + retorno_buscar_lista_compras_itens[indice].Produto + "</td>"+
             "<td><a href='index.php?pagina=cadastro_lista_compras&codigo_lista_compras_itens_alterar=" + retorno_buscar_lista_compras_itens[indice].Codigo_Lista + "'><i class='fa fa-pencil fa-lg' aria-hidden='true' title='Editar Lista'></i></a></td>"+
             "<td><a href='#' onclick=excluir_lista(" + retorno_buscar_lista_compras_itens[indice].Codigo_Lista + ",event);><i class='fa fa-trash fa-lg' aria-hidden='true' title='Excluir Lista'></i></a></td>"+
             "<td><a href='#' onclick=excluir_item_lista(" + retorno_buscar_lista_compras_itens[indice].Codigo_Item_Lista + ",event);><i class='fa fa-trash fa-lg' aria-hidden='true' title='Excluir Item Lista'></i></a></td>"+
            "</tr>";
           }

           $("#registros-lista-compras").append(recebe_tabela_lista_compras_itens);
        }
      },
      error:function(xhr,status,error)
      {
        console.log(error);
      },
    });*/
  }else if(url_lista_compras === "http://localhost/compras/visao/index.php?pagina=cadastro_lista_compras&codigo_lista_compras_itens_alterar="+recebe_codigo_lista_compras_itens_alterar)
  {
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
        }
      },
      error: function (xhr, status, error) {},
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
        console.log(retorno_buscar_produtos);
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
      },
      error: function (xhr, status, error) {},
    });

    $.ajax({
      url: "../api/ListaComprasAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_lista_compras: "busca_lista_compras_itens_especifico",
        valor_codigo_lista_compras_itens_especifico:recebe_codigo_lista_compras_itens_alterar
      },
      success: function (retorno_buscar_lista_compras_com_itens) 
      {
        debugger;
        console.log(retorno_buscar_lista_compras_com_itens);
        if(retorno_buscar_lista_compras_com_itens != "")
        {
          let recebe_tabela_itens = document.querySelector("#itens-lista-final");

          let recebe_codigo_lista_compras = "";


          for (let indice = 0; indice < retorno_buscar_lista_compras_com_itens.length; indice++) 
          {
            recebe_codigo_lista_compras = retorno_buscar_lista_compras_com_itens[indice].CodigoLista; 
            $('#itens-produtos-cadastrados option[value=' + retorno_buscar_lista_compras_com_itens[indice].CodigoItensListaProdutos + ']').prop('selected', true);

            recebe_tabela_itens.innerHTML +=
            "<tr>" +
              "<td><input type='text' class='form-control input-default' name='nome_adicionado' value='" + retorno_buscar_lista_compras_com_itens[indice].NomeDoProduto +
              "'/><input type='hidden' name='codigo_nome_produto' value='" + retorno_buscar_lista_compras_com_itens[indice].CodigoItensLista + "'/></td>" +
              "<td><input type='text' class='form-control input-default' name='quantidade_adicionado' value='" + retorno_buscar_lista_compras_com_itens[indice].Quantidade + "'/></td>" +
            "</tr>";
          }
          $("#itens-lista-cadastrados").val(recebe_codigo_lista_compras);
        }
      },
      error:function(xhr,status,error)
      {
        console.log(error);
      },
    });
  }
});

$("#lista-compras-com-itens-busca").change(function(e){
  e.preventDefault();
  debugger;

  $.ajax({
    url: "../api/ListaComprasAPI.php",
    type: "GET",
    dataType: "json",
    data: {
      processo_lista_compras: "busca_lista_compras_itens",
      valor_codigo_lista_compras_itens:$("#lista-compras-com-itens-busca").val()
    },
    success: function (retorno_buscar_lista_compras_itens) 
    {
      debugger;
      let recebe_tabela_lista_compras_itens = document.querySelector("#registros-lista-compras");
      $("#registros-lista-compras").html("");
           for (let indice = 0; indice < retorno_buscar_lista_compras_itens.length; indice++) {
            recebe_tabela_lista_compras_itens.innerHTML +=
            "<tr>"+
             "<td>" + retorno_buscar_lista_compras_itens[indice].NomeDoProduto + "</td>"+
             "<td><a href='index.php?pagina=cadastro_lista_compras&codigo_lista_compras_itens_alterar=" + retorno_buscar_lista_compras_itens[indice].CodigoLista + "'><i class='fa fa-pencil fa-lg' aria-hidden='true' title='Editar Lista de Compras'></i></a></td>"+
            //  "<td><a href='#' onclick=excluir_lista(" + retorno_buscar_lista_compras_itens[indice].Codigo_Lista + ",event);><i class='fa fa-trash fa-lg' aria-hidden='true' title='Excluir Lista'></i></a></td>"+
             "<td><a href='#' onclick=excluir_item_lista(" + retorno_buscar_lista_compras_itens[indice].Codigo_Item_Lista + ",event);><i class='fa fa-trash fa-lg' aria-hidden='true' title='Excluir Item Lista'></i></a></td>"+
            "</tr>";
           }

           $("#registros-lista-compras").append(recebe_tabela_lista_compras_itens);
    },
    error:function(xhr,status,error)
    {
      consolelo.log(error);
    },
  });
});

$("#adicionar-item-lista").click(function (e) {
  e.preventDefault();
  debugger;
  let recebe_tabela_itens = document.querySelector("#itens-lista-final");

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
});

$("#cadastrar-lista-itens").click(function (e) {
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

// function popular_select_lists_produtos() {
//   $.ajax({
//     url: "../api/ProdutosAPI.php",
//     type: "GET",
//     dataType: "json",
//     data: {
//       processo_produtos: "buscar_produtos",
//     },
//     success: function (retorno_buscar_produtos) {
//       debugger;
//       console.log(retorno_buscar_produtos);
//       var popula_opcoes_produtos = "";
//       for (var indice = 0; indice < retorno_buscar_produtos.length; indice++) {
//         popula_opcoes_produtos +=
//           "<option value='" +
//           retorno_buscar_produtos[indice].codigo_produto +
//           "'> " +
//           retorno_buscar_produtos[indice].nome_produto +
//           "</option>";
//       }
//       $("#itens-selecionar").append(popula_opcoes_produtos);
//     },
//     error: function (xhr, status, error) {},
//   });
// }
