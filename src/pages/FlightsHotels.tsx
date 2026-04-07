import { Helmet } from "react-helmet-async";
import AffiliateButton from "@/components/AffiliateButton";
import FAQ from "@/components/FAQ";
import flightImg from "@/assets/flight-hotel.jpg";
import hotelImg from "@/assets/hotel-room.jpg";
import tourImg from "@/assets/tour-activity.jpg";
import happyImg from "@/assets/happy-travelers.jpg";
import travelPlanImg from "@/assets/travel-planning.jpg";
import { Plane, Building, MapPin, Calendar, Tag, Star, TrendingDown, CheckCircle, Clock } from "lucide-react";

const SITE = "https://mrt.dongbaektour.co.kr";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "마이리얼트립 항공권·숙소 할인 프로모션 총정리 (2026)",
  description: "마이리얼트립 항공권 특가, 숙소 할인, 패키지 프로모션 등 최신 여행 할인 정보를 총정리합니다.",
  url: `${SITE}/flights-hotels`,
  author: { "@type": "Organization", name: "MRT 쿠폰" },
  datePublished: "2026-04-01",
  dateModified: "2026-04-07",
};

const promotions = [
  {
    icon: Plane,
    title: "항공권 특가 프로모션",
    desc: "동남아, 일본, 유럽 등 인기 노선 특가 항공권",
    details: [
      "동남아 왕복 항공권 최저 199,000원부터",
      "일본 왕복 항공권 특가 149,000원부터",
      "유럽 왕복 항공권 조기예약 할인 최대 30%",
      "제주 항공권 편도 29,900원 특가 (비수기)",
      "LCC 및 FSC 항공사 가격 비교 제공",
    ],
    tip: "항공권은 할인코드 적용이 불가하지만, 카드사 청구할인은 적용됩니다!",
  },
  {
    icon: Building,
    title: "숙소 할인 프로모션",
    desc: "호텔, 리조트, 게스트하우스 등 다양한 숙소 할인",
    details: [
      "첫 숙소 예약 최대 10% 할인 (신규 회원)",
      "연박 할인 3박 이상 예약 시 추가 할인",
      "시즌별 숙소 특가 이벤트 진행",
      "마이리얼트립 단독 숙소 최저가 보장",
      "무료 취소 가능 숙소 필터 제공",
    ],
    tip: "숙소 예약 시 할인코드 + 카드 할인 중복 적용으로 최대 절약 가능!",
  },
  {
    icon: MapPin,
    title: "투어·액티비티 프로모션",
    desc: "현지 투어, 입장권, 액티비티 할인",
    details: [
      "인기 테마파크 입장권 최대 40% 할인",
      "현지 가이드 투어 얼리버드 할인",
      "공항 픽업/샌딩 서비스 특가",
      "와이파이/유심 패키지 할인",
      "식사 쿠폰, 스파 패키지 등 부가 상품 할인",
    ],
    tip: "투어·액티비티 상품에는 파트너 할인코드(최대 5,000원)가 적용됩니다!",
  },
];

const platformComparison = [
  { platform: "마이리얼트립", flight: "★★★★☆", hotel: "★★★★★", tour: "★★★★★", domestic: "★★★★☆", coupon: "할인코드 + 카드", cancel: "유연", app: "★★★★★" },
  { platform: "클룩(Klook)", flight: "★★☆☆☆", hotel: "★★★☆☆", tour: "★★★★★", domestic: "★★☆☆☆", coupon: "프로모코드", cancel: "보통", app: "★★★★☆" },
  { platform: "KKday", flight: "★☆☆☆☆", hotel: "★★☆☆☆", tour: "★★★★☆", domestic: "★★☆☆☆", coupon: "할인코드", cancel: "보통", app: "★★★★☆" },
  { platform: "트립닷컴", flight: "★★★★★", hotel: "★★★★☆", tour: "★★★☆☆", domestic: "★★★☆☆", coupon: "쿠폰팩", cancel: "유연", app: "★★★★☆" },
  { platform: "야놀자", flight: "★★☆☆☆", hotel: "★★★★★", tour: "★★★☆☆", domestic: "★★★★★", coupon: "쿠폰+포인트", cancel: "유연", app: "★★★★★" },
];

const seasonalDeals = [
  { season: "봄 (3~5월)", destinations: "일본 벚꽃, 동남아", discountRate: "10~20%", bestFor: "벚꽃 투어, 오사카, 도쿄", timing: "2개월 전 예약 시 최저가" },
  { season: "여름 (6~8월)", destinations: "유럽, 발리, 세부", discountRate: "15~30%", bestFor: "해변 리조트, 유럽 배낭여행", timing: "3~4개월 전 조기예약 필수" },
  { season: "가을 (9~11월)", destinations: "일본 단풍, 대만", discountRate: "10~25%", bestFor: "단풍 여행, 도쿄, 교토", timing: "1~2개월 전 예약 추천" },
  { season: "겨울 (12~2월)", destinations: "동남아, 호주", discountRate: "20~40%", bestFor: "따뜻한 곳 겨울 피서", timing: "비수기 특가 확인" },
];

const faqItems = [
  { q: "마이리얼트립 항공권이 다른 곳보다 저렴한가요?", a: "마이리얼트립은 자체 항공권 비교 엔진을 통해 최저가를 제공합니다. 특히 카드사 청구할인까지 합하면 실질적인 결제 금액이 가장 낮을 수 있습니다. 다만 반드시 스카이스캐너 등과 비교해보시는 것을 추천합니다." },
  { q: "숙소 무료 취소는 어떤 경우에 가능한가요?", a: "마이리얼트립의 무료 취소 가능 숙소 필터를 사용하면 체크인 1~3일 전까지 무료 취소가 가능한 숙소만 검색할 수 있습니다. 각 숙소마다 무료 취소 기한이 다르므로 예약 시 반드시 확인하세요." },
  { q: "패키지 여행도 할인코드가 적용되나요?", a: "마이리얼트립 패키지(마이팩) 상품은 할인코드 적용 여부가 상품마다 다릅니다. 일반적으로 해외 투어·티켓 카테고리의 상품에 파트너 할인코드가 적용됩니다." },
  { q: "투어 예약 후 현지에서 문제가 생기면 어떻게 하나요?", a: "마이리얼트립은 24시간 고객센터를 운영합니다. 앱 내 채팅 또는 전화로 즉시 도움을 받을 수 있으며, 투어 불만족 시 100% 환불 보장 정책도 있습니다." },
  { q: "항공권 가격이 매일 변동하나요?", a: "네, 항공권 가격은 수요와 공급에 따라 매일 변동합니다. 일반적으로 화요일~수요일이 가장 저렴하고, 출발 2~3개월 전 예약이 가장 유리합니다. 마이리얼트립의 가격 알림 기능을 활용하세요." },
  { q: "마이리얼트립에서 환율은 어떻게 적용되나요?", a: "마이리얼트립은 원화(KRW) 결제이므로 별도의 환율 걱정이 없습니다. 해외 숙소나 투어 가격도 원화로 표시되며, 해외 결제 수수료가 발생하지 않습니다." },
];

const FlightsHotels = () => (
  <>
    <Helmet>
      <title>마이리얼트립 항공권·숙소 할인 프로모션 총정리 (2026)</title>
      <meta name="description" content="마이리얼트립 항공권 특가, 숙소 할인, 투어·액티비티 프로모션 총정리. 시즌별 최저가 타이밍, 타 플랫폼 비교, 할인 조합 방법까지 상세 안내." />
      <link rel="canonical" href={`${SITE}/flights-hotels`} />
      <meta property="og:title" content="마이리얼트립 항공권·숙소 할인 프로모션 총정리" />
      <meta property="og:url" content={`${SITE}/flights-hotels`} />
      <meta property="og:image" content={`${SITE}/og-image.jpg`} />
    </Helmet>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={flightImg} alt="항공권 숙소" className="h-full w-full object-cover" width={1200} height={600} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(30,60%,15%,0.85), hsla(16,85%,55%,0.5))" }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <span className="badge-primary mb-4 inline-block">프로모션</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "white" }}>
          항공권·숙소·투어<br />할인 프로모션 총정리
        </h1>
        <p className="max-w-xl text-base" style={{ color: "hsla(0,0%,100%,0.8)" }}>
          동남아, 일본, 유럽 등 인기 여행지 항공권·숙소·투어 최저가 프로모션과 시즌별 예약 꿀팁까지!
        </p>
      </div>
    </section>

    <div className="section-container space-y-16">
      {/* Promotions */}
      <section aria-labelledby="promos-heading">
        <h2 id="promos-heading" className="text-2xl font-bold mb-6">현재 진행 중인 프로모션</h2>
        <div className="space-y-6">
          {promotions.map((p, i) => (
            <div key={i} className="card-elevated">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <p.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {p.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-2 rounded-lg bg-accent/20 p-3 text-sm">
                  <Tag className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="font-medium">{p.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <AffiliateButton text="프로모션 확인하고 예약하기 →" variant="large" />
        </div>
      </section>

      {/* Image gallery */}
      <section aria-label="여행지 이미지">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src={hotelImg} alt="럭셔리 호텔" className="rounded-xl w-full aspect-video object-cover" loading="lazy" width={800} height={600} />
          <img src={tourImg} alt="문화 투어" className="rounded-xl w-full aspect-video object-cover" loading="lazy" width={800} height={600} />
          <img src={happyImg} alt="여행자" className="rounded-xl w-full aspect-video object-cover hidden md:block" loading="lazy" width={800} height={600} />
        </div>
      </section>

      {/* Seasonal deals */}
      <section aria-labelledby="seasonal-heading">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-6 w-6 text-primary" />
          <h2 id="seasonal-heading" className="text-2xl font-bold">시즌별 최저가 예약 타이밍</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {seasonalDeals.map((s, i) => (
            <div key={i} className="card-elevated p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">{s.season}</h3>
                <span className="badge-primary">{s.discountRate} 할인</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary shrink-0" /><span><strong>추천 여행지:</strong> {s.destinations}</span></li>
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-accent shrink-0" /><span><strong>추천 상품:</strong> {s.bestFor}</span></li>
                <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-info shrink-0" /><span><strong>예약 팁:</strong> {s.timing}</span></li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Platform comparison */}
      <section aria-labelledby="platform-heading" className="bg-muted rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingDown className="h-6 w-6 text-primary" />
          <h2 id="platform-heading" className="text-2xl font-bold">여행 플랫폼 비교 분석</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6">마이리얼트립과 다른 여행 플랫폼의 서비스를 비교했습니다.</p>
        <div className="table-responsive">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="px-3 py-3 text-left font-semibold">플랫폼</th>
                <th className="px-3 py-3 text-left font-semibold">항공권</th>
                <th className="px-3 py-3 text-left font-semibold">숙소</th>
                <th className="px-3 py-3 text-left font-semibold">투어</th>
                <th className="px-3 py-3 text-left font-semibold">국내</th>
                <th className="px-3 py-3 text-left font-semibold">할인</th>
                <th className="px-3 py-3 text-left font-semibold">취소</th>
              </tr>
            </thead>
            <tbody>
              {platformComparison.map((p, i) => (
                <tr key={i} className={`border-b border-border ${i === 0 ? "bg-primary/5 font-semibold" : "hover:bg-card"}`}>
                  <td className="px-3 py-3">{p.platform}</td>
                  <td className="px-3 py-3 text-xs">{p.flight}</td>
                  <td className="px-3 py-3 text-xs">{p.hotel}</td>
                  <td className="px-3 py-3 text-xs">{p.tour}</td>
                  <td className="px-3 py-3 text-xs">{p.domestic}</td>
                  <td className="px-3 py-3 text-xs">{p.coupon}</td>
                  <td className="px-3 py-3 text-xs">{p.cancel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Smart booking tips */}
      <section aria-labelledby="tips-heading">
        <h2 id="tips-heading" className="text-2xl font-bold mb-6">스마트 예약 꿀팁 5가지</h2>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="space-y-4">
            {[
              { title: "화·수요일에 검색하세요", desc: "항공권은 주 초반에 검색하면 최저가를 찾을 확률이 높습니다. 주말 검색 시 가격이 올라가는 경향이 있습니다." },
              { title: "2~3개월 전 예약이 최적", desc: "국제선 항공권은 출발 60~90일 전에 예약하면 가장 저렴합니다. 너무 일찍이나 직전 예약은 비쌉니다." },
              { title: "할인코드는 결제 직전에 등록", desc: "할인코드는 등록 후 7일 이내 사용해야 하므로, 구매할 상품을 먼저 결정한 후 코드를 등록하세요." },
              { title: "카드사 이벤트 먼저 확인", desc: "결제 전 보유 카드의 마이리얼트립 프로모션을 확인하세요. 카드 앱에서 쿠폰 다운로드를 놓치지 마세요." },
              { title: "가격 알림 설정 활용", desc: "마이리얼트립 앱에서 원하는 노선의 가격 알림을 설정하면 최저가 시점을 놓치지 않습니다." },
            ].map((tip, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <img src={travelPlanImg} alt="여행 계획 팁" className="rounded-xl w-full aspect-video object-cover" loading="lazy" width={800} height={600} />
            <img src={hotelImg} alt="호텔 객실" className="rounded-xl w-full aspect-video object-cover" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section aria-labelledby="flight-reviews">
        <h2 id="flight-reviews" className="text-2xl font-bold mb-6">프로모션 이용 후기</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "윤○○", text: "방콕 왕복 항공권 25만원에 잡았어요! 카드 할인까지 받으니 실제로 22만원대. 마이리얼트립 최고입니다.", rating: 5 },
            { name: "서○○", text: "오사카 호텔 3박 예약했는데 연박 할인 + 할인코드까지 적용해서 5만원 이상 절약했어요.", rating: 5 },
            { name: "강○○", text: "유니버셜 스튜디오 입장권 마이리얼트립에서 사니까 현지 가격보다 30% 이상 저렴했습니다.", rating: 4 },
          ].map((r, i) => (
            <div key={i} className="card-elevated p-5">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-3">"{r.text}"</p>
              <span className="text-xs font-semibold">{r.name}</span>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqItems} schemaId="faq-flights" />

      <section className="rounded-2xl p-8 text-center" style={{ background: "var(--gradient-dark)" }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "white" }}>지금 최저가 프로모션을 확인하세요</h2>
        <p className="mb-6 text-sm" style={{ color: "hsla(0,0%,100%,0.7)" }}>항공권, 숙소, 투어 최저가를 한 번에 비교하고 추가 할인까지!</p>
        <AffiliateButton text="프로모션 확인하기 →" variant="large" />
      </section>
    </div>
  </>
);

export default FlightsHotels;
