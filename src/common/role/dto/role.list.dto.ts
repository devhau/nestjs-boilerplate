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
    ROLE_DEFAULT_AVAILABLE_SEARCH,
    ROLE_DEFAULT_AVAILABLE_SORT,
    ROLE_DEFAULT_PAGE,
    ROLE_DEFAULT_PER_PAGE,
    ROLE_DEFAULT_SORT,
} from '../role.constant';

export class RoleListDto implements PaginationListAbstract {
    @PaginationSearch()
    @ApiProperty()
    readonly search: string;

    @PaginationAvailableSearch(ROLE_DEFAULT_AVAILABLE_SEARCH)
    @ApiProperty()
    readonly availableSearch: string[];

    @PaginationPage(ROLE_DEFAULT_PAGE)
    @ApiProperty()
    readonly page: number;

    @PaginationPerPage(ROLE_DEFAULT_PER_PAGE)
    @ApiProperty()
    readonly perPage: number;

    @PaginationSort(ROLE_DEFAULT_SORT, ROLE_DEFAULT_AVAILABLE_SORT)
    @ApiProperty()
    readonly sort: IPaginationSort;

    @PaginationAvailableSort(ROLE_DEFAULT_AVAILABLE_SORT)
    @ApiProperty()
    readonly availableSort: string[];
}
