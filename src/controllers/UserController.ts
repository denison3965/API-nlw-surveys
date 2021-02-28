import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';


class UserControlller {
    async create(request : Request, response : Response) {
        const { name, email } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        
        // SELECT * FROM users WHERE email = 'email';
        const userAlreadyExist = await usersRepository.findOne({
            email,
        })


        if (userAlreadyExist) {
            return response.status(400).json({
                error: "User already exists in database"
            })
        }

        const user = usersRepository.create({
            name, email
        })
        await usersRepository.save(user);


        return response.json(user);
    }
}

export { UserControlller };
