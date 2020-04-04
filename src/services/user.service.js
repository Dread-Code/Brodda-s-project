const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService {
    constructor({ UserRepository }) {
        super( UserRepository );
        _userRepository = UserRepository;
    }

    async getUserByEmail( body ){
        return await _userRepository.getUserByEmail( body );
    }

}

module.exports = UserService;