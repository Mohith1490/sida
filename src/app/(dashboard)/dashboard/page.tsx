"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { DataTable } from "../../../../component/dataTable"
import {columns, Order} from "../../../../component/dataColumns"
import { PaginationUI } from "../../../../component/Pagination"
import { SheetUI } from "../../../../component/sheet"
import { Sidebar } from "../../../../component/sideBar"
import { CirclePlus } from "lucide-react"

export default function page() {
    const data:Order[] = [
  {
    orderId: "ORD12345",
    status: "Pending",
    packerName: "Alice",
    riderName: "John",
    bin: "green",
    date: "2025-07-05T10:30:00Z",
    amount: 99.99,
  },
  {
    orderId: "ORD12346",
    status: "Packed",
    packerName: "Bob",
    riderName: "Mark",
    bin: "yellow",
    date: "2025-07-04T12:15:00Z",
    amount: 149.49,
  },
  {
    orderId: "ORD12346",
    status: "Packed",
    packerName: "Bob",
    riderName: "Mark",
    bin: "red",
    date: "2025-07-04T12:15:00Z",
    amount: 149.49,
  },
  {
    orderId: "ORD12346",
    status: "Packed",
    packerName: "Bob",
    riderName: "Mark",
    bin: "pink",
    date: "2025-07-04T12:15:00Z",
    amount: 149.49,
  },
  {
    orderId: "ORD12346",
    status: "Packed",
    packerName: "Bob",
    riderName: "Mark",
    bin: "red",
    date: "2025-07-04T12:15:00Z",
    amount: 149.49,
  },
  {
    orderId: "ORD12346",
    status: "Packed",
    packerName: "Bob",
    riderName: "Mark",
    bin: "red",
    date: "2025-07-04T12:15:00Z",
    amount: 149.49,
  },
  {
    orderId: "ORD12346",
    status: "Packed",
    packerName: "Bob",
    riderName: "Mark",
    bin: "green",
    date: "2025-07-04T12:15:00Z",
    amount: 149.49,
  },
  {
    orderId: "ORD12346",
    status: "Packed",
    packerName: "Bob",
    riderName: "Mark",
    bin: "pink",
    date: "2025-07-04T12:15:00Z",
    amount: 149.49,
  },
  {
    orderId: "ORD12346",
    status: "Packed",
    packerName: "Bob",
    riderName: "Mark",
    bin: "yellow",
    date: "2025-07-04T12:15:00Z",
    amount: 149.49,
  },
]
    return (
        <>
            <div className="w-screen h-screen flex">
                <Sidebar/>
                <div className="w-full h-full p-10">
                    <div className="w-[700px]  border border-gray-300 rounded-2xl px-4 py-7  " >
                        <div className="flex justify-between">
                            <span>
                                <h1 className="text-xl font-bold" >Orders</h1>
                                <p className="text-gray-600" >Recent orders from your store.</p>
                            </span>
                           <SheetUI/>
                        </div>
                        <div className="flex justify-between mt-5" >
                            <div className="flex" >
                                <Input className="w-80 mr-3" type="text" placeholder="Search..." />
                                <Button>
                                     <CirclePlus className="stroke-black" />
                                    Status
                                </Button>
                            </div>
                            <Button>
                                <Image width={20} height={20} alt="add button" src={"/slider.svg"} />
                                View
                            </Button>
                        </div>
                        <div className="mt-2" >
                              <DataTable columns={columns} data={data} />
                        </div>
                        <div className="flex items-center justify-between mt-5" >
                            <h1 className="font-medium flex items-center" >Rows per page
                                <Input type="number" min={1} className="w-20 ml-2" defaultValue={10} />
                             </h1>
                            <PaginationUI/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}