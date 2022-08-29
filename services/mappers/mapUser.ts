import { User } from "../models/user";

export type MysqlUser = {
  id: number;
  first_name: string;
  last_name: string;
  is_admin: number;
};

export function mapUser(userData: MysqlUser): User {
  return {
    id: userData.id,
    firstName: userData.first_name,
    lastName: userData.last_name,
    isAdmin: userData.is_admin === 1,
  };
}
