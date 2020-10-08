import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lâmpada', image: 'lampada.png'},
    { title: 'Pilha e Bateria', image: 'bateria.png'},
    { title: 'Papel e Papelão', image: 'papel.png'},
    { title: 'Resíduo Eletrônico', image: 'eletronico.png'},
    { title: 'Resíduo Orgânico', image: 'organico.png'},
    { title: 'Óleo Vegetal', image: 'oleo.png'},
  ])
}