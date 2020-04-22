import { Controller, Get, Param } from "@nestjs/common";
import { AppsService } from "./AppsService";
import { App } from "./App";

@Controller("apps")
export class AppsController {
  public constructor(private readonly appsService: AppsService) {}

  @Get()
  public findAll(): App[] {
    return this.appsService.findAll();
  }

  @Get(":id")
  public findOne(@Param('id') id: string): App {
    return this.appsService.findOne(id);
  }
}
