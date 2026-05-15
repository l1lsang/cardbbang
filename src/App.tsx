import { useEffect, type CSSProperties, type ReactNode } from 'react'
import logoImg from './assets/logo.png'
import womanImg from './assets/woman-blue.png'
import woman2Img from './assets/woman2.png'
import phoneImg from './assets/phone.png'
import kakaoImg from './assets/kakao.png'
import './App.css'

type RevealStyle = CSSProperties & {
  '--reveal-delay'?: string
}

type IconName =
  | 'calendar'
  | 'card'
  | 'chat'
  | 'checkList'
  | 'kakao'
  | 'link'
  | 'lock'
  | 'message'
  | 'phone'
  | 'search'
  | 'shield'
  | 'spark'
  | 'userCheck'
  | 'userX'
  | 'wallet'

type IconProps = {
  name: IconName
}

const revealDelay = (index: number, step = 90): RevealStyle => ({
  '--reveal-delay': `${index * step}ms`,
})

function Icon({ name }: IconProps) {
  const paths: Record<IconName, ReactNode> = {
    calendar: (
      <>
        <path d="M7 3.5v3M17 3.5v3" />
        <path d="M4.5 8.5h15" />
        <path d="M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z" />
        <path d="m8.5 14.2 2.1 2 4.9-5" />
      </>
    ),
    card: (
      <>
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
        <path d="M4 9h16" />
        <path d="M7.5 15.5h3" />
      </>
    ),
    chat: (
      <>
        <path d="M5 6.5A3.5 3.5 0 0 1 8.5 3h7A3.5 3.5 0 0 1 19 6.5v4A3.5 3.5 0 0 1 15.5 14H11l-4.5 3v-3.2A3.5 3.5 0 0 1 5 10.9v-4.4Z" />
        <path d="M9 8.5h6" />
        <path d="M9 11h3.5" />
      </>
    ),
    checkList: (
      <>
        <path d="M8 6.8 9.2 8 12 5.2" />
        <path d="M8 12l1.2 1.2L12 10.4" />
        <path d="M14.5 7h5" />
        <path d="M14.5 12.2h5" />
        <path d="M5.5 3.5h13A2.5 2.5 0 0 1 21 6v12a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18V6a2.5 2.5 0 0 1 2.5-2.5Z" />
      </>
    ),
    kakao: (
      <>
        <path d="M12 5C7.6 5 4 7.7 4 11.1c0 2.1 1.4 4 3.5 5.1L6.9 19l3-1.7c.7.1 1.4.2 2.1.2 4.4 0 8-2.7 8-6.4S16.4 5 12 5Z" />
        <path d="M8.7 11h6.6" />
        <path d="M10.1 13.4h3.8" />
      </>
    ),
    link: (
      <>
        <path d="M9.5 14.5 14.5 9.5" />
        <path d="M11 6.5 12.4 5A4 4 0 0 1 18 10.7l-1.5 1.4" />
        <path d="M13 17.5 11.6 19A4 4 0 0 1 6 13.3l1.5-1.4" />
      </>
    ),
    lock: (
      <>
        <path d="M7 10V8a5 5 0 0 1 10 0v2" />
        <path d="M6.5 10h11A2.5 2.5 0 0 1 20 12.5v5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-5A2.5 2.5 0 0 1 6.5 10Z" />
        <path d="M12 14v2" />
      </>
    ),
    message: (
      <>
        <path d="M4.5 5.5h15v11h-15z" />
        <path d="m5 6 7 6 7-6" />
      </>
    ),
    phone: (
      <>
        <path d="M8.2 4.5 10 8.4l-2.1 1.7a12.3 12.3 0 0 0 6 6L15.6 14l3.9 1.8-1 3.2c-.3.8-1.1 1.3-2 1.1C9.9 19 5 14.1 3.9 7.5c-.2-.9.3-1.7 1.1-2l3.2-1Z" />
      </>
    ),
    search: (
      <>
        <path d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
        <path d="m15.5 15.5 4 4" />
        <path d="m7.9 10.7 1.7 1.6 3.5-3.8" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.5 19 6v5.5c0 4.4-3 7.5-7 9-4-1.5-7-4.6-7-9V6l7-2.5Z" />
        <path d="m8.8 11.8 2.1 2 4.4-4.8" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3.5 13.4 8l4.1 1.5-4.1 1.5L12 15.5 10.6 11 6.5 9.5 10.6 8 12 3.5Z" />
        <path d="M18.5 14.5 19.2 17l2.3.8-2.3.8-.7 2.4-.8-2.4-2.2-.8 2.2-.8.8-2.5Z" />
      </>
    ),
    userCheck: (
      <>
        <path d="M11 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 20a7 7 0 0 1 11.4-5.4" />
        <path d="m15.5 17.2 2 2 4-4.4" />
      </>
    ),
    userX: (
      <>
        <path d="M10.5 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 20a7 7 0 0 1 10.5-6.1" />
        <path d="m16 15.5 4.5 4.5" />
        <path d="m20.5 15.5-4.5 4.5" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v10.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10Z" />
        <path d="M17 12h4v4h-4a2 2 0 0 1 0-4Z" />
        <path d="M7 5V4h9" />
      </>
    ),
  }

  return (
    <svg aria-hidden="true" className="ui-icon" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  )
}

const phoneNumber = '010-6475-9884'
const phoneHref = 'tel:01064759884'
const kakaoHref = 'https://open.kakao.com/o/sTqvnUui'
const officialDomain = 'www.카드빵.com'

const strengths: Array<{
  icon: IconName
  number: string
  title: string
  text: string
}> = [
  {
    icon: 'calendar',
    number: '01',
    title: '365일 상담 접수',
    text: '급한 일정에도 흐름을 놓치지 않도록 전화와 카카오톡 상담 동선을 한 화면에 정리했습니다.',
  },
  {
    icon: 'userCheck',
    number: '02',
    title: '본인 명의 원칙',
    text: '본인 명의 신용카드와 본인 계좌만 기준으로 안내하며 타인 명의 진행은 받지 않습니다.',
  },
  {
    icon: 'card',
    number: '03',
    title: '카드사 정책 확인',
    text: '무이자 할부와 할부 전환 가능 여부는 카드사별 정책과 개인 조건에 따라 확인합니다.',
  },
  {
    icon: 'shield',
    number: '04',
    title: '과장 광고 주의',
    text: '지나치게 낮은 수수료나 비현실적인 지급률을 앞세우는 사칭 사이트를 구분하도록 안내합니다.',
  },
]

const process: Array<{
  icon: IconName
  step: string
  title: string
  text: string
}> = [
  {
    icon: 'chat',
    step: '1',
    title: '1:1 상담',
    text: '전화 또는 카카오톡으로 필요한 금액, 카드사, 한도 상황을 먼저 확인합니다.',
  },
  {
    icon: 'checkList',
    step: '2',
    title: '조건 확인',
    text: '본인 명의 여부와 카드사별 할부 정책, 상환 계획을 함께 점검합니다.',
  },
  {
    icon: 'spark',
    step: '3',
    title: '진행 안내',
    text: '상담 결과에 따라 가능한 범위와 유의사항을 투명하게 안내합니다.',
  },
]

const trustItems: Array<{
  icon: IconName
  text: string
}> = [
  { icon: 'lock', text: '불필요한 개인정보 보관 없음' },
  { icon: 'shield', text: '대출 상품 유도 및 강요 없음' },
  { icon: 'userX', text: '타인 명의 카드 및 계좌 진행 불가' },
  { icon: 'calendar', text: '카드사별 무이자 정책 확인 지원' },
  { icon: 'search', text: '사칭 사이트 확인 안내' },
  { icon: 'wallet', text: '상환 가능 범위 우선 상담' },
]

const cardCompanies = [
  ['신한카드', '1544-7100'],
  ['우리카드', '1588-9955'],
  ['국민카드', '1899-0800'],
  ['하나카드', '1800-1111'],
  ['현대카드', '1577-6000'],
  ['롯데카드', '1588-8100'],
  ['삼성카드', '1588-8700'],
  ['비씨카드', '1588-4000'],
]

const guideArticles: Array<{
  title: string
  paragraphs: string[]
}> = [
  {
    title: '신용카드 현금화 상담은 무엇을 확인하나요?',
    paragraphs: [
      '갑작스럽게 현금 흐름이 막히는 순간에는 단순히 한도만 남아 있는지를 보는 것보다, 실제로 어떤 방식이 가능한지부터 차분히 확인하는 과정이 중요합니다. 카드빵은 필요한 금액과 사용 중인 카드사, 남은 결제 한도, 본인 명의 계좌 여부를 먼저 살펴 상담의 기준을 세웁니다.',
      '진행 가능 여부는 카드 한도 하나만으로 정해지지 않습니다. 카드사별 정책, 할부 전환 가능 여부, 상담 시점의 조건, 이용자가 감당할 수 있는 상환 범위까지 함께 봐야 이후 부담을 줄일 수 있습니다.',
    ],
  },
  {
    title: '수수료 숫자보다 먼저 봐야 할 기준',
    paragraphs: [
      '상담을 비교할 때는 지급률이나 수수료 문구만 크게 보는 경우가 많지만, 실제로는 최종 입금 예상액, 결제 총액, 상환 시기, 추가 확인이 필요한 조건을 함께 비교해야 합니다. 같은 금액을 문의하더라도 결제 방식과 카드사 조건에 따라 안내 내용은 달라질 수 있습니다.',
      '지나치게 낮은 수수료나 과장된 입금 속도만 강조하는 문구는 한 번 더 확인하는 편이 좋습니다. 공식 주소, 상담 채널, 본인 명의 원칙, 거래 설명이 충분히 제공되는지를 함께 살펴야 상담 품질을 구분하기 쉽습니다.',
    ],
  },
  {
    title: '무이자 할부와 상환 계획을 함께 보세요',
    paragraphs: [
      '무이자 할부는 부담을 나누는 데 도움이 될 수 있지만, 모든 카드와 모든 기간에 동일하게 적용되는 조건은 아닙니다. 카드사별 행사 기간과 개인 이용 조건을 직접 확인해야 하며, 상담 단계에서도 해당 부분을 먼저 점검하는 것이 좋습니다.',
      '이번 달 청구액뿐 아니라 다음 달 고정지출, 이미 사용 중인 카드 대금, 추가 결제 예정 금액까지 같이 보는 것이 안전합니다. 급한 상황일수록 필요한 금액만 문의하고, 감당 가능한 범위 안에서 판단하는 것이 가장 현실적인 기준입니다.',
    ],
  },
]

const guideChecklist = [
  '상담 전에 공식 주소와 채널명을 먼저 확인합니다.',
  '본인 명의 카드와 계좌만 기준으로 문의합니다.',
  '최종 결제액과 예상 입금액을 함께 비교합니다.',
  '카드사 앱 또는 고객센터에서 할부 조건을 재확인합니다.',
]

const faqItems: Array<{
  question: string
  answer: string
}> = [
  {
    question: '상담 전에 어떤 정보를 준비하면 좋나요?',
    answer:
      '사용 중인 카드사, 대략적인 필요 금액, 남아 있는 결제 한도, 본인 명의 계좌 여부를 알고 있으면 더 빠르게 안내를 받을 수 있습니다.',
  },
  {
    question: '상담만 먼저 받아보고 결정해도 되나요?',
    answer:
      '가능합니다. 카드빵은 진행을 전제로 몰아가지 않고, 가능한 범위와 확인이 필요한 조건을 먼저 설명한 뒤 이용자가 직접 판단하도록 안내합니다.',
  },
  {
    question: '무이자 할부는 항상 적용되나요?',
    answer:
      '항상 동일하게 적용되지는 않습니다. 카드사 정책, 이벤트 기간, 카드 종류, 개인 조건에 따라 달라질 수 있으므로 별도 확인이 필요합니다.',
  },
  {
    question: '수수료는 어떻게 확인하나요?',
    answer:
      '문의 금액과 카드 조건을 기준으로 상담 시 설명합니다. 숫자 하나만 보는 것보다 결제 총액, 예상 입금액, 상환 부담을 함께 비교하는 편이 좋습니다.',
  },
  {
    question: '어떤 경우에는 진행이 어려울 수 있나요?',
    answer:
      '타인 명의 카드나 계좌를 사용하는 경우, 대리 진행을 요청하는 경우, 카드사 정책상 확인이 어려운 경우에는 상담이 제한될 수 있습니다.',
  },
  {
    question: '공식 채널 확인이 왜 중요한가요?',
    answer:
      '사칭 사이트나 유사 상호를 피하기 위해서입니다. 상담 전 도메인과 연결 채널을 확인하면 불필요한 혼선을 줄일 수 있습니다.',
  },
]

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.14,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="site-shell">
      <header className="header" aria-label="카드빵 주요 메뉴">
        <a className="brand" href="#top" aria-label="카드빵 홈">
          <span className="brand-mark" aria-hidden="true">
            <img src={logoImg} alt="" />
          </span>
          <span>카드빵</span>
        </a>
        <nav className="nav" aria-label="페이지 이동">
          <a href="#service">서비스</a>
          <a href="#process">이용방법</a>
          <a href="#notice">안전안내</a>
          <a href="#contact">상담</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal="up" style={revealDelay(0)}>
            비상금이 필요할 때, 먼저 안전하게 확인하세요
          </p>
          <p className="speed-line" data-reveal="up" style={revealDelay(1)}>
            24시 카드현금화 연중무휴 5분이내 완료
          </p>
          <h1 data-reveal="up" style={revealDelay(2)}>
            <span className="hero-title-nowrap">개인,법인 신용카드 현금화</span>
            <br />
            <span className="hero-title-accent">정식등록업체 카드빵</span>
          </h1>
          <p className="hero-description" data-reveal="up" style={revealDelay(3)}>
            카드빵은 신용카드 현금화 상담 전 꼭 확인해야 할 본인 명의 원칙,
            카드사 정책, 상환 계획을 한 번에 점검하는 24시간 상담형 사이트입니다.
          </p>
          <div
            className="hero-actions"
            aria-label="상담 바로가기"
            data-reveal="up"
            style={revealDelay(4)}
          >
            <a className="button button-primary" href={phoneHref}>
              <span className="button-icon" aria-hidden="true">
                <Icon name="phone" />
              </span>
              전화문의
            </a>
            <a
              className="button button-secondary"
              href={kakaoHref}
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-icon" aria-hidden="true">
                <Icon name="kakao" />
              </span>
              카카오톡 상담
            </a>
          </div>
          <div
            className="hero-contact-images"
            aria-label="전화 및 카카오톡 상담 바로가기"
            data-reveal="up"
            style={revealDelay(5)}
          >
            <a
              className="contact-image-link"
              href={phoneHref}
              aria-label={`${phoneNumber} 전화 바로 걸기`}
            >
              <img src={phoneImg} alt="24시 고객센터 010-6475-9884 전화 바로 걸기" />
            </a>
            <a
              className="contact-image-link"
              href={kakaoHref}
              target="_blank"
              rel="noreferrer"
              aria-label="카드빵 카카오톡 상담 바로가기"
            >
              <img src={kakaoImg} alt="카드빵 카카오톡 상담 바로가기" />
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="카드를 들고 있는 카드빵 상담 이미지"
          data-reveal="right"
          style={revealDelay(3)}
        >
          <div className="visual-halo" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="portrait-stage">
            <img
              src={womanImg}
              alt="신용카드를 들고 웃고 있는 한국인 여성"
              className="hero-woman"
            />
            <div className="quick-badge quick-badge-primary">
              <span>24시간</span>
              <strong>상담 가능</strong>
            </div>
            <div className="quick-badge quick-badge-secondary">
              <span>본인 명의</span>
              <strong>우선 확인</strong>
            </div>
            <div className="virtual-card-scene" aria-hidden="true">
              <div className="virtual-glass-card">
                <div>
                  <strong>카드빵</strong>
                  <span>CARDBBANG</span>
                </div>
                <small>24H</small>
              </div>
              <img src={logoImg} alt="" className="virtual-layered-card" />
              <div className="virtual-card-chip">
                <span>상담 후</span>
                <strong>빠른 안내</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="quick-contact-section"
        aria-label="전화 및 카카오톡 상담 바로가기"
        data-reveal="up"
      >
        <div className="quick-contact-visual">
          <img src={woman2Img} alt="" className="quick-contact-woman" />
          <div className="quick-contact-stats" aria-label="카드빵 핵심 안내">
            <div data-reveal="scale" style={revealDelay(0)}>
              <strong>24H</strong>
              <span>상담 접수</span>
            </div>
            <div data-reveal="scale" style={revealDelay(1)}>
              <strong>5분</strong>
              <span>내로 입금</span>
            </div>
            <div data-reveal="scale" style={revealDelay(2)}>
              <strong>10%</strong>
              <span>수수료</span>
            </div>
          </div>
        </div>
      </section>

      <section className="band service-band" id="service">
        <span className="section-bg-icon service-bg-icon" aria-hidden="true">
          <Icon name="card" />
        </span>
        <div className="section-heading" data-reveal="up">
          <p className="eyebrow">Cardbbang Service</p>
          <h2>이용 전 확인이 먼저인 카드 상담</h2>
          <p>
            수수료, 무이자 할부, 입금 시간만 보지 않고 실제 상환 가능성과 진행
            조건을 함께 살피는 구조로 구성했습니다.
          </p>
        </div>
        <div className="strength-grid">
          {strengths.map((item, index) => (
            <article
              className="strength-card"
              data-reveal="up"
              key={item.title}
              style={revealDelay(index)}
            >
              <div className="strength-card-head">
                <span>{item.number}</span>
                <span className="mini-icon" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-section" id="guide">
        <span className="section-bg-icon guide-bg-icon" aria-hidden="true">
          <Icon name="search" />
        </span>
        <div className="guide-heading" data-reveal="left">
          <p className="eyebrow">Detailed Guide</p>
          <h2>문의 전에 읽어두면 좋은 카드 상담 안내</h2>
          <p>
            짧은 광고 문구만으로는 판단하기 어려운 내용을, 실제 상담에서 자주
            확인하는 순서대로 정리했습니다. 필요한 만큼 천천히 읽고 문의해 주세요.
          </p>
        </div>
        <div className="guide-layout">
          <div className="guide-articles">
            {guideArticles.map((article, index) => (
              <article
                className="guide-article"
                data-reveal="up"
                key={article.title}
                style={revealDelay(index)}
              >
                <h3>{article.title}</h3>
                {article.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
          <aside className="guide-summary" data-reveal="right" style={revealDelay(2)}>
            <strong>상담 전 체크포인트</strong>
            <div className="guide-summary-list">
              {guideChecklist.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="split-section" id="process">
        <span className="section-bg-icon process-bg-icon" aria-hidden="true">
          <Icon name="checkList" />
        </span>
        <div className="split-copy" data-reveal="left">
          <p className="eyebrow">How It Works</p>
          <h2>간편하지만 확인은 꼼꼼하게</h2>
          <p>
            필요한 내용을 짧게 확인하고, 가능한 범위와 유의사항을 상담원이 차분히
            안내합니다. 진행 여부는 상담 후 직접 판단할 수 있도록 설계했습니다.
          </p>
        </div>
        <div className="process-list">
          {process.map((item, index) => (
            <article
              className="process-item"
              data-reveal="right"
              key={item.step}
              style={revealDelay(index)}
            >
              <span className="process-mark">
                <b>{item.step}</b>
                <Icon name={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="notice-section" id="notice">
        <span className="section-bg-icon notice-bg-icon" aria-hidden="true">
          <Icon name="shield" />
        </span>
        <div className="notice-copy" data-reveal="left">
          <p className="eyebrow">Safety Notice</p>
          <h2>
            <span className="heading-icon" aria-hidden="true">
              <Icon name="shield" />
            </span>
            사칭과 무리한 진행을 먼저 차단합니다
          </h2>
          <p>
            카드빵은 상담 과정에서 불법 카드깡, 타인 명의 거래, 대리결제, 대출
            강요로 이어지는 진행을 안내하지 않습니다. 공식 주소와 상담 채널을
            반드시 확인해 주세요.
          </p>
        </div>
        <div className="notice-panel" data-reveal="right" style={revealDelay(1)}>
          <strong>
            <span className="panel-icon" aria-hidden="true">
              <Icon name="link" />
            </span>
            공식 주소
          </strong>
          <span>{officialDomain}</span>
          <p>
            사칭 사이트를 통한 피해는 도움을 받기 어려울 수 있습니다. 상담 전
            주소와 채널명을 꼭 확인하세요.
          </p>
        </div>
      </section>

      <section className="trust-section">
        <span className="section-bg-icon trust-bg-icon" aria-hidden="true">
          <Icon name="lock" />
        </span>
        <div className="section-heading compact" data-reveal="up">
          <p className="eyebrow">Trust Checklist</p>
          <h2>상담 전에 확인하는 여섯 가지</h2>
        </div>
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div
              className="trust-item"
              data-reveal="scale"
              key={item.text}
              style={revealDelay(index)}
            >
              <span className="trust-icon" aria-hidden="true">
                <Icon name={item.icon} />
              </span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section">
        <span className="section-bg-icon info-bg-icon" aria-hidden="true">
          <Icon name="calendar" />
        </span>
        <div className="info-copy" data-reveal="left">
          <p className="eyebrow">Installment Guide</p>
          <h2>카드사별 무이자 할부 정책</h2>
          <p>
            무이자 할부는 매월 카드사 정책에 따라 달라집니다. 카드사 앱 또는
            고객센터에서 본인의 할부 전환 가능 기간과 수수료를 먼저 확인해
            주세요.
          </p>
        </div>
        <div className="company-grid" aria-label="카드사 고객센터">
          {cardCompanies.map(([name, phone], index) => (
            <div
              className="company-item"
              data-reveal="up"
              key={name}
              style={revealDelay(index, 55)}
            >
              <span className="company-icon" aria-hidden="true">
                <Icon name="phone" />
              </span>
              <strong>{name}</strong>
              <span>{phone}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <span className="section-bg-icon faq-bg-icon" aria-hidden="true">
          <Icon name="message" />
        </span>
        <div className="section-heading compact faq-heading" data-reveal="up">
          <p className="eyebrow">FAQ</p>
          <h2>자주 묻는 내용을 미리 정리했습니다</h2>
        </div>
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <article
              className="faq-item"
              data-reveal="up"
              key={item.question}
              style={revealDelay(index, 65)}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" data-reveal="up">
        <span className="section-bg-icon contact-bg-icon" aria-hidden="true">
          <Icon name="message" />
        </span>
        <div>
          <p className="eyebrow">Contact</p>
          <h2>상담 채널을 연결해 주세요</h2>
          <p>
            전화 상담은 {phoneNumber}로 바로 연결됩니다. 카카오톡 상담은
            오픈채팅으로 바로 이동합니다.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={phoneHref}>
            <span className="button-icon" aria-hidden="true">
              TEL
            </span>
            {phoneNumber}
          </a>
          <a className="button button-secondary" href={kakaoHref} target="_blank" rel="noreferrer">
            <span className="button-icon" aria-hidden="true">
              TALK
            </span>
            카카오톡 상담 바로가기
          </a>
        </div>
      </section>

      <footer className="footer" data-reveal="fade">
        <strong className="footer-brand">
          <img src={logoImg} alt="" />
          카드빵
        </strong>
        <p>
          본 서비스는 반드시 본인 명의로만 상담이 가능하며, 타인 명의 신용카드
          및 계좌 진행은 불가합니다. 과도한 채무는 일상에 부담이 될 수 있으니
          상환 계획을 먼저 확인해 주세요.
        </p>
      </footer>
    </main>
  )
}

export default App
