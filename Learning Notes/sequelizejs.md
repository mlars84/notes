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

SELECT foo, bar ...
```

- Attributes can be renamed using a nested array:
```Model.findAll({
  attributes: ['foo', ['bar', 'baz']]
});

SELECT foo, bar AS baz ...
```

- You can use sequelize.fn to do aggregations:
``` Model.findAll({
  attributes: [[sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']]
});

SELECT COUNT(hats) AS no_hats ...
```
