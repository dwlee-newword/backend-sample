import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RESERVE_TIME } from '@prisma/client';

@Injectable()
export class ReserveService {
  constructor(private readonly prisma: PrismaService) {}

  async getReserveList() {
    try {
      return await this.prisma.room_reservation.findMany();
    } catch (e) {
      throw new Error(e);
    }
  }

  async createReserve(
    userId: number,
    roomId: number,
    reserveTime: number,
    startTime: RESERVE_TIME,
    endTime: RESERVE_TIME,
  ) {
    try {
      await this.prisma.room_reservation.create({
        data: {
          user_id: userId,
          room_id: roomId,
          reserve_time: reserveTime,
          start_time: startTime,
          end_time: endTime,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getReserve(id: number) {
    try {
      return await this.prisma.room_reservation.findUnique({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateReserve(
    id: number,
    userId: number | undefined,
    roomId: number | undefined,
    reserveTime: number | undefined,
    startTime: RESERVE_TIME | undefined,
    endTime: RESERVE_TIME | undefined,
  ) {
    try {
      return await this.prisma.room_reservation.update({
        where: {
          id,
        },
        data: {
          user_id: userId,
          room_id: roomId,
          reserve_time: reserveTime,
          start_time: startTime,
          end_time: endTime,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteReserve(id: number) {
    try {
      return await this.prisma.room_reservation.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
