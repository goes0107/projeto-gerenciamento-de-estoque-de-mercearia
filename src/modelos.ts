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

class Fornecedor{
    Nome: string
    Contato: string
    Status: boolean
    Id: number
    constructor(nome: string,id: number, contato: string, status: boolean){
        this.Nome = nome
        this.Id = id
        this.Contato = contato
        this.Status = status
    }
}



class GerenciarFornecedores{
     fornecedores: Fornecedor[] = []
     cadastrarFornecedor(fornecedor: Fornecedor): string{
        this.fornecedores.push(fornecedor)
        return(`Fornecedor ${fornecedor.Nome} Cadastrado com sucesso!`)
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
            fornecedor.Nome = nome
            fornecedor.Contato = contato
            fornecedor.Status = status

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
