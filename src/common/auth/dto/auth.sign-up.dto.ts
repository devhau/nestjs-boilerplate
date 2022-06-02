import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    IsEmail,
    MaxLength,
    MinLength,
    IsOptional,
    ValidateIf,
} from 'class-validator';
import { IsPasswordStrong } from 'src/common/utils/request/validation/request.is-password-strong.validation';
import { IsStartWith } from 'src/common/utils/request/validation/request.is-start-with.validation';

export class AuthSignUpDto {
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    @Type(() => String)
    @ApiProperty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(30)
    @Type(() => String)
    @ApiProperty()
    readonly firstName: string;

    @IsString()
    @IsOptional()
    @ValidateIf((e) => e.lastName !== '')
    @MinLength(1)
    @MaxLength(30)
    @Type(() => String)
    @ApiProperty()
    readonly lastName?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(14)
    @Type(() => String)
    @IsStartWith(['628'])
    @ApiProperty()
    readonly mobileNumber: string;

    @IsNotEmpty()
    @IsPasswordStrong()
    @ApiProperty()
    readonly password: string;
}
