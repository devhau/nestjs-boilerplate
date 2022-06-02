import { Module } from '@nestjs/common';
import { TestingCommonController } from 'src/common/testing/testing.common.controller';

@Module({
    controllers: [TestingCommonController],
    providers: [],
    exports: [],
    imports: [],
})
export class RouterTestModule {}
