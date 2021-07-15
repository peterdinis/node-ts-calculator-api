import {getAllProducts, createProduct, updateProduct, deleteProduct} from "../controllers/ProductController";
import {Router} from 'express';


const router = Router();

router.get("/products", getAllProducts);
router.post("/product/create/", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;