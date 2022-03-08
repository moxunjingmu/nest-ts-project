import { Module } from "@nestjs/common";
import { UserController } from '../controller/user.controller'
import { UserService } from "src/service/user.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}