import {
    Inject,
    Injectable,
    NestMiddleware,
    ServiceUnavailableException,
} from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { ENUM_STATUS_CODE_ERROR } from 'src/common/utils/error/error.constant';
import { IRequestApp } from 'src/common/utils/request/request.interface';
import { IMaintenance } from './maintenance.interface';

@Injectable()
export class MaintenanceMiddleware implements NestMiddleware {
    constructor(@Inject('IMaintenance') private readonly maintenance: IMaintenance) { }

    async use(
        req: IRequestApp,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const isMaintenance = await this.maintenance?.CheckMaintenance();

        if (isMaintenance && isMaintenance as boolean) {
            throw new ServiceUnavailableException({
                statusCode: ENUM_STATUS_CODE_ERROR.SERVICE_UNAVAILABLE,
                message: 'http.serverError.serviceUnavailable',
            });
        }

        next();
    }
}
