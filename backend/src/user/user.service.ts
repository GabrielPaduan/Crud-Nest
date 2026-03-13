import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/user-dto";

@Injectable()
export class UserService {
    private users: UserDto[] = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
    ];

    getUsers(): UserDto[] {
        return this.users;
    }

    getUserById(id: number): UserDto {
        console.log(id)
        const user = this.users.find(user => user.id === id);
         console.log(user)
        return user as UserDto;
    }

    createUser(userName: string): UserDto {
        const userDto: UserDto = {
            id: this.users.length + 1,
            name: userName,
        }
        this.users.push(userDto);
        return userDto;
    }

    updateUser(updateUser: UserDto): UserDto {
        this.users = this.users.map(user => {
            if (user.id === updateUser.id) {
                return { id: updateUser.id, name: updateUser.name }
            }
            return user;
        })
        const userUpdated = this.users.find(user => user.id === updateUser.id);
        return userUpdated as UserDto;
    }
}