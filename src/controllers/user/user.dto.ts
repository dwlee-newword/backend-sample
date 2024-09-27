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
}
