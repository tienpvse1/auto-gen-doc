import { Length, Max } from 'class-validator';

enum Role {
  ADMIN = 'admin',
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
}

export class CreateAccountDto {
  /**
   * username of user
   * @example tienpvse
   */
  @Length(6, 10)
  username: string;
  @Length(6, 10)
  password: string;
  @Max(10)
  age: number;

  role: Role;
}
