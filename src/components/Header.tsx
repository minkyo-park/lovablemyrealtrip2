import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";

const navItems = [
  { label: "홈", path: "/" },
  { label: "카드사 할인", path: "/card-discounts" },
  { label: "항공권·숙소", path: "/flights-hotels" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="메인 네비게이션">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg" aria-label="마이리얼트립 쿠폰 홈">
          <Plane className="h-6 w-6 text-primary" />
          <span className="gradient-text">MRT 쿠폰</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://myrealt.rip/XdC1f5"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button hidden md:inline-flex text-sm px-4 py-2"
        >
          할인 적용하기
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://myrealt.rip/XdC1f5"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button mt-3 w-full text-center text-sm"
          >
            할인 적용하기
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
