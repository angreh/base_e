import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useActionStore } from "@/store/action";
import { useUserStore } from "@/store/user";
import { useList as useListUser } from "@/services/user/list";

export const ActionCreateForm = () => {
  const { item: action, setProperty, selectedUser, setUser } = useActionStore();
  const { list: users } = useUserStore();
  const { isPending, isError } = useListUser();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create</CardTitle>
        <CardDescription>Create a new action</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4">
          {!isPending && !isError && (
            <div>
              <Label>User</Label>
              <Select
                value={selectedUser?.toString()}
                onValueChange={(userID) => setUser(+userID)}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="User" />
                </SelectTrigger>
                <SelectContent>
                  {users.map((user) => (
                    <SelectItem key={user.id} value={user.id!.toString()}>
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <Label>Title</Label>
            <Input
              placeholder="Title"
              onChange={(e) => setProperty("title", e.target.value)}
            />
          </div>

          <div>
            <Label>Category</Label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sample001">Light</SelectItem>
                <SelectItem value="sample002">Dark</SelectItem>
                <SelectItem value="sample003">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Duration</Label>
            <Input
              placeholder="Duration"
              onChange={(e) => setProperty("duration", +e.target.value)}
              type="number"
            />
          </div>

          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label>Difficult</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {action.difficulty}
              </span>
            </div>
            <Slider
              min={1}
              max={5}
              step={1}
              onValueChange={(e) => {
                setProperty("difficulty", e[0]);
              }}
            />
          </div>

          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label>Importance</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {action.importance}
              </span>
            </div>
            <Slider
              min={1}
              max={5}
              step={1}
              onValueChange={(e) => {
                setProperty("importance", e[0]);
              }}
            />
          </div>

          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label>Emotional Tax</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {action.emotional_tax}
              </span>
            </div>
            <Slider
              min={1}
              max={5}
              step={1}
              onValueChange={(e) => {
                setProperty("emotional_tax", e[0]);
              }}
            />
          </div>

          <div className="pt-2">
            <Label>Start Date</Label>
            <br />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !action.start_date && "text-muted-foreground"
                  )}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {action.start_date ? (
                    format(action.start_date, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={action.start_date as any}
                  onSelect={(e) => setProperty("start_date", e)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label>End Date</Label>
            <br />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !action.end_date && "text-muted-foreground"
                  )}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {action.end_date ? (
                    format(action.end_date, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={action.end_date as any}
                  onSelect={(e) => setProperty("end_date", e)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label>Description</Label>
            <Textarea placeholder="Type your message here." />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
