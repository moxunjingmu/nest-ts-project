import { Injectable } from "@nestjs/common";
import { ResultModel } from "src/models/resullt.model";


@Injectable()
export class UserService {
  login(username:string,password:string):ResultModel<object>{
    let obj = {
      username: 'admin',
      password: '12345',
      nickname: '管理员'
    }
    console.log("get");
    

    if(obj.username == username&&obj.password == password) {
      return new ResultModel(200, {
        userInfo: obj,
        token: 'abc'
      }, '登录成功')
    } else {
      return new ResultModel(500, null, '账号或者密码错误')
    }
  }
}