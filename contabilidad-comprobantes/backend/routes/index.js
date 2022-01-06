const {Router} = require('express')

const comprobanteRouter=require('./comprobante')
const cuentaRouter = require("./cuenta");



const router=Router();


router.use('/comprobantes', comprobanteRouter)
router.use('/cuentas', cuentaRouter)


module.exports= router;