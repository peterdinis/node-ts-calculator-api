import "reflect-metadata";
import {Request, Response} from "express";
import {getAllService, createService, updateService, deleteService} from "../services/productService";


export const getAllProducts = (req: Request, res: Response) => {
    res.send(getAllService());
}

export const createProduct = (req: Request, res: Response) => {
    res.send(createService());
}

export const updateProduct = (req: Request, res: Response) => {
    res.send(updateService());
}

export const deleteProduct = (req: Request, res: Response) => {
    res.send(deleteService());
}