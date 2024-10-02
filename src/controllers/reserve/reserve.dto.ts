import { ApiProperty } from '@nestjs/swagger';
import { RESERVE_TIME } from '@prisma/client';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReserveDto {
  @ApiProperty({
    description: 'The reservator id of the Reserve',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    description: 'The room id of the Reserve',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  roomId: number;

  @ApiProperty({
    description: 'The reserve time of the Reserve',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  reserveTime: number;

  @ApiProperty({
    description: 'The start time of the Reserve',
    type: String,
    example: RESERVE_TIME.AM_10_00,
  })
  @IsNumber()
  @IsNotEmpty()
  startTime: RESERVE_TIME;

  @ApiProperty({
    description: 'The end time of the Reserve',
    type: String,
    example: RESERVE_TIME.AM_11_00,
  })
  @IsNumber()
  @IsNotEmpty()
  endTime: RESERVE_TIME;
}

export class UpdateReserveDto {
  @ApiProperty({
    description: 'The id of the Reserve',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'The reservator id of the Reserve',
    type: Number,
    example: 1,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'The room id of the Reserve',
    type: Number,
    example: 1,
  })
  @IsNumber()
  roomId: number;

  @ApiProperty({
    description: 'The reserve time of the Reserve',
    type: Number,
    example: 1,
  })
  @IsNumber()
  reserveTime: number;

  @ApiProperty({
    description: 'The start time of the Reserve',
    type: String,
    example: RESERVE_TIME.AM_10_00,
  })
  @IsNumber()
  startTime: RESERVE_TIME;

  @ApiProperty({
    description: 'The end time of the Reserve',
    type: String,
    example: RESERVE_TIME.AM_11_00,
  })
  @IsNumber()
  endTime: RESERVE_TIME;
}

export class ReserveIdDto {
  @ApiProperty({
    description: 'The id of the Reserve',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;
}