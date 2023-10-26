<?php
require("../modelo/ItensLista.php");
class ItensListaControladora{
    private $itens_lista;

    public function __construct()
    {
        $this->itens_lista = new ItensLista();
    }

    public function cadastrarItensLista($recebe_lista_codigo,$recebe_itens_lista,$recebe_lista_quantidade)
    {
        $this->itens_lista->setCodigo_Para_Lista($recebe_lista_codigo);
        $this->itens_lista->setCodigo_Para_Produtos($recebe_itens_lista);
        $this->itens_lista->setQuantidade($recebe_lista_quantidade);

        $resultado_CadastrarItensLista = $this->itens_lista->cadastrarItensLista();

        return $resultado_CadastrarItensLista;
    }
}
?>