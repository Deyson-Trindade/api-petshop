const ModeloTabelas = require('../rotas/fornecedores/modeloTabelaFornecedor')

ModeloTabelas
    .sync()
    .then(()=> console.log('tabela criada com sucesso.'))
    .catch(console.log)