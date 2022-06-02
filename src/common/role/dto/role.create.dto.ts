import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    MaxLength,
    MinLength,
    IsMongoId,
    IsBoolean,
} from 'class-validator';

export class RoleCreateDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    @Type(() => String) 
    @ApiProperty()
    readonly name: string;

    @IsMongoId({ each: true })
    @IsNotEmpty()
    @ApiProperty()
    readonly permissions: string[];

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    readonly isAdmin: boolean;
}
