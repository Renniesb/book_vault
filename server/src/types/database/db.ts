interface DBConfig {
  development: {
    url: string;
    dialect: string;
  };
  test: {
    url: string;
    dialect: string;
  };
  production: {
    url: string;
    dialect: string;
  };
}

export default DBConfig;