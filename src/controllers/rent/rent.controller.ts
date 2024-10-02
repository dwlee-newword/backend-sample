import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RentService } from '../../services/rent.service';
import { RequestIdDto, RequestRentDto } from './rent.dto';

@ApiTags('Rent')
@Controller('rent')
export class RentController {
  constructor(private readonly rentService: RentService) {}

  // read rent list
  @Get('/')
  async readRentList() {
    const rentList = await this.rentService.getRentList();

    return {
      code: 200,
      message: 'Success',
      data: rentList,
    };
  }

  // request rent
  @Post('/request')
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
  @Post('/accept')
  async acceptRent(@Body() body: RequestIdDto) {
    const { id } = body;
    const rent = await this.rentService.acceptRent(id);

    return {
      code: 200,
      message: 'Success',
      data: rent,
    };
  }

  // reject rent
  @Post('/reject')
  async rejectRent(@Body() body: RequestIdDto) {
    const { id } = body;
    const rent = await this.rentService.rejectRent(id);

    return {
      code: 200,
      message: 'Success',
      data: rent,
    };
  }

  // return rent
  @Post('/return')
  async returnRent(@Body() body: RequestIdDto) {
    const { id } = body;
    const rent = await this.rentService.returnRent(id);

    return {
      code: 200,
      message: 'Success',
      data: rent,
    };
  }
}
