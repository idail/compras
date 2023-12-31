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

    public function buscaProdutosEspecificos($recebe_codigo_produto)
    {
        $this->produtos->setCodigo_Produto($recebe_codigo_produto);

        $retorno_BuscaProdutosEspecificos = $this->produtos->buscaProdutosEspecifico();

        return $retorno_BuscaProdutosEspecificos;
    }

    public function editarProdutos($recebe_nome_produto_alterar,$recebe_codigo_produto_alterar)
    {
        $this->produtos->setNome_Produto($recebe_nome_produto_alterar);
        $this->produtos->setCodigo_Produto($recebe_codigo_produto_alterar);
        
        $retorno_VerificaDuplicidadeProdutos = $this->produtos->verificaDuplicidadeProduto();

        if($retorno_VerificaDuplicidadeProdutos === "produto ja cadastrado")
        {
            return $retorno_VerificaDuplicidadeProdutos;
        }else{
            $retorno_EditarProduto = $this->produtos->editarProdutos();

            return $retorno_EditarProduto;
        }
    }

    public function deletarProdutos($recebe_codigo_produto_deletar)
    {
        $this->produtos->setCodigo_Produto($recebe_codigo_produto_deletar);

        $retorno_DeletarProduto = $this->produtos->deletarProdutos();

        return $retorno_DeletarProduto;
    }
}
?>