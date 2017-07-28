# SequelizeJS
- Documentation: http://docs.sequelizejs.com/

## Example usage
```const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password');

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.get({
      plain: true
    }));
  });
  ```

## Querying
  - To select only some attributes, you can use the attributes option. Most often, you pass an array:
  ```Model.findAll({
  attributes: ['foo', 'bar']
});
```
