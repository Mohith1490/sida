import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

export type Order = {
  orderId: string
  status: "Pending" | "Packed" | "Dispatched" | "Delivered"
  packerName: string
  riderName: string
  bin: string
  date: string
  amount: number
}

const binColorMap: Record<string, string> = {
  green: "bg-green-700 hover:bg-green-500",
  red: "bg-red-700 hover:bg-red-500",
  yellow: "bg-yellow-700 hover:bg-yellow-500",
  pink: "bg-pink-700 hover:bg-pink-500",
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
    cell:({row})=>{
      const value:string = row.getValue("bin")
       const colorClass = binColorMap[value] || "bg-gray-700 hover:bg-gray-500";
      const random: number = Math.floor(Math.random()*10);
      return <Button className={`w-16 h-8 text-white ${colorClass} `} >{value} {" "} {random}</Button>
    }
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
      const amount: number = row.getValue("amount")
      return <span className="font-bold" >₹{amount.toFixed(2)}</span>
    },
  },
]
