import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Logins {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, genSaltSync(10));
  }

  validatePassword(password: string): boolean {
    return compareSync(password, this.password);
  }
}
