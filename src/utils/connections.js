//import mongoose from "mongoose";
import { connect } from "mongoose";
import { MONGODB_URI } from "../config.js";
/*
export default async function connectMongoose(){
try {
  const db = await connect(MONGODB_URI);
  console.log("🆗 Conectados a MongoDB, Ecommerce!", db.connection.name);
} catch (error) {
  console.error(error);
}

connect.on("Conectado con exito!", () => {
  console.log("Mongoose conectado");
});

connect.on("Desconectado", () => {
  console.log("Mongoose descoectado");
})
}*/
export async function connectMongo() {
  try {
    const db = await connect(MONGODB_URI);
    console.log("🆗 Conectados a MongoDB, Ecommerce!", db.connection.name);
  } catch (e) {
    console.log(e);
    throw "Connection to mongoDB failed";
  }
}
export default connectMongo;
