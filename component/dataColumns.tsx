import { ColumnDef } from "@tanstack/react-table"

export type Order = {
  orderId: string
  status: "Pending" | "Packed" | "Dispatched" | "Delivered"
  packerName: string
  riderName: string
  bin: string
  date: string
  amount: number
}

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "packerName",
    header: "Packer Name",
  },
  {
    accessorKey: "riderName",
    header: "Rider Name",
  },
  {
    accessorKey: "bin",
    header: "Bin",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      return <span>{date.toLocaleDateString()}</span>
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = row.getValue("amount")
      return <span>${amount.toFixed(2)}</span>
    },
  },
]
