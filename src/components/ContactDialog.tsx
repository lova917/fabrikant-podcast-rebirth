import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

export function ContactDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just close the dialog
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-right" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Mail className="w-5 h-5" />
            דברו איתי
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            אשמח לשמוע מכם! השאירו פרטים ואחזור אליכם בהקדם
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              שם מלא
            </label>
            <Input id="name" placeholder="הכניסו את שמכם" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              אימייל
            </label>
            <Input id="email" type="email" placeholder="הכניסו את האימייל שלכם" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              טלפון
            </label>
            <Input id="phone" type="tel" placeholder="הכניסו את מספר הטלפון שלכם" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              הודעה
            </label>
            <Textarea 
              id="message" 
              placeholder="במה אוכל לעזור?" 
              className="min-h-[100px]" 
              required 
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            <Send className="w-4 h-4 ml-2" />
            שליחה
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 