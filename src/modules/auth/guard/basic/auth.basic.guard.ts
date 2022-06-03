import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { ENUM_AUTH_STATUS_CODE_ERROR } from 'src/modules/auth/auth.constant';
import { DebuggerService } from 'src/common/debugger/service/debugger.service';
import { AuthApiService } from 'src/modules/auth/service/auth.api.service';

@Injectable()
export class BasicGuard implements CanActivate {
    private readonly clientId: string;
    private readonly clientSecret: string;

    constructor(
        private readonly debuggerService: DebuggerService,
        private readonly configService: ConfigService,
        private readonly authApiService: AuthApiService
    ) {
        this.clientId = this.configService.get<string>(
            'auth.basicToken.clientId'
        );
        this.clientSecret = this.configService.get<string>(
            'auth.basicToken.clientSecret'
        );
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();

        const authorization: string = request.headers.authorization;

        if (!authorization) {
            this.debuggerService.error(
                'AuthBasicGuardError',
                'BasicGuard',
                'canActivate'
            );

            throw new UnauthorizedException({
                statusCode:
                    ENUM_AUTH_STATUS_CODE_ERROR.AUTH_GUARD_BASIC_TOKEN_NEEDED_ERROR,
                message: 'http.clientError.unauthorized',
            });
        }

        const clientBasicToken: string = authorization.replace('Basic ', '');
        const ourBasicToken: string =
            await this.authApiService.createBasicToken(
                this.clientId,
                this.clientSecret
            );

        const validateBasicToken: boolean =
            await this.authApiService.validateBasicToken(
                clientBasicToken,
                ourBasicToken
            );

        if (!validateBasicToken) {
            this.debuggerService.error(
                'AuthBasicGuardError Validate Basic Token',
                'BasicGuard',
                'canActivate'
            );

            throw new UnauthorizedException({
                statusCode:
                    ENUM_AUTH_STATUS_CODE_ERROR.AUTH_GUARD_BASIC_TOKEN_INVALID_ERROR,
                message: 'http.clientError.unauthorized',
            });
        }

        return true;
    }
}
