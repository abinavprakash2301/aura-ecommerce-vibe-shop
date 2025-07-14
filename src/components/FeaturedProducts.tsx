
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Premium Watch",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    badge: "Limited"
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 89.99,
    originalPrice: 120.99,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    badge: "New"
  },
  {
    id: 4,
    name: "Leather Handbag",
    price: 179.99,
    originalPrice: 229.99,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    badge: "Trending"
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hand-picked favorites that our customers love most
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
