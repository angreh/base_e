import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHolder } from "@/components/ui/pageHolder";
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

export const ActionCreatePage = () => {
  const [value, setValue] = useState<number>(1);
  const [importance, setImportance] = useState<number>(1);
  const [emotionalTax, setEmotionalTax] = useState<number>(1);

  const [date, setDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <PageHolder>
      <Card>
        <CardHeader>
          <CardTitle>Create</CardTitle>
          <CardDescription>Create a new action</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4">
            <div>
              <Label>Title</Label>
              <Input placeholder="Title" />
            </div>

            <div>
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Duration</Label>
              <Input placeholder="Duration" />
            </div>

            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label>Difficult</Label>
                <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                  {value}
                </span>
              </div>
              <Slider
                defaultValue={[1]}
                min={1}
                max={5}
                step={1}
                onValueChange={(e) => {
                  setValue(e[0]);
                }}
              />
            </div>

            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label>Importance</Label>
                <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                  {importance}
                </span>
              </div>
              <Slider
                defaultValue={[1]}
                min={1}
                max={5}
                step={1}
                onValueChange={(e) => {
                  setImportance(e[0]);
                }}
              />
            </div>

            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label>Emotional Tax</Label>
                <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                  {emotionalTax}
                </span>
              </div>
              <Slider
                defaultValue={[1]}
                min={1}
                max={5}
                step={1}
                onValueChange={(e) => {
                  setEmotionalTax(e[0]);
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
                      !date && "text-muted-foreground"
                    )}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
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
                      !endDate && "text-muted-foreground"
                    )}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? (
                      format(endDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
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

      <Button className="w-full">Create</Button>
    </PageHolder>
  );
};
