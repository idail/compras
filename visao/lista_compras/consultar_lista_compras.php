<div class="container-fluid">
    <div class="row d-flex justify-content-center">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Lista de Compras</h4>
                    <div class="row d-flex justify-content-center col-lg-12">
                        <label>Selecione a lista de compras</label>
                        <select id="lista-compras-com-itens-busca" class="form-control col-lg-12 mb-2">
                            <option value="Selecione">
                                Selecione
                            </option>
                        </select>
                        <button id="excluir-lista" class="btn mb-1 btn-outline-primary">Excluir lista</button>
                    </div>
                    <div class="table-responsive">
                        <table class="table header-border">
                            <thead>
                                <tr>
                                    <th>Nome Produto</th>
                                    <th>Quantidade</th>
                                    <th colspan="" style="text-align: center;">Opções</th>
                                </tr>
                            </thead>
                            <tbody id="registros-lista-compras">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>