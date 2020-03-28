const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'tiago',
      login: 'lironnick',
      password: '12345',
    });

    const compareHash = await bcrypt.compare('12345', user.password);
    // const hash = await bcrypt.hash('12345', 8);

    expect(compareHash).toBe(true);
  });
});
