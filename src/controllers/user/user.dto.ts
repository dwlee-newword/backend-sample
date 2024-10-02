import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The email of the User',
    type: String,
    example: 'test@test.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The name of the User',
    type: String,
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The password of the User',
    type: String,
    example: 'qwer1234!',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'The address of the User',
    type: String,
    example: 'Seoul',
  })
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty({
    description: 'The phone of the User',
    type: String,
    example: '010-1111-2222',
  })
  @IsString()
  @IsOptional()
  phone: string;
}

export class UpdateUserDto {
  @ApiProperty({
    description: 'The id of the User',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'The email of the User',
    type: String,
    example: 'test@test.com',
  })
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty({
    description: 'The name of the User',
    type: String,
    example: 'John Doe',
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    description: 'The password of the User',
    type: String,
    example: 'qwer1234!',
  })
  @IsString()
  @IsOptional()
  password: string;

  @ApiProperty({
    description: 'The address of the User',
    type: String,
    example: 'Seoul',
  })
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty({
    description: 'The phone of the User',
    type: String,
    example: '010-1111-2222',
  })
  @IsString()
  @IsOptional()
  phone: string;
}

export class UserIdDto {
  @ApiProperty({
    description: 'The id of the User',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
