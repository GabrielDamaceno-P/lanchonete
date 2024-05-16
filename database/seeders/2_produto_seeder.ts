import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
  await Produto.createMany([
    {nome: "Coca-Cola", preco: 6.50, tamanho:"330ml", tipoId: 1},
    {nome: "Coca-Cola", preco: 10, tamanho:"2L", tipoId: 1},
    {nome: "Coca-Cola", preco: 8, tamanho:"600ml", tipoId: 1},
    {nome: "Coca-Cola", preco: 6.50, tamanho:"290ml", tipoId: 1},

    {nome: "x-tudo", preco: 10, tipoId: 2},
    {nome: "x-tudo Master", preco: 15, tipoId: 2},
    {nome: "x-Picanha", preco: 20, tipoId: 2},

    {nome: "hot-dog ao molho", preco: 10, tipoId: 3},
    {nome: "hot-dog na chapa", preco: 12, tipoId: 3},
    {nome: "hot-dog ao especial", preco: 15, tipoId: 3},




  ])
  }
}