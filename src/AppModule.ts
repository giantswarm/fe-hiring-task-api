import { Module } from "@nestjs/common";
import { AppController } from "./AppController";
import { AppService } from "./AppService";
import { AppsModule } from "./modules/Apps/AppsModule";

@Module({
  imports: [AppsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
