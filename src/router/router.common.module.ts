import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AuthModule } from 'src/common/auth/auth.module';
import { AuthCommonController } from 'src/common/auth/controller/auth.common.controller';
import { HealthCommonController } from 'src/common/health/controller/health.common.controller';
import { HealthModule } from 'src/common/health/health.module';
import { PermissionModule } from 'src/common/permission/permission.module';
import { RoleModule } from 'src/common/role/role.module';
import { SettingCommonController } from 'src/common/setting/controller/setting.common.controller';
import { UserModule } from 'src/common/user/user.module';

@Module({
    controllers: [
        AuthCommonController,
        HealthCommonController,
        SettingCommonController,
    ],
    providers: [],
    exports: [],
    imports: [
        UserModule,
        AuthModule,
        RoleModule,
        PermissionModule,
        TerminusModule,
        HttpModule,
        HealthModule,
    ],
})
export class RouterCommonModule { }
