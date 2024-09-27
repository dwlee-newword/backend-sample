import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class BookDto {
  @ApiProperty({
    description: 'The title of the Book',
    type: String,
    example: 'The Great Gatsby',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'The author of the Book',
    type: String,
    example: 'F. Scott Fitzgerald',
  })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    description: 'The summary of the Book',
    type: String,
    example:
      "The Great Gatsby is a novel by American writer F. Scott Fitzgerald. First published in 1925, it is set on Long Island's North Shore and in New York City from spring to autumn of 1922.",
  })
  @IsString()
  @IsOptional()
  summary: string;

  @ApiProperty({
    description: 'The ISBN of the Book',
    type: String,
    example: '978-3-16-148410-0',
  })
  @IsString()
  @IsNotEmpty()
  issn: string;
}

export class CreateBookDto extends BookDto {
  @ApiProperty({
    description: 'The admin id of the library',
    type: Number,
    example: 1,
  })
  @IsNumber()
  adminId: number;
}
