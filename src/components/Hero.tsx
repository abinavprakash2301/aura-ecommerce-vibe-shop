
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-purple-800/50 to-indigo-900/50 opacity-20"></div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">New Collection Available</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover Your
              <span className="block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 max-w-2xl">
              Explore our curated collection of premium fashion and lifestyle products. 
              From everyday essentials to statement pieces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-3 w-full sm:w-auto">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-3 w-full sm:w-auto bg-transparent backdrop-blur-sm">
                View Collections
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-pink-500/20 to-yellow-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl">
                  <ShoppingBag className="w-16 h-16 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
                  <p className="text-purple-100">Handpicked products from trusted brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
