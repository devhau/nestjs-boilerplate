import { PermissionDocument } from 'src/schemas/permission.schema';
import { RoleDocument } from '../../schemas/role.schema';

export interface IRoleDocument extends Omit<RoleDocument, 'permissions'> {
    permissions: PermissionDocument[];
}
