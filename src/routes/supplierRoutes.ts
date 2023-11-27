import express from 'express';
import SupplierController from '../controllers/SupplierController';

const router = express.Router();

router.post('/', SupplierController.createSupplier);
router.get('/', SupplierController.getAllSuppliers);
router.get('/:id', SupplierController.getSupplier);
router.put('/:id', SupplierController.updateSupplier);
router.delete('/:id', SupplierController.deleteSupplier);

export default router;
