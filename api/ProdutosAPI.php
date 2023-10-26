<?php
require("../controladora/ProdutosControladora.php");

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: *");

$produtos_controladora = new ProdutosControladora();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    if (isset($_POST["processo_produtos"])) {

        if ($_POST["processo_produtos"] === "cadastrar_produtos") 
        {
            if(isset($_POST["valor_nome_produtos"]))
            {
                $resultado_CadastrarProdutos = $produtos_controladora->cadastrarProdutos(htmlspecialchars($_POST["valor_nome_produtos"]));
                
                echo json_encode($resultado_CadastrarProdutos);
            }
        }else if($_POST["processo_produtos"] === "editar_produtos")
        {
            if($_POST["metodo"] === "PUT")
            {
                if(isset($_POST["valor_nome_produtos_editar"]) && isset($_POST["valor_codigo_produtos_editar"]))
                {
                    $resultado_EditarProdutos = 
                    $produtos_controladora->editarProdutos(htmlspecialchars($_POST["valor_nome_produtos_editar"]),$_POST["valor_codigo_produtos_editar"]);

                    echo json_encode($resultado_EditarProdutos);
                }
            }
        }
    }
}else if($_SERVER["REQUEST_METHOD"] === "GET")
{
    if(isset($_GET["processo_produtos"]))
    {
        if($_GET["processo_produtos"] === "buscar_produtos")
        {
            $produtos_controladora = new ProdutosControladora();

            $resultado_BuscarProdutos = $produtos_controladora->buscarProdutos();

            echo json_encode($resultado_BuscarProdutos);
        }else if($_GET["processo_produtos"] === "buscar_produtos_especificos")
        {
            $resultado_BuscarProdutosEspecificos = $produtos_controladora->buscaProdutosEspecificos($_GET["valor_codigo_produto"]);
            echo json_encode($resultado_BuscarProdutosEspecificos);            
        }
    }
}else if($_SERVER["REQUEST_METHOD"] === "DELETE")
{
    $recebe_processo_produtos = json_decode(file_get_contents("php://input", true));

    if($recebe_processo_produtos->processo_produtos === "deletar_produtos")
    {
        $resultado_DeletarProdutos = $produtos_controladora->deletarProdutos($recebe_processo_produtos->valor_codigo_produto_deletar);

        echo json_encode($resultado_DeletarProdutos);
    }
}
?>