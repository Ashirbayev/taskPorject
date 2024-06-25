import { Schema, model, Document } from 'mongoose';

interface ITask extends Document {
    title: string;
    description: string;
    createdAt: Date;
    dueDate?: Date;
    tags?: string[];
}

const TaskSchema = new Schema<ITask>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    dueDate: { type: Date },
    tags: { type: [String] }
});

export const Task = model<ITask>('Task', TaskSchema);
