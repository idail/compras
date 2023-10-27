<?php
require("ListaComprasInterface.php");
require("Conexao.php");
class ListaCompras implements ListaComprasInterface{

    private $codigo_lista;
    private $titulo_lista;

    public function setCodigo_Lista($codigo_lista)
    {
        $this->codigo_lista = $codigo_lista;
    }

    public function getCodigo_Lista()
    {
        return $this->codigo_lista;
    }

    public function setTitulo_Lista($titulo_lista)
    {
        $this->titulo_lista = $titulo_lista;
    }

    public function getTitulo_Lista()
    {
        return $this->titulo_lista;
    }

    public function cadastrarListaCompras():int
    {
        try{
            $sql_InserirListaCompra = "insert into lista(titulo_lista)values(:recebe_titulo_lista)";
            $comando_InserirListaCompra = Conexao::Obtem()->prepare($sql_InserirListaCompra);
            $comando_InserirListaCompra->bindValue(":recebe_titulo_lista",$this->getTitulo_Lista());
            $resultado_InserirListaCompra = $comando_InserirListaCompra->execute();
            $recebe_UltimoCodigoInserdoListaCompra = Conexao::Obtem()->lastInsertId();

            return $recebe_UltimoCodigoInserdoListaCompra;
        }catch(PDOException $exception)
        {
            return $exception->getMessage();
        }catch(Exception $excecao)
        {
            return $excecao->getMessage();
        }
    }

    public function listagemListaCompras():array
    {
        $registros_lista_compras = array();

        try{
            $sql_BuscaListaCompra = "select * from lista";
            $comando_BuscaListaCompra = Conexao::Obtem()->prepare($sql_BuscaListaCompra);
            $comando_BuscaListaCompra->execute();
            $registros_lista_compras = $comando_BuscaListaCompra->fetchAll(PDO::FETCH_ASSOC);
            return $registros_lista_compras;
        }catch(PDOException $exception)
        {
            return $exception->getMessage();
        }catch(Exception $excecao)
        {
            return $excecao->getMessage();
        }
    }

    public function listagemComprasItens():array
    {
        $registros_listas_compras_itens = array();

        try{
            $sql_BuscaListaCompraItens = "SELECT
            L.titulo_lista AS ListaDeCompras,
            P.nome_produto AS Produto,
            L.codigo_lista as Codigo_Lista,
            IL.itens_lista_codigo as Codigo_Item_Lista
        FROM lista AS L
        INNER JOIN itens_lista AS IL ON l.codigo_lista = IL.codigo_para_lista
        INNER JOIN Produtos AS P ON IL.codigo_para_produtos = P.codigo_produto;";
        $comando_BuscaListaCompraItens = Conexao::Obtem()->prepare($sql_BuscaListaCompraItens);
        $comando_BuscaListaCompraItens->execute();
        $registros_listas_compras_itens = $comando_BuscaListaCompraItens->fetchAll(PDO::FETCH_ASSOC);

        return $registros_listas_compras_itens;
        }catch(PDOException $exception)
        {
            return $exception->getMessage();
        }catch(Exception $excecao)
        {
            return $excecao->getMessage();
        }
    }

    public function buscaListaComprasItensEspecifica():array
    {
        $registros_lista_compras_itens_especifico = array();

        try{
            $sql_BuscaListaComprasItensEspecifica = 
            "SELECT
            L.titulo_lista AS NomeDaLista,
            IL.itens_lista_codigo,
            P.nome_produto AS NomeDoProduto,
            il.quantidade
        FROM lista AS L
        LEFT JOIN itens_lista AS IL ON L.codigo_lista = IL.codigo_para_lista
        LEFT JOIN Produtos AS P ON IL.codigo_para_produtos = P.codigo_produto
        WHERE L.codigo_lista = :recebe_codigo_lista_compras_itens";

            $comando_BuscaListaComprasItensEspecifica = Conexao::Obtem()->prepare($sql_BuscaListaComprasItensEspecifica);
            $comando_BuscaListaComprasItensEspecifica->bindValue(":recebe_codigo_lista_compras_itens",$this->getCodigo_Lista());
            $comando_BuscaListaComprasItensEspecifica->execute();

            $registros_lista_compras_itens_especifico = $comando_BuscaListaComprasItensEspecifica->fetch(PDO::FETCH_ASSOC);

            return $registros_lista_compras_itens_especifico;
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