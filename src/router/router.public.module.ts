import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { AuthPublicController } from 'src/modules/auth/controller/auth.public.controller';
import { AwsModule } from 'src/common/aws/aws.module';
import { PermissionModule } from 'src/common/permission/permission.module';
import { RoleModule } from 'src/common/role/role.module';
import { UserPublicController } from 'src/modules/user/controller/user.public.controller';
import { UserModule } from 'src/modules/user/user.module';

@Module({
    controllers: [UserPublicController, AuthPublicController],
    providers: [],
    exports: [],
    imports: [UserModule, AwsModule, AuthModule, RoleModule, PermissionModule],
})
export class RouterPublicModule {}
