import React from "react";
import SettingsForm from "./components/settings-form";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const store = await prismadb.store.findFirst({
    where: { id: params.storeId },
  });

  if (!store) redirect("/");

  return (
    <div className="flex-col">
      {/* removed the (space-x-4) class due to not working */}
      <div className="flex-1 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingsPage;
