import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsMongoId } from 'class-validator';

export class UserRequestDto {
    @IsNotEmpty()
    @IsMongoId()
    @Type(() => String)
    @ApiProperty()
    user: string;
}
