import {getConnection} from "typeorm";
import { ProductEntity } from "../entities/productEntity";
import {ProductRepository} from "../repository/ProductRepository"

const productRepository = getConnection("products").getCustomRepository(ProductRepository);

export const getAllService = async () => {
    const products = await productRepository.find();
    return products;
}

export const createService = async (product: ProductEntity) => {
    const newProduct = await productRepository.save(product);
    return newProduct;
}

export const updateService = async (id: number, product: ProductEntity) => {
    const updatedProduct = await productRepository.update(id, product);
    return updatedProduct;
}

export const deleteService = async (id: number) => {
    const deletedProduct = await productRepository.delete(id);
    return deletedProduct;
}

