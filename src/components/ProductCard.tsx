import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  isNew,
  isSale,
}: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden hover-lift shadow-card">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded uppercase">
            Mới
          </span>
        )}
        {isSale && (
          <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded uppercase">
            Sale
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Add Button */}
        <Button
          variant="hero"
          size="sm"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
        >
          <ShoppingCart className="h-4 w-4" />
          Thêm vào giỏ
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < rating ? "text-primary fill-primary" : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating}.0)</span>
        </div>

        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="font-display text-xl text-primary">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
