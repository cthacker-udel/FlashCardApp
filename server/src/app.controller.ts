import { LocalAuthGuard } from './authentication/local.auth.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
      return req.user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
