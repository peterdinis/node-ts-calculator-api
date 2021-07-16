import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import {Product} from "../models";
import {
    getAllProducts,
    createProduct
} from "../repository/ProductRepository";
import {IProduct} from "../interfaces/IProduct";

@Route("products")
@Tags("Product")

export default class ProductController {
    @Get("/")
    public async getProduct(): Promise<Array<Product>> {
        return getAllProducts();
    }

    @Post("/create")
    public async createProduct(@Body() body: IProduct): Promise<Product> {
        return createProduct(body);
    }
}