import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RentService } from '../../services/rent.service';
import { RequestRentDto } from './rent.dto';

@ApiTags('Rent')
@Controller('rent')
export class RentController {
  constructor(private readonly rentService: RentService) {}

  // request rent
  @Post('request')
  async requestRent(@Body() body: RequestRentDto) {
    const { userId, bookId } = body;
    const rent = await this.rentService.requestRent(userId, bookId);

    return {
      code: 200,
      message: 'Success',
      data: rent,
    };
  }

  // accept rent
  // TODO: rent가 성공적으로 이루어 지면, user_detail의 rent_count가 1 증가해야 합니다.
  @Post('accept/:id')
  async acceptRent(@Param('id', ParseIntPipe) id: number) {
    const rent = await this.rentService.acceptRent(id);

    return {
      code: 200,
      message: 'Success',
      data: rent,
    };
  }

  // reject rent
  @Post('reject/:id')
  async rejectRent(@Param('id', ParseIntPipe) id: number) {
    const rent = await this.rentService.rejectRent(id);

    return {
      code: 200,
      message: 'Success',
      data: rent,
    };
  }

  // return rent
  // TODO: return이 성공적으로 이루어 지면, user_detail의 rent_count가 1 감소해야 합니다.
  @Post('return/:id')
  async returnRent(@Param('id', ParseIntPipe) id: number) {
    const rent = await this.rentService.returnRent(id);

    return {
      code: 200,
      message: 'Success',
      data: rent,
    };
  }
}
