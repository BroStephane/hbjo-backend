import { promises as fs } from 'fs';

interface OrderItem {
    productId: string;
    quantity: number;
}

export interface Order {
    id: string;
    clientId: string;
    items: OrderItem[];
    status: string;
}

class OrderModel {
    static filePath = './data/orders.json';

    static async findAll(): Promise<Order[]> {
        const data = await fs.readFile(OrderModel.filePath, 'utf8');
        return JSON.parse(data);
    }

    static async findById(id: string): Promise<Order | undefined> {
        const orders = await OrderModel.findAll();
        return orders.find(order => order.id === id);
    }

    static async create(newOrder: Order): Promise<Order> {
        const orders = await OrderModel.findAll();
        orders.push(newOrder);
        await fs.writeFile(OrderModel.filePath, JSON.stringify(orders, null, 2));
        return newOrder;
    }

    static async update(id: string, updatedOrder: Order): Promise<Order | undefined> {
        const orders = await OrderModel.findAll();
        const index = orders.findIndex(order => order.id === id);

        if (index === -1) return undefined;

        orders[index] = updatedOrder;
        await fs.writeFile(OrderModel.filePath, JSON.stringify(orders, null, 2));
        return updatedOrder;
    }

    static async delete(id: string): Promise<boolean> {
        const orders = await OrderModel.findAll();
        const newOrders = orders.filter(order => order.id !== id);
        if (orders.length === newOrders.length) return false;

        await fs.writeFile(OrderModel.filePath, JSON.stringify(newOrders, null, 2));
        return true;
    }
}

export default OrderModel;
