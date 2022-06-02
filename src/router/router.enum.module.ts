import { Module } from '@nestjs/common';
import { MessageEnumController } from 'src/common/message/controller/message.enum.controller';
import { MessageModule } from 'src/common/message/message.module';

@Module({
    controllers: [MessageEnumController],
    providers: [],
    exports: [],
    imports: [MessageModule],
})
export class RouterEnumModule {}
