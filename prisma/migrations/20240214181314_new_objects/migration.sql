-- CreateTable
CREATE TABLE "Ad" (
    "id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "V25" INTEGER NOT NULL,
    "V50" INTEGER NOT NULL,
    "V75" INTEGER NOT NULL,
    "V95" INTEGER NOT NULL,
    "V100" INTEGER NOT NULL,

    CONSTRAINT "Ad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);
