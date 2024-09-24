import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserController } from '../controllers/user.controller';
import {ConfigService} from "@nestjs/config";
import {UserService} from "../services/user.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, ConfigService, UserService],
})
export class UserModule {}
