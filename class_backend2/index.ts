import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Product from "../class_backend/Product.postgres";

const typeDefs = gql`
  input UpdateProductInput {
    name: String
    datail: String
    price: Int
  }

  input CreateProductInput {
    name: String
    datail: String
    price: Int
  }

  type Product {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
  }

  type Query {
    fetchProduct(productId: ID): Product
    fetchProducts: [Product]
  }

  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): boolean

    updateProduct(
      productId: ID
      updateProductInput: UpdateProductInput!
    ):message

    deleteProduct(productId: ID)
  }
`;

const resolvers = {
  Query: {
    fetchProduct: (_: any, args: any) => {
      return Product.findOne({
        where: { productId: args._id, deletedAt: null },
      });
    },

    fetchProducts: () => {
      // 데이터 꺼내서 프론트엔드에 주기

      return Product.find({ where: { deletedAt: null } });
    },
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
      // 데이터 만들고, 결과 프론트엔드에 주기
      try {
        await Product.insert({
          seller: args.seller,
          name: args.createProductInput.name,
          detail: args.createProductInput.detail,
          price: args.createProductInput.price,
        });
      } catch (error) {
        console.log(error.message);
      }
    },
    updateProduct: (_: any, args: any) => {
      Product.update(
        { productId: args._id },
        {
          name: args.createProductInput.name,
          detail: args.createProductInput.detail,
          price: args.createProductInput.price,
        }
      );
      return true;
    },
    deleteBoard: (_: any, args: any) => {
      Product.update({ productId: args._id }, { deletedAt: new Date() });
      // Board.delete({ number: args.number });
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5004,
  host: "34.64.71.71", //'db.example.codebootcamp.co.kr'
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  // 연결 성공 시 실행
  console.log("접속완료!");
  server.listen({ port: 4000 });
});
