import {
    Body,
    Controller,
    InternalServerErrorException,
    Put,
} from '@nestjs/common';
import { AuthAdminJwtGuard } from 'src/modules/auth/auth.decorator';
import { DebuggerService } from 'src/common/debugger/service/debugger.service';
import { ENUM_PERMISSIONS } from 'src/common/permission/permission.constant';
import { ENUM_STATUS_CODE_ERROR } from 'src/common/utils/error/error.constant';
import { RequestParamGuard } from 'src/common/utils/request/request.decorator';
import { Response } from 'src/common/utils/response/response.decorator';
import { IResponse } from 'src/common/utils/response/response.interface';
import { SettingRequestDto } from '../dto/setting.request.dto';
import { SettingUpdateDto } from '../dto/setting.update.dto';
import { SettingDocument } from '../../../schemas/setting.schema';
import { SettingService } from '../service/setting.service';
import { GetSetting, SettingUpdateGuard } from '../setting.decorator';

@Controller({
    version: '1',
    path: 'setting',
})
export class SettingAdminController {
    constructor(
        private readonly debuggerService: DebuggerService,
        private readonly settingService: SettingService
    ) {}

    @Response('setting.update')
    @SettingUpdateGuard()
    @RequestParamGuard(SettingRequestDto)
    @AuthAdminJwtGuard(
        ENUM_PERMISSIONS.SETTING_READ,
        ENUM_PERMISSIONS.SETTING_UPDATE
    )
    @Put('/update/:setting')
    async update(
        @GetSetting() setting: SettingDocument,
        @Body()
        body: SettingUpdateDto
    ): Promise<IResponse> {
        try {
            await this.settingService.updateOneById(setting._id, body);
        } catch (err: any) {
            this.debuggerService.error(
                'update try catch',
                'SettingController',
                'update',
                err
            );

            throw new InternalServerErrorException({
                statusCode: ENUM_STATUS_CODE_ERROR.UNKNOWN_ERROR,
                message: 'http.serverError.internalServerError',
            });
        }

        return {
            _id: setting._id,
        };
    }
}
