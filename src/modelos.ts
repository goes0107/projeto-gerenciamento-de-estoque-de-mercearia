class Produto{
    private id: number
    private nome: string
    private quantidade: number
    private dataFabricacao: Date
    private dataValidade: Date

    constructor(id: number, nome: string, quantidade: number, dataFabricacao: Date, dataValidade: Date){
        this.id = id
        this.nome = nome
        this.quantidade = quantidade
        this.dataFabricacao = dataFabricacao
        this.dataValidade = dataValidade
    }

    get Id() {
        return this.id
    }

    get Nome() {
        return this.nome
    }

    get Quantidade() {
        return this.quantidade
    }

    get DataFabricacao() {
        return this.dataFabricacao
    }

    get DataValidade() {
        return this.dataValidade
    }

    set Nome(nome: string) {
        this.nome = nome
    }

    set Quantidade(qtd: number) {
        this.quantidade = qtd
    }

    set DataFabricacao(data: Date) {
        this.dataFabricacao = data
    }

    set DataValidade(data: Date) {
        this.dataValidade = data
    }

    set Adicionarquantidade(valor: number){
        this.quantidade += valor
    }

    estaVencido(): boolean {
        return this.dataValidade < new Date()
    }
}

class GerenciarProdutos{
    private produtos: Produto[] = []
    private removidos: Produto[] = []

    get Produtos() {
        return this.produtos
    }
    get Removidos(){
        return this.removidos
    }

    adicionarProduto(produto: Produto): string{
        this.produtos.push(produto)
        return(`Produto ${produto.Nome} adicionado com sucesso!`)
    }
    
    consultarProduto(id: number): Produto | undefined{
        for(const produto of this.produtos){
            if(produto.Id === id){
                return produto
            }
        }
        return undefined
    }

    atualizarProduto(id: number, nome: string, quantidade: number, dataFabricacao: Date, dataValidade: Date): string{
        const produto = this.consultarProduto(id)
        if(!produto){
            return `Produto não encontrado`
        }else{
            produto.Nome = nome
            produto.Quantidade = quantidade
            produto.DataFabricacao = dataFabricacao
            produto.DataValidade = dataValidade
            return `Produto atualizado com sucesso!`
        }
    }

    removerProduto(id: number): string{
        let indice = this.produtos.findIndex(p => p.Id == id)
        for(let produto of this.produtos){
            if(produto.Id === id){
                this.removidos.push(produto)
            }
        }
        this.produtos.splice(indice, 1)
        
        return `Produto removido com sucesso! \n ${Produto}`//posteriormente, o nome da variável da classe
    }

    ListarRemovidos(){
        return this.Removidos
    }
    
    ListarProdutos(){
        return this.Produtos
    }

    visualizarQuantidade(id: number){
        for(let produto of this.produtos){
            if(produto.Id === id){
             return (`Nome do produto: ${produto.Nome}, Quantidade atual: ${produto.Quantidade}`)
            }
    }
    
}
}
// Cadastrar produto;
// Editar dados do produto;
// Remover produto;
// Listar produtos cadastrados;
// Consultar informações de um produto específico.
//Registrar saída de produtos do estoque;
// Atualizar quantidades em tempo real;
// Visualizar a quantidade atual de cada item.


class Fornecedor{
    nome: string
    contato: string
    status: boolean
    private id: number
    
    constructor(nome: string,contato: string,status: boolean, id: number,  ){
        this.nome = nome
        this.id = id
        this.contato = contato
        this.status = status
    }
    
    get Id() { return this.id }
}



class GerenciarFornecedores{
    private fornecedores: Fornecedor[] = []
    
    get Fornecedores() {
        return this.fornecedores
    }

    cadastrarFornecedor(fornecedor: Fornecedor): string{
        this.fornecedores.push(fornecedor)
        return(`Fornecedor ${fornecedor.nome} Cadastrado com sucesso!`)
    }

    consultarFornecedor(id: number): Fornecedor | undefined{
        for(const fornecedor of this.fornecedores){
            if(fornecedor.Id === id){
                return fornecedor
            }
        }
        return undefined
    }

    editarFornecedor(nome: string, id: number, contato: string, status: boolean): string{
        const fornecedor = this.consultarFornecedor(id)
        if(!fornecedor){
            return `Fornecedor não cadastrado`
        }else{
            fornecedor.nome = nome
            fornecedor.contato = contato
            fornecedor.status = status

            return `Fornecedor editado com sucesso!`
        }
    }

    removerFornecedor(id: number): string{
        let indice = this.fornecedores.findIndex(f => f.Id == id)
        this.fornecedores.splice(indice, 1)
        if (!indice){
            return `Fornecedor não existe ou já foi removido`
        }
        else{
            return `Fornecedor Num ${id} removido com sucesso`
        }
        
    }

    listarFornecedores(): Array<Fornecedor>{
        return this.fornecedores
    }
}
// Cadastrar fornecedor;
// Editar dados do fornecedor;
// Remover fornecedor;
// Listar fornecedores cadastrados;
// Consultar informações de um fornecedor específico.




// 4. Controle de Estoque
// O sistema deverá permitir o gerenciamento da quantidade disponível de cada produto.
// Funcionalidades