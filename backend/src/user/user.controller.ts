import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import * as userDto from "./dto/user-dto";

@Controller('user')
export class UserController {
    constructor(private usersService: UserService) {}

    @Get() 
    getUsers(): userDto.UserDto[] {
        return this.usersService.getUsers();
    }

    @Get('/getById/:id')
    getUserById(@Body('id') id: number): userDto.UserDto {
        console.log("Controller" + id)
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body('name') userName: string): userDto.UserDto {
        const userCreated = this.usersService.createUser(userName);
        console.log(userCreated);
        return userCreated;
    }

    @Put()
    updateUser(@Body('user') user: userDto.UserDto): userDto.UserDto {
        const userUpdated = this.usersService.updateUser(user)
        return userUpdated;
    }
}