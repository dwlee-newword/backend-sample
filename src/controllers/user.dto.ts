import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
}

export class UserDto {
  @ApiProperty({
    description: 'The id of the User',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'The email of the User. It can nullable',
    type: String,
    example: 'test@test.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'The name of the User. It can nullable',
    type: String,
    example: 'John Doe',
  })
  @IsString()
  name: string;
}
