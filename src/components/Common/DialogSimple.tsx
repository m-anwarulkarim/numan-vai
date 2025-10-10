"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
export default function DialogSimple() {
  return (
    <div className="w-full p-6 flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Input type="search" id="search" placeholder="search..." />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>

            <Input type="search" id="search" placeholder="search..." />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
