import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    
    await Ingrediente.createMany([
      {id: 1, nome: 'Pão com gergelim', descricao: 'Pão caseiro feito em casa'},
      {id: 2, nome: 'Hamburger de picanha', descricao: '200g de carne suculenta'},
      {id: 3, nome: 'Alface', descricao: 'Alface colhido nos montes suíços'},
      {id: 4, nome: 'Maionese'},
      {id: 5, nome: 'Bacon'},
      {id: 6, nome: 'Pão australiano', descricao: 'Pão caseiro feito na Austrália'},
      {id: 7, nome: 'Pão francês'},
      {id: 8, nome: 'Pão Batata'},
      {id: 9, nome: 'Batata'},
      {id: 10, nome: 'Queijo'},
    ])

  }
}