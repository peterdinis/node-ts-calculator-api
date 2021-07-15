import {Request, Response} from "express";
import {getAllService, createService, updateService, deleteService} from "../services/productService";


export const getAllProducts = async (req: Request, res: Response) => {
    res.send(getAllService());
}

export const createProduct = async (req: Request, res: Response) => {
    res.send(createService());
}

export const updateProduct = async (req: Request, res: Response) => {
    res.send(updateService());
}

export const deleteProduct = async (req: Request, res: Response) => {
    res.send(deleteService());
}