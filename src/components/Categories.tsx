import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Mũ Bảo Hiểm",
    count: 85,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    name: "Găng Tay",
    count: 42,
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=600&h=400&fit=crop",
  },
  {
    name: "Áo Giáp & Bảo Vệ",
    count: 63,
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&h=400&fit=crop",
  },
  {
    name: "Phụ Kiện Xe",
    count: 156,
    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=600&h=400&fit=crop",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Khám phá
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            DANH MỤC SẢN PHẨM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="group relative h-64 rounded-lg overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.count} sản phẩm
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowRight className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
