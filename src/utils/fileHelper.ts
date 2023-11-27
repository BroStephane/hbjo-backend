import { promises as fs } from 'fs';

export const readJsonFile = async <T>(filePath: string): Promise<T> => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data) as T;
};

export const writeJsonFile = async <T>(filePath: string, data: T): Promise<void> => {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, jsonData, 'utf8');
};
