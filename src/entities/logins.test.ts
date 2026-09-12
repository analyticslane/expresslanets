import { describe, expect, it } from 'vitest';

import Logins from './logins.js';

describe('Logins', () => {
  it('hashes the password on insert and validates the original password against it', () => {
    const login = new Logins();
    login.username = 'daniel';
    login.password = 'super-secret';

    login.hashPassword();

    expect(login.password).not.toBe('super-secret');
    expect(login.validatePassword('super-secret')).toBe(true);
  });

  it('rejects an incorrect password', () => {
    const login = new Logins();
    login.username = 'daniel';
    login.password = 'super-secret';

    login.hashPassword();

    expect(login.validatePassword('wrong-password')).toBe(false);
  });
});
