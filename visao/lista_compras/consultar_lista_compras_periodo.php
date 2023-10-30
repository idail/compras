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
                    <form id="formulario-pesquisa-lista-compras-periodo">
                        <div class="example mt-3">
                            <label>Informe a data da lista de compras de</label>
                            <!-- <p class="text-muted m-b-20">just add class <code>.mydatepicker</code> to create it.</p> -->
                            <div class="input-group">
                                <input type="text" class="form-control mydatepicker" placeholder="dia/mês/ano" id="data-lista-compras-periodo-inicial"> <span class="input-group-append"><span class="input-group-text"><i class="mdi mdi-calendar-check"></i></span></span>
                            </div>
                        </div>

                        <div class="example mt-3">
                            <label>Informe a data da lista de compras até</label>
                            <!-- <p class="text-muted m-b-20">just add class <code>.mydatepicker</code> to create it.</p> -->
                            <div class="input-group ">
                                <input type="text" class="form-control mydatepicker" placeholder="dia/mês/ano" id="data-lista-compras-periodo-final"> <span class="input-group-append"><span class="input-group-text"><i class="mdi mdi-calendar-check"></i></span></span>

                            </div>
                        </div>

                        <div class="row d-flex justify-content-center col-lg-12">
                            <button id="pesquisar-lista-por-periodo" class="btn mb-1 btn-outline-primary">Pesquisar lista de compras</button>
                            <button type="reset" class="btn mb-1 btn-outline-light">Limpar</button>
                        </div>
                    </form>
                    <div class="alert alert-danger" id="mensagem-campo-vazio-procura-por-periodo-lista-compra"><span id="corpo-campo-vazio-procura-por-periodo-lista-compra"></span></div>
                    <div class="alert alert-danger" id="mensagem-falha-buscar-por-periodo-lista-compra"><span id="corpo-falha-buscar-por-periodo-lista-compra"></span></div>

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