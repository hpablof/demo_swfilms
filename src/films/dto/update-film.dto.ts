import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmDto } from './create-film.dto';
import { IsArray, IsDate, IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class UpdateFilmDto extends PartialType(CreateFilmDto) {
    @IsOptional()
    @IsString()
    @MinLength(1)
    title: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    episode_id: number;

    @IsOptional()
    @IsString()
    opening_crawl: string;

    @IsOptional()
    @IsString()
    director: string;

    @IsOptional()
    @IsString()
    producer: string;

    @IsOptional()
    @IsDate()
    release_date: Date;

    @IsOptional()
    @IsString()
    url: string;

    @IsOptional()
    @IsString({ each: true })
    @IsArray()
    characters: string[];
}
