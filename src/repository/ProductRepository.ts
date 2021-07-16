import {Product} from "../models";
import {getRepository} from "typeorm"
import {IProduct} from "../interfaces/IProduct";


export const getAllProducts = async(): Promise<Array<Product>> => {
    const productRepository = getRepository(Product);
    return productRepository.find();
}

export const createProduct = async (payload: IProduct): Promise<Product> => {
    const productRepository = getRepository(Product);

    const product = new Product();
    return productRepository.save({
        ...product,
        ...payload
    })
}