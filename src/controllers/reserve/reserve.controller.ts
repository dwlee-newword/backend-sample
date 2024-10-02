import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reserve')
@Controller('reserve')
export class ReserveController {
  // TODO: 해당 컨트롤러는 미팅룸 예약을 관리하는 컨트롤러입니다.
  // 미팅룸 예약 관리란, 미팅룸을 예약하는 기능을 제공합니다.
}
