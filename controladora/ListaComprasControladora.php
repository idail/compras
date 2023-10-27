<?php
require("../modelo/ListaCompras.php");

class ListaComprasControladora{
    private $lista_compras;

    public function __construct()
    {
        $this->lista_compras = new ListaCompras();
    }

    public function cadastrarListaCompras($recebe_titulo_lista_compras)
    {
        $this->lista_compras->setTitulo_Lista($recebe_titulo_lista_compras);

        $retorno_CadastrarListaCompras = $this->lista_compras->cadastrarListaCompras();

        return $retorno_CadastrarListaCompras;
    }

    public function buscarListaCompras()
    {
        $retorno_BuscarListaCompras = $this->lista_compras->listagemListaCompras();

        return $retorno_BuscarListaCompras;
    }

    public function listagemComprasItens()
    {
        $retorno_BuscarListaComprasItens = $this->lista_compras->listagemComprasItens();

        return $retorno_BuscarListaComprasItens;
    }

    public function buscaListaComprasItensEspecifica($recebe_codigo_lista)
    {
        $this->lista_compras->setCodigo_Lista($recebe_codigo_lista);

        $retorno_BuscaListaComprasItensEspecifica = $this->lista_compras->buscaListaComprasItensEspecifica();

        return $retorno_BuscaListaComprasItensEspecifica;
    }
}
?>