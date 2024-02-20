import { db } from './db';

export async function addData(data: any) {
  await db.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
  return 'User added';
}
