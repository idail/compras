<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Cadastro</h4>
                    <!-- <p class="text-muted m-b-15 f-s-12">Use the input classes on an <code>.input-default, input-flat, .input-rounded</code> for Default input.</p> -->
                    <div class="basic-form">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control input-default" placeholder="Informa o nome da lista de compras" id="titulo-lista-compras">
                            </div>
                            <button type="button" class="btn mb-1 btn-outline-primary" id="cadastrar-lista-compra">Cadastrar</button>
                            <button type="reset" class="btn mb-1 btn-outline-light">Limpar</button>
                        </form>

                    </div>
                    <div class="alert alert-danger" id="mensagem-campo-vazio-cadastro-lista-compras"><span id="corpo-campo-vazio-cadastro-lista-compras"></span></div>
                    <div class="alert alert-success" id="mensagem-lista-compras-cadastrado"><span id="corpo-lista-compras-cadastrado"></span></div>
                    <div class="alert alert-danger" id="mensagem-falha-cadastro-lista-compras"><span id="corpo-falha-cadastro-lista-compras"></span></div>
                </div>
            </div>
        </div>
    </div>
</div>