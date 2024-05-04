import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Tipo from '../../app/models/tipo.js'

export default class extends BaseSeeder {
  async run() {
return await Tipo.createMany([
  {nome:'bebidas'},
  {nome:'hamburguer'},
  {nome:'sobremesas'},
  {nome:'hot dog'},
  {nome:'porções'},
])
  }
}