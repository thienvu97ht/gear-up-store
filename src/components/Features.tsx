import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Giao Hàng Nhanh",
    description: "Miễn phí ship cho đơn từ 500K. Giao hàng toàn quốc trong 2-5 ngày.",
  },
  {
    icon: Shield,
    title: "Bảo Hành Chính Hãng",
    description: "Cam kết 100% hàng chính hãng. Bảo hành từ 6-24 tháng.",
  },
  {
    icon: RefreshCw,
    title: "Đổi Trả Dễ Dàng",
    description: "Đổi trả miễn phí trong 7 ngày nếu không hài lòng.",
  },
  {
    icon: Headphones,
    title: "Hỗ Trợ 24/7",
    description: "Đội ngũ tư vấn chuyên nghiệp, sẵn sàng hỗ trợ mọi lúc.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
