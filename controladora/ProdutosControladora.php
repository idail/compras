<?php
require("../modelo/Produtos.php");

class ProdutosControladora{
    private $produtos;

    public function __construct()
    {
        $this->produtos = new Produtos();
    }

    public function cadastrarProdutos($recebe_nome_produto)
    {
        $this->produtos->setNome_Produto($recebe_nome_produto);

        $retorno_VerificaDuplicidadeProdutos = $this->produtos->verificaDuplicidadeProduto();

        if($retorno_VerificaDuplicidadeProdutos === "produto ja cadastrado")
        {
            return $retorno_VerificaDuplicidadeProdutos;
        }else{
            $retorno_CadastrarProdutos = $this->produtos->cadastrarProdutos();

            return $retorno_CadastrarProdutos;
        }
    }

    public function buscarProdutos()
    {
        $registros_produtos = $this->produtos->listagemProdutos();
        return $registros_produtos;
    }
}
?>