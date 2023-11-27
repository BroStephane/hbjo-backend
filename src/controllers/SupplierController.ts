import { Request, Response } from 'express';
import SupplierService from '../services/SupplierService';

class SupplierController {
    static async createSupplier(req: Request, res: Response) {
        try {
            const supplier = await SupplierService.create(req.body);
            res.status(201).json(supplier);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async getSupplier(req: Request, res: Response) {
        try {
            const supplierId = req.params.id;
            const supplier = await SupplierService.findById(supplierId);
            if (!supplier) {
                return res.status(404).json({ message: 'Supplier not found' });
            }
            res.json(supplier);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async updateSupplier(req: Request, res: Response) {
        try {
            const supplierId = req.params.id;
            const updatedSupplier = await SupplierService.update(supplierId, req.body);
            if (!updatedSupplier) {
                return res.status(404).json({ message: 'Supplier not found' });
            }
            res.json(updatedSupplier);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async deleteSupplier(req: Request, res: Response) {
        try {
            const supplierId = req.params.id;
            const deleted = await SupplierService.delete(supplierId);
            if (!deleted) {
                return res.status(404).json({ message: 'Supplier not found' });
            }
            res.status(204).end();
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async getAllSuppliers(req: Request, res: Response) {
        try {
            const suppliers = await SupplierService.findAll();
            res.json(suppliers);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }
}

export default SupplierController;
