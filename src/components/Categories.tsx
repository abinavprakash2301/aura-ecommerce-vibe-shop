
import { Shirt, Watch, Gem, Headphones } from "lucide-react";

const categories = [
  { name: "Fashion", icon: Shirt, color: "from-pink-500 to-rose-500", items: "2,341 items" },
  { name: "Accessories", icon: Watch, color: "from-blue-500 to-cyan-500", items: "1,892 items" },
  { name: "Jewelry", icon: Gem, color: "from-purple-500 to-violet-500", items: "743 items" },
  { name: "Electronics", icon: Headphones, color: "from-emerald-500 to-teal-500", items: "1,234 items" },
];

export const Categories = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-4 transform group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
