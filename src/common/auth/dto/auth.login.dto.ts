import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsNotEmpty,
    IsEmail,
    MaxLength,
    IsBoolean,
    IsOptional,
    ValidateIf,
    IsString,
} from 'class-validator';

export class AuthLoginDto {
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    @ApiProperty()
    readonly email: string;

    @IsOptional()
    @IsBoolean()
    @ValidateIf((e) => e.rememberMe !== '')
    @ApiProperty()
    readonly rememberMe?: boolean;

    @IsNotEmpty()
    @Type(() => String)
    @IsString()
    @ApiProperty()
    readonly password: string;
}
