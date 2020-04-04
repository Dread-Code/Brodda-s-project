const { createContainer, asValue, asClass, asFunction } = require("awilix");

const container = createContainer();
const Routes = require("../routes");

//config
const config = require("../config");
const app = require(".");

// services
const {
    HomeService,
    BaseService,
    UserService
} = require("../services");

//Controllers
const {
    HomeController,
    UserController
} = require("../controllers");

//Routes
const{
    HomeRoutes,
    UserRoutes
} = require("../routes/index.routes");


//models
const {
    User
} = require("../models");

//repositories
const {
    UserRepository,
    BaseRepository
} = require("../repositories");


container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton(),
    BaseService: asClass(BaseService).singleton(),
    UserService: asClass(UserService).singleton()
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton()
})
.register({
    User: asValue(User)
})
.register({
    UserRepository: asClass(UserRepository).singleton(),
    BaseRepository: asClass(BaseRepository).singleton()
});

module.exports = container;