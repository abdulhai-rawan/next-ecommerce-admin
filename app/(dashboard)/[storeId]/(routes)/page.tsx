import React from "react";
import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({
  params,
}: DashboardPageProps) => {
  const store = await prismadb.store.findFirst({
    where: { id: params.storeId },
  });

  return (
    <>
      <p>Active Store: {store?.name}</p>
    </>
  );
};

export default DashboardPage;
