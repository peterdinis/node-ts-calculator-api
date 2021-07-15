import "reflect-metadata";
import {Request, Response} from "express";
import {getAllService, createService, updateService, deleteService} from "../services/productService";
import { ProductEntity } from "../entities/productEntity";

export const getAllProducts = async (req: Request, res: Response) => {
    const products = await getAllService();
    res.send(products).json();
}

export const createProduct = async (req: Request, res: Response) => {
    const product = req["body"] as ProductEntity;
    const newProduct = await createService(product);
    res.send(newProduct);

}

export const updateProduct = async (req: Request, res: Response) => {
    const product: any = req["body"] as ProductEntity;
    const id: any = req["params"]["id"];

    res.send(updateService(product, id));
}

export const deleteProduct = async (req: Request, res: Response) => {
    const id: any = req["params"]["id"];
    res.send(deleteService(id));
}