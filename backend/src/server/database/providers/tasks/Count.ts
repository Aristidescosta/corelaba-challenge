import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const count = async (filter = ''): Promise<number | Error> => {
  try {
    const [{ count }] = await Knex(ETableNames.tasks)
      .where('title', 'like', `%${filter}%`)
      .count<[{ count: number }]>('* as count');

    if (Number.isInteger(Number(count))) return Number(count);

    return new Error('Erro ao consultar a quantidade total de tarefas');
  } catch (error) {
    console.log(error);
    return Error('Erro ao consultar a quantidade total de tarefas');
  };
};