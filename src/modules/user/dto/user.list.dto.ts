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
    USER_DEFAULT_AVAILABLE_SEARCH,
    USER_DEFAULT_AVAILABLE_SORT,
    USER_DEFAULT_PAGE,
    USER_DEFAULT_PER_PAGE,
    USER_DEFAULT_SORT,
} from '../user.constant';

export class UserListDto implements PaginationListAbstract {
    @PaginationSearch()
    @ApiProperty()
    readonly search: string;

    @PaginationAvailableSearch(USER_DEFAULT_AVAILABLE_SEARCH)
    @ApiProperty()
    readonly availableSearch: string[];

    @PaginationPage(USER_DEFAULT_PAGE)
    @ApiProperty()
    readonly page: number;

    @PaginationPerPage(USER_DEFAULT_PER_PAGE)
    @ApiProperty()
    readonly perPage: number;

    @PaginationSort(USER_DEFAULT_SORT, USER_DEFAULT_AVAILABLE_SORT)
    @ApiProperty()
    readonly sort: IPaginationSort;

    @PaginationAvailableSort(USER_DEFAULT_AVAILABLE_SORT)
    @ApiProperty()
    readonly availableSort: string[];
}
