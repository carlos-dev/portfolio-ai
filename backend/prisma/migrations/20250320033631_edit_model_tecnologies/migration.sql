/*
  Warnings:

  - Added the required column `image` to the `technologies` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `technologies` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "technologies" ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
