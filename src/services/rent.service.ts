import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RENT_STATE } from '@prisma/client';
@Injectable()
export class RentService {
  constructor(private readonly prisma: PrismaService) {}

  async requestRent(userId: number, bookId: number) {
    try {
      await this.prisma.rent.create({
        data: {
          userId,
          bookId,
          rent_state: RENT_STATE.PENDING,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async acceptRent(rentId: number) {
    try {
      await this.prisma.rent.update({
        where: { id: rentId },
        data: {
          rent_state: RENT_STATE.ACCEPTED,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async rejectRent(rentId: number) {
    try {
      await this.prisma.rent.update({
        where: { id: rentId },
        data: {
          rent_state: RENT_STATE.REJECTED,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async returnRent(rentId: number) {
    try {
      await this.prisma.rent.update({
        where: { id: rentId },
        data: {
          rent_state: RENT_STATE.RETURNED,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
