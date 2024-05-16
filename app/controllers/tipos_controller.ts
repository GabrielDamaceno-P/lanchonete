// import type { HttpContext } from '@adonisjs/core/http'

import Tipo from "../models/tipo.js"

export default class TiposController {
async index({request}){
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)

    return await Tipo.query().preload('produtos').paginate(page, perPage )
}
async show({params}){
    return await Tipo.findOrFail (params.id)
}

async store({request}){
    const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])
     return await Tipo.create(dados)
}

async update({params, request}){
    const tipo = await Tipo.findOrFail(params.id)
    const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])

    tipo.merge(dados)

    return await tipo.save()
}

async destroy({params}){
    const tipo = await Tipo.findOrFail(params.id)
   await tipo.delete()
   return {msg: 'Registro deletado com sucesso', tipo}
}

}