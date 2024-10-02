import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class RequestRentDto {
  @ApiProperty({
    description: 'The id of the User',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    description: 'The id of the Book',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  bookId: number;
}

export class RequestIdDto {
  @ApiProperty({
    description: 'The id of the Request',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
