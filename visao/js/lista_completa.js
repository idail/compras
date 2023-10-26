$(document).ready(function (e) {
  let url_lista_compras = window.location.href;

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
  }
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
      "'/><input type='hidden' name='codigo_nome_produto' value='" + this.value + "'/></td>" +
      "<td><input type='text' class='form-control input-default' name='quantidade_adicionado'/></td>" +
      "</tr>";
  });

  // $("#itens-lista-final").append(recebe_tabela_itens);

  //popular_select_lists_produtos();
});

$("#cadastrar-lista-itens").click(function (e) {
  e.preventDefault();
  debugger;

  let lista_codigo = Array();

  let lista_itens_compra = Array();

  let lista_quantidade = Array();

  let recebe_codigo_lista = $("#itens-lista-cadastrados").val();
  
  $("input[name='codigo_nome_produto']").each(function (indice, valor)
  {
    lista_itens_compra.push(this.value);
  });

  for (let indice = 0; indice < lista_itens_compra.length; indice++)
  {
    lista_codigo.push(recebe_codigo_lista);
  }

  $("input[name='quantidade_adicionado']").each(function (indice, valor) 
  {
    lista_quantidade.push(this.value);
  });

  $.ajax({
    url: "../api/ItensListaAPI.php",
    type: "post",
    dataType: "json",
    data: {
      processo_itens_lista: "cadastrar_itens_lista",
      valores_codigo_lista_compra:lista_codigo,
      valores_codigo_itens_compra:lista_itens_compra,
      valores_quantidade_itens:lista_quantidade,
    },
    success: function (retorno_cadastra_itens_lista) 
    {
      debugger;
      console.log(retorno_cadastra_itens_lista);
    },
    error:function(xhr,status,error)
    {

    },
  });
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
