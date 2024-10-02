import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Room')
@Controller('room')
export class RoomController {
  // TODO: 해당 컨트롤러는 미팅룸을 관리하는 컨트롤러입니다.
  // 미팅룸 관리란, 미팅 룸의 정보 CRUD이며 미팅룸 예약과는 관계가 없습니다.
}
