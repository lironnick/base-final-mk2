const { User } = require('../models');

class SessionController {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const { name, login, password } = req.body;

    const user = await User.create({ name, login, password });

    return res.json(user);
  }

  async create(req, res) {
    const { login, password } = req.body;

    const user = await User.findOne({ where: { login } });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    return res.json({
      user,
      token: user.generateToken(),
    });
  }
}

module.exports = new SessionController();
