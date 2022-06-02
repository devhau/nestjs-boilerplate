import { DynamicModule, Module } from '@nestjs/common';
import { HelperModule } from '../utils/helper/helper.module';
import { SocketService } from './socket.service';

@Module({})
export class SocketModule {
    static register(): DynamicModule {
        if (process.env.APP_SOCKET === 'true') {
            return {
                module: SocketModule,
                controllers: [],
                providers: [SocketService],
                exports: [SocketService],
                imports: [HelperModule],
            };
        }

        return {
            module: SocketModule,
            providers: [],
            exports: [],
            controllers: [],
            imports: [],
        };
    }
}
