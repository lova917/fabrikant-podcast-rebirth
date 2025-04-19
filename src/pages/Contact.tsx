import React from "react";
import ContactForm from "@/components/ContactForm";
import { Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-right mb-2">דברו איתי</h1>
            <p className="text-gray-600 text-right mb-8">
              מוזמנים ליצור איתי קשר בכל נושא, אשמח לשמוע מכם!
            </p>

            <div className="mb-8">
              <div className="flex items-center justify-end gap-4 mb-4">
                <a
                  href="https://www.instagram.com/moshe_fabrikant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-600 hover:text-pink-700"
                >
                  <span>עקבו אחרי באינסטגרם</span>
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
} 