class Produto{
    id: number
    nome: string
    quantidade: number
    dataFabricacao: Date
    dataValidade: Date

    constructor(id: number, nome: string, quantidade: number, dataFabricacao: Date, dataValidade: Date){
        this.id = id
        this.nome = nome
        this.quantidade = quantidade
        this.dataFabricacao = dataFabricacao
        this.dataValidade = dataValidade
    }

    estaVencido(): boolean {
        return this.dataValidade < new Date()
    }
}