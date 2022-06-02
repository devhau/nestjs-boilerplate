import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsMongoId } from 'class-validator';

export class RoleRequestDto {
    @IsNotEmpty()
    @IsMongoId()
    @Type(() => String)
    @ApiProperty()
    role: string;
}
