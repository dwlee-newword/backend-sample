import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReserveService } from 'src/services/reserve.service';
import { CreateReserveDto, ReserveIdDto, UpdateReserveDto } from './reserve.dto';

@ApiTags('Reserve')
@Controller('reserve')
export class ReserveController {
  constructor(private readonly reserveService: ReserveService) {}

  // 예약 리스트 조회
  @Get('/')
  async readReserveList() {
    const reserveList = await this.reserveService.getReserveList();

    return {
      code: 200,
      message: 'Success',
      data: reserveList,
    };
  }

  // 예약 등록
  @Post('create')
  async createReserve(@Body() body: CreateReserveDto) {
    const { userId, roomId, reserveTime, startTime, endTime } = body;
    const reserve = await this.reserveService.createReserve(
      userId,
      roomId,
      reserveTime,
      startTime,
      endTime,
    );
    return {
      code: 200,
      message: 'Success',
      data: reserve,
    };
  }

  // 예약 조회
  @Get(':id')
  async readReserve(@Param('id', ParseIntPipe) id: number) {
    const reserve = await this.reserveService.getReserve(id);

    return {
      code: 200,
      message: 'Success',
      data: reserve,
    };
  }

  // 예약 수정
  @Post('update')
  async updateBook(@Body() body: UpdateReserveDto) {
    const { id, userId, roomId, reserveTime, startTime, endTime } = body;
    const reserve = await this.reserveService.updateReserve(
      id,
      userId,
      roomId,
      reserveTime,
      startTime,
      endTime,
    );
    return {
      code: 200,
      message: 'Success',
      data: reserve,
    };
  }

  // 예약 삭제
  @Post('delete')
  async deleteReserve(@Body() body: ReserveIdDto) {
    const { id } = body;
    const reserve = await this.reserveService.deleteReserve(id);
    return {
      code: 200,
      message: 'Success',
      data: reserve,
    };
  }
}
