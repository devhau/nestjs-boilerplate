import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ENUM_PERMISSIONS } from 'src/modules/permission/permission.constant';
import { PermissionService } from 'src/modules/permission/service/permission.service';
import { RoleBulkService } from 'src/modules/role/service/role.bulk.service';
import { DebuggerService } from 'src/common/debugger/service/debugger.service';
import { PermissionDocument } from 'src/schemas/permission.schema';

@Injectable()
export class RoleSeed {
    constructor(
        private readonly debuggerService: DebuggerService,
        private readonly permissionService: PermissionService,
        private readonly roleBulkService: RoleBulkService
    ) {}

    @Command({
        command: 'insert:role',
        describe: 'insert roles',
    })
    async insert(): Promise<void> {
        const permissions: PermissionDocument[] =
            await this.permissionService.findAll({
                code: { $in: Object.values(ENUM_PERMISSIONS) },
            });

        try {
            const permissionsMap = permissions.map((val) => val._id);
            await this.roleBulkService.createMany([
                {
                    name: 'admin',
                    permissions: permissionsMap,
                    isAdmin: true,
                },
                {
                    name: 'user',
                    permissions: [],
                    isAdmin: false,
                },
            ]);

            this.debuggerService.debug(
                'Insert Role Succeed',
                'RoleSeed',
                'insert'
            );
        } catch (e) {
            this.debuggerService.error(e.message, 'RoleSeed', 'insert');
        }
    }

    @Command({
        command: 'remove:role',
        describe: 'remove roles',
    })
    async remove(): Promise<void> {
        try {
            await this.roleBulkService.deleteMany({});

            this.debuggerService.debug(
                'Remove Role Succeed',
                'RoleSeed',
                'remove'
            );
        } catch (e) {
            this.debuggerService.error(e.message, 'RoleSeed', 'remove');
        }
    }
}
