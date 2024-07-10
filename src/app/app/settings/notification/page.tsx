import Headers from "@/components/ui/Headers";
import { Button } from "@/components/ui/chad-cn/button";
import { CardContent } from "@/components/ui/chad-cn/card";
import { Switch } from "@/components/ui/switch";
import { BellRing } from "lucide-react";
import React from "react";

export default function NotificationPage() {
  return (
    <div className="mt-24 flex flex-col gap-4">
      <Headers>Notification Settings</Headers>
      <div className="grid gap-4">
        <Headers size="sm">Security</Headers>

        <div className=" flex items-center space-x-[39rem] rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Unusual activity notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Donec in quam sed urna bibendum tincidunt quis mollis mauris.
            </p>
          </div>
          <Switch />
        </div>
        <div className=" flex items-center space-x-64 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Unusual activity notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Donec in quam sed urna bibendum tincidunt quis mollis mauris.
            </p>
          </div>
          <Switch />
        </div>
      </div>
      <div className="grid gap-4">
        <Headers size="sm">System</Headers>

        <div className=" flex items-center space-x-64 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Unusual activity notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Donec in quam sed urna bibendum tincidunt quis mauris.
            </p>
          </div>
          <Switch />
        </div>
      </div>
      <Button>Save Changes</Button>
    </div>
  );
}
