/*
  Warnings:

  - You are about to drop the `magicLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "magicLink";
PRAGMA foreign_keys=on;
