const Blogs = require('./Blogs');
const User = require('./User');
const Comments = require('./Comments');

User.hasMany(Blogs, {
    foreignKey: 'user_id'
});

Blogs.belongsTo(User, {
    foreignKey: 'user_id'
});

Blogs.hasMany(Comments, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
  });
  
  Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

module.exports = { User, Blogs, Comments };
