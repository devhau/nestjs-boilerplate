import { Module } from '@nestjs/common';
import { CoreModule } from 'src/common/core/core.module';
import { TaskModule } from 'src/common/task/task.module';
import { ModulesModule } from './modules/modules.module';
import { AppRouterModule } from './router/app.router.module';
@Module({
    controllers: [],
    providers: [],
    imports: [
        // Core
        CoreModule,
        
        // Modules
        ModulesModule,

        // Task
        TaskModule.register(),

        // Router
        AppRouterModule.register(),
    ],
})
export class AppModule { }
