import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateRoomDto {
  @ApiProperty({
    description: 'The floor of the Room',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  floor: number;

  @ApiProperty({
    description: 'The number of the Room',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  number: number;

  @ApiProperty({
    description: 'The capacity of the Room',
    type: Number,
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  capacity: number;
}

export class UpdateRoomDto {
  @ApiProperty({
    description: 'The id of the Room',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'The floor of the Room',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  floor: number;

  @ApiProperty({
    description: 'The number of the Room',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  number: number;

  @ApiProperty({
    description: 'The capacity of the Room',
    type: Number,
    example: 5,
  })
  @IsNumber()
  @IsOptional()
  capacity: number;
}

export class RoomIdDto {
  @ApiProperty({
    description: 'The id of the Room',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
