const Blogs = require('./Blogs');
const User = require('./User');

User.hasMany(Blogs, {
    foreignKey: 'user_id'
});

Blogs.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Blogs };
