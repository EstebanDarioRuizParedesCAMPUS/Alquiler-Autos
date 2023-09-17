import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URI;
const nombreDB = "tallerAutos";
const client = new MongoClient(url);
const conection = async () => {
    try {
    await client.connect();
    const db = client.db(nombreDB);
    const colections = {
      Alquileres: db.collection("Alquileres"),
      Automoviles: db.collection("Automoviles"),
      Clientes: db.collection("Clientes"),
      Empleados: db.collection("Empleados"),
      RegistroDevolucion: db.collection("RegistroDevolucion"),
      RegistroEntrega: db.collection("RegistroEntrega"),
      Reservas: db.collection("Reservas"),
      SucursalAutomovil: db.collection("SucursalAutomovil"),
      Sucursales: db.collection("Sucursales"),
    };

    console.log("Coneccion Exitosa");
    return colections;
  } catch (error) {
    console.log(error);
    throw new Error(`No se puede conectar`);
  }
};

export {conection, client }
