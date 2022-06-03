import { registerAs } from '@nestjs/config';

export default registerAs(
    'redis',
    (): Record<string, any> => ({
        server: process.env.REDIS_SERVER || 'redis://localhost:6379'
    })
);
