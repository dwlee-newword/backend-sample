import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../../services/book.service';
import { CreateBookDto } from './book.dto';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // 도서 등록
  @Post('create')
  async createBook(@Body() body: CreateBookDto) {
    return {
      code: 200,
      message: 'Success',
    };
  }

  // 도서 조회

  // 도서 수정

  // 도서 삭제
}
