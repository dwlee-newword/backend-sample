import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

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

  async getUser(id: number) {
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
