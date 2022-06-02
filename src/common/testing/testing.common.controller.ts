import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiKey, AuthExcludeApiKey } from 'src/common/auth/auth.decorator';
import { IAuthApiPayload } from 'src/common/auth/auth.interface';
import { UserAgent } from 'src/common/utils/request/request.decorator';
import { Response } from 'src/common/utils/response/response.decorator';
import { IResponse } from 'src/common/utils/response/response.interface';
import { IResult } from 'ua-parser-js';

@Controller({
    version: VERSION_NEUTRAL,
})
export class TestingCommonController {
    @Response('test.hello')
    @AuthExcludeApiKey()
    @Get('/hello')
    async hello(
        @UserAgent() userAgent: IResult,
        @ApiKey() apiKey: IAuthApiPayload
    ): Promise<IResponse> {
        return { userAgent, apiKey };
    }
}
