import {getConnection} from "typeorm";
import {ProductRepository} from "../repository/ProductRepository"


const productRepository = getConnection("products").getCustomRepository(ProductRepository);

export const getAllService = async () => {
    const products = await productRepository.find();
    return products;
}

export const createService = () => {
    return "WORK";
}

export const updateService = () => {
    return "WORK";
}

export const deleteService = () => {
    return "WORK";
}

