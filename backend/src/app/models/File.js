import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    // squelize é a conexao com o servidor, assim o usuario recebe uma conexao ja estabelecida
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default File;
