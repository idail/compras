$(document).ready(function (e) {
  $("#mensagem-campo-vazio-cadastro-produto").hide();

  $("#mensagem-produto-cadastrado").hide();

  $("#mensagem-falha-cadastro-produto").hide();

  let url_atual_buscar_produtos = window.location.href;

  if(url_atual_buscar_produtos === "http://localhost/compras/visao/index.php?pagina=consultar_produtos")
  {
    debugger;
    $.ajax({
      url: "../api/ProdutosAPI.php",
      type: "GET",
      dataType: "json",
      data: {
        processo_produtos: "buscar_produtos",
      },
      success: function (retorno_buscar_produtos) 
      {
        debugger;
        let recebe_tabela_produtos = document.querySelector("#registros-produtos");

        if(retorno_buscar_produtos != "")
        {
          $("#registros-produtos").html("");
          for(var indice = 0;indice < retorno_buscar_produtos.length;indice++)
          {
            recebe_tabela_produtos.innerHTML +=
            "<tr>"+
            "<td>"+retorno_buscar_produtos[indice].nome_produto+"</td>"+
            "<td><a href='#' onclick=alterar_registro_produto("+retorno_buscar_produtos[indice].codigo_produto+",event);><i class='fa fa-pencil fa-lg' aria-hidden='true' title='Editar Produto'></i></a></td>"+
            "<td><a href='#' onclick=excluir_registro_produto("+retorno_buscar_produtos[indice].codigo_produto+",event);><i class='fa fa-trash fa-lg' aria-hidden='true' title='Excluir Produto'></i></a></td>"+
            "</tr>";
          }

          $("#registros-produtos").append(recebe_tabela_produtos);
        }else{
          $("#registros-produtos").append("Nenhum registro localizado");
        }
      },
      error:function(xhr,status,error)
      {

      },
    });
  }
});

$("#cadastrar-produto").click(function (e) {
  e.preventDefault();

  debugger;

  let recebe_nome_produto = $("#nome-produto").val();

  if (recebe_nome_produto != "") {
    $.ajax({
      url: "../api/ProdutosAPI.php",
      type: "POST",
      dataType: "json",
      data: {
        processo_produtos: "cadastrar_produtos",
        valor_nome_produtos: recebe_nome_produto,
      },
      success: function (retorno_cadastro_produtos) {
        debugger;
        if (retorno_cadastro_produtos != "") {
          if (retorno_cadastro_produtos === "produto ja cadastrado") {
            $("#corpo-falha-cadastro-produto").html("Produto já cadastrado");
            $("#mensagem-falha-cadastro-produto").show();
            $("#mensagem-falha-cadastro-produto").fadeOut(4000);
          } else {
            $("#corpo-produto-cadastrado").html(
              "Produto cadastrada com sucesso"
            );
            $("#mensagem-produto-cadastrado").show();
            $("#mensagem-produto-cadastrado").fadeOut(4000);
          }
        } else {
          $("#corpo-falha-cadastro-produto").html("Falha ao inserir produto");
          $("#mensagem-falha-cadastro-produto").show();
          $("#mensagem-falha-cadastro-produto").fadeOut(4000);
        }
      },
      error: function (xhr, status, error) {
        $("#corpo-falha-cadastro-produto").html(
          "Falha ao inserir produto:" + error
        );
        $("#mensagem-falha-cadastro-produto").show();
        $("#mensagem-falha-cadastro-produto").fadeOut(4000);
      },
    });
  } else {
    $("#corpo-campo-vazio-cadastro-produto").html(
      "Favor preencher o nome do produto"
    );
    $("#mensagem-campo-vazio-cadastro-produto").show();
    $("#mensagem-campo-vazio-cadastro-produto").fadeOut(4000);
    $("#nome-produto").focus();
  }
});

function alterar_registro_produto(recebe_codigo_produto,e)
{
  e.preventDefault();
  
}

function excluir_registro_produto(recebe_codigo_produto,e)
{
  e.preventDefault();
  
}