<?php
interface ProdutosInterface{
    public function verificaDuplicidadeProduto():string;
    public function cadastrarProdutos():int;
    public function editarProdutos():bool;
    public function deletarProdutos():bool;
}
?>