import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    
    // @Column("decimal", { precision: 8, scale: 2 })
    // extraArg!: number;

    @Column()
    extraArg!: string;

    @Column()
    price!: number;

}