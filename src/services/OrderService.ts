import OrderModel, { Order } from '../models/Order';

class OrderService {
    static async findAll(): Promise<Order[]> {
        return await OrderModel.findAll();
    }

    static async findById(id: string): Promise<Order | undefined> {
        return await OrderModel.findById(id);
    }

    static async create(orderData: Order): Promise<Order> {
        return await OrderModel.create(orderData);
    }

    static async update(id: string, orderData: Order): Promise<Order | undefined> {
        return await OrderModel.update(id, orderData);
    }

    static async delete(id: string): Promise<boolean> {
        return await OrderModel.delete(id);
    }
}

export default OrderService;
