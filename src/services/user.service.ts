import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { user } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserList(){
    try {
      return await this.prisma.user.findMany();
    } catch (e) {
      throw new Error(e);
    }
  }

  async createUser(name: string, email: string) {
    try {
      return await this.prisma.user.create({
        data: {
          name,
          email,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async getUser(id: number): Promise<user> {
    try {
      return await this.prisma.user.findUnique({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateUser(
    id: number,
    name: string | undefined,
    email: string | undefined,
  ) {
    try {
      return await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          email,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteUser(id: number) {
    try {
      return await this.prisma.user.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
