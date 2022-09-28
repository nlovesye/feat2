import MongoClient from "mongoose";
import { DB_URL } from "./index";

// 创建连接
MongoClient.connect(DB_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// 连接成功
MongoClient.connection.on("connected", () => {
  console.log(`✅ Mongoose connection open to ${DB_URL}`);
});

// 连接异常
MongoClient.connection.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

// 断开连接
MongoClient.connection.on("disconnected", () => {
  console.log(`Mongoose connection disconnected`);
});

export default MongoClient;
