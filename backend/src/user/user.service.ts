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

    createUser(userName: string): UserDto {
        const userDto: UserDto = {
            id: this.users.length + 1,
            name: userName,
        }
        this.users.push(userDto);
        return userDto;
    }
}