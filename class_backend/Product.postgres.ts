import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  _id!: string;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "integer" })
  price!: number;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;
}

export default Product;
