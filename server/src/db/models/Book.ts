import {dbConfig} from '../../db/config/config'
import { Sequelize, DataTypes } from 'sequelize';
import DBConfig  from '../../types/database/db';


const env = process.env.NODE_ENV || 'development';

const databaseUrl: string = process.env.DATABASE_URL || dbConfig[env as keyof DBConfig].url;
// const dialectString = dbConfig[env as keyof DBConfig].dialect;


const sequelize = new Sequelize(databaseUrl, {dialect : 'postgres'});

const Book = sequelize.define('books', {
  book_id: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: DataTypes.STRING,
  publication_year: DataTypes.INTEGER,
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cover_image_url: DataTypes.STRING,
  created_at: {
    type: DataTypes.DATE,
    field: 'created_at', // Set the field name explicitly
    defaultValue: Date.now(),
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
  indexes: [
    {
      unique: true,
      fields: ['isbn', 'user_id'], // Composite unique constraint
    },
  ],
  timestamps: false, // Disable timestamps to prevent Sequelize from expecting createdAt and updatedAt columns
});

sequelize.sync();

export { Book };
