import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ITask {
  title: string;
  description: string;
  isCompleted: boolean;
  color: string;

}

const validationSchema: yup.Schema<ITask> = yup.object({
  title: yup.string().required().min(5),
  description: yup.string().required().max(255),
  isCompleted: yup.boolean().required(),
  color: yup.string().required().min(3).max(255),
});
export const create = async (req: Request<{}, {}, ITask>, res: Response) => {
  try {
    await validationSchema.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: {
        default: yupError.message
      }
    });
  }
  const { title } = req.body;

  return res.status(StatusCodes.CREATED).send(`Tarefa "${title}" criada com sucesso`);
};