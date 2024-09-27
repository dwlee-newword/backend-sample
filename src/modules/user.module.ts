import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user/user.controller';
import { BookController } from '../controllers/book/book.controller';
import { RentController } from '../controllers/rent/rent.controller';
import { BookService } from '../services/book.service';
import { RentService } from '../services/rent.service';

@Module({
  imports: [],
  controllers: [UserController, BookController, RentController],
  providers: [
    PrismaService,
    ConfigService,
    UserService,
    BookService,
    RentService,
  ],
})
export class UserModule {}
