const Blogs = require('./Blogs');
const User = require('./User');
const Comments = require('./Comments');

Blogs.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Blogs, {
  foreignKey: 'user_id'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});

Blogs.hasMany(Comments, {
  foreignKey: 'blog_id',
});


module.exports = { User, Blogs, Comments };
