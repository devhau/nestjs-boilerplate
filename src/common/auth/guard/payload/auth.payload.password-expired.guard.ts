import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
} from '@nestjs/common';
import { ENUM_AUTH_STATUS_CODE_ERROR } from 'src/common/auth/auth.constant';
import { DebuggerService } from 'src/common/debugger/service/debugger.service';
import { HelperDateService } from 'src/common/utils/helper/service/helper.date.service';

@Injectable()
export class AuthPayloadPasswordExpiredGuard implements CanActivate {
    constructor(
        private readonly debuggerService: DebuggerService,
        private readonly helperDateService: HelperDateService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const { user } = context.switchToHttp().getRequest();
        const { passwordExpired } = user;
        const today: Date = this.helperDateService.create();
        const passwordExpiredDate =
            this.helperDateService.create(passwordExpired);

        if (today > passwordExpiredDate) {
            this.debuggerService.error(
                'Auth password expired',
                'AuthPasswordExpiredGuard',
                'canActivate'
            );

            throw new ForbiddenException({
                statusCode:
                    ENUM_AUTH_STATUS_CODE_ERROR.AUTH_GUARD_PASSWORD_EXPIRED_ERROR,
                message: 'auth.error.passwordExpired',
            });
        }

        return true;
    }
}
