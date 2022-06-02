import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsMongoId } from 'class-validator';

export class SettingRequestDto {
    @IsNotEmpty()
    @IsMongoId()
    @Type(() => String)
    @ApiProperty()
    setting: string;
}
