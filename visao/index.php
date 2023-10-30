<?php
//verificar utilização dos codigos abaixo dentro da pasta visao no template

// if(!empty($_GET))
// {
//     echo $_GET;
// }

//ira verificar se o parametro na url pagiga existe e caso exista ele nao ira cair no if($url[0] == "inicio") pois o valor do parametro pagina ja sera um dos valores do menu, caso nao existir valor nesse parametro
//ira cair no else do if ternario e ira importar o arquivo inicio.php , lembrando que o parametro pagina e definido dentro do arquivo .htaccess que rescreve as url e faz url amigavel por isso verificamos
//o GET['pagina'] ele e o parametro que ira receber a pagina solicitada
$url = (isset($_GET['pagina'])) ? $_GET['pagina'] : 'inicio';
//o array_filter ira fazer a iteração em cada item recebido na variavel $url e apos ira quebrar em um array de string e sera atribuido o valor na variavel $url
$url = array_filter(explode('/', $url));
//e verificado se e diferente de vazio o valor do primeiro indice do array $url e como sera vai entrar na condição
if (!empty($url[0])) {
    //e verificado se o valor do primeiro indice e inicio , como no primeiro acesso o parametro pagina esta vazio ira ser sim igual a inicio e sera importado o arquivo inicio.php
    if ($url[0] === "inicio") {
        //e criada uma variavel $url_final que recebe o valor do array no seu primeiro indice concatenado com .php
        //e feito a importacao do arquivo inicio.php
        require("inicio.php");
        //e verificado se o valor do primeiro indice e cadastros_insumos, como foi clicado na opção no menu para cadastro de insumos ira ser igual sim e entrada na condicao e sera importado o arquivo inicio.php
    } elseif ($url[0] === "cadastrar_lista") {
        //e criada uma variavel $url_final que recebe o valor do array no seu primeiro indice concatenado com .php
        //e feito a importacao do arquivo inicio.php
        require("inicio.php");
        //e verificado se o valor do primeiro indice e consulta_insumos, como foi clicado na opção no menu para consulta de insumos ira ser igual sim e entrada na condicao e sera importado o arquivo inicio.php
    } elseif ($url[0] === "cadastrar_produtos") {
        //e criada uma variavel $url_final que recebe o valor do array no seu primeiro indice concatenado com .php
        //e feito a importacao do arquivo inicio.php
        require("inicio.php");
        //e verificado se o valor do primeiro indice e cadastros_servicos, como foi clicado na opção no menu para cadastro de servicos ira ser igual sim e entrada na condicao e sera importado o arquivo inicio.php
    } else if($url[0] === "consultar_produtos")
    {
        require("inicio.php");
    } else if($url[0] === "cadastro_lista_compras")
    {
        require("inicio.php");
    } else if($url[0] === "consultar_lista_compras")
    {
        require("inicio.php");
    } else if($url[0] === "consultar_lista_compras_por_periodo")
    {
        require("inicio.php");
    }


    //      $url_final = $url[0] . '.php';
    //      require($url_final);
    //  }else if (!empty($url[1])) {
    //      if ($url[1] == "") {
    //          $url_final = "index.php";
    //          require("./admin/" . $url_final);
    //      } else if ($url[1] == "alteracao_senha") {
    //          $url_final = $url[1] . '.php';
    //          require("./admin/" . $url_final);
    //      } else if ($url[1] == "painel") {
    //          $url_final = $url[1] . '.php';
    //          require("./admin/" . $url_final);
    //      }
    //        var_dump($url_final);
    //  }
} else {
    //var_dump($url);
}
?>