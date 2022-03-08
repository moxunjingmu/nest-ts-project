import { Controller, Get, Post, Query } from "@nestjs/common";
import { UserService } from "src/service/user.service";
import { ResultModel } from "src/models/resullt.model";

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/login')
  login(
    @Query('username') username:string,
    @Query('password') password:string
  ): ResultModel<object> {
    return this.userService.login(username, password);
  }
}