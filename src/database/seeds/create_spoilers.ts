import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('spoilers').insert([
        {title: 'Star Wars', name: 'Luan', description: 'Darth Vader é pai do Luke'},
        {title: 'Indiana Jones', name: 'João', description: 'Ele morre no final'},
        {title: 'Planeta dos Macacos', name: 'Roberto', description: 'Eles nunca sairam da terra'},
        {title: 'The Last of Us', name: 'Luan', description: 'A Ellie morre no final'},
    ]);
};
