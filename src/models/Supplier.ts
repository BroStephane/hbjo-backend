import { promises as fs } from 'fs';

export interface Supplier {
    id: string;
    name: string;
    description: string;
    contact: string;
}

class SupplierModel {
    static filePath = './data/suppliers.json';

    static async findAll(): Promise<Supplier[]> {
        const data = await fs.readFile(SupplierModel.filePath, 'utf8');
        return JSON.parse(data);
    }

    static async findById(id: string): Promise<Supplier | undefined> {
        const suppliers = await SupplierModel.findAll();
        return suppliers.find(supplier => supplier.id === id);
    }

    static async create(newSupplier: Supplier): Promise<Supplier> {
        const suppliers = await SupplierModel.findAll();
        suppliers.push(newSupplier);
        await fs.writeFile(SupplierModel.filePath, JSON.stringify(suppliers, null, 2));
        return newSupplier;
    }

    static async update(id: string, updatedSupplier: Supplier): Promise<Supplier | undefined> {
        const suppliers = await SupplierModel.findAll();
        const index = suppliers.findIndex(supplier => supplier.id === id);

        if (index === -1) return undefined;

        suppliers[index] = updatedSupplier;
        await fs.writeFile(SupplierModel.filePath, JSON.stringify(suppliers, null, 2));
        return updatedSupplier;
    }

    static async delete(id: string): Promise<boolean> {
        const suppliers = await SupplierModel.findAll();
        const newSuppliers = suppliers.filter(supplier => supplier.id !== id);
        if (suppliers.length === newSuppliers.length) return false;

        await fs.writeFile(SupplierModel.filePath, JSON.stringify(newSuppliers, null, 2));
        return true;
    }
}

export default SupplierModel;
