



import { SearchIcon } from 'lucide-react';
import { Input } from '../../ui/chad-cn/input';
import { Button } from '../../ui/chad-cn/button';
import { Tabs, TabsList, TabsTrigger } from '../../ui/chad-cn/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/chad-cn/select';

function Tooltip() {
  return (
    <nav className="sticky top-0 z-[100] h-fit w-full border-b-2 border-border bg-background/95 py-8  ">
      <div className="flex w-full items-center justify-between">
        <SelectComponent />
        <TabsComponent />
        <Search />
      </div>
    </nav>
  );
}

function Search() {
  return (
    <div className="flex w-full max-w-sm items-center rounded-md border border-border drop-shadow-sm">
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
        <SearchIcon size={22} className="opacity-75" />
      </Button>
    </div>
  );
}

function TabsComponent() {
  return (
    <Tabs
      defaultValue="Feed"
      className="flex w-96 items-center justify-center drop-shadow-xl "
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
    <div className="ml-4 w-96">
      <Select>
        <SelectTrigger className="w-2/3">
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
