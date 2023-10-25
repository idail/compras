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
}
?>