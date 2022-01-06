const { default: axios } = require("axios");

const { Router, query } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//const axios = require('axios)
const { Comprobante } = require("../config/db");
const { v4: uuidv4 } = require("uuid");

/*const {
    API_KEY

}=process.env;*/

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/", async function (req, res, next) {
  const {
    name,
    status,
    vaucher,
    sequence,
    type,
    state,
    automatic,
    restartSequence,
  } = req.body;

  try {
    let newComprobante = await Comprobante.create({
      name,
      vaucher,
      sequence,
      type,
      state,
      restartSequence,
      automatic,
      status,
    });
    res.status(200).json(newComprobante);
  } catch (error) {
    next(error);
  }
});

router.get("/last", async function (req, res, next) {
  try {
    const comprobantes = await Comprobante.findAll();
    const ultimoComprobante = comprobantes[comprobantes.length - 1];
    res.status(200).json(ultimoComprobante);
  } catch (error) {
    next(error);
  }
});

router.get("/all", async function (req, res, next) {
  try {
    const comprobantes = await Comprobante.findAll({
      where: { status: true },
    });
    res.status(200).json(comprobantes);
  } catch (error) {
    next(error);
  }
});
// extras
router.put("/borrar/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const modifiedComprobante = await Comprobante.update(
      {
        status: false,
      },
      {
        where: { id },
      }
    );
    res.status(200).json(modifiedComprobante);
  } catch (error) {
    next(error);
  }
});

router.put("/actualizar/:id", async function (req, res, next) {
  const { name, vaucher, sequence, type, state, automatic, restartSequence } =
    req.body;
  try {
    const { id } = req.params;
    const modifiedComprobante = await Comprobante.update(
      {
        name: name,
        vaucher: vaucher,
        sequence: sequence,
        type: type,
        state: state,
        restartSequence: restartSequence,
        automatic: automatic,
      },
      {
        where: { id },
      }
    );
    res.status(200).json(modifiedComprobante);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
