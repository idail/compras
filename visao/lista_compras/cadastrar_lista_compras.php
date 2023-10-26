<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title" id="titulo-tela-produtos">Cadastro Lista Compras</h4>
                    <!-- <p class="text-muted m-b-15 f-s-12">Use the input classes on an <code>.input-default, input-flat, .input-rounded</code> for Default input.</p> -->
                    <div class="basic-form">
                        <form>
                            <div class="form-group">
                                <label>Selecionar lista</label>
                                <select class="form-control mb-2" id="itens-lista-cadastrados">
                                    <option>Selecione</option>
                                </select>

                                <label>Selecionar os itens</label>
                                <select name="" id="itens-produtos-cadastrados" multiple class="form-control">
                                    
                                </select>

                                <button type="button" class="btn mb-2 mt-2 btn-outline-primary" id="adicionar-item-lista" name="botao_item_lista">Adicionar Item</button>

                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Itens</h4>
                                            <div class="table-responsive">
                                                <table class="table header-border">
                                                    <thead>
                                                        <tr>
                                                            <th>Nome Item</th>
                                                            <th>Quantidade</thn=>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="itens-lista-final">
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn mb-1 btn-outline-primary" id="cadastrar-lista-itens" name="botao_produto">Cadastrar</button>
                            <button type="reset" class="btn mb-1 btn-outline-light">Limpar</button>
                        </form>

                    </div>
                    <div class="alert alert-danger" id="mensagem-campo-vazio-cadastro-edita-produto"><span id="corpo-campo-vazio-cadastro-edita-produto"></span></div>
                    <div class="alert alert-success" id="mensagem-produto-cadastrado"><span id="corpo-produto-cadastrado"></span></div>
                    <div class="alert alert-success" id="mensagem-produto-editado"><span id="corpo-produto-editado"></span></div>
                    <div class="alert alert-danger" id="mensagem-falha-cadastro-edita-produto"><span id="corpo-falha-cadastro-edita-produto"></span></div>
                </div>
            </div>
        </div>
    </div>
</div>