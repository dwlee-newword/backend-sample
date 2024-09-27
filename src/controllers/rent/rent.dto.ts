import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class RequestRentDto {
  @ApiProperty({
    description: 'The id of the User',
    type: Number,
    example: 1,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'The id of the Book',
    type: Number,
    example: 1,
  })
  @IsNumber()
  bookId: number;
}
