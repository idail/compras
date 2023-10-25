<?php
require("../controladora/ProdutosControladora.php");

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: *");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    if (isset($_POST["processo_produtos"])) {

        if ($_POST["processo_produtos"] === "cadastrar_produtos") 
        {
            if(isset($_POST["valor_nome_produtos"]))
            {
                $produtos_controladora = new ProdutosControladora();

                $resultado_CadastrarProdutos = $produtos_controladora->cadastrarProdutos(htmlspecialchars($_POST["valor_nome_produtos"]));
                
                echo json_encode($resultado_CadastrarProdutos);
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
        }
    }
}
?>