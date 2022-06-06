import {
    Inject,
    Injectable,
    NestMiddleware,
    ServiceUnavailableException,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Response, NextFunction } from 'express';
import { ENUM_STATUS_CODE_ERROR } from 'src/common/utils/error/error.constant';
import { IRequestApp } from 'src/common/utils/request/request.interface';
import { IMaintenance } from './maintenance.interface';

@Injectable()
export class MaintenanceMiddleware implements NestMiddleware {
    private maintenance: IMaintenance;
    constructor(moduleRef: ModuleRef) {
        try {
            this.maintenance = moduleRef.get<IMaintenance>('IMaintenance', { strict: false });
        } catch {

        }
    }

    async use(
        req: IRequestApp,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const isMaintenance = await this.maintenance?.CheckMaintenance();

        if (isMaintenance) {
            throw new ServiceUnavailableException({
                statusCode: ENUM_STATUS_CODE_ERROR.SERVICE_UNAVAILABLE,
                message: 'http.serverError.serviceUnavailable',
            });
        }

        next();
    }
}
