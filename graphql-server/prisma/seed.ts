import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Delete all records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  //Create dummy records
  await prisma.user.create({
    data: {
      name: 'Your Husband',
      messages: {
        create: [ 
          {
            body: "A note for my wife:"
          },
          {
            body: "You are beautiful."
          },
        ],
      },
    },
  }),
  await prisma.user.create({
    data: {
      name: "Your Husband",
      messages: {
        create: [
          {
            body: "Another note for my wife:"
          },
          {
            body: "I love you!"
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Your Husband",
      messages: {
        create: [
          {
            body: "A Third Note for my Wife:",
          },
          {
            body: "You're mine forever."
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("Data seeded...")
});