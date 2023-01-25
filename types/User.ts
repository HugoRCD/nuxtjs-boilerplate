import { users } from ".prisma/client";

export type User = users & { admin: boolean }