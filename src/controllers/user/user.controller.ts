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
  // TODO: user_detail 테이블에도 정보 추가하기
  @Post('/create')
  async createUser(@Body() body: CreateUserDto) {
    const { name, email } = body;
    const user = await this.userService.createUser(name, email);

    return {
      code: 200,
      message: 'Success',
      data: user,
    };
  }

  // read user
  // TODO: user_detail 테이블에 있는 정보도 가져오기
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
  // TODO: user_detail 테이블에도 정보 수정하기
  @Post('update/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateUserDto,
  ) {
    const { name, email } = body;
    const user = await this.userService.updateUser(id, name, email);
    return {
      code: 200,
      message: 'Success',
      data: user,
    };
  }

  // delete user
  // TODO: user_detail 테이블에 있는 정보도 삭제하기
  @Post('delete/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.deleteUser(id);
    return {
      code: 200,
      message: 'Success',
      data: user,
    };
  }

  // TODO: 사용자가 빌린 책 리스트
  @ApiProperty({
    description: '사용자가 빌린 책의 제목과 ID를 가져옵니다.',
    type: Array,
    example: [
      { id: 1, title: '책 제목' },
      { id: 2, title: '책 제목' },
    ],
  })
  @Get('rent/list/:userId')
  async rentList(@Param('userId', ParseIntPipe) userId: number) {}

  @ApiProperty({
    description: '사용자가 빌린 책의 총 개수를 가져옵니다.',
    type: Number,
    example: 2,
  })
  // TODO: 사용자가 빌린 책 count
  @Get('rent/count/:userId')
  async rentCount(@Param('userId', ParseIntPipe) userId: number) {}
}
