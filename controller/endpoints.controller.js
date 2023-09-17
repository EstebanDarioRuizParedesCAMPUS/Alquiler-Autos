import {conection, client} from "../conection/conectionDB.js";

const ejercicio2 = async (req, res) => {
    const colection = (await conection()).Clientes
    
    const clientes = await colection.find({}).toArray()

    res.json(clientes)

    await client.close()
}

const ejercicio3 = async (req, res) => {
    const colection = (await conection()).Automoviles
    
    const automoviles = await colection.find({}).toArray()
    
    res.json(automoviles)

    await client.close()
};

const ejercicio4 = async (req, res) => {
    const colection = (await conection()).Alquileres
    
    const alquileres = await colection.find({
        Estado: true
    }).toArray()
    
    res.json(alquileres)

    await client.close()
};

const ejercicio5 = async (req, res) => {
    const colection = (await conection()).Reservas
    
    const reservas = await colection.find({
        Estado: true
    }).toArray()
    
    res.json(reservas)

    await client.close()
};

const ejercicio6 = async (req, res) => {
    const {id} = req.query
    
};

const ejercicio7 = async (req, res) => {};

const ejercicio8 = async (req, res) => {};

const ejercicio9 = async (req, res) => {};

const ejercicio10 = async (req, res) => {};

const ejercicio11 = async (req, res) => {};

const ejercicio12 = async (req, res) => {};

const ejercicio13 = async (req, res) => {};

const ejercicio14 = async (req, res) => {};

const ejercicio15 = async (req, res) => {};

const ejercicio16 = async (req, res) => {};

const ejercicio17 = async (req, res) => {};

const ejercicio18 = async (req, res) => {};

const ejercicio19 = async (req, res) => {};

const ejercicio20 = async (req, res) => {};

const ejercicio21 = async (req, res) => {};

export {
  ejercicio2,
  ejercicio3,
  ejercicio4,
  ejercicio5,
  ejercicio6,
  ejercicio7,
  ejercicio8,
  ejercicio9,
  ejercicio10,
  ejercicio11,
  ejercicio12,
  ejercicio13,
  ejercicio14,
  ejercicio15,
  ejercicio16,
  ejercicio17,
  ejercicio18,
  ejercicio19,
  ejercicio20,
  ejercicio21,
};
