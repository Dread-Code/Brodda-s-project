//mainly router note: Se encarga de configurar las rutas

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");

module.exports = function name({HomeRoutes, UserRoutes}) {
    const router = express.Router();
    const apiRoutes = express.Router();

    //default middlewares
    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(morgan("dev"));

    apiRoutes.use("/home",HomeRoutes);
    apiRoutes.use("/user",UserRoutes);

    router.use("/v1/api",apiRoutes);


    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}