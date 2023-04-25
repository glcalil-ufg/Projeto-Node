import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { KnexModule } from 'nestjs-knex';

@Module({
  imports: [UsersModule,
    KnexModule.forRoot({
      config: {
        client: "pg",
        connection: {
          host: 'localhost',
          user: 'postgres',
          password: 'asdf1234',
          database: 'CRUD' 
        }
      },
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
