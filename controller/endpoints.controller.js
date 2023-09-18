import { ObjectId } from "mongodb";
import {conection, client} from "../conection/conectionDB.js";

const ejercicio2 = async (req, res) => {
    try {
        const colection = (await conection()).Clientes
    const clientes = await colection.find({}).toArray()
    res.json(clientes)
    await client.close()
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')
    }
}

const ejercicio3 = async (req, res) => {
    try {
        const colection = (await conection()).Automoviles
        const automoviles = await colection.find({}).toArray()
        res.json(automoviles)
        await client.close()  
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')
    }
};

const ejercicio4 = async (req, res) => {
    try {
        const colection = (await conection()).Alquileres
        const alquileres = await colection.find({
            Estado: true
        }).toArray()  
        res.json(alquileres)
        await client.close()
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')
    }
};

const ejercicio5 = async (req, res) => {
    try {
        const colection = (await conection()).Reservas
        const reservas = await colection.find({
            Estado: true
        }).toArray()
        res.json(reservas)
        await client.close()
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')
    }
};

const ejercicio6 = async (req, res) => {
    try {
        const {id} = req.query
        const objectId = new ObjectId(id);
        const colection = (await conection()).Alquileres
        const alquileres = await colection.find({
            _id: objectId
        }).toArray()
        res.json(alquileres)
        await client.close()  
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')
    }
};

const ejercicio7 = async (req, res) => {
    try {
        const colection = (await conection()).Empleados
        const empleados = await colection.find({
            Cargo: 'Vendedor'
        }).toArray()
        res.json(empleados)
        await client.close()
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio8 = async (req, res) => {
    try {
        const colection = (await conection()).SucursalAutomovil
const result = await colection.aggregate([
    {
      $group: {
        _id: {
          sucursal: "$Sucursal.Nombre",
          automovilMarca: "$Automovil.Marca",
          automovilModelo: "$Automovil.Modelo",
          automovilAnio: "$Automovil.Anio",
        },
      },
    },
    {
      $group: {
        _id: "$_id.sucursal",
        AutomovilesDiponibles: {
          $push: {
            automovilMarca: "$_id.automovilMarca",
            automovilModelo: "$_id.automovilModelo",
            automovilAnio: "$_id.automovilAnio",
          },
        },
        TotalAutomovilesDisponibles: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        Sucursal: "$_id",
        AutomovilesDiponibles: 1,
        TotalAutomovilesDisponibles: 1,
      },
    },
  ]).toArray();
        res.json(result)
        await client.close()
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio9 = async (req, res) => {
    try {
            const {id} = req.query
            const objectId = new ObjectId(id);
            const colection = (await conection()).Alquileres
            const alquileres = await colection.find({
                _id: objectId
            }).project({
                CostoTotal : 1
            }).toArray()
            res.json(alquileres)
            await client.close()  
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio10 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio11 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio12 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio13 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio14 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio15 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio16 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio17 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio18 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio19 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio20 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

const ejercicio21 = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).end('Dato Inválido/No enontrado')  
    }
};

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
