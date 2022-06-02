import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { IsPasswordStrong } from 'src/common/utils/request/validation/request.is-password-strong.validation';

export class AuthChangePasswordDto {
    @IsPasswordStrong()
    @IsNotEmpty()
    @ApiProperty()
    readonly newPassword: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly oldPassword: string;
}
