import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";
import Product from "./Product.postgres";

const typeDefs = gql`
  input UpdateBoardInput {
    title: String
    age: Int
  }

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoard(number: Int!): Board
    fetchBoards: [Board]
    fetchProduct(productId: ID): Product
    fetchProducts: [Product]
  }

  type Mutation {
    createBoard(writer: String!, title: String!, age: Int!): Boolean
    updateBoard(number: Int!, updateBoardInput: UpdateBoardInput!): Boolean
    deleteBoard(number: Int!): Boolean
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): Boolean
    updateProduct(
      productId: ID
      updateProductInput: UpdateProductInput!
    ): Boolean

    deleteProduct(productId: ID): Boolean
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Product {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
  }
`;

const resolvers = {
  Query: {
    fetchBoard: (_: any, args: any) => {
      return Board.findOne({ where: { number: args.number, deletedAt: null } });
    },

    fetchBoards: () => {
      // 데이터 꺼내서 프론트엔드에 주기

      return Board.find({ where: { deletedAt: null } });
    },
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
    createBoard: async (_: any, args: any) => {
      // 데이터 만들고, 결과 프론트엔드에 주기
      try {
        await Board.insert({
          writer: args.writer,
          title: args.title,
          age: args.age,
        });
      } catch (error) {
        console.log(error.message);
      }

      return true;
    },
    updateBoard: (_: any, args: any) => {
      Board.update(
        { number: args.number },
        { title: args.updateBoardInput.title, age: args.updateBoardInput.age }
      );
      return true;
    },
    deleteBoard: (_: any, args: any) => {
      Board.update({ number: args.number }, { deletedAt: new Date() });
      // Board.delete({ number: args.number });
      return true;
    },
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
      return true;
    },
    updateProduct: async (_: any, args: any) => {
      try {
        await Product.update(
          { _id: args._id },
          {
            name: args.updateProductInput.name,
            detail: args.updateProductInput.detail,
            price: args.updateProductInput.price,
          }
        );
      } catch (error) {
        console.log(error.message);
      }
      return true;
    },
    deleteProduct: async (_: any, args: any) => {
      try {
        await Product.update({ _id: args._id }, { deletedAt: new Date() });
      } catch (error) {
        console.log(error.message);
      }
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
