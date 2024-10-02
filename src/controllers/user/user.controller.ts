import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './user.dto';
import { UserService } from '../../services/user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // read user list
  @Get('/search')
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search keyword to filter user list (name or email)',
  })
  async readUserList(@Query('search') search: string) {
    let userList = await this.userService.getUserList();
    const lowerCaseSearch = search ? search.toLowerCase() : undefined;
    if (lowerCaseSearch) {
      userList = userList.filter(
        (user) =>
          user.name.toLowerCase().includes(lowerCaseSearch) ||
          user.email.toLowerCase().includes(lowerCaseSearch),
      );
    }

    return {
      code: 200,
      message: 'Success',
      data: userList,
    };
  }

  // create user
  @Post('/create')
  async createUser(@Body() body: CreateUserDto) {
    const { name, email, password, address, phone } = body;
    const user = await this.userService.createUser(name, email, password);
    await this.userService.createUserDetail({
      userId: user.id,
      address: address,
      phone: phone,
    });

    return {
      code: 200,
      message: 'Success',
      data: user,
    };
  }

  // read user
  @Get('/:id')
  async readUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getUser(id);

    return {
      code: 200,
      message: 'Success',
      data: user,
    };
  }

  // update user
  @Post('update/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateUserDto,
  ) {
    const { name, email, address, phone } = body;
    const user = await this.userService.updateUser(
      id,
      name,
      email,
      address,
      phone,
    );
    return {
      code: 200,
      message: 'Success',
      data: user,
    };
  }

  // delete user
  @Post('delete/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.deleteUser(id);
    return {
      code: 200,
      message: 'Success',
      data: user,
    };
  }

  @ApiProperty({
    description: '사용자가 빌린 책의 제목과 ID를 가져옵니다.',
    type: Array,
    example: [
      { id: 1, title: '책 제목' },
      { id: 2, title: '책 제목' },
    ],
  })
  @Get('rent/list/:userId')
  async rentList(@Param('userId', ParseIntPipe) userId: number) {
    const rent = await this.userService.getUserRentList(userId);

    return {
      code: 200,
      message: 'Success',
      data: rent,
    };
  }

  @ApiProperty({
    description: '사용자가 빌린 책의 총 개수를 가져옵니다.',
    type: Number,
    example: 2,
  })
  @Get('rent/count/:userId')
  async rentCount(@Param('userId', ParseIntPipe) userId: number) {
    const rent = await this.userService.getUserRentList(userId);

    return {
      code: 200,
      message: 'Success',
      data: rent.length,
    };
  }
}
