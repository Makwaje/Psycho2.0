import { Input } from "@/components/ui/chad-cn/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/chad-cn/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/chad-cn/select";
import { Button } from "@/components/ui/chad-cn/button";
import { SearchIcon } from "lucide-react";

function Tooltip() {
  return (
    <nav className="sticky top-0 z-[100] h-fit border-b-2 border-border bg-background/95 py-8  ">
      <div className="flex items-center justify-center">
        <SelectComponent />
        <TabsComponent />
        <Search />
      </div>
    </nav>
  );
}

function Search() {
  return (
    <div className="ml-auto flex w-full max-w-sm items-center rounded-md border border-border drop-shadow-sm">
      <Input
        type="text"
        placeholder="Search..."
        className="rounded-none rounded-l-md"
      />
      <Button
        type="submit"
        variant="ghost"
        className="h-10 rounded-none rounded-r-sm border-b border-r border-t border-input hover:ring-0 hover:ring-secondary"
      >
        <SearchIcon size={22} />
      </Button>
    </div>
  );
}

function TabsComponent() {
  return (
    <Tabs
      defaultValue="Feed"
      className="ml-auto flex w-96 items-center justify-center drop-shadow-xl "
    >
      <TabsList className="h-14 w-full justify-evenly ring-2 ring-ring/70">
        <TabsTrigger value="Followings" className="text-md">
          Followings
        </TabsTrigger>
        <TabsTrigger value="Feed" className="text-md">
          Feed
        </TabsTrigger>
        <TabsTrigger value="Bookmarks" className="text-md">
          Bookmarks
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

function SelectComponent() {
  return (
    <div className="ml-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="z-[101] bg-popover/95">
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="mostRelevant">Most relevant</SelectItem>
          <SelectItem value="match">Matches you</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Tooltip;
