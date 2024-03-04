import crypto from "crypto";
import { prisma } from "~/db/prisma";

export async function resetPassword(email: string, password: string) {
  let user = await prisma.account.findUnique({
    where: { email: email },
    include: { Password: true },
  });

  if (!user || !user.Password) {
    return false;
  }

  let salt = crypto.randomBytes(16).toString("hex");
  let hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha256")
    .toString("hex");

  return prisma.account.update({
    where: {
      email,
    },
    data: {
      Password: { update: { hash, salt } },
    },
  });
}
