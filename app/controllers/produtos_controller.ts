// import type { HttpContext } from '@adonisjs/core/http'

import Produto from "../models/produto.js";

export default class ProdutosController {
async index({request}){
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)

    return await Produto.query().paginate(page, perPage )
}
async show({params}){
    return await Produto.findOrFail (params.id)
}

async store({request}){
    const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])
     return await Produto.create(dados)
}

async update({params, request}){
    const produto = await Produto.findOrFail(params.id)
    const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])

    produto.merge(dados)

    return await produto.save()
}

async destroy({params}){
    const produto = await Produto.findOrFail(params.id)
   await produto.delete()
   return {msg: 'Registro deletado com sucesso', produto}
}

}