import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import * as userDto from "./dto/user-dto";

@Controller('user')
export class UserController {
    constructor(private usersService: UserService) {}

    @Get() 
    getUsers(): Promise<userDto.UserDto[]> {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: number): Promise<userDto.UserDto> {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body('name') userName: string): void {
        this.usersService.createUser(userName);
    }

    @Put()
    updateUser(@Body('user') user: userDto.UserDto): void {
        this.usersService.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): void {
        this.usersService.deleteUser(id);
    }
}