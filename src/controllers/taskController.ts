import { Request, Response } from 'express';
import { Task } from '../models/task';

export const getTasks = async (req: Request, res: Response): Promise<void> => {
    console.log('test');

    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
    console.log('test');
    const { title, description, dueDate, tags } = req.body;

    const newTask = new Task({
        title,
        description,
        dueDate,
        tags
    });

    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
    console.log('test');
    const { id } = req.params;
    const { title, description, dueDate, tags } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { title, description, dueDate, tags }, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    console.log('test');
    const { id } = req.params;

    try {
        await Task.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
