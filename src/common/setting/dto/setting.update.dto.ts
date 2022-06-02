import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional, ValidateIf } from 'class-validator';
import { StringOrNumberOrBoolean } from 'src/common/utils/request/validation/request.string-or-number-or-boolean.validation';

export class SettingUpdateDto {
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
