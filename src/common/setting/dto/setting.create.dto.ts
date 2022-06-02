import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional, ValidateIf } from 'class-validator';
import { SafeString } from 'src/common/utils/request/validation/request.safe-string.validation';
import { StringOrNumberOrBoolean } from 'src/common/utils/request/validation/request.string-or-number-or-boolean.validation';

export class SettingCreateDto {
    @IsString()
    @IsNotEmpty()
    @SafeString()
    @Type(() => String)
    @ApiProperty()
    readonly name: string;

    @IsString()
    @IsOptional()
    @Type(() => String)
    @ValidateIf((e) => e.description !== '')
    @ApiProperty()
    readonly description?: string;

    @IsNotEmpty()
    @StringOrNumberOrBoolean()
    @ApiProperty()
    readonly value: string | boolean | number;
}
