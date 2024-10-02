import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  async getRoomList() {
    try {
      return await this.prisma.room.findMany();
    } catch (e) {
      throw new Error(e);
    }
  }

  async createRoom(floor: number, number: number, capacity: number) {
    try {
      return await this.prisma.room.create({
        data: {
          floor,
          number,
          capacity,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async getRoom(id: number) {
    try {
      return await this.prisma.room.findUnique({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateRoom(
    id: number,
    floor: number | undefined,
    number: number | undefined,
    capacity: number | undefined,
  ) {
    try {
      return await this.prisma.room.update({
        where: {
          id,
        },
        data: {
          floor,
          number,
          capacity,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteRoom(id: number) {
    try {
      return await this.prisma.room.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
