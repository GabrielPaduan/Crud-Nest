import { Inject, Injectable } from "@nestjs/common";
import { UserDto } from "./dto/user-dto";
import { DrizzleAsyncProvider } from "src/drizzle/drizzle.provider";
import * as schema from "../db/schema"
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as q from 'drizzle-orm'

@Injectable()
export class UserService {
    constructor(
        @Inject(DrizzleAsyncProvider)
        private db: NodePgDatabase<typeof schema>
    ) {}

    async getUsers(): Promise<UserDto[]> {
        return await this.db.select().from(schema.userTable) 
    }

    async getUserById(id: number): Promise<UserDto> {
        const filteredUsers = await this.db.select().from(schema.userTable).where(q.eq(schema.userTable.id, id))
        return filteredUsers[0];
    }

    async createUser(userName: string): Promise<void> {
        await this.db.insert(schema.userTable).values({
            name: userName,
        })
    }

    async updateUser(updateUser: UserDto): Promise<void> {
        await this.db.update(schema.userTable).set({ name: updateUser.name}).where(q.eq(schema.userTable.id, updateUser.id));
    }

    async deleteUser(id: number): Promise<void> {
        await this.db.delete(schema.userTable).where(q.eq(schema.userTable.id, id));
    }
}