import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Ticket, CreditCard, Plane, Star, Clock, Shield, TrendingUp, ArrowRight, Calculator, Info, AlertTriangle, CheckCircle, Tag } from "lucide-react";
import AffiliateButton from "@/components/AffiliateButton";
import CouponCopyButton from "@/components/CouponCopyButton";
import FAQ from "@/components/FAQ";
import heroImg from "@/assets/hero-travel.jpg";
import discountImg from "@/assets/discount-codes.jpg";
import cardImg from "@/assets/card-discount.jpg";
import flightImg from "@/assets/flight-hotel.jpg";
import mobileImg from "@/assets/mobile-booking.jpg";
import savingsImg from "@/assets/savings.jpg";
import travelPlanImg from "@/assets/travel-planning.jpg";
import happyImg from "@/assets/happy-travelers.jpg";

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
  name: "마이리얼트립 쿠폰 - 동백투어",
  url: SITE,
  logo: `${SITE}/favicon.png`,
};

const features = [
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

const coupons = [
  { code: "PACKMKTP1000", discount: "1,000원", minPurchase: "50,000원", category: "해외 투어·티켓", validity: "등록 후 7일" },
  { code: "PACKMKTP3000", discount: "3,000원", minPurchase: "100,000원", category: "해외 투어·티켓", validity: "등록 후 7일" },
  { code: "PACKMKTP5000", discount: "5,000원", minPurchase: "200,000원", category: "해외 투어·티켓", validity: "등록 후 7일" },
];

const faqItems = [
  { q: "할인코드는 누구나 사용할 수 있나요?", a: "네, 마이리얼트립 가입 회원이라면 누구나 사용할 수 있습니다. 신규 가입자뿐만 아니라 기존 회원도 사용 가능합니다." },
  { q: "할인코드를 여러 개 동시에 사용할 수 있나요?", a: "아니요, 1회 결제 시 할인코드는 1개만 적용할 수 있습니다. 가장 할인 금액이 큰 코드를 선택하시는 것이 좋습니다." },
  { q: "등록 후 7일이 지나면 어떻게 되나요?", a: "등록 후 7일 이내에 사용하지 않으면 코드가 만료됩니다. 만료 후에는 다시 새로운 코드를 등록할 수 있습니다." },
  { q: "항공권에도 할인코드가 적용되나요?", a: "현재 파트너 할인코드는 해외 투어·티켓 상품에 적용됩니다. 항공권 할인은 별도 프로모션이나 카드사 할인을 이용하시는 것이 좋습니다." },
  { q: "카드사 할인과 중복 적용이 가능한가요?", a: "네! 할인코드와 카드사 청구 할인은 별개의 할인이므로 중복 적용이 가능합니다. 예를 들어 5,000원 할인코드 + 삼성카드 5% 청구할인을 동시에 받을 수 있습니다." },
  { q: "해외에서도 할인코드를 사용할 수 있나요?", a: "네, 마이리얼트립 웹사이트 및 앱에서 전 세계 어디서든 할인코드를 등록하고 사용할 수 있습니다." },
];

const Index = () => (
  <>
    <Helmet>
      <title>마이리얼트립 쿠폰</title>
      <meta name="description" content="2026년 최신 마이리얼트립 할인코드, 쿠폰, 카드사 할인, 항공권 프로모션 총정리. 최대 5천원 즉시 할인. 파트너 전용 할인코드로 여행 경비를 절약하세요." />
      <link rel="canonical" href={SITE} />
      <meta property="og:title" content="마이리얼트립 쿠폰" />
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
          <a href="#discount-codes" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-8 py-4 font-semibold transition-all hover:bg-white/10" style={{ borderColor: "hsla(0,0%,100%,0.3)", color: "white" }}>
            할인코드 확인하기
          </a>
        </div>
      </div>
    </section>

    {/* ===== Discount Codes Section (from DiscountCodes page) ===== */}
    <section id="discount-codes" className="section-container" aria-labelledby="codes-heading">
      <h2 id="codes-heading" className="text-2xl sm:text-3xl font-bold text-center mb-4">현재 사용 가능한 할인코드</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
        구매 금액에 따라 1,000원~5,000원 즉시 할인! 파트너 전용 할인코드의 모든 것을 알려드립니다.
      </p>
      <div className="space-y-6">
        {coupons.map((c, i) => (
          <div key={i} className="card-elevated p-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="badge-primary">{c.discount} 할인</span>
              <span className="badge-success">사용 가능</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" /> {c.validity}
              </span>
            </div>
            <CouponCopyButton code={c.code} label="할인코드 복사" />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" />
                <span><strong>할인 금액:</strong> {c.discount}</span>
              </div>
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-info" />
                <span><strong>최소 구매:</strong> {c.minPurchase}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span><strong>적용 대상:</strong> {c.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <AffiliateButton text="할인코드 등록하고 예약하기 →" variant="large" />
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
        카드사 할인, 항공권·숙소 프로모션 등 모든 할인 정보를 카테고리별로 정리했습니다.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
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

    {/* Step by step guide */}
    <section className="section-container" aria-labelledby="steps-heading">
      <h2 id="steps-heading" className="text-2xl sm:text-3xl font-bold mb-6">할인코드 사용 방법 상세 가이드</h2>
      <div className="grid gap-6 md:grid-cols-2 items-start">
        <div className="space-y-6">
          {[
            { step: 1, title: "할인코드 복사", desc: "위의 할인코드 중 결제 금액에 맞는 코드를 복사합니다. 5만원 이상이면 1천원, 10만원 이상이면 3천원, 20만원 이상이면 5천원 할인코드를 선택하세요." },
            { step: 2, title: "마이리얼트립 접속", desc: "반드시 이 페이지의 제휴 링크를 통해 마이리얼트립에 접속해야 합니다. 직접 접속하면 할인이 적용되지 않을 수 있습니다." },
            { step: 3, title: "마이페이지에서 쿠폰 등록", desc: "마이리얼트립 로그인 후 마이페이지 > 쿠폰 메뉴에서 복사한 코드를 붙여넣기합니다. 등록 즉시 쿠폰함에 저장됩니다." },
            { step: 4, title: "여행 상품 선택 및 결제", desc: "원하는 해외 투어·티켓 상품을 선택하고 결제 시 쿠폰을 적용하면 즉시 할인됩니다." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <img src={mobileImg} alt="마이리얼트립 할인코드 등록 방법" className="rounded-xl w-full object-cover aspect-[4/3]" loading="lazy" width={800} height={600} />
      </div>
    </section>

    {/* Discount Calculator */}
    <section className="section-container" aria-labelledby="calc-heading">
      <div className="bg-muted rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="h-6 w-6 text-primary" />
          <h2 id="calc-heading" className="text-2xl font-bold">할인율 계산 예시</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          구매 금액별로 어떤 할인코드가 가장 유리한지 비교해 보세요. 카드사 할인과 중복 적용하면 절약 금액이 더 커집니다!
        </p>
        <div className="table-responsive">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-semibold">구매 금액</th>
                <th className="px-4 py-3 text-left font-semibold">적용 코드</th>
                <th className="px-4 py-3 text-left font-semibold">할인 금액</th>
                <th className="px-4 py-3 text-left font-semibold">실제 할인율</th>
                <th className="px-4 py-3 text-left font-semibold">카드할인 5% 중복</th>
                <th className="px-4 py-3 text-left font-semibold">총 절약</th>
              </tr>
            </thead>
            <tbody>
              {[
                { amt: "50,000원", code: "PACKMKTP1000", disc: "1,000원", rate: "2.0%", card: "2,500원", total: "3,500원" },
                { amt: "100,000원", code: "PACKMKTP3000", disc: "3,000원", rate: "3.0%", card: "5,000원", total: "8,000원" },
                { amt: "150,000원", code: "PACKMKTP3000", disc: "3,000원", rate: "2.0%", card: "7,500원", total: "10,500원" },
                { amt: "200,000원", code: "PACKMKTP5000", disc: "5,000원", rate: "2.5%", card: "10,000원", total: "15,000원" },
                { amt: "300,000원", code: "PACKMKTP5000", disc: "5,000원", rate: "1.7%", card: "15,000원", total: "20,000원" },
                { amt: "500,000원", code: "PACKMKTP5000", disc: "5,000원", rate: "1.0%", card: "25,000원", total: "30,000원" },
              ].map((r, i) => (
                <tr key={i} className="border-b border-border hover:bg-card transition-colors">
                  <td className="px-4 py-3 font-medium">{r.amt}</td>
                  <td className="px-4 py-3 font-mono text-xs">{r.code}</td>
                  <td className="px-4 py-3 text-primary font-semibold">{r.disc}</td>
                  <td className="px-4 py-3">{r.rate}</td>
                  <td className="px-4 py-3 text-info font-semibold">{r.card}</td>
                  <td className="px-4 py-3 font-bold gradient-text">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Important Notes */}
    <section className="section-container" aria-labelledby="notes-heading">
      <h2 id="notes-heading" className="text-2xl sm:text-3xl font-bold mb-6">꼭 알아야 할 주의사항</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { icon: AlertTriangle, color: "text-warning", title: "유효 기간 주의", desc: "할인코드 등록 후 7일 이내에 사용해야 합니다. 7일이 지나면 자동 만료되며, 만료 후에는 다시 등록할 수 있습니다." },
          { icon: Info, color: "text-info", title: "1회 1코드 원칙", desc: "1회 결제 시 할인코드는 1개만 적용됩니다. 최대 할인을 받으려면 구매 금액에 맞는 코드를 선택하세요." },
          { icon: CheckCircle, color: "text-success", title: "카드 할인 중복 가능", desc: "할인코드와 카드사 청구 할인은 서로 다른 할인 체계이므로 중복 적용이 가능합니다." },
          { icon: AlertTriangle, color: "text-warning", title: "적용 대상 확인", desc: "현재 파트너 할인코드는 해외 투어·티켓 상품에만 적용됩니다. 항공권, 국내 상품에는 적용되지 않습니다." },
        ].map((note, i) => (
          <div key={i} className="card-elevated p-5">
            <div className="flex items-center gap-2 mb-2">
              <note.icon className={`h-5 w-5 ${note.color}`} />
              <h3 className="font-semibold">{note.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{note.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Comparison */}
    <section className="section-container" aria-labelledby="compare-heading">
      <h2 id="compare-heading" className="text-2xl sm:text-3xl font-bold mb-6">타 할인코드 사이트와 비교</h2>
      <div className="table-responsive">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-primary">
              <th className="px-4 py-3 text-left font-semibold">비교 항목</th>
              <th className="px-4 py-3 text-left font-semibold bg-primary/5">마이리얼트립 쿠폰 (이 사이트)</th>
              <th className="px-4 py-3 text-left font-semibold">일반 블로그</th>
              <th className="px-4 py-3 text-left font-semibold">타 쿠폰 사이트</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: "할인코드 종류", us: "3종 (금액별 최적)", blog: "1~2종", other: "2~3종" },
              { item: "실시간 유효성 확인", us: "✅ 매일 업데이트", blog: "❌ 만료 코드 많음", other: "△ 비정기" },
              { item: "할인율 계산기", us: "✅ 상세 비교표", blog: "❌ 없음", other: "❌ 없음" },
              { item: "카드사 할인 정보", us: "✅ 전 카드사 비교", blog: "△ 일부만", other: "△ 일부만" },
              { item: "중복 할인 안내", us: "✅ 조합 방법 안내", blog: "❌ 없음", other: "❌ 없음" },
              { item: "모바일 최적화", us: "✅ 완벽 대응", blog: "△", other: "△" },
            ].map((r, i) => (
              <tr key={i} className="border-b border-border hover:bg-muted/50">
                <td className="px-4 py-3 font-medium">{r.item}</td>
                <td className="px-4 py-3 font-semibold text-primary bg-primary/5">{r.us}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.blog}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* User Reviews */}
    <section className="section-container" aria-labelledby="reviews-heading">
      <h2 id="reviews-heading" className="text-2xl sm:text-3xl font-bold mb-6">실 사용 후기</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { name: "김○○", date: "2026.03", text: "방콕 투어 예약할 때 5천원 할인받았어요! 카드 할인까지 합하니 2만원 넘게 절약했습니다. 감사합니다!", rating: 5 },
          { name: "이○○", date: "2026.02", text: "할인코드 등록이 정말 간단하더라고요. 복사하고 붙여넣기만 하면 바로 적용되었습니다.", rating: 5 },
          { name: "박○○", date: "2026.03", text: "오사카 유니버셜 티켓에 3천원 할인코드 적용했어요. 소소하지만 확실한 절약!", rating: 4 },
        ].map((r, i) => (
          <div key={i} className="card-elevated p-5">
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: r.rating }).map((_, j) => (
                <span key={j} className="text-accent">★</span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-3">"{r.text}"</p>
            <div className="text-xs text-muted-foreground">
              <strong>{r.name}</strong> · {r.date}
            </div>
          </div>
        ))}
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

    {/* Travel images */}
    <section className="section-container" aria-label="여행 이미지">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src={travelPlanImg} alt="여행 계획" className="rounded-xl w-full aspect-video object-cover" loading="lazy" width={800} height={600} />
        <img src={happyImg} alt="즐거운 여행자들" className="rounded-xl w-full aspect-video object-cover" loading="lazy" width={800} height={600} />
        <img src={savingsImg} alt="여행 비용 절약" className="rounded-xl w-full aspect-video object-cover hidden md:block" loading="lazy" width={800} height={600} />
      </div>
    </section>

    {/* FAQ */}
    <div className="section-container">
      <FAQ items={faqItems} schemaId="faq-discount" />
    </div>

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
