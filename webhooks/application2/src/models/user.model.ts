import { Sequelize, Model, DataTypes ,Op} from 'sequelize'

import sequelize from '../database/dbconnection';


class User extends Model {
    public id!: number;
    public name!: string;
    public email!:string;
    public username!: string;
    public password!: string;
    public phone_no!: string;
}
User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        
        allowNull: false,
      },
     
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,

      }, 
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      phone_no: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
    },
    {
      sequelize,
      tableName: 'users',
    }
  );
  
  User.sync({ force: true});
  export default User;