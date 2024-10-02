import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

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
  address: string;

  @ApiProperty({
    description: 'The phone of the User',
    type: String,
    example: '010-1111-2222',
  })
  @IsString()
  phone: string;
}
