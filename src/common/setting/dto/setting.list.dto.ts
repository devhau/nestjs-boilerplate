import { ApiProperty } from '@nestjs/swagger';
import { PaginationListAbstract } from 'src/common/utils/pagination/pagination.abstract';
import {
    PaginationAvailableSearch,
    PaginationAvailableSort,
    PaginationPage,
    PaginationPerPage,
    PaginationSearch,
    PaginationSort,
} from 'src/common/utils/pagination/pagination.decorator';
import { IPaginationSort } from 'src/common/utils/pagination/pagination.interface';
import {
    SETTING_DEFAULT_AVAILABLE_SEARCH,
    SETTING_DEFAULT_AVAILABLE_SORT,
    SETTING_DEFAULT_PAGE,
    SETTING_DEFAULT_PER_PAGE,
    SETTING_DEFAULT_SORT,
} from '../setting.constant';

export class SettingListDto implements PaginationListAbstract {
    @PaginationSearch()
    @ApiProperty()
    readonly search: string;

    @PaginationAvailableSearch(SETTING_DEFAULT_AVAILABLE_SEARCH)
    @ApiProperty()
    readonly availableSearch: string[];

    @PaginationPage(SETTING_DEFAULT_PAGE)
    @ApiProperty()
    readonly page: number;

    @PaginationPerPage(SETTING_DEFAULT_PER_PAGE)
    @ApiProperty()
    readonly perPage: number;

    @PaginationSort(SETTING_DEFAULT_SORT, SETTING_DEFAULT_AVAILABLE_SORT)
    @ApiProperty()
    readonly sort: IPaginationSort;

    @PaginationAvailableSort(SETTING_DEFAULT_AVAILABLE_SORT)
    @ApiProperty()
    readonly availableSort: string[];
}
