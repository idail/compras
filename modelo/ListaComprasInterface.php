<?php
interface ListaComprasInterface{
    public function cadastrarListaCompras():int;
    public function listagemListaCompras():array;
    public function excluirListaCompras():bool;
    public function listagemComprasItens():array;
    public function buscaListaComprasItensEspecifica():array;
    public function listagemListaComprasComItens():array;
    public function listagemListaComprasSomente():array;
    public function listagemComprasPorPeriodo():array;
}
?>