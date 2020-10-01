import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lâmpada', image: 'lampada.png'},
    { title: 'Pilha e bateria', image: 'bateria.png'},
    { title: 'Papel e Papelão', image: 'papel.png'},
    { title: 'Resíduo eletrônico', image: 'eletronico.png'},
    { title: 'Resíduo Orgânico', image: 'organico.png'},
    { title: 'Óleo alimentar', image: 'oleo.png'},
  ])
}