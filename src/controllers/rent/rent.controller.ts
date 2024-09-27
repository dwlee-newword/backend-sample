import { Body, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RentService } from '../../services/rent.service';
import { RentIdDto, RequestRentDto } from './rent.dto';

@ApiTags('Rent')
@Controller('rent')
export class RentController {
  constructor(private readonly rentService: RentService) {}

  // request rent
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
  async acceptRent(@Body() body: RentIdDto) {}

  // reject rent

  // return rent
}
