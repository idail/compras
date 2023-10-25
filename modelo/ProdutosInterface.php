<?php
interface ProdutosInterface{
    public function verificaDuplicidadeProduto():string;
    public function cadastrarProdutos():int;
}
?>