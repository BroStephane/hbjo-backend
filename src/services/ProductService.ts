import ProductModel, { Product } from '../models/Product';

class ProductService {
    static async findAll(): Promise<Product[]> {
        return await ProductModel.findAll();
    }

    static async findById(id: string): Promise<Product | undefined> {
        return await ProductModel.findById(id);
    }

    static async create(productData: Product): Promise<Product> {
        return await ProductModel.create(productData);
    }

    static async update(id: string, productData: Product): Promise<Product | undefined> {
        return await ProductModel.update(id, productData);
    }

    static async delete(id: string): Promise<boolean> {
        return await ProductModel.delete(id);
    }
}

export default ProductService;
