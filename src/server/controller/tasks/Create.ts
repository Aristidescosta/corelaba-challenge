import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middlewares';
export interface ITask {
  id: string;           // Unique identifier for the task item
  title: string;        // Title or name of the task
  description?: string; // Optional description of the task
  isFavorite: boolean;  // Whether the task is marked as a favorite
  isCompleted: boolean;  // Whether the task is marked as a favorite
  color: string;        // Color associated with the task (e.g., '#ff0000')
  createdAt: Date;      // Timestamp when the task was created
  updatedAt: Date;      // Timestamp when the task was last updated
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ITask>(yup.object({
    id: yup.string()/* .uuid() */.required(),
    title: yup.string().required().min(5),
    description: yup.string().max(255),
    isFavorite: yup.boolean().required(),
    isCompleted: yup.boolean().required(),
    color: yup.string().required().min(3).max(255),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required(),
  }))
}));


export const create = async (req: Request<{}, {}, ITask>, res: Response) => {

  return res.status(StatusCodes.CREATED).send('Método não implementado!');
};