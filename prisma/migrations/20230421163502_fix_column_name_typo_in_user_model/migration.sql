/*
  Warnings:

  - You are about to drop the column `usename` on the `User` table. All the data in the column will be lost.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isEmailChecked" BOOLEAN NOT NULL
);
INSERT INTO "new_User" ("email", "id", "isEmailChecked", "password") SELECT "email", "id", "isEmailChecked", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_email_key" ON "User"("id", "email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
