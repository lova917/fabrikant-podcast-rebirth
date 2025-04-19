import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      source: "website",
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "ההודעה נשלחה בהצלחה!",
        description: "נחזור אליך בהקדם האפשרי",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="שם מלא"
          required
          className="w-full text-right"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="אימייל"
          required
          className="w-full text-right"
          dir="ltr"
        />
      </div>
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="טלפון"
          className="w-full text-right"
          dir="ltr"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="תוכן ההודעה"
          required
          className="w-full text-right min-h-[120px]"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "שולח..." : "שלח הודעה"}
      </Button>
    </form>
  );
} 