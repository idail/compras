$(document).ready(function (e) {
  $("#mensagem-campo-vazio-cadastro-edita-produto").hide();

  $("#mensagem-produto-cadastrado").hide();

  $("#mensagem-produto-editado").hide();

  $("#mensagem-falha-cadastro-edita-produto").hide();

  debugger;

  let url_produtos = window.location.href;

  let url_alterar_produto = "codigo_produto=";

  let indice_busca_codigo_produto = url_produtos.indexOf(url_alterar_produto);

  let recebe_codigo_produto = "";

  recebe_codigo_produto = url_produtos.substring(indice_busca_codigo_produto + 15);

  
  if(url_produtos === "http://localhost/compras/visao/index.php?pagina=consultar_produtos")
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
            "<td><a href='index.php?pagina=cadastrar_produtos&codigo_produto="+retorno_buscar_produtos[indice].codigo_produto+"'><i class='fa fa-pencil fa-lg' aria-hidden='true' title='Editar Produto'></i></a></td>"+
            "<td><a href='#' onclick=excluir_registro_produto("+retorno_buscar_produtos[indice].codigo_produto+",event);><i class='fa fa-trash fa-lg' aria-hidden='true' title='Excluir Produto'></i></a></td>"+
            "</tr>";
          }

          $("#registros-produtos").append(recebe_tabela_produtos);
        }else{
          $("#registros-produtos").append("<td colspan='2' class='text-center'>Nenhum registro localizado</td>>");
        }
      },
      error:function(xhr,status,error)
      {

      },
    });
  }else if(url_produtos === "http://localhost/compras/visao/index.php?pagina=cadastrar_produtos&codigo_produto="+recebe_codigo_produto)
  {
      $("#titulo-tela-produtos").html("Alteração");
      let elemento_botao_produto = $("[name='botao_produto']");
      $(elemento_botao_produto).attr("id", "editar-produto");
      $("#editar-produto").html("Editar");

      $.ajax({
        url: "../api/ProdutosAPI.php",
        type: "GET",
        dataType: "json",
        data: {
          processo_produtos: "buscar_produtos_especificos",
          valor_codigo_produto:recebe_codigo_produto
        },
        success: function (retorno_buscar_produtos) 
        {
          debugger;
          if(retorno_buscar_produtos != "")
          {
            $("#nome-produto").val(retorno_buscar_produtos.nome_produto);
            $("#codigo-produto-alterar").val(retorno_buscar_produtos.codigo_produto);
          }
        },
        error:function(xhr,status,error)
        {
          console.log(error);
        },
      });
  }
});

$(document).on("click","#cadastrar-produto",function(e){
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
            $("#corpo-falha-cadastro-edita-produto").html("Produto já cadastrado");
            $("#mensagem-falha-cadastro-edita-produto").show();
            $("#mensagem-falha-cadastro-edita-produto").fadeOut(4000);
          } else {
            $("#corpo-produto-cadastrado").html(
              "Produto cadastrada com sucesso"
            );
            $("#mensagem-produto-cadastrado").show();
            $("#mensagem-produto-cadastrado").fadeOut(4000);
          }
        } else {
          $("#corpo-falha-cadastro-edita-produto").html("Falha ao inserir produto");
          $("#mensagem-falha-cadastro-edita-produto").show();
          $("#mensagem-falha-cadastro-edita-produto").fadeOut(4000);
        }
      },
      error: function (xhr, status, error) {
        $("#corpo-falha-cadastro-edita-produto").html(
          "Falha ao inserir produto:" + error
        );
        $("#mensagem-falha-cadastro-edita-produto").show();
        $("#mensagem-falha-cadastro-edita-produto").fadeOut(4000);
      },
    });
  } else {
    $("#corpo-campo-vazio-cadastro-edita-produto").html(
      "Favor preencher o nome do produto"
    );
    $("#mensagem-campo-vazio-cadastro-edita-produto").show();
    $("#mensagem-campo-vazio-cadastro-edita-produto").fadeOut(4000);
    $("#nome-produto").focus();
  }
});

$(document).on("click","#editar-produto",function(e){
  e.preventDefault();
  
  debugger;
  let recebe_nome_produto_alterar = $("#nome-produto").val();

  let recebe_codigo_produto_alterar = $("#codigo-produto-alterar").val();

  if(recebe_nome_produto_alterar != "")
  {
    $.ajax({
      url: "../api/ProdutosAPI.php",
      type: "POST",
      dataType: "json",
      data: {
        processo_produtos: "editar_produtos",
        valor_nome_produtos_editar: recebe_nome_produto_alterar,
        valor_codigo_produtos_editar:recebe_codigo_produto_alterar,
        metodo:"PUT",
      },
      success: function (retorno_edita_produtos) 
      {
        debugger;
        if (retorno_edita_produtos != "") {
          if (retorno_edita_produtos === "produto ja cadastrado") {
            $("#corpo-falha-cadastro-edita-produto").html("Produto já cadastrado");
            $("#mensagem-falha-cadastro-edita-produto").show();
            $("#mensagem-falha-cadastro-edita-produto").fadeOut(4000);
          } else {
            $("#corpo-produto-editado").html(
              "Produto editado com sucesso"
            );
            $("#mensagem-produto-editado").show();
            $("#mensagem-produto-editado").fadeOut(4000);
          }
        } else {
          $("#corpo-falha-cadastro-edita-produto").html("Falha ao editar produto");
          $("#mensagem-falha-cadastro-edita-produto").show();
          $("#mensagem-falha-cadastro-edita-produto").fadeOut(4000);
        }
      },
      error:function(xhr,status,error)
      {
        $("#corpo-falha-cadastro-edita-produto").html(
          "Falha ao editar produto:" + error
        );
        $("#mensagem-falha-cadastro-edita-produto").show();
        $("#mensagem-falha-cadastro-edita-produto").fadeOut(4000);
      },
    });
  }else{
    $("#corpo-campo-vazio-cadastro-edita-produto").html(
      "Favor preencher o nome do produto"
    );
    $("#mensagem-campo-vazio-cadastro-edita-produto").show();
    $("#mensagem-campo-vazio-cadastro-edita-produto").fadeOut(4000);
    $("#nome-produto").focus();
  }
});

function excluir_registro_produto(recebe_codigo_produto,e)
{
  e.preventDefault();

  let decisao_deletar_produto = window.confirm("Tem certeza que deseja deletar o produto?");

  if(decisao_deletar_produto === true)
  {
    if(recebe_codigo_produto != "")
    {
      $.ajax({
        url: "../api/ProdutosAPI.php",
        type: "DELETE",
        dataType: "json",
        cache: false,
        data: JSON.stringify({
          processo_produtos: "deletar_produtos",
          valor_codigo_produto_deletar: recebe_codigo_produto,
        }),
        success: function (retorno_deletar_produtos) 
        { 
          debugger;

          if(retorno_deletar_produtos === true)
          {
            toastr.success("Produto deletado com sucesso", {
              timeOut: 5e3,
              closeButton: !0,
              debug: !1,
              newestOnTop: !0,
              progressBar: !0,
              positionClass: "toast-top-right",
              preventDuplicates: !0,
              onclick: null,
              showDuration: "300",
              hideDuration: "1000",
              extendedTimeOut: "1000",
              showEasing: "swing",
              hideEasing: "linear",
              showMethod: "fadeIn",
              hideMethod: "fadeOut",
              tapToDismiss: !1,
            });
          }else{
            toastr.error("Falha ao deletar produto", {
              positionClass: "toast-top-right",
              timeOut: 5e3,
              closeButton: !0,
              debug: !1,
              newestOnTop: !0,
              progressBar: !0,
              preventDuplicates: !0,
              onclick: null,
              showDuration: "300",
              hideDuration: "1000",
              extendedTimeOut: "1000",
              showEasing: "swing",
              hideEasing: "linear",
              showMethod: "fadeIn",
              hideMethod: "fadeOut",
              tapToDismiss: !1,
            });
          }
        },
        error:function(xhr,status,error)
        {

        },
      });
    }
  }else
  {
    return;
  }
}