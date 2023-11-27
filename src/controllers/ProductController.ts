import { Request, Response } from 'express';
import ProductService from '../services/ProductService';


class ProductController {
    static async createProduct(req: Request, res: Response) {
        try {
            const product = await ProductService.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async getProduct(req: Request, res: Response) {
        try {
            const productId = req.params.id;
            const product = await ProductService.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async updateProduct(req: Request, res: Response) {
        try {
            const productId = req.params.id;
            const updatedProduct = await ProductService.update(productId, req.body);
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(updatedProduct);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async deleteProduct(req: Request, res: Response) {
        try {
            const productId = req.params.id;
            const deleted = await ProductService.delete(productId);
            if (!deleted) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(204).end();
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async getAllProducts(req: Request, res: Response) {
        try {
            const products = await ProductService.findAll();
            res.json(products);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }
}

export default ProductController;
