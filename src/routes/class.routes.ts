import { Router, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Class);

    const response = await repo.save(req.body);

    return res.status(201).json(response);
  } catch (error: any) {
    console.log('Message:', error.message);
  }
});

classRouter.get('/', async (req, res) => {
  res.json(await getRepository(Class).find());
});

classRouter.get('/:name', async (req, res) => {
  const { name } = req.query;
  const repository = getCustomRepository(ClassRepository);
  const response = await repository.findByName(String(name));

  return res.json(response);
});

export default classRouter;
