import { ConfigService } from '@nestjs/config'
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../db/schema'
import { instrumentDrizzleClient } from '@kubiks/otel-drizzle';

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider';

export const drizzleProvider = [
    {
        provide: DrizzleAsyncProvider,
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
            const connectionString = configService.get<string>('DATABASE_URL');
            const pool = new Pool({
                connectionString,
            });

            const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
            
            instrumentDrizzleClient(db, {
                dbSystem: 'postgresql',
                captureQueryText: true // Garante que o texto da query apareça no SigNoz
            });

            return db;
        }
    }
]