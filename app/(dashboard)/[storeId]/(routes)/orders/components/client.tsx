"use client";

import { OrderColumn, columns } from "./columns";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator className="my-4" />
      <DataTable searchKey="label" columns={columns} data={data} />
    </>
  );
};

export default OrderClient;
