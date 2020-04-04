let _userService = null;

class UserController {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async get ( req,res  ) {
        let { userId } = req.params;
        const  user = await _userService.get( userId );
        return res.send( user );
    }

    async getAll (req,res) {
        const users = await _userService.getAll();
        return res.send( users );
    }

    async create ( req,res ) {
        let { body } = req;
        const user = await _userService.create( body );
        return res.send( user );
    }

    async update ( req,res ) {
        let {body} = req;
        let { userId } = req.params;
        const user = await _userService.update( userId, body, { new: true} );
        return res.send(user);
    }

    async delete ( req,res ) {
        let { userId } = req.params;
        const user =  await _userService.delete(userId);
        return res.send(user);
    }

    async getUserByEmail( req,res ){
        let {body}= req;
        console.log(body);
        const user = await _userService.getUserByEmail( body );
        return res.send(user);
    }

}

module.exports = UserController;