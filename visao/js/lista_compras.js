$(document).ready(function (e) {
  debugger;

  $("#mensagem-campo-vazio-cadastro-lista-compras").hide();

  $("#mensagem-lista-compras-cadastrado").hide();

  $("#mensagem-falha-cadastro-lista-compras").hide();

  debugger;

  // let url_lista_compras = window.location.href;

  // if(url_lista_compras === "http://localhost/compras/visao/index.php?pagina=cadastrar_lista&codigo_lista_alterar=" + recebe_codigo_lista)
  // {

  // }
});

$("#cadastrar-lista-compra").click(function (e) {
  e.preventDefault();

  debugger;

  let recebe_titulo_lista_compras = $("#titulo-lista-compras").val();

  let recebe_data_lista_compras = $("#data-lista-compras").val().split(" ")[0]
  .split("/")
  .reverse()
  .join("-");

  if (recebe_titulo_lista_compras != "" && recebe_data_lista_compras != "") {
    $.ajax({
      url: "../api/ListaComprasAPI.php",
      type: "POST",
      dataType: "json",
      data: {
        processo_lista_compras: "cadastrar_lista_compras",
        valor_titulo_lista_compras: recebe_titulo_lista_compras,
        valor_data_lista_compras:recebe_data_lista_compras,
      },
      success: function (retorno_cadastro_lista_compras) {
        debugger;
        if (retorno_cadastro_lista_compras != "") {
          $("#corpo-lista-compras-cadastrado").html(
            "Lista de compras cadastrada com sucesso"
          );
          $("#mensagem-lista-compras-cadastrado").show();
          $("#mensagem-lista-compras-cadastrado").fadeOut(4000);
        } else {
          $("#corpo-falha-cadastro-lista-compras").html(
            "Falha ao inserir lista de compras"
          );
          $("#mensagem-falha-cadastro-lista-compras").show();
          $("#mensagem-falha-cadastro-lista-compras").fadeOut(4000);
        }
      },
      error: function (xhr, status, error) {
        $("#corpo-falha-cadastro-lista-compras").html(
          "Falha ao inserir lista de compras:" + error
        );
        $("#mensagem-falha-cadastro-lista-compras").show();
        $("#mensagem-falha-cadastro-lista-compras").fadeOut(4000);
      },
    });
  } else if(recebe_titulo_lista_compras === ""){
    $("#corpo-campo-vazio-cadastro-lista-compras").html(
      "Favor preencher o título da lista de compras"
    );
    $("#mensagem-campo-vazio-cadastro-lista-compras").show();
    $("#mensagem-campo-vazio-cadastro-lista-compras").fadeOut(4000);
    $("#titulo-lista-compras").focus();
  } else if(recebe_data_lista_compras === "")
  {
    $("#corpo-campo-vazio-cadastro-lista-compras").html(
      "Favor preencher a data da lista de compras"
    );
    $("#mensagem-campo-vazio-cadastro-lista-compras").show();
    $("#mensagem-campo-vazio-cadastro-lista-compras").fadeOut(4000);
    $("#data-lista-compras").focus();
  }
});