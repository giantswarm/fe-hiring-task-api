import { Module } from "@nestjs/common";
import { AppsService } from "./AppsService";
import { AppsController } from "./AppsController";

@Module({
  imports: [],
  providers: [AppsService],
  controllers: [AppsController]
})
export class AppsModule {}
