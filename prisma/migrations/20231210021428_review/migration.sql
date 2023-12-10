/*
  Warnings:

  - Added the required column `bookingId` to the `reviews_and_ratings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reviews_and_ratings" ADD COLUMN     "bookingId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "reviews_and_ratings" ADD CONSTRAINT "reviews_and_ratings_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
