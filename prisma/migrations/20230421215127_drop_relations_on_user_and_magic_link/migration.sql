/*
  Warnings:

  - You are about to drop the column `userId` on the `magicLink` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_magicLink" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "link" TEXT NOT NULL
);
INSERT INTO "new_magicLink" ("id", "link") SELECT "id", "link" FROM "magicLink";
DROP TABLE "magicLink";
ALTER TABLE "new_magicLink" RENAME TO "magicLink";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
