import { CurrentUSrType } from "../types";

export const checkUserIsAdmin = (currentUser: CurrentUSrType): boolean => {
    if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;

    const { userRoles } = currentUser;
    if (userRoles.includes('admin')) return true;

    return false;
}