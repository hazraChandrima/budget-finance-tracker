import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'

const sql = neon("postgresql://accounts:tqmfb6U1aEko@ep-white-bush-a5v7vlaq.us-east-2.aws.neon.tech/expense-tracker?sslmode=require");
export const db = drizzle(sql, {schema});