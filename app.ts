import express, { Request, Response } from 'express';
import productRoutes from './src/routes/productRoutes';
import orderRoutes from './src/routes/orderRoutes';
import supplierRoutes from './src/routes/supplierRoutes';

const app = express();

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/suppliers', supplierRoutes);

// Middleware pour la gestion des erreurs
app.use((err: Error, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Middleware pour gérer les routes non trouvées
app.use((req: Request, res: Response) => {
    res.status(404).send('Sorry, we cannot find that!');
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
