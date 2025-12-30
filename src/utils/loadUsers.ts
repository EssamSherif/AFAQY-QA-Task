import fs from 'node:fs';
import path from 'node:path';
import type { BaseUserRecord } from './userFactory';

export function loadBaseUsers(): BaseUserRecord[] {
  const filePath = path.resolve(process.cwd(), 'test-data', 'users.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as BaseUserRecord[];
}


