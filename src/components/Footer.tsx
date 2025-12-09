import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Newsletter */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl">
                ĐĂNG KÝ NHẬN ƯU ĐÃI
              </h3>
              <p className="text-muted-foreground mt-1">
                Nhận ngay voucher giảm 10% cho đơn hàng đầu tiên
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                className="md:w-72 bg-secondary border-border"
              />
              <Button variant="hero">Đăng ký</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <span className="font-display text-2xl text-gradient">MOTOGEAR</span>
            <p className="text-muted-foreground mt-4 text-sm">
              Cửa hàng phụ kiện xe máy uy tín hàng đầu Việt Nam. 
              Chuyên cung cấp các sản phẩm chất lượng cao với giá tốt nhất.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">LIÊN KẾT NHANH</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Chính sách bảo hành
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Điều khoản dịch vụ
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg mb-4">DANH MỤC</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Mũ bảo hiểm
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Găng tay
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Áo giáp & bảo vệ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Phụ kiện xe
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Đồ độ xe máy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">LIÊN HỆ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:0909123456" className="text-muted-foreground hover:text-primary transition-colors">
                  0909 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@motogear.vn" className="text-muted-foreground hover:text-primary transition-colors">
                  info@motogear.vn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-muted-foreground text-sm">
            © 2024 MOTOGEAR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
