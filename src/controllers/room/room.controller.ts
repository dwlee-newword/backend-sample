import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoomService } from 'src/services/room.service';
import { CreateRoomDto } from './room.dto';

@ApiTags('Room')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  // 회의실 리스트 조회
  @Get('/')
  async readBookList() {
    const roomList = await this.roomService.getRoomList();

    return {
      code: 200,
      message: 'Success',
      data: roomList,
    };
  }

  // 회의실 등록
  @Post('create')
  async createRoom(@Body() body: CreateRoomDto) {
    const { floor, number, capacity } = body;
    const room = await this.roomService.createRoom(floor, number, capacity);
    return {
      code: 200,
      message: 'Success',
      data: room,
    };
  }

  // 회의실 조회
  @Get('/:id')
  async readRoom(@Param('id', ParseIntPipe) id: number) {
    const room = await this.roomService.getRoom(id);

    return {
      code: 200,
      message: 'Success',
      data: room,
    };
  }

  // 회의실 수정
  @Post('update/:id')
  async updateRoom(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateRoomDto,
  ) {
    const { floor, number, capacity } = body;
    const room = await this.roomService.updateRoom(id, floor, number, capacity);
    return {
      code: 200,
      message: 'Success',
      data: room,
    };
  }

  // 회의실 삭제
  @Post('delete/:id')
  async deleteRoom(@Param('id', ParseIntPipe) id: number) {
    const room = await this.roomService.deleteRoom(id);
    return {
      code: 200,
      message: 'Success',
      data: room,
    };
  }
}
