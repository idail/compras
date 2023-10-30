<?php
require("ListaComprasInterface.php");
require("Conexao.php");
class ListaCompras implements ListaComprasInterface{

    private $codigo_lista;
    private $titulo_lista;
    private $data_lista;

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

    public function setData_Lista($data_lista)
    {
        $this->data_lista = $data_lista;
    }

    public function getData_Lista()
    {
        return $this->data_lista;
    }

    public function cadastrarListaCompras():int
    {
        try{
            $sql_InserirListaCompra = "insert into lista(titulo_lista,data_lista)values(:recebe_titulo_lista,:recebe_data_lista)";
            $comando_InserirListaCompra = Conexao::Obtem()->prepare($sql_InserirListaCompra);
            $comando_InserirListaCompra->bindValue(":recebe_titulo_lista",$this->getTitulo_Lista());
            $comando_InserirListaCompra->bindValue(":recebe_data_lista",$this->getData_Lista());
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

    public function excluirListaCompras():bool
    {
        try{
            if(!empty($this->getCodigo_Lista()))
            {
                $recebe_codigo_lista_compras = "";

                for($indice = 0;$indice < count($this->getCodigo_Lista());$indice++)
                {
                    $recebe_codigo_lista_compras = $this->getCodigo_Lista()[$indice];
                }

                $sql_ExcluirListaCompras = "delete from lista where codigo_lista = :recebe_codigo_lista_compras_excluir";
                $comando_ExcluirListaCompras = Conexao::Obtem()->prepare($sql_ExcluirListaCompras);
                $comando_ExcluirListaCompras->bindValue(":recebe_codigo_lista_compras_excluir",$recebe_codigo_lista_compras);
                $resultado_ExcluirListaCompras = $comando_ExcluirListaCompras->execute();

                return $resultado_ExcluirListaCompras;
            }
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
        //     $sql_BuscaListaCompraItens = "SELECT
        //     L.titulo_lista AS ListaDeCompras,
        //     P.nome_produto AS Produto,
        //     L.codigo_lista as Codigo_Lista,
        //     IL.itens_lista_codigo as Codigo_Item_Lista
        // FROM lista AS L
        // INNER JOIN itens_lista AS IL ON l.codigo_lista = IL.codigo_para_lista
        // INNER JOIN Produtos AS P ON IL.codigo_para_produtos = P.codigo_produto;";
        $sql_BuscarListagemComprasItens = 
        "SELECT
        IL.itens_lista_codigo as CodigoItensLista,
        L.codigo_lista AS CodigoLista,
        P.codigo_produto as CodigoProduto,
        P.nome_produto AS NomeDoProduto,
        il.quantidade AS Quantidade
    FROM itens_lista AS IL
    LEFT JOIN lista AS L ON L.codigo_lista = IL.codigo_para_lista
    LEFT JOIN Produtos AS P ON IL.codigo_para_produtos = P.codigo_produto
    WHERE L.codigo_lista = :recebe_codigo_lista_compras";
        $comando_BuscaListaCompraItens = Conexao::Obtem()->prepare($sql_BuscarListagemComprasItens);
        $comando_BuscaListaCompraItens->bindValue(":recebe_codigo_lista_compras",$this->getCodigo_Lista());
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
            L.codigo_lista AS CodigoLista,
            IL.itens_lista_codigo AS CodigoItensLista,
            IL.codigo_para_produtos AS CodigoItensListaProdutos,
            P.nome_produto AS NomeDoProduto,
            il.quantidade AS Quantidade
        FROM lista AS L
        LEFT JOIN itens_lista AS IL ON L.codigo_lista = IL.codigo_para_lista
        LEFT JOIN Produtos AS P ON IL.codigo_para_produtos = P.codigo_produto
        WHERE L.codigo_lista = :recebe_codigo_lista_compras_itens";

            $comando_BuscaListaComprasItensEspecifica = Conexao::Obtem()->prepare($sql_BuscaListaComprasItensEspecifica);
            $comando_BuscaListaComprasItensEspecifica->bindValue(":recebe_codigo_lista_compras_itens",$this->getCodigo_Lista());
            $comando_BuscaListaComprasItensEspecifica->execute();

            $registros_lista_compras_itens_especifico = $comando_BuscaListaComprasItensEspecifica->fetchAll(PDO::FETCH_ASSOC);

            return $registros_lista_compras_itens_especifico;
        }catch(PDOException $exception)
        {
            return $exception->getMessage();
        }catch(Exception $excecao)
        {
            return $excecao->getMessage();
        }
    }

    public function listagemListaComprasComItens():array
    {
        $registros_listagem_lista_compras_itens = array();

        try{
            $sql_BuscaListaComprasComItens = "select codigo_lista,titulo_lista from lista INNER JOIN itens_lista as il where il.codigo_para_lista = lista.codigo_lista GROUP BY titulo_lista ORDER BY codigo_lista";
            $comando_BuscaListaComprasComitens = Conexao::Obtem()->prepare($sql_BuscaListaComprasComItens);
            $comando_BuscaListaComprasComitens->execute();

            $registros_listagem_lista_compras_itens = $comando_BuscaListaComprasComitens->fetchAll(PDO::FETCH_ASSOC);

            return $registros_listagem_lista_compras_itens;
        }catch(PDOException $exception)
        {
            return $exception->getMessage();
        }catch(Exception $excecao)
        {
            return $excecao->getMessage();
        }
    }

    public function listagemListaComprasSomente():array
    {
        $registros_listagem_compras_somente = array();

        try{
            $sql_BuscaListaComprasSomente = "select DISTINCT l.codigo_lista, L.titulo_lista from lista as l INNER JOIN itens_lista as IL on IL.codigo_para_lista = L.codigo_lista";
            $comando_BuscaListaComprasSomente = Conexao::Obtem()->prepare($sql_BuscaListaComprasSomente);
            $comando_BuscaListaComprasSomente->execute();

            $registros_listagem_compras_somente = $comando_BuscaListaComprasSomente->fetchAll(PDO::FETCH_ASSOC);

            return $registros_listagem_compras_somente;
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