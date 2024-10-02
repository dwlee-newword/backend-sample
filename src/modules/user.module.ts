import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user/user.controller';
import { BookController } from '../controllers/book/book.controller';
import { RentController } from '../controllers/rent/rent.controller';
import { RoomController } from '../controllers/room/room.controller';
import { ReserveController } from '../controllers/reserve/reserve.controller';
import { BookService } from '../services/book.service';
import { RentService } from '../services/rent.service';
import { RoomService } from '../services/room.service';
import { ReserveService } from '../services/reserve.service';

@Module({
  imports: [],
  controllers: [
    UserController,
    BookController,
    RentController,
    RoomController,
    ReserveController,
  ],
  providers: [
    PrismaService,
    ConfigService,
    UserService,
    BookService,
    RentService,
    RoomService,
    ReserveService,
  ],
})
export class UserModule {}
