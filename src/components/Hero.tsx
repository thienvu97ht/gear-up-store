import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-motorcycle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Motorcycle rider at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-up">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Phụ kiện xe máy cao cấp
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            NÂNG TẦM
            <br />
            <span className="text-gradient">PHONG CÁCH</span>
            <br />
            CỦA BẠN
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Khám phá bộ sưu tập phụ kiện xe máy chất lượng cao. 
            Thiết kế độc đáo, chất liệu bền bỉ, giá cả hợp lý.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Mua ngay
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              Xem bộ sưu tập
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl text-primary">500+</p>
              <p className="text-muted-foreground text-sm">Sản phẩm</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl text-primary">10K+</p>
              <p className="text-muted-foreground text-sm">Khách hàng</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl text-primary">99%</p>
              <p className="text-muted-foreground text-sm">Hài lòng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
