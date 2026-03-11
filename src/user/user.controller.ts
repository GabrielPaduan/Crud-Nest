import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import * as userDto from "./dto/user-dto";

@Controller('user')
export class UserController {
    constructor(private usersService: UserService) {}

    @Get() 
    getUsers(): userDto.UserDto[] {
        return this.usersService.getUsers();
    }

    @Post()
    createUser(@Body('name') userName: string): userDto.UserDto {
        const userCreated = this.usersService.createUser(userName);
        console.log(userCreated);
        return userCreated;
    }
}