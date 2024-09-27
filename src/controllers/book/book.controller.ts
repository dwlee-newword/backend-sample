import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { BookService } from '../../services/book.service';
import { CreateBookDto } from './book.dto';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // 도서 리스트 조회
  @Get('/search')
  @ApiQuery({
    name: 'search',
    required: false,
    description:
      'Search keyword to filter book list (title/author/summary/issn)',
  })
  async readBookList(@Query('search') search: string) {
    let bookList = await this.bookService.getBookList();
    const lowerCaseSearch = search ? search.toLowerCase() : undefined;
    if (lowerCaseSearch) {
      bookList = bookList.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerCaseSearch) ||
          book.author.toLowerCase().includes(lowerCaseSearch) ||
          book.summary.toLowerCase().includes(lowerCaseSearch) ||
          book.issn.toLowerCase().includes(lowerCaseSearch),
      );
    }

    return {
      code: 200,
      message: 'Success',
      data: bookList,
    };
  }

  // 도서 등록
  @Post('create')
  async createBook(@Body() body: CreateBookDto) {
    const { title, author, summary, issn } = body;
    const book = await this.bookService.createBook(
      title,
      author,
      summary,
      issn,
    );
    return {
      code: 200,
      message: 'Success',
      data: book,
    };
  }

  // 도서 조회
  @Get('/:id')
  async readBook(@Param('id', ParseIntPipe) id: number) {
    const book = await this.bookService.getBook(id);

    return {
      code: 200,
      message: 'Success',
      data: book,
    };
  }

  // 도서 수정
  @Post('update/:id')
  async updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateBookDto,
  ) {
    const { title, author, summary, issn } = body;
    const book = await this.bookService.updateBook(
      id,
      title,
      author,
      summary,
      issn,
    );
    return {
      code: 200,
      message: 'Success',
      data: book,
    };
  }

  // 도서 삭제
  @Post('delete/:id')
  async deleteBook(@Param('id', ParseIntPipe) id: number) {
    const book = await this.bookService.deleteBook(id);
    return {
      code: 200,
      message: 'Success',
      data: book,
    };
  }
}
