import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Ticket, CreditCard, Plane, Star, Clock, Shield, TrendingUp, ArrowRight } from "lucide-react";
import AffiliateButton from "@/components/AffiliateButton";
import heroImg from "@/assets/hero-travel.jpg";
import discountImg from "@/assets/discount-codes.jpg";
import cardImg from "@/assets/card-discount.jpg";
import flightImg from "@/assets/flight-hotel.jpg";
import mobileImg from "@/assets/mobile-booking.jpg";
import savingsImg from "@/assets/savings.jpg";

const SITE = "https://mrt.dongbaektour.co.kr";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "마이리얼트립 쿠폰 할인코드 총정리",
  url: SITE,
  description: "2026년 최신 마이리얼트립 할인코드, 쿠폰, 카드사 할인, 항공권 프로모션 총정리. 최대 5천원 즉시 할인.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MRT 쿠폰 - 동백투어",
  url: SITE,
  logo: `${SITE}/favicon.png`,
};

const features = [
  {
    icon: Ticket,
    title: "할인코드 3종",
    desc: "구매 금액별 1천~5천원 즉시 할인코드 제공",
    link: "/discount-codes",
    img: discountImg,
  },
  {
    icon: CreditCard,
    title: "카드사 할인",
    desc: "신한·삼성·현대·KB 등 최대 15% 카드사 할인",
    link: "/card-discounts",
    img: cardImg,
  },
  {
    icon: Plane,
    title: "항공권·숙소",
    desc: "항공권 특가, 숙소 프로모션, 패키지 할인 총정리",
    link: "/flights-hotels",
    img: flightImg,
  },
];

const stats = [
  { value: "5,000원", label: "최대 즉시 할인" },
  { value: "15%", label: "카드사 최대 할인" },
  { value: "상시", label: "할인코드 유효" },
  { value: "3종", label: "할인코드 보유" },
];

const Index = () => (
  <>
    <Helmet>
      <title>마이리얼트립 쿠폰 할인코드 총정리 (2026년 4월)</title>
      <meta name="description" content="2026년 최신 마이리얼트립 할인코드, 쿠폰, 카드사 할인, 항공권 프로모션 총정리. 최대 5천원 즉시 할인. 파트너 전용 할인코드로 여행 경비를 절약하세요." />
      <link rel="canonical" href={SITE} />
      <meta property="og:title" content="마이리얼트립 쿠폰 할인코드 총정리 (2026년 4월)" />
      <meta property="og:description" content="마이리얼트립 최대 5천원 즉시 할인. 카드사 최대 15% 할인. 항공권·숙소 특가 프로모션." />
      <meta property="og:url" content={SITE} />
      <meta property="og:image" content={`${SITE}/og-image.jpg`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

    {/* Hero */}
    <section className="relative overflow-hidden" aria-label="히어로 배너">
      <div className="absolute inset-0">
        <img src={heroImg} alt="여행 배너 이미지" className="h-full w-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(220,25%,12%,0.75) 0%, hsla(16,85%,55%,0.4) 100%)" }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 md:py-36 text-center">
        <span className="badge-primary mb-4 inline-block">2026년 4월 최신</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ color: "white" }}>
          마이리얼트립<br />
          <span style={{ color: "hsl(45, 100%, 55%)" }}>할인코드 & 쿠폰</span> 총정리
        </h1>
        <p className="mx-auto max-w-2xl text-base sm:text-lg mb-8 leading-relaxed" style={{ color: "hsla(0,0%,100%,0.85)" }}>
          파트너 전용 할인코드부터 카드사 할인, 항공권 특가까지<br className="hidden sm:inline" />
          여행 경비를 최대한 절약할 수 있는 모든 방법을 안내합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AffiliateButton text="지금 할인 받기 →" variant="large" />
          <Link to="/discount-codes" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-8 py-4 font-semibold transition-all hover:bg-white/10" style={{ borderColor: "hsla(0,0%,100%,0.3)", color: "white" }}>
            할인코드 확인하기
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-b border-border bg-card" aria-label="할인 통계">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Feature Cards */}
    <section className="section-container" aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-center mb-4">
        마이리얼트립 할인 혜택 한눈에 보기
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
        할인코드, 카드사 할인, 항공권·숙소 프로모션 등 모든 할인 정보를 카테고리별로 정리했습니다.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <Link to={f.link} key={i} className="card-elevated group">
            <div className="aspect-video overflow-hidden">
              <img
                src={f.img}
                alt={f.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={1200}
                height={600}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{f.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                자세히 보기 <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* How it works */}
    <section className="bg-muted" aria-labelledby="how-heading">
      <div className="section-container">
        <h2 id="how-heading" className="text-2xl sm:text-3xl font-bold text-center mb-10">
          할인코드 사용 방법
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { step: "1", title: "할인코드 복사", desc: "원하는 할인코드를 복사하세요." },
            { step: "2", title: "마이리얼트립 접속", desc: "제휴 링크를 통해 마이리얼트립에 접속합니다." },
            { step: "3", title: "쿠폰 등록", desc: "마이페이지 > 쿠폰에서 코드를 입력합니다." },
            { step: "4", title: "할인 적용 결제", desc: "상품 결제 시 자동으로 할인이 적용됩니다." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary font-bold text-xl text-primary-foreground">
                {item.step}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <AffiliateButton text="마이리얼트립 바로가기 →" />
        </div>
      </div>
    </section>

    {/* Why us */}
    <section className="section-container" aria-labelledby="why-heading">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 id="why-heading" className="text-2xl sm:text-3xl font-bold mb-6">
            왜 이 사이트에서 할인코드를 받아야 할까요?
          </h2>
          <ul className="space-y-4">
            {[
              { icon: Shield, text: "마이리얼트립 공식 파트너 인증 할인코드" },
              { icon: Clock, text: "실시간 업데이트로 항상 유효한 코드 제공" },
              { icon: TrendingUp, text: "카드사 할인과 중복 적용 가능 안내" },
              { icon: Star, text: "할인율 계산기 및 비교 분석 제공" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={mobileImg} alt="모바일 여행 예약" className="rounded-xl object-cover w-full aspect-square" loading="lazy" width={800} height={600} />
          <img src={savingsImg} alt="여행 비용 절약" className="rounded-xl object-cover w-full aspect-square" loading="lazy" width={800} height={600} />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden" aria-label="행동 유도">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative text-center px-4 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "white" }}>
          지금 바로 할인 혜택을 받아보세요
        </h2>
        <p className="mb-8 max-w-lg mx-auto text-sm" style={{ color: "hsla(0,0%,100%,0.7)" }}>
          파트너 전용 할인코드는 선착순으로 소진될 수 있습니다. 지금 바로 등록하고 할인을 받으세요!
        </p>
        <AffiliateButton text="할인 적용하고 예약하기 →" variant="large" />
      </div>
    </section>
  </>
);

export default Index;
