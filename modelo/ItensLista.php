<?php
require("ItensListaInterface.php");
require("Conexao.php");

class ItensLista implements itensListaInterface{
    private $itens_lista_codigo;
    private $codigo_para_lista;
    private $codigo_para_produtos;
    private $quantidade;

    public function setItens_Lista_Codigo($itens_lista_codigo)
    {
        $this->itens_lista_codigo = $itens_lista_codigo;
    }

    public function getItens_Lista_Codigo()
    {
        return $this->itens_lista_codigo;
    }

    public function setCodigo_Para_Lista($codigo_para_lista)
    {
        $this->codigo_para_lista = $codigo_para_lista;
    }

    public function getCodigo_Para_Lista()
    {
        return $this->codigo_para_lista;
    }

    public function setCodigo_Para_Produtos($codigo_para_produtos)
    {
        $this->codigo_para_produtos = $codigo_para_produtos;
    }

    public function getCodigo_Para_Produtos()
    {
        return $this->codigo_para_produtos;
    }

    public function setQuantidade($quantidade)
    {
        $this->quantidade = $quantidade;
    }

    public function getQuantidade()
    {
        return $this->quantidade;
    }


    public function cadastrarItensLista()
    {
        try{
            for ($indice = 0;$indice < count($this->getCodigo_Para_Lista());$indice++)
            { 
                $sql_CadastrarItensLista = "insert into itens_lista(codigo_para_lista,codigo_para_produtos,quantidade)values(:recebe_codigo_para_lista,:recebe_codigo_para_produto,:recebe_quantidade)";
                $comando_CadastrarItensLista = Conexao::Obtem()->prepare($sql_CadastrarItensLista);
                $comando_CadastrarItensLista->bindValue(":recebe_codigo_para_lista",$this->getCodigo_Para_Lista()[$indice]);
                $comando_CadastrarItensLista->bindValue(":recebe_codigo_para_produto",$this->getCodigo_Para_Produtos()[$indice]);
                $comando_CadastrarItensLista->bindValue(":recebe_quantidade",$this->getQuantidade()[$indice]);

                $resultado_CadastrarItensLista = $comando_CadastrarItensLista->execute();

                $recebe_UltimoCodigoInseridoItensLista = Conexao::Obtem()->lastInsertId();
            }
            return $recebe_UltimoCodigoInseridoItensLista;
        }catch(PDOException $exception)
        {
            return $exception->getMessage();
        }catch(Exception $excecao)
        {
            return $excecao->getMessage();
        }
    }

    public function editarItensLista()
    {
        try{
            for ($indice = 0; $indice < count($this->getCodigo_Para_Lista()); $indice++) 
            { 
                $sql_EditarItensLista = "update itens_lista set codigo_para_lista = :recebe_codigo_para_lista_alterar, codigo_para_produtos = :recebe_codigo_para_produtos_alterar, quantidade = :recebe_quantidade_alterar where itens_lista_codigo = :recebe_codigo_itens_lista_alterar";
                $comando_EditarItensLista = Conexao::Obtem()->prepare($sql_EditarItensLista);
                $comando_EditarItensLista->bindValue(":recebe_codigo_para_lista_alterar",$this->getCodigo_Para_Lista()[$indice]);
                $comando_EditarItensLista->bindValue(":recebe_codigo_para_produtos_alterar",$this->getCodigo_Para_Produtos()[$indice]);
                $comando_EditarItensLista->bindValue(":recebe_quantidade_alterar",$this->getQuantidade()[$indice]);
                $comando_EditarItensLista->bindValue(":recebe_codigo_itens_lista_alterar",$this->getItens_Lista_Codigo()[$indice]);
                
                $resultado_EditarItensLista = $comando_EditarItensLista->execute();
            }
            return $resultado_EditarItensLista;
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