<?php
//é declarada a classe conexao
class Conexao{
    //é declarada a variavel estatica $conexao pois sendo estatica não sera preciso 
    //instancia a classe conexao apenas importa-la e acessar o metoodo estatica que usa a variavel estatica
    public static $conexao;

    //é declarado o metodo que ira abrir a conexão com o banco de dados
    public static function Obtem()
    {
        //com o uso do self e verificado se a variavel estatica conexao e igual a nula e sendo entrara no if
        if(self::$conexao === null)
        {
            try{
                //com o uso do self e atribuido a variavel estatica conexao a conexão com o banco de dados
                self::$conexao = new PDO("mysql:dbname=compras;host=localhost","root","");
                self::$conexao->exec('SET CHARACTER SET utf8');//Define o charset como UTF-8
                //e retornada a conexão
                return self::$conexao;
            }catch(PDOException $exception)
            {
                return $exception->getMessage();
            }catch(Exception $excecao)
            {
                return $excecao->getMessage();
            }
        //caso a variavel estatica conexao nao esteja vazia sera retornada a conexao
        }else{
            return self::$conexao;
        }
    }
}
?>