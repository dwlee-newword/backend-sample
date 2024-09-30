import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RENT_STATE } from '@prisma/client';
@Injectable()
export class RentService {
  constructor(private readonly prisma: PrismaService) {}

  async getRentList() {
    try {
      return await this.prisma.rent.findMany();
    } catch (e) {
      throw new Error(e);
    }
  }

  async requestRent(userId: number, bookId: number) {
    try {
      await this.prisma.rent.create({
        data: {
          user_id: userId,
          book_id: bookId,
          rent_state: RENT_STATE.PENDING,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async acceptRent(rentId: number) {
    try {
      const rent = await this.prisma.rent.update({
        where: { id: rentId },
        data: {
          rent_state: RENT_STATE.ACCEPTED,
        },
      });
      await this.prisma.user_detail.update({
        where: {
          user_id: rent.user_id,
        },
        data: {
          rent_count: {
            increment: 1,
          },
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
      const rent = await this.prisma.rent.update({
        where: { id: rentId },
        data: {
          rent_state: RENT_STATE.RETURNED,
        },
      });
      await this.prisma.user_detail.update({
        where: {
          user_id: rent.user_id,
        },
        data: {
          rent_count: {
            decrement: 1,
          },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
