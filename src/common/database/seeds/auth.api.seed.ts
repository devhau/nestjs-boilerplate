import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { DebuggerService } from 'src/common/debugger/service/debugger.service';
import { AuthApiService } from 'src/modules/auth/service/auth.api.service';
import { AuthApiBulkService } from 'src/modules/auth/service/auth.api.bulk.service';

@Injectable()
export class AuthApiSeed {
    constructor(
        private readonly debuggerService: DebuggerService,
        private readonly authApiService: AuthApiService,
        private readonly authApiBulkService: AuthApiBulkService
    ) { }

    @Command({
        command: 'insert:authapis',
        describe: 'insert authapiss',
    })
    async insert(): Promise<void> {
        try {
            await this.authApiService.create({
                name: 'web TekChain',
                description: 'web TekChain',
                key: 'qwertyuiop12345zxcvbnmkjh',
                secret: '5124512412412asdasdasdasdasdASDASDASD',
                passphrase: 'cuwakimacojulawu',
                encryptionKey: 'opbUwdiS1FBsrDUoPgZdx',
            });

            this.debuggerService.debug(
                'Insert Auth Api Succeed',
                'AuthApiSeed',
                'insert'
            );
        } catch (e) {
            this.debuggerService.error(e.message, 'AuthApiSeed', 'insert');
        }
    }

    @Command({
        command: 'remove:authapis',
        describe: 'remove authapis',
    })
    async remove(): Promise<void> {
        try {
            await this.authApiBulkService.deleteMany({});

            this.debuggerService.debug(
                'Remove Auth Api Succeed',
                'AuthApiSeed',
                'remove'
            );
        } catch (e) {
            this.debuggerService.error(e.message, 'AuthApiSeed', 'remove');
        }
    }
}
