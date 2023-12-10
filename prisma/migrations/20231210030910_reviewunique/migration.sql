/*
  Warnings:

  - A unique constraint covering the columns `[bookingId]` on the table `reviews_and_ratings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "reviews_and_ratings_bookingId_key" ON "reviews_and_ratings"("bookingId");
