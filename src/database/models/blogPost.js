const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  },
  {
    timestamps: false,
  }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { as: 'user', foreignKey: 'userId' });
  }

  return BlogPost;
};

module.exports = BlogPost;
