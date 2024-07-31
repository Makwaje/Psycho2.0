import { Button } from '@/components/ui/chad-cn/button';
import Headers from '@/components/ui/Headers';
import { Switch } from '@/components/ui/switch';

export default function NotificationPage() {
  return (
    <form className="mt-16 flex flex-col gap-4 w-full ">
      <Headers>Notification Settings</Headers>
      <div className="flex flex-col gap-4">
        <Headers size="sm">Security</Headers>

        <div className=" flex items-center  rounded-md border p-4">
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

        <div className=" flex items-center  rounded-md border p-4">
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
        <div className="grid gap-4">
          <Headers size="sm">System</Headers>

          <div className=" flex items-center rounded-md border p-4">
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
      </div>
      <Button>Save Changes</Button>
    </form>
  );
}
