<?php
require("ProdutosInterface.php");
require("Conexao.php");
class Produtos implements ProdutosInterface{
    private $codigo_produto;
    private $nome_produto;

    public function setCodigo_Produto($codigo_produto)
    {
        $this->codigo_produto = $codigo_produto;
    }

    public function getCodigo_Produto()
    {
        return $this->codigo_produto;
    }

    public function setNome_Produto($nome_produto)
    {
        $this->nome_produto = $nome_produto;
    }

    public function getNome_Produto()
    {
        return $this->nome_produto;
    }

    public function verificaDuplicidadeProduto():string
    {
        try{
            $sql_VerificaDuplicidadeProdutos = "select nome_produto from produtos where nome_produto = :recebe_nome_produto";
            $comando_VerificaDuplicidadeProdutos = Conexao::Obtem()->prepare($sql_VerificaDuplicidadeProdutos);
            $comando_VerificaDuplicidadeProdutos->bindValue(":recebe_nome_produto",$this->getNome_Produto());
            $comando_VerificaDuplicidadeProdutos->execute();
            $resultado_VerificaDuplicidadeProdutos = $comando_VerificaDuplicidadeProdutos->fetch(PDO::FETCH_ASSOC);
            
            if(!empty($resultado_VerificaDuplicidadeProdutos))
            {
                return "produto ja cadastrado";
            }else{
                return "nenhum produto localizado";
            }
        }catch(PDOException $exception)
        {
            return $exception->getMessage();
        }catch(Exception $excecao)
        {
            return $excecao->getMessage();
        }
    }

    public function cadastrarProdutos():int
    {
        try{
            $sql_InserirProdutos = "insert into produtos(nome_produto)values(:recebe_nome_produto)";
            $comando_InserirProdutos = Conexao::Obtem()->prepare($sql_InserirProdutos);
            $comando_InserirProdutos->bindValue(":recebe_nome_produto",$this->getNome_Produto());
            $resultado_InserirProdutos = $comando_InserirProdutos->execute();
            $recebe_UltimoCodigoInserdoProdutos = Conexao::Obtem()->lastInsertId();

            return $recebe_UltimoCodigoInserdoProdutos;
        }catch(PDOException $exception)
        {
            return $exception->getMessage();
        }catch(Exception $excecao)
        {
            return $excecao->getMessage();
        }
    }

    public function listagemProdutos():array
    {
        $registros_produtos = array();

        try{
            $sql_BuscaTodosProdutos = "select * from produtos";
            $comando_BuscaTodosProdutos = Conexao::Obtem()->prepare($sql_BuscaTodosProdutos);
            $comando_BuscaTodosProdutos->execute();
            $registros_produtos = $comando_BuscaTodosProdutos->fetchAll(PDO::FETCH_ASSOC);
            return $registros_produtos;
        }catch(PDOException $exception)
        {
            return $exception->getMessage();
        }catch(Exception $excecao)
        {
            return $excecao->getMessage();
        }
    }
}
?>