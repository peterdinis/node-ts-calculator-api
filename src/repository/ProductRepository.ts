import {EntityRepository, Repository} from "typeorm";
import {ProductEntity} from "../entities/productEntity";

// setup new repository

@EntityRepository(ProductEntity) 
export class ProductRepository extends Repository<ProductEntity> {}