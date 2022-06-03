import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
@Module({
    controllers: [],
    providers: [],
    imports: [AuthModule, RoleModule, UserModule, PermissionModule],
})
export class ModulesModule { }
