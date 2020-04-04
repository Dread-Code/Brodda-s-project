const { Router } = require("express"); 

module.exports =({UserController}) =>{
    const router = Router();

    router.post("/signup", UserController.create);
    router.get("", UserController.getAll);
    router.get("/:userId", UserController.get);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);
    router.post("/email", UserController.getUserByEmail);
    
    return router; // No estaba retornando este hpta router .l.
}