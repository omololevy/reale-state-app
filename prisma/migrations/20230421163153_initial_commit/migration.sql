-- CreateTable
CREATE TABLE "User" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "usename" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isEmailChecked" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "magicLink" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "link" TEXT NOT NULL,
    "userId" BIGINT NOT NULL,
    CONSTRAINT "magicLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_email_key" ON "User"("id", "email");
