import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import * as userDto from "./dto/user-dto";

@Controller('user')
export class UserController {
    constructor(private usersService: UserService) {}

    @Get() 
    getUsers(): userDto.UserDto[] {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: number): userDto.UserDto {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body('name') userName: string): userDto.UserDto {
        const userCreated = this.usersService.createUser(userName);
        return userCreated;
    }

    @Put()
    updateUser(@Body('user') user: userDto.UserDto): userDto.UserDto {
        const userUpdated = this.usersService.updateUser(user);
        return userUpdated;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): void {
        this.usersService.deleteUser(id);
    }
}