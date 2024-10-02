import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserList() {
    try {
      return await this.prisma.user.findMany();
    } catch (e) {
      throw new Error(e);
    }
  }

  async createUser(name: string, email: string, password: string) {
    try {
      return await this.prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async createUserDetail({
    userId,
    address,
    phone,
  }: {
    userId: number;
    address: string;
    phone: string;
  }) {
    try {
      return await this.prisma.user_detail.create({
        data: {
          user_id: userId,
          address,
          phone,
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
        include: {
          user_detail: true,
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
    address: string | undefined,
    phone: string | undefined,
  ) {
    try {
      return await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          email,
          user_detail: {
            update: {
              address,
              phone,
            },
          },
        },
        include: {
          user_detail: true,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteUser(id: number) {
    try {
      await this.prisma.user_detail.delete({
        where: {
          user_id: id,
        },
      });
      return await this.prisma.user.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async getUserRentList(id: number) {
    try {
      return await this.prisma.rent.findMany({
        where: {
          user_id: id,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
