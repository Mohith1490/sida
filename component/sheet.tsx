import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function SheetUI() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={"add"} >
                    <Image width={24} height={24} className="stroke-white" alt="add button" src={"/addbutton.svg"} />
                    Add order
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Add Details</SheetTitle>
                    <SheetDescription>
                        Add details of the order
                    </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4 overflow-y-scroll">
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-order">Order ID</Label>
                        <Input id="sheet-demo-order" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-status">Status</Label>
                        <Input id="sheet-demo-status" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-packer">Packer Name</Label>
                        <Input id="sheet-demo-packer" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-rider">Rider Name</Label>
                        <Input id="sheet-demo-rider" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-bin">Bin</Label>
                        <Input type="number" placeholder="Enter number and select color" />
                        <div className="flex justify-evenly" >
                            <Button className="w-16 h-8 bg-red-700 text-white hover:bg-red-500" >Red</Button>
                            <Button className="w-16 h-8 bg-green-700 text-white hover:bg-green-500" >Green</Button>
                            <Button className="w-16 h-8 bg-blue-700 text-white hover:bg-blue-500" >Blue</Button>
                            <Button className="w-16 h-8 bg-yellow-700 text-white hover:bg-yellow-500" >Yellow</Button>
                            <Button className="w-16 h-8 bg-pink-700 text-white hover:bg-yellow-500" >Yellow</Button>
                        </div>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-date">Date</Label>
                        <Input id="sheet-demo-date" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-amount">Amount</Label>
                        <Input id="sheet-demo-amount" />
                    </div>
                </div>
                <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
