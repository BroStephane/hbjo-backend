export interface OrderItem {
    productId: string;
    quantity: number;
}

export interface Order {
    id: string;
    clientId: string;
    items: OrderItem[];
    status: string; // Exemple: 'Nouvelle', 'En traitement', 'Expédiée'
}
