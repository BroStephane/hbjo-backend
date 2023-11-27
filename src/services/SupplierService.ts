import SupplierModel, { Supplier } from '../models/Supplier';

class SupplierService {
    static async findAll(): Promise<Supplier[]> {
        return await SupplierModel.findAll();
    }

    static async findById(id: string): Promise<Supplier | undefined> {
        return await SupplierModel.findById(id);
    }

    static async create(supplierData: Supplier): Promise<Supplier> {
        return await SupplierModel.create(supplierData);
    }

    static async update(id: string, supplierData: Supplier): Promise<Supplier | undefined> {
        return await SupplierModel.update(id, supplierData);
    }

    static async delete(id: string): Promise<boolean> {
        return await SupplierModel.delete(id);
    }
}

export default SupplierService;
