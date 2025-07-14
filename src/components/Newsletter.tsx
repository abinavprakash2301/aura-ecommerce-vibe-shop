
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-purple-800/50 to-indigo-900/50 opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Gift className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Exclusive Offers</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, 
            exclusive deals, and special promotions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-300"
              />
            </div>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-8 h-12">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-purple-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
