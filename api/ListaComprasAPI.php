<?php
require("../controladora/ListaComprasControladora.php");

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: *");

$lista_compras_controladora = new ListaComprasControladora();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    if (isset($_POST["processo_lista_compras"])) {

        if ($_POST["processo_lista_compras"] === "cadastrar_lista_compras") 
        {
            if(isset($_POST["valor_titulo_lista_compras"]))
            {
                
                $resultado_CadastrarListaCompras = $lista_compras_controladora->cadastrarListaCompras(htmlspecialchars($_POST["valor_titulo_lista_compras"]));
                
                echo json_encode($resultado_CadastrarListaCompras);
            }
        }
    }
}else if($_SERVER["REQUEST_METHOD"] === "GET")
{
    if(isset($_GET["processo_lista_compras"]))
    {
        if($_GET["processo_lista_compras"] === "buscar_lista_compras")
        {
            $resultado_BuscarListaCompras = $lista_compras_controladora->buscarListaCompras();

            echo json_encode($resultado_BuscarListaCompras);
        }
    }
}
?>