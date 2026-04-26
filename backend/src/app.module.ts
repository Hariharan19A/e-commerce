import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { UserController } from './user/user.controller';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [UserModule, ProductsModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
