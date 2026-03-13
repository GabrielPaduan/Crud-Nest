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
        const user = this.users.find(user => Number(user.id) === Number(id));
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
                return { id: user.id, name: updateUser.name }
            }
            
            return user;
        })
        const userUpdated = this.users.find(user => user.id === updateUser.id);
        return userUpdated as UserDto;
    }

    deleteUser(id: number): void {
        this.users = this.users.filter(user => Number(user.id) !== Number(id))
    }
}