import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DeleteResult } from 'mongodb';
import { DatabaseEntity } from 'src/common/database/database.decorator';
import { SettingDocument, SettingEntity } from '../../../schemas/setting.schema';

@Injectable()
export class SettingBulkService {
    constructor(
        @DatabaseEntity(SettingEntity.name)
        private readonly settingModel: Model<SettingDocument>
    ) {}

    async deleteMany(find: Record<string, any>): Promise<DeleteResult> {
        return this.settingModel.deleteMany(find);
    }
}
