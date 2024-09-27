import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UserDto, UserIdDto } from './user.dto';
import { UserService } from '../../services/user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // read user list
  @Get('get')
  async readUserList() {
    const userList = await this.userService.getUserList();

    return {
      code: 200,
      message: 'Success',
      data: userList,
    };
  }

  // create user
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
  @Get('get/:id')
  async readUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getUser(id);

    return {
      code: 200,
      message: 'Success',
      data: user,
    };
  }
  // update user
  @Post('update')
  async updateUser(@Body() body: UserDto) {
    const { id, name, email } = body;
    const user = await this.userService.updateUser(id, name, email);
    return {
      code: 200,
      message: 'Success',
      data: user,
    };
  }
  // delete user
  @Post('delete')
  async deleteUser(@Body() body: UserIdDto) {
    const { id } = body;
    const user = await this.userService.deleteUser(id);
    return {
      code: 200,
      message: 'Success',
      data: user,
    };
  }
}
