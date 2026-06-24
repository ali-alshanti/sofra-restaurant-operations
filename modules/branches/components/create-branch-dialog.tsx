"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export function CreateBranchDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Branch</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Branch</DialogTitle>
        </DialogHeader>

        <p>Form coming soon...</p>
      </DialogContent>
    </Dialog>
  );
}
