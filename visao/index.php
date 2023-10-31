<?php

$url = (isset($_GET['pagina'])) ? $_GET['pagina'] : 'inicio';

$url = array_filter(explode('/', $url));

if (!empty($url[0])) {
    
    if ($url[0] === "inicio") {
        require("inicio.php");
    } elseif ($url[0] === "cadastrar_lista") {
        require("inicio.php");
    } elseif ($url[0] === "cadastrar_produtos") {
        require("inicio.php");
    } else if($url[0] === "consultar_produtos"){
        require("inicio.php");
    } else if($url[0] === "cadastro_lista_compras"){
        require("inicio.php");
    } else if($url[0] === "consultar_lista_compras"){
        require("inicio.php");
    } else if($url[0] === "consultar_lista_compras_por_periodo"){
        require("inicio.php");
    }
} else {
}
?>