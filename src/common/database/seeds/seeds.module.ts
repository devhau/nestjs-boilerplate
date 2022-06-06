import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { PermissionModule } from 'src/common/permission/permission.module';
import { PermissionSeed } from 'src/common/database/seeds/permission.seed';
import { RoleSeed } from './role.seed';
import { RoleModule } from 'src/common/role/role.module';
import { UserSeed } from './user.seed';
import { UserModule } from 'src/modules/user/user.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { CoreModule } from 'src/common/core/core.module';
import { AuthApiSeed } from './auth.api.seed';
import { SettingSeed } from './setting.seed';

@Module({
    imports: [
        CoreModule,
        CommandModule,
        PermissionModule,
        AuthModule,
        UserModule,
        RoleModule,
    ],
    providers: [AuthApiSeed, PermissionSeed, RoleSeed, UserSeed, SettingSeed],
    exports: [],
})
export class SeedsModule {}
