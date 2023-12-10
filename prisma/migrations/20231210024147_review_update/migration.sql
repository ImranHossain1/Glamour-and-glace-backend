/*
  Warnings:

  - You are about to drop the column `makeoverServiceId` on the `reviews_and_ratings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "reviews_and_ratings" DROP CONSTRAINT "reviews_and_ratings_makeoverServiceId_fkey";

-- AlterTable
ALTER TABLE "reviews_and_ratings" DROP COLUMN "makeoverServiceId";
