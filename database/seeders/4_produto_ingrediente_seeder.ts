import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoIngrediente from '../../app/models/produto_ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    
    await ProdutoIngrediente.createMany([
      {produtoId: 7, ingredienteId: 1},
      {produtoId: 7, ingredienteId: 2},
      {produtoId: 7, ingredienteId: 4},
      {produtoId: 7, ingredienteId: 5},
      {produtoId: 7, ingredienteId: 1},
      {produtoId: 15, ingredienteId: 9},
      {produtoId: 15, ingredienteId: 10},
      {produtoId: 15, ingredienteId: 5},
    ])

  }
}