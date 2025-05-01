import {
  customers,
  invoices,
  revenue,
  users,
} from "../app/lib/placeholder-data";
import prisma from "../app/lib/prisma";

async function main() {
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      await prisma.users.createMany({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        },
        skipDuplicates: true,
      });
    })
  );

  const insertedCustomers = await Promise.all(
    customers.map(async (customer) => {
      await prisma.customers.createMany({
        data: {
          id: customer.id,
          name: customer.name,
          email: customer.email,
          image_url: customer.image_url,
        },
        skipDuplicates: true,
      });
    })
  );

  const insertedInvoices = await Promise.all(
    invoices.map(async (invoice, index) => {
      await prisma.invoices.createMany({
        data: {
          customer_id: invoice.customer_id,
          amount: invoice.amount,
          status: invoice.status,
          date: new Date(invoice.date).toISOString(),
        },
        skipDuplicates: true,
      });
    })
  );

  const insertedRevenue = await Promise.all(
    revenue.map(async (revenue) => {
      await prisma.revenue.createMany({
        data: {
          month: revenue.month,
          revenue: revenue.revenue,
        },
        skipDuplicates: true,
      });
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
