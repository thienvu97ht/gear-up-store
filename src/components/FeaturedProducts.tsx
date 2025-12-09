import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Mũ Bảo Hiểm Full Face Carbon Pro",
    price: 2500000,
    originalPrice: 3200000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 5,
    isNew: true,
    isSale: true,
  },
  {
    name: "Găng Tay Da Racing Premium",
    price: 890000,
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=400&h=400&fit=crop",
    rating: 4,
  },
  {
    name: "Áo Giáp Bảo Vệ Toàn Thân",
    price: 1850000,
    originalPrice: 2100000,
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=400&h=400&fit=crop",
    rating: 5,
    isSale: true,
  },
  {
    name: "Giày Motor Touring Chống Nước",
    price: 1650000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4,
    isNew: true,
  },
  {
    name: "Khóa Đĩa Chống Trộm Smart Lock",
    price: 750000,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    name: "Đèn LED Độ Xe Máy RGB",
    price: 450000,
    originalPrice: 550000,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=400&fit=crop",
    rating: 4,
    isSale: true,
  },
  {
    name: "Túi Đeo Chéo Chống Thấm",
    price: 520000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4,
  },
  {
    name: "Gương Chiếu Hậu CNC Racing",
    price: 380000,
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=400&h=400&fit=crop",
    rating: 5,
    isNew: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Sản phẩm hot
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">
              SẢN PHẨM NỔI BẬT
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            Xem tất cả
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
