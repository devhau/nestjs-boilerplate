import {
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    Patch,
    Put,
    Query,
} from '@nestjs/common';
import { ENUM_PERMISSIONS } from 'src/modules/permission/permission.constant';
import { AuthAdminJwtGuard } from 'src/modules/auth/auth.decorator';
import { DebuggerService } from 'src/common/debugger/service/debugger.service';
import { PermissionService } from '../service/permission.service';
import {
    GetPermission,
    PermissionGetGuard,
    PermissionUpdateActiveGuard,
    PermissionUpdateGuard,
    PermissionUpdateInactiveGuard,
} from '../permission.decorator';
import {
    Response,
    ResponsePaging,
} from 'src/common/utils/response/response.decorator';
import {
    IResponse,
    IResponsePaging,
} from 'src/common/utils/response/response.interface';
import { ENUM_STATUS_CODE_ERROR } from 'src/common/utils/error/error.constant';
import { PaginationService } from 'src/common/utils/pagination/service/pagination.service';
import { PermissionDocument } from '../../../schemas/permission.schema';
import { PermissionListDto } from '../dto/permission.list.dto';
import { PermissionUpdateDto } from '../dto/permission.update.dto';
import { PermissionListSerialization } from '../serialization/permission.list.serialization';
import { RequestParamGuard } from 'src/common/utils/request/request.decorator';
import { PermissionRequestDto } from '../dto/permissions.request.dto';

@Controller({
    version: '1',
    path: 'permission',
})
export class PermissionAdminController {
    constructor(
        private readonly debuggerService: DebuggerService,
        private readonly paginationService: PaginationService,
        private readonly permissionService: PermissionService
    ) {}

    @ResponsePaging('permission.list')
    @AuthAdminJwtGuard(ENUM_PERMISSIONS.PERMISSION_READ)
    @Get('/list')
    async list(
        @Query()
        {
            page,
            perPage,
            sort,
            search,
            availableSort,
            availableSearch,
            isActive,
        }: PermissionListDto
    ): Promise<IResponsePaging> {
        const skip: number = await this.paginationService.skip(page, perPage);
        const find: Record<string, any> = {
            isActive: {
                $in: isActive,
            },
        };
        if (search) {
            find['$or'] = [
                {
                    name: {
                        $regex: new RegExp(search),
                        $options: 'i',
                    },
                },
            ];
        }

        const permissions: PermissionDocument[] =
            await this.permissionService.findAll(find, {
                skip: skip,
                limit: perPage,
                sort,
            });

        const totalData: number = await this.permissionService.getTotal(find);
        const totalPage: number = await this.paginationService.totalPage(
            totalData,
            perPage
        );

        const data: PermissionListSerialization[] =
            await this.permissionService.serializationList(permissions);

        return {
            totalData,
            totalPage,
            currentPage: page,
            perPage,
            availableSearch,
            availableSort,
            data,
        };
    }

    @Response('permission.get')
    @PermissionGetGuard()
    @RequestParamGuard(PermissionRequestDto)
    @AuthAdminJwtGuard(ENUM_PERMISSIONS.PERMISSION_READ)
    @Get('/get/:permission')
    async get(
        @GetPermission() permission: PermissionDocument
    ): Promise<IResponse> {
        return this.permissionService.serializationGet(permission);
    }

    @Response('permission.update')
    @PermissionUpdateGuard()
    @RequestParamGuard(PermissionRequestDto)
    @AuthAdminJwtGuard(
        ENUM_PERMISSIONS.PERMISSION_READ,
        ENUM_PERMISSIONS.PERMISSION_UPDATE
    )
    @Put('/update/:permission')
    async update(
        @GetPermission() permission: PermissionDocument,
        @Body() body: PermissionUpdateDto
    ): Promise<IResponse> {
        try {
            await this.permissionService.update(permission._id, body);
        } catch (e) {
            this.debuggerService.error(
                'Auth active server internal error',
                'AuthAdminController',
                'updateActive',
                e
            );

            throw new InternalServerErrorException({
                statusCode: ENUM_STATUS_CODE_ERROR.UNKNOWN_ERROR,
                message: 'http.serverError.internalServerError',
            });
        }

        return {
            _id: permission._id,
        };
    }

    @Response('permission.inactive')
    @PermissionUpdateInactiveGuard()
    @RequestParamGuard(PermissionRequestDto)
    @AuthAdminJwtGuard(
        ENUM_PERMISSIONS.PERMISSION_READ,
        ENUM_PERMISSIONS.PERMISSION_UPDATE
    )
    @Patch('/update/:permission/inactive')
    async inactive(
        @GetPermission() permission: PermissionDocument
    ): Promise<void> {
        try {
            await this.permissionService.inactive(permission._id);
        } catch (e) {
            this.debuggerService.error(
                'Permission inactive server internal error',

                'PermissionController',
                'inactive',
                e
            );

            throw new InternalServerErrorException({
                statusCode: ENUM_STATUS_CODE_ERROR.UNKNOWN_ERROR,
                message: 'http.serverError.internalServerError',
            });
        }

        return;
    }

    @Response('permission.active')
    @PermissionUpdateActiveGuard()
    @RequestParamGuard(PermissionRequestDto)
    @AuthAdminJwtGuard(
        ENUM_PERMISSIONS.PERMISSION_READ,
        ENUM_PERMISSIONS.PERMISSION_UPDATE
    )
    @Patch('/update/:permission/active')
    async active(
        @GetPermission() permission: PermissionDocument
    ): Promise<void> {
        try {
            await this.permissionService.active(permission._id);
        } catch (e) {
            this.debuggerService.error(
                'Permission active server internal error',
                'PermissionController',
                'active',
                e
            );

            throw new InternalServerErrorException({
                statusCode: ENUM_STATUS_CODE_ERROR.UNKNOWN_ERROR,
                message: 'http.serverError.internalServerError',
            });
        }

        return;
    }
}