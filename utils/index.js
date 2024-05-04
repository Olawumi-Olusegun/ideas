import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as shema from "./schema"

export const dbConnection = import.meta.env.VITE_DB_CONNECTION;

const sql = neon(dbConnection);
export const db = drizzle(sql, {shema});
