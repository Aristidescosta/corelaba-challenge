import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middlewares';
interface IQueryProps {
  page?: number,
  limit?: number,
  filter?: string,
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object({
    page: yup.number().moreThan(0),
    limit: yup.number().moreThan(0),
    filter: yup.string()
  })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  console.log(req.query);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Método não implementado!');
};