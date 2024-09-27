import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async getBookList() {
    try {
      return await this.prisma.book.findMany();
    } catch (e) {
      throw new Error(e);
    }
  }

  async createBook(
    title: string,
    author: string,
    summary: string,
    issn: string,
  ) {
    try {
      return await this.prisma.book.create({
        data: {
          title,
          author,
          summary,
          issn,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async getBook(id: number) {
    try {
      return await this.prisma.book.findUnique({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateBook(
    id: number,
    title: string | undefined,
    author: string | undefined,
    summary: string | undefined,
    issn: string | undefined,
  ) {
    try {
      return await this.prisma.book.update({
        where: {
          id,
        },
        data: {
          title,
          author,
          summary,
          issn,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteBook(id: number) {
    try {
      return await this.prisma.book.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
