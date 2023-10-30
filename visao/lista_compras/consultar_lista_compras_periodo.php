<div class="container-fluid">
    <div class="row d-flex justify-content-center">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Lista de Compras por Periodo</h4>
                    <!-- <div class="row d-flex justify-content-center col-lg-12">
                        <label>Informe o nome do produto</label>
                        <input type="text" class="form-control input-default" placeholder="Informa o nome do produto" id="produto-pesquisa">


                    </div> -->

                    <div class="example mt-3">
                        <label>Informe a data da lista de compras de</label>
                        <!-- <p class="text-muted m-b-20">just add class <code>.mydatepicker</code> to create it.</p> -->
                        <div class="input-group">
                            <input type="text" class="form-control mydatepicker" placeholder="mm/dd/yyyy" id="data-lista-compras-periodo-inicial"> <span class="input-group-append"><span class="input-group-text"><i class="mdi mdi-calendar-check"></i></span></span>
                        </div>
                    </div>

                    <div class="example mt-3">
                        <label>Informe a data da lista de compras até</label>
                        <!-- <p class="text-muted m-b-20">just add class <code>.mydatepicker</code> to create it.</p> -->
                        <div class="input-group ">
                            <input type="text" class="form-control mydatepicker" placeholder="mm/dd/yyyy" id="data-lista-compras-periodo-final"> <span class="input-group-append"><span class="input-group-text"><i class="mdi mdi-calendar-check"></i></span></span>

                        </div>
                    </div>

                    <div class="row d-flex justify-content-center col-lg-12">
                        <button id="pesquisar-lista-por-periodo" class="btn mb-1 btn-outline-primary">Pesquisar lista de compras</button>
                    </div>

                    <div class="alert alert-success col-lg-12" id="mensagem-lista-compras-excluida-sucesso"><span id="corpo-mensagem-lista-compras-excluida-sucesso"></span></div>

                    <div class="alert alert-danger" id="mensagem-falha-exclusao-lista-compras"><span id="corpo-falha-exclusao-lista-compras"></span></div>

                    <div class="alert alert-success col-lg-12" id="mensagem-item-lista-excluido-sucesso"><span id="corpo-mensagem-item-lista-excluido-sucesso"></span></div>

                    <div class="alert alert-danger" id="mensagem-falha-exclusao-item-lista"><span id="corpo-falha-exclusao-item-lista"></span></div>

                    <div class="table-responsive">
                        <table class="table header-border">
                            <thead>
                                <tr>
                                    <th>Lista de Compras</th>
                                    <th>Nome Produto</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody id="registros-lista-compras-por-periodo">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>