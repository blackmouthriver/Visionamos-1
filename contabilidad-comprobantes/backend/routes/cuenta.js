const { default: axios } = require("axios");

const { Router, query } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//const axios = require('axios)
const { Comprobante, Cuenta } = require("../config/db");
const { v4: uuidv4 } = require("uuid");

/*const {
    API_KEY

}=process.env;*/

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/", async function (req, res, next) {
  const {
    account,
    name,
    revelationName,
    type,
    nature,
    unlocked,
    gmf,
    letAsAccount,
    closeBalanced,
    nit,
    description,
    nifAccount,
    state,
  } = req.body;

  console.log(nit, "PRUEBA")
  try {
    let newCuenta = await Cuenta.create({
        account,
        name,
        revelationName,
        type,
        nature,
        unlocked,
        gmf,
        letAsAccount,
        closeBalanced,
        nit,
        description,
        nifAccount,
        state,
    });
    res.status(200).json(newCuenta);
  } catch (error) {
    next(error);
  }
});

// router.get("/last", async function (req, res, next) {
//   try {
//     const comprobantes = await Comprobante.findAll();
//     const ultimoComprobante = comprobantes[comprobantes.length - 1];
//     res.status(200).json(ultimoComprobante);
//   } catch (error) {
//     next(error);
//   }
// });

router.get("/all", async function (req, res, next) {
  try {
    const cuentas = await Cuenta.findAll();
    res.status(200).json(cuentas);
  } catch (error) {
    next(error);
  }
});
// extras
router.delete("/borrar/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const deletedCuenta = await Cuenta.destroy(
      {
        where: { id },
      }
    );
    res.status(200).json(deletedCuenta);
  } catch (error) {
    next(error);
  }
});

router.put("/actualizar/:id", async function (req, res, next) {
  const { account, name, revelationName, type, nature, unlocked, gmf, letAsAccount, closeBalanced, nit, description, nifAccount, state } =
    req.body;
  try {
    const { id } = req.params;
    const modifiedPuc = await Cuenta.update(
      {

        account: account,
        name: name,
        revelationName: revelationName,
        type: type,
        nature: nature,
        unlocked: unlocked,
        gmf: gmf,
        letAsAccount: letAsAccount,
        closeBalanced: closeBalanced,
        nit: nit,
        description: description,
        nifAccount: nifAccount,
        state: state
      },
      {
        where: { id },
      }
    );
    res.status(200).json(modifiedPuc);
  } catch (error) {
    next(error);
  }
});

module.exports = router;