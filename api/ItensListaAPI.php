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
    }else if($_POST["processo_itens_lista"] === "editar_itens_lista")
    {
        if($_POST["metodo"] === "PUT")
        {
            $resultado_EditarItensLista = $itens_lista_controladora->editarItensLista($_POST["valores_codigo_para_lista_alterar"],$_POST["valores_codigo_para_produtos_alterar"],$_POST["valores_quantidade_aterar"],$_POST["valores_codigo_itens_lista_alterar"]);

            echo json_encode($resultado_EditarItensLista);
        }
    }
}else if($_SERVER["REQUEST_METHOD"] === "DELETE")
{
    $recebe_processo_itens_lista = json_decode(file_get_contents("php://input", true));

    if($recebe_processo_itens_lista->processo_itens_lista === "excluir_itens_lista_compras")
    {
        $recebe_codigos_itens_lista = array();

        foreach($recebe_processo_itens_lista->lista_codigos_itens_lista_compras as $codigos_itens_lista_compras)
        {
            foreach($codigos_itens_lista_compras as $indice => $valor)
            {
                array_push($recebe_codigos_itens_lista,$valor);
            }
        }

        $resultado_ExcluirItensLista = $itens_lista_controladora->excluirItensLista($recebe_codigos_itens_lista);
        
        echo json_encode($resultado_ExcluirItensLista);
    }
}
?>