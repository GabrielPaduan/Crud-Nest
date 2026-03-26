import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true, 
    }), UserModule, DrizzleModule],
})
export class AppModule {}
