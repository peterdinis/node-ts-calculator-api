import ProductController from "../controllers/ProductController";
import {Router} from 'express';

const router = Router();

router.get("/", async (_req, res) => {
    const controller = new ProductController();
    const response = await controller.getProduct();
    return res.send(response);
});
  
router.post("/create", async (req, res) => {
    const controller = new ProductController();
    const response = await controller.createProduct(req.body);
    return res.send(response);
});

export default router;