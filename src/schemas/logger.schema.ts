import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { AuthApiEntity } from 'src/modules/auth/schema/auth.api.schema';
import { ENUM_LOGGER_ACTION, ENUM_LOGGER_LEVEL } from '../common/logger/logger.constant';

@Schema({ timestamps: true, versionKey: false })
export class LoggerEntity {
    @Prop({
        required: true,
        enum: ENUM_LOGGER_LEVEL,
    })
    level: string;

    @Prop({
        required: true,
        enum: ENUM_LOGGER_ACTION,
    })
    action: string;

    @Prop({
        required: false,
    })
    user?: Types.ObjectId;

    @Prop({
        required: true,
        ref: AuthApiEntity.name,
    })
    apiKey: Types.ObjectId;

    @Prop({
        required: true,
        default: true,
    })
    anonymous: boolean;

    @Prop({
        required: true,
        trim: true,
        lowercase: true,
    })
    description: string;

    @Prop({
        required: false,
    })
    tags?: string[];
}

export const LoggerDatabaseName = 'loggers';
export const LoggerSchema = SchemaFactory.createForClass(LoggerEntity);

export type LoggerDocument = LoggerEntity & Document;
