import { useEffect, type CSSProperties } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

type RevealStyle = CSSProperties & {
  '--reveal-delay'?: string
}

const revealDelay = (index: number, step = 90): RevealStyle => ({
  '--reveal-delay': `${index * step}ms`,
})

const phoneNumber = '010-6475-9884'
const phoneHref = 'tel:01064759884'
const kakaoHref = 'https://open.kakao.com/o/sxYY1sui'
const officialDomain = 'www.카드빵.com'

const strengths = [
  {
    number: '01',
    title: '365일 상담 접수',
    text: '급한 일정에도 흐름을 놓치지 않도록 전화와 카카오톡 상담 동선을 한 화면에 정리했습니다.',
  },
  {
    number: '02',
    title: '본인 명의 원칙',
    text: '본인 명의 신용카드와 본인 계좌만 기준으로 안내하며 타인 명의 진행은 받지 않습니다.',
  },
  {
    number: '03',
    title: '카드사 정책 확인',
    text: '무이자 할부와 할부 전환 가능 여부는 카드사별 정책과 개인 조건에 따라 확인합니다.',
  },
  {
    number: '04',
    title: '과장 광고 주의',
    text: '지나치게 낮은 수수료나 비현실적인 지급률을 앞세우는 사칭 사이트를 구분하도록 안내합니다.',
  },
]

const process = [
  {
    step: '1',
    title: '1:1 상담',
    text: '전화 또는 카카오톡으로 필요한 금액, 카드사, 한도 상황을 먼저 확인합니다.',
  },
  {
    step: '2',
    title: '조건 확인',
    text: '본인 명의 여부와 카드사별 할부 정책, 상환 계획을 함께 점검합니다.',
  },
  {
    step: '3',
    title: '진행 안내',
    text: '상담 결과에 따라 가능한 범위와 유의사항을 투명하게 안내합니다.',
  },
]

const trustItems = [
  '불필요한 개인정보 보관 없음',
  '대출 상품 유도 및 강요 없음',
  '타인 명의 카드 및 계좌 진행 불가',
  '카드사별 무이자 정책 확인 지원',
  '사칭 사이트 확인 안내',
  '상환 가능 범위 우선 상담',
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
            카드 한도 상담을
            <span>밝고 빠르게, 카드빵</span>
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
                TEL
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
                TALK
              </span>
              카카오톡 상담
            </a>
          </div>
          <div className="hero-stats" aria-label="카드빵 핵심 안내">
            <div data-reveal="scale" style={revealDelay(5)}>
              <strong>24H</strong>
              <span>상담 접수</span>
            </div>
            <div data-reveal="scale" style={revealDelay(6)}>
              <strong>본인</strong>
              <span>명의 원칙</span>
            </div>
            <div data-reveal="scale" style={revealDelay(7)}>
              <strong>정책</strong>
              <span>카드사 확인</span>
            </div>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="밝은 터널 속 카드 이미지"
          data-reveal="right"
          style={revealDelay(3)}
        >
          <div className="tunnel">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="card-scene">
            <div className="glass-card glass-card-main">
              <div>
                <span>CARDBBANG</span>
                <strong>카드빵</strong>
              </div>
              <small>24H CONSULTING</small>
            </div>
            <img src={logoImg} alt="" className="layered-card" />
            <div className="deposit-chip">
              <span>상담 후</span>
              <strong>빠른 안내</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="band service-band" id="service">
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
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="process">
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
              <span>{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="notice-section" id="notice">
        <div className="notice-copy" data-reveal="left">
          <p className="eyebrow">Safety Notice</p>
          <h2>사칭과 무리한 진행을 먼저 차단합니다</h2>
          <p>
            카드빵은 상담 과정에서 불법 카드깡, 타인 명의 거래, 대리결제, 대출
            강요로 이어지는 진행을 안내하지 않습니다. 공식 주소와 상담 채널을
            반드시 확인해 주세요.
          </p>
        </div>
        <div className="notice-panel" data-reveal="right" style={revealDelay(1)}>
          <strong>공식 주소</strong>
          <span>{officialDomain}</span>
          <p>
            사칭 사이트를 통한 피해는 도움을 받기 어려울 수 있습니다. 상담 전
            주소와 채널명을 꼭 확인하세요.
          </p>
        </div>
      </section>

      <section className="trust-section">
        <div className="section-heading compact" data-reveal="up">
          <p className="eyebrow">Trust Checklist</p>
          <h2>상담 전에 확인하는 여섯 가지</h2>
        </div>
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div
              className="trust-item"
              data-reveal="scale"
              key={item}
              style={revealDelay(index)}
            >
              <span aria-hidden="true"></span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section">
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
              <strong>{name}</strong>
              <span>{phone}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" data-reveal="up">
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
