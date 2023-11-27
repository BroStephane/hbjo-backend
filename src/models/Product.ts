import { promises as fs } from 'fs';

export interface Product {
    id: string;
    name: string;
    type: string;
    price: number;
    quantity: number;
}

class ProductModel {
    static filePath = './data/products.json';

    static async findAll(): Promise<Product[]> {
        const data = await fs.readFile(ProductModel.filePath, 'utf8');
        return JSON.parse(data);
    }

    static async findById(id: string): Promise<Product | undefined> {
        const products = await ProductModel.findAll();
        return products.find(product => product.id === id);
    }

    static async create(newProduct: Product): Promise<Product> {
        const products = await ProductModel.findAll();
        products.push(newProduct);
        await fs.writeFile(ProductModel.filePath, JSON.stringify(products, null, 2));
        return newProduct;
    }

    static async update(id: string, updatedProduct: Product): Promise<Product | undefined> {
        const products = await ProductModel.findAll();
        const index = products.findIndex(product => product.id === id);

        if (index === -1) return undefined;

        products[index] = updatedProduct;
        await fs.writeFile(ProductModel.filePath, JSON.stringify(products, null, 2));
        return updatedProduct;
    }

    static async delete(id: string): Promise<boolean> {
        const products = await ProductModel.findAll();
        const newProducts = products.filter(product => product.id !== id);
        if (products.length === newProducts.length) return false;

        await fs.writeFile(ProductModel.filePath, JSON.stringify(newProducts, null, 2));
        return true;
    }
}

export default ProductModel;
