<?php
require("../controladora/ItensListaControladora.php");

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: *");

$itens_lista_controladora = new ItensListaControladora();

if ($_SERVER["REQUEST_METHOD"] === "POST") 
{
    if($_POST["processo_itens_lista"] === "cadastrar_itens_lista")
    {
        $resultado_CadastrarItensLista = $itens_lista_controladora->cadastrarItensLista($_POST["valores_codigo_lista_compra"],$_POST["valores_codigo_itens_compra"],$_POST["valores_quantidade_itens"]);

        echo json_encode($resultado_CadastrarItensLista);
    }
}
?>