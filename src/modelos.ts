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
   
    set Adicionarquantidade(valor: number){
        this.quantidade += valor
    }
}

class GerenciarProdutos{
    produtos: Produto[] = []
    removidos: Produto[] = []
    adicionarProduto(produto: Produto): string{
        this.produtos.push(produto)
        return(`Produto ${produto.nome} adicionado com sucesso!`)
    }
    
    consultarProduto(id: number): Produto | undefined{
        for(const produto of this.produtos){
            if(produto.id === id){
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
            produto.nome = nome
            produto.quantidade = quantidade
            produto.dataFabricacao = dataFabricacao
            produto.dataValidade = dataValidade
            return `Produto atualizado com sucesso!`
        }
    }

    removerProduto(id: number): string{
        let indice = this.produtos.findIndex(p => p.id == id)
        for(let produto of this.produtos){
            if(produto.id === id){
                this.removidos.push(produto)
            }
        }
        this.produtos.splice(indice, 1)
        
        return `Produto removido com sucesso! \n ${Produto}`//posteriormente, o nome da variável da classe
    }
    ListarRemovidos(){
        return this.removidos
    }

    visualizarQuantidade(id: number){
        for(let produto of this.produtos){
            if(produto.id === id){
             return (`Nome do produto: ${produto.nome}, Quantidade atual: ${produto.quantidade}`)
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




// 4. Controle de Estoque
// O sistema deverá permitir o gerenciamento da quantidade disponível de cada produto.
// Funcionalidades