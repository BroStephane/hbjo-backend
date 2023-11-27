import { Request, Response } from 'express';
import { Order } from '../models/Order';
import OrderService from '../services/OrderService';

class OrderController {
    static async createOrder(req: Request, res: Response) {
        try {
            const newOrder: Order = req.body;
            const order = await OrderService.create(newOrder);
            res.status(201).json(order);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async getOrder(req: Request, res: Response) {
        try {
            const orderId = req.params.id;
            const order = await OrderService.findById(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json(order);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async updateOrder(req: Request, res: Response) {
        try {
            const orderId = req.params.id;
            const updatedOrder = await OrderService.update(orderId, req.body);
            if (!updatedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json(updatedOrder);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async deleteOrder(req: Request, res: Response) {
        try {
            const orderId = req.params.id;
            const success = await OrderService.delete(orderId);
            if (!success) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(204).end();
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }

    static async getAllOrders(req: Request, res: Response) {
        try {
            const orders = await OrderService.findAll();
            res.json(orders);
        } catch (error) {
            const message = (error as Error).message;
            res.status(400).json({ message });
        }
    }
}

export default OrderController;
