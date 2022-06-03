import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PermissionAdminController } from 'src/modules/permission/controller/permission.admin.controller';
import { PermissionModule } from 'src/modules/permission/permission.module';
import { RoleAdminController } from 'src/modules/role/controller/role.admin.controller';
import { RoleModule } from 'src/modules/role/role.module';
import { SettingAdminController } from 'src/common/setting/controller/setting.admin.controller';
import { UserAdminController } from 'src/modules/user/controller/user.admin.controller';
import { UserModule } from 'src/modules/user/user.module';

@Module({
    controllers: [
        RoleAdminController,
        UserAdminController,
        PermissionAdminController,
        SettingAdminController,
    ],
    providers: [],
    exports: [],
    imports: [AuthModule, RoleModule, UserModule, PermissionModule],
})
export class RouterAdminModule {}
