import { Link } from "react-router-dom";
import { Plane, Mail, ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-primary-foreground" role="contentinfo">
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Plane className="h-5 w-5 text-accent" />
            <span className="font-bold text-lg">MRT 쿠폰</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            마이리얼트립 공식 파트너 할인코드 및 쿠폰 정보를 제공합니다. 
            항공권, 숙소, 투어, 액티비티 예약 시 최대 할인 혜택을 받아보세요.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">빠른 링크</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">홈</Link></li>
            <li><a href="/#discount-codes" className="text-primary-foreground/70 hover:text-accent transition-colors">할인코드 가이드</a></li>
            <li><Link to="/card-discounts" className="text-primary-foreground/70 hover:text-accent transition-colors">카드사 할인</Link></li>
            <li><Link to="/flights-hotels" className="text-primary-foreground/70 hover:text-accent transition-colors">항공권·숙소 프로모션</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">정보</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              dongbaektour@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              <a href="https://myrealt.rip/XdC1f5" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                마이리얼트립 바로가기
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-primary-foreground/50">
            본 사이트는 마이리얼트립 공식 어필리에이트 파트너로서 제휴 링크를 통한 구매 시 수수료를 받을 수 있습니다.
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} MRT 쿠폰 | mrt.dongbaektour.co.kr | All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
