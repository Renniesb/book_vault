import DBConfig from '../../types/database/db'

export const dbConfig: DBConfig ={
  development: {
    url: "postgresql://postgres@localhost/book_inventory_test",
    dialect: "postgres"
  },
  test: {
    url: "postgresql://postgres@localhost/book_inventory_test",
    dialect: "postgres"
  },
  production: {
    url: "postgresql://postgres@localhost/book_inventory",
    dialect: "postgres"
  }
}
