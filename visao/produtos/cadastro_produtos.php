<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title" id="titulo-tela-produtos">Cadastro</h4>
                    <!-- <p class="text-muted m-b-15 f-s-12">Use the input classes on an <code>.input-default, input-flat, .input-rounded</code> for Default input.</p> -->
                    <div class="basic-form">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control input-default" placeholder="Informa o nome do produto" id="nome-produto">
                                <input type="hidden" id="codigo-produto-alterar">
                            </div>
                            <button type="button" class="btn mb-1 btn-outline-primary" id="cadastrar-produto" name="botao_produto">Cadastrar</button>
                            <button type="reset" class="btn mb-1 btn-outline-light">Limpar</button>
                        </form>

                    </div>
                    <div class="alert alert-danger" id="mensagem-campo-vazio-cadastro-produto"><span id="corpo-campo-vazio-cadastro-produto"></span></div>
                    <div class="alert alert-success" id="mensagem-produto-cadastrado"><span id="corpo-produto-cadastrado"></span></div>
                    <div class="alert alert-danger" id="mensagem-falha-cadastro-produto"><span id="corpo-falha-cadastro-produto"></span></div>
                </div>
            </div>
        </div>
    </div>
</div>