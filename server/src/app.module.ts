import { CardModule } from './card/card.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
