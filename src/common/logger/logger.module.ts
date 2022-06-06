import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/database.constant';
import {
    LoggerDatabaseName,
    LoggerEntity,
    LoggerSchema,
} from '../../schemas/logger.schema';
import { LoggerService } from './service/logger.service';

@Global()
@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: LoggerEntity.name,
                    schema: LoggerSchema,
                    collection: LoggerDatabaseName,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
    providers: [LoggerService],
    exports: [LoggerService],
})
export class LoggerModule { }
