import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { DebuggerModule } from 'src/common/debugger/debugger.module';
import Configs from 'src/config/index';
import { PaginationModule } from 'src/common/utils/pagination/pagination.module';
import { HelperModule } from 'src/common/utils/helper/helper.module';
import { MiddlewareModule } from 'src/common/utils/middleware/middleware.module';
import { DebuggerOptionService } from 'src/common/debugger/service/debugger.option.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/database.constant';
import { DatabaseService } from 'src/common/database/service/database.service';
import { LoggerModule } from 'src/common/logger/logger.module';
import { RequestModule } from 'src/common/utils/request/request.module';
import { ErrorModule } from 'src/common/utils/error/error.module';
import { MessageModule } from 'src/common/message/message.module';
import { SettingModule } from '../setting/setting.module';
import { PermissionModule } from '../permission/permission.module';
import { RoleModule } from '../role/role.module';
import { HealthModule } from '../health/health.module';
@Module({
    controllers: [

    ],
    providers: [],
    imports: [
        MiddlewareModule,
        ConfigModule.forRoot({
            load: Configs,
            ignoreEnvFile: false,
            isGlobal: true,
            cache: true,
            envFilePath: ['.env'],
        }),
        WinstonModule.forRootAsync({
            inject: [DebuggerOptionService],
            imports: [DebuggerModule],
            useFactory: (loggerService: DebuggerOptionService) =>
                loggerService.createLogger(),
        }),
        MongooseModule.forRootAsync({
            connectionName: DATABASE_CONNECTION_NAME,
            inject: [DatabaseService],
            imports: [DatabaseModule],
            useFactory: (databaseService: DatabaseService) =>
                databaseService.createMongooseOptions(),
        }),
        ErrorModule,
        RequestModule,
        DatabaseModule,
        MessageModule,
        PaginationModule,
        DebuggerModule,
        HelperModule,
        //RoleModule,
        //LoggerModule,
        SettingModule,
        HealthModule
    ],
})
export class TestModule { }
