$(document).ready(function (e) {
  debugger;

  $("#mensagem-campo-vazio-cadastro-lista-compras").hide();

  $("#mensagem-lista-compras-cadastrado").hide();

  $("#mensagem-falha-cadastro-lista-compras").hide();
});

$("#cadastrar-lista-compra").click(function (e) {
  e.preventDefault();

  debugger;

  let recebe_titulo_lista_compras = $("#titulo-lista-compras").val();

  if (recebe_titulo_lista_compras != "") {
    $.ajax({
      url: "../api/ListaComprasAPI.php",
      type: "POST",
      dataType: "json",
      data: {
        processo_lista_compras: "cadastrar_lista_compras",
        valor_titulo_lista_compras: recebe_titulo_lista_compras,
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
  } else {
    $("#corpo-campo-vazio-cadastro-lista-compras").html(
      "Favor preencher o título da lista de compras"
    );
    $("#mensagem-campo-vazio-cadastro-lista-compras").show();
    $("#mensagem-campo-vazio-cadastro-lista-compras").fadeOut(4000);
    $("#titulo-lista-compras").focus();
  }
});