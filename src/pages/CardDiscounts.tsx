import { Helmet } from "react-helmet-async";
import AffiliateButton from "@/components/AffiliateButton";
import FAQ from "@/components/FAQ";
import cardImg from "@/assets/card-discount.jpg";
import mobileImg from "@/assets/mobile-booking.jpg";
import savingsImg from "@/assets/savings.jpg";
import happyImg from "@/assets/happy-travelers.jpg";
import travelPlanImg from "@/assets/travel-planning.jpg";
import { CreditCard, CheckCircle, AlertTriangle, TrendingUp, Star } from "lucide-react";

const SITE = "https://mrt.dongbaektour.co.kr";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "마이리얼트립 카드사 할인 혜택 총정리 – 최대 15% 할인",
  description: "신한, 삼성, 현대, KB, 하나, 우리카드 등 마이리얼트립 결제 시 카드사별 할인 혜택을 상세 비교합니다.",
  url: `${SITE}/card-discounts`,
  author: { "@type": "Organization", name: "MRT 쿠폰" },
  datePublished: "2026-04-01",
  dateModified: "2026-04-07",
};

const cards = [
  {
    name: "삼성카드",
    discount: "최대 5%",
    type: "청구할인",
    minPurchase: "5만원 이상",
    maxDiscount: "월 1만원",
    period: "상시",
    categories: "항공권, 숙소, 투어",
    tip: "마이리얼트립 앱에서 삼성카드 프로모션 배너를 통해 쿠폰 등록 필요",
    color: "hsl(210, 100%, 50%)",
  },
  {
    name: "신한카드",
    discount: "최대 8%",
    type: "할인쿠폰",
    minPurchase: "30만원 이상",
    maxDiscount: "월 3만원",
    period: "~2026.06.30",
    categories: "해외투어, 액티비티",
    tip: "Tops 쿠폰함에서 마이리얼트립 쿠폰 신청 후 사용",
    color: "hsl(210, 80%, 40%)",
  },
  {
    name: "현대카드",
    discount: "최대 7%",
    type: "청구할인",
    minPurchase: "10만원 이상",
    maxDiscount: "월 2만원",
    period: "~2026.06.30",
    categories: "전 상품",
    tip: "현대카드 앱에서 마이리얼트립 혜택 활성화 필수",
    color: "hsl(0, 0%, 20%)",
  },
  {
    name: "KB국민카드",
    discount: "최대 5%",
    type: "포인트리 사용",
    minPurchase: "없음",
    maxDiscount: "제한 없음",
    period: "상시",
    categories: "전 상품",
    tip: "KB Pay 앱에서 포인트리 사용 설정 후 결제",
    color: "hsl(45, 100%, 40%)",
  },
  {
    name: "하나카드",
    discount: "최대 5%",
    type: "청구할인",
    minPurchase: "5만원 이상",
    maxDiscount: "월 1만원",
    period: "~2026.04.30",
    categories: "항공권, 숙소",
    tip: "하나카드 앱에서 마이리얼트립 쿠폰 다운로드 필요",
    color: "hsl(160, 60%, 40%)",
  },
  {
    name: "우리카드",
    discount: "최대 3%",
    type: "청구할인",
    minPurchase: "5만원 이상",
    maxDiscount: "월 5천원",
    period: "상시",
    categories: "전 상품",
    tip: "무이자 할부 2~6개월 가능 (별도 신청 불필요)",
    color: "hsl(200, 70%, 45%)",
  },
];

const faqItems = [
  { q: "카드사 할인과 할인코드를 동시에 쓸 수 있나요?", a: "네! 할인코드는 마이리얼트립 자체 할인이고, 카드사 할인은 카드사에서 제공하는 청구할인이므로 완전히 별개입니다. 두 가지 모두 적용하면 이중으로 할인받을 수 있습니다." },
  { q: "카드사 할인은 자동으로 적용되나요?", a: "카드사마다 다릅니다. 삼성카드, 현대카드는 앱에서 쿠폰 다운로드 후 자동 적용됩니다. 신한카드는 Tops 쿠폰함에서 별도 신청이 필요합니다. KB국민카드는 포인트리 사용 설정만 하면 됩니다." },
  { q: "어떤 카드가 가장 할인율이 높나요?", a: "신한카드가 최대 8%로 가장 높지만 최소 구매 금액이 30만원 이상입니다. 소액 결제에는 삼성카드(5%, 5만원 이상)가 유리하고, 고액 결제에는 신한카드가 유리합니다." },
  { q: "무이자 할부도 가능한가요?", a: "네, 삼성카드(2~6개월), 우리카드(2~6개월), KB국민카드(2~3개월) 등에서 무이자 할부를 지원합니다. 카드사와 기간에 따라 변동될 수 있으니 결제 시 확인하세요." },
  { q: "해외 결제 수수료가 추가로 붙나요?", a: "마이리얼트립은 국내 원화 결제이므로 해외 결제 수수료가 발생하지 않습니다. 단, 현지에서 직접 카드 결제 시에는 해외 수수료가 붙을 수 있습니다." },
];

const CardDiscounts = () => (
  <>
    <Helmet>
      <title>마이리얼트립 카드사 할인 혜택 총정리 – 최대 15% (2026)</title>
      <meta name="description" content="삼성카드, 신한카드, 현대카드, KB국민, 하나, 우리카드 등 마이리얼트립 카드사별 할인 혜택 비교. 최대 15% 할인, 무이자 할부 정보까지 총정리." />
      <link rel="canonical" href={`${SITE}/card-discounts`} />
      <meta property="og:title" content="마이리얼트립 카드사 할인 혜택 총정리" />
      <meta property="og:url" content={`${SITE}/card-discounts`} />
      <meta property="og:image" content={`${SITE}/og-image.jpg`} />
    </Helmet>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={cardImg} alt="카드 할인" className="h-full w-full object-cover" width={1200} height={600} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(210,60%,20%,0.9), hsla(210,60%,40%,0.6))" }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <span className="badge-primary mb-4 inline-block">카드사 제휴</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "white" }}>
          카드사별 할인 혜택<br />완벽 비교
        </h1>
        <p className="max-w-xl text-base" style={{ color: "hsla(0,0%,100%,0.8)" }}>
          신한·삼성·현대·KB·하나·우리 카드로 결제하면 최대 15%까지 할인! 내 카드에 맞는 최적의 할인을 찾아보세요.
        </p>
      </div>
    </section>

    <div className="section-container space-y-16">
      {/* Card comparison table */}
      <section aria-labelledby="compare-heading">
        <h2 id="compare-heading" className="text-2xl font-bold mb-6">카드사별 할인 비교표</h2>
        <div className="table-responsive">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="px-3 py-3 text-left font-semibold">카드사</th>
                <th className="px-3 py-3 text-left font-semibold">할인율</th>
                <th className="px-3 py-3 text-left font-semibold">할인 유형</th>
                <th className="px-3 py-3 text-left font-semibold">최소 결제</th>
                <th className="px-3 py-3 text-left font-semibold">월 한도</th>
                <th className="px-3 py-3 text-left font-semibold">기간</th>
                <th className="px-3 py-3 text-left font-semibold">바로가기</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((c, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50">
                  <td className="px-3 py-3 font-semibold">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ background: c.color }} />
                      {c.name}
                    </div>
                  </td>
                  <td className="px-3 py-3 font-bold text-primary">{c.discount}</td>
                  <td className="px-3 py-3">{c.type}</td>
                  <td className="px-3 py-3">{c.minPurchase}</td>
                  <td className="px-3 py-3">{c.maxDiscount}</td>
                  <td className="px-3 py-3 text-xs">{c.period}</td>
                  <td className="px-3 py-3">
                    <AffiliateButton text="할인 받기" className="text-xs px-3 py-1.5 whitespace-nowrap" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Card detail cards */}
      <section aria-labelledby="details-heading">
        <h2 id="details-heading" className="text-2xl font-bold mb-6">카드사별 상세 혜택</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <div key={i} className="card-elevated overflow-hidden">
              <div className="h-2" style={{ background: c.color }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" style={{ color: c.color }} />
                    <h3 className="text-lg font-bold">{c.name}</h3>
                  </div>
                  <span className="badge-primary">{c.discount}</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" /><span><strong>유형:</strong> {c.type}</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" /><span><strong>최소 결제:</strong> {c.minPurchase}</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" /><span><strong>월 한도:</strong> {c.maxDiscount}</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" /><span><strong>적용 상품:</strong> {c.categories}</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-warning mt-0.5 shrink-0" /><span><strong>TIP:</strong> {c.tip}</span></li>
                </ul>
                <div className="mt-4">
                  <AffiliateButton text={`${c.name} 할인 적용하기 →`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best combo */}
      <section aria-labelledby="combo-heading" className="bg-muted rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 id="combo-heading" className="text-2xl font-bold">최대 할인 조합 시뮬레이션</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6">할인코드 + 카드사 할인을 조합하면 이렇게 절약할 수 있습니다!</p>
        <div className="table-responsive">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-semibold">시나리오</th>
                <th className="px-4 py-3 text-left font-semibold">상품 금액</th>
                <th className="px-4 py-3 text-left font-semibold">할인코드</th>
                <th className="px-4 py-3 text-left font-semibold">카드 할인</th>
                <th className="px-4 py-3 text-left font-semibold">총 할인</th>
                <th className="px-4 py-3 text-left font-semibold">최종 결제</th>
              </tr>
            </thead>
            <tbody>
              {[
                { scene: "오사카 투어", amt: "80,000원", code: "-1,000원", card: "삼성 5% -4,000원", total: "-5,000원", final: "75,000원" },
                { scene: "방콕 패키지", amt: "250,000원", code: "-5,000원", card: "신한 8% -20,000원", total: "-25,000원", final: "225,000원" },
                { scene: "유럽 투어", amt: "500,000원", code: "-5,000원", card: "현대 7% -35,000원", total: "-40,000원", final: "460,000원" },
              ].map((r, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-4 py-3 font-medium">{r.scene}</td>
                  <td className="px-4 py-3">{r.amt}</td>
                  <td className="px-4 py-3 text-primary font-semibold">{r.code}</td>
                  <td className="px-4 py-3 text-info font-semibold">{r.card}</td>
                  <td className="px-4 py-3 font-bold gradient-text">{r.total}</td>
                  <td className="px-4 py-3 font-bold">{r.final}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <AffiliateButton text="카드 할인 적용하고 예약하기 →" variant="large" />
        </div>
      </section>

      {/* Images */}
      <section aria-label="여행 이미지">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src={mobileImg} alt="모바일 예약" className="rounded-xl w-full aspect-square object-cover" loading="lazy" width={800} height={600} />
          <img src={happyImg} alt="여행자" className="rounded-xl w-full aspect-square object-cover" loading="lazy" width={800} height={600} />
          <img src={savingsImg} alt="절약" className="rounded-xl w-full aspect-square object-cover hidden md:block" loading="lazy" width={800} height={600} />
          <img src={travelPlanImg} alt="여행 계획" className="rounded-xl w-full aspect-square object-cover hidden md:block" loading="lazy" width={800} height={600} />
        </div>
      </section>

      {/* Reviews */}
      <section aria-labelledby="card-reviews">
        <h2 id="card-reviews" className="text-2xl font-bold mb-6">카드 할인 이용 후기</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "정○○", card: "삼성카드", text: "50만원 유럽 투어에 5% 청구할인 받으니 25,000원이나 할인됐어요. 할인코드 5천원까지 합하면 3만원 절약!", rating: 5 },
            { name: "최○○", card: "신한카드", text: "Tops에서 쿠폰 다운받고 8% 할인 적용했습니다. 최대 3만원까지 할인돼서 큰 금액 결제할 때 좋아요.", rating: 5 },
            { name: "한○○", card: "KB국민카드", text: "포인트리로 결제하니 추가 할인이 자동 적용되더라고요. 번거로운 신청 없이 편리했습니다.", rating: 4 },
          ].map((r, i) => (
            <div key={i} className="card-elevated p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{r.card}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">"{r.text}"</p>
              <span className="text-xs font-semibold">{r.name}</span>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqItems} schemaId="faq-card" />

      <section className="rounded-2xl p-8 text-center" style={{ background: "var(--gradient-dark)" }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "white" }}>내 카드로 최대 할인 받기</h2>
        <p className="mb-6 text-sm" style={{ color: "hsla(0,0%,100%,0.7)" }}>할인코드 + 카드사 할인 조합으로 여행 경비를 최대한 줄이세요.</p>
        <AffiliateButton text="지금 예약하기 →" variant="large" />
      </section>
    </div>
  </>
);

export default CardDiscounts;
