import React, { useState, useEffect } from 'react'

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const CheckIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#C8A96E] flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? '#C8A96E' : 'none'} stroke="#C8A96E" strokeWidth="1.5" className="flex-shrink-0">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34" /><path d="M17 8c0 0 4-2 4-6-4 0-9 2-11 6s1 10 1 10" />
  </svg>
)

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)

const AwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
)

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Услуги' },
    { href: '#team', label: 'Мастера' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#booking', label: 'Запись' },
  ]

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A0A0A]/96 backdrop-blur-md border-b border-[#C8A96E]/15 shadow-lg shadow-black/40' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-[1.6rem] leading-none">
            <span className="text-[#C8A96E]">Lash</span><span className="text-white">Studio</span>
          </span>
          <span className="text-[10px] text-gray-600 tracking-[0.25em] uppercase mt-0.5">Казань</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-gray-400 hover:text-[#C8A96E] text-sm tracking-wide transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://wa.me/78435551234" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-[#25D366] border border-[#25D366]/30 bg-[#25D366]/5 rounded-full text-sm hover:bg-[#25D366]/15 transition-all">
            <WhatsAppIcon />WhatsApp
          </a>
          <a href="#booking"
            className="btn-gold text-sm px-5 py-2.5">
            Записаться
          </a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1" aria-label="Меню">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0F0F0F] border-t border-[#C8A96E]/10">
          <div className="max-w-6xl mx-auto px-4 py-5 space-y-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block py-3 px-2 text-gray-300 hover:text-[#C8A96E] text-sm border-b border-[#1A1A1A] transition-colors">
                {l.label}
              </a>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <a href="https://wa.me/78435551234" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-[#25D366] border border-[#25D366]/30 bg-[#25D366]/5 rounded-xl text-sm">
                <WhatsAppIcon />WhatsApp
              </a>
              <a href="#booking" onClick={() => setOpen(false)}
                className="flex items-center justify-center py-3 bg-[#C8A96E] text-[#0A0A0A] rounded-xl text-sm font-semibold">
                Записаться
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const fears = [
    { fear: 'Аллергия на клей', solution: 'Тест на чувствительность перед каждой процедурой' },
    { fear: 'Вред для ресниц', solution: 'Щадящая техника — натуральные ресницы не страдают' },
    { fear: 'Неопытный мастер', solution: 'Только сертифицированные специалисты с опытом 4–8 лет' },
    { fear: 'Отвалятся через неделю', solution: 'Гарантия держки 3 недели или бесплатная доработка' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C8A96E]/6 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#C8A96E]/4 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#C8A96E]/3 rounded-full blur-[80px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Decorative line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-[#C8A96E]/30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-[#C8A96E]/8 border border-[#C8A96E]/25 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C8A96E] animate-pulse-slow" />
          <span className="text-[#C8A96E] text-xs tracking-[0.2em] uppercase font-medium">Запись открыта · Казань</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-5">
          Ресницы, которые<br />
          <em className="gold-text not-italic">восхищают</em> — каждый день
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed font-light">
          Понимаем ваши страхи. Поэтому работаем только с проверенными материалами, делаем тест на аллергию и даём гарантию на каждую процедуру.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500 mb-10">
          <span className="flex items-center gap-1.5"><CheckIcon size={14} />6+ лет опыта мастеров</span>
          <span className="text-[#C8A96E]/30">·</span>
          <span className="flex items-center gap-1.5"><CheckIcon size={14} />2 400+ клиенток</span>
          <span className="text-[#C8A96E]/30">·</span>
          <span className="flex items-center gap-1.5"><CheckIcon size={14} />Гарантия 3 недели</span>
        </div>

        {/* Fear busters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-12">
          {fears.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[#141414]/80 backdrop-blur border border-[#C8A96E]/10 rounded-xl px-4 py-3.5 text-left hover:border-[#C8A96E]/25 transition-colors">
              <CheckIcon size={15} />
              <div>
                <p className="text-gray-500 text-xs mb-0.5">{item.fear}</p>
                <p className="text-gray-200 text-sm">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#booking"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] rounded-full font-semibold text-base hover:bg-[#E8C98E] transition-all hover:scale-105 glow-gold">
            Записаться онлайн
          </a>
          <a href="https://wa.me/78435551234" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-[#25D366]/40 text-[#25D366] rounded-full text-base font-medium hover:bg-[#25D366]/10 transition-all">
            <WhatsAppIcon />Написать в WhatsApp
          </a>
          <a href="https://t.me/lashstudio_kzn" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-[#229ED9]/40 text-[#229ED9] rounded-full text-base font-medium hover:bg-[#229ED9]/10 transition-all">
            <TelegramIcon />Telegram
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex flex-col items-center gap-2 text-gray-700">
          <span className="text-[10px] tracking-[0.3em] uppercase">Подробнее</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C8A96E]/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}

// ─── Stats strip ──────────────────────────────────────────────────────────────
function Stats() {
  const items = [
    { n: '2 400+', label: 'Довольных клиенток' },
    { n: '8 лет', label: 'Максимальный опыт мастера' },
    { n: '98%', label: 'Рекомендуют нас' },
    { n: '3 нед.', label: 'Гарантия держки' },
  ]
  return (
    <div className="bg-[#0F0F0F] border-y border-[#C8A96E]/10">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <div className="font-serif text-3xl sm:text-4xl gold-text mb-1">{item.n}</div>
            <div className="text-gray-600 text-xs sm:text-sm">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      name: 'Классическое наращивание',
      tagline: 'Естественная красота без утяжеления',
      desc: 'Одна ультратонкая искусственная ресница на каждую натуральную. Чистый, выразительный взгляд без очевидного эффекта «нарощенных». Идеал для первой процедуры и любителей природного образа.',
      price: 'от 1 900 ₽',
      duration: '2–2,5 часа',
      badge: 'Хит продаж',
      featured: false,
      includes: [
        'Консультация и подбор формы изгиба',
        'Тест на аллергию (включён в цену)',
        'Премиальный корейский материал',
        'Инструктаж по домашнему уходу',
        'Бесплатный контроль через 7 дней',
      ],
    },
    {
      name: 'Объёмное наращивание',
      tagline: '2D–5D · пышный взгляд без тяжести',
      desc: 'Несколько ультратонких ресниц формируют невесомый пучок на каждой натуральной. Голливудский объём, который не ощущается на веках. Самая популярная техника среди наших клиенток.',
      price: 'от 2 800 ₽',
      duration: '2,5–3 часа',
      badge: 'Рекомендуем',
      featured: true,
      includes: [
        'Диагностика густоты и состояния ресниц',
        'Индивидуальный подбор D-curl и длины',
        'Гипоаллергенный клей Lash Secret Pro',
        'Максимальная фиксация без жёсткости',
        'Гарантия держки 3 недели',
      ],
    },
    {
      name: 'Коррекция',
      tagline: 'Восстановление объёма за полцены',
      desc: 'Через 2–3 недели после полного набора снимаем отросшие и добавляем новые ресницы в зоны потери. Взгляд снова как в первый день. Дешевле, быстрее и бережнее для ресниц.',
      price: 'от 1 400 ₽',
      duration: '1–1,5 часа',
      badge: null,
      featured: false,
      includes: [
        'Удаление телогеновых (отросших) ресниц',
        'Восполнение объёма в зонах потери',
        'Выравнивание длины и изгиба',
        'Без доплаты за материалы',
        'Контроль состояния натуральных ресниц',
      ],
    },
  ]

  return (
    <section id="services" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Услуги</p>
          <h2 className="section-title mb-5">
            Выберите свой<br /><em>идеальный эффект</em>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Каждая процедура начинается с бесплатной консультации — подберём технику под форму ваших глаз и образ жизни.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col ${
              s.featured
                ? 'bg-gradient-to-b from-[#C8A96E]/10 to-[#141414] border-[#C8A96E]/35 shadow-xl shadow-[#C8A96E]/5'
                : 'card-dark'
            }`}>
              {s.badge && (
                <span className="absolute -top-3 left-5 px-3.5 py-1 bg-[#C8A96E] text-[#0A0A0A] text-[11px] font-bold uppercase tracking-wide rounded-full">
                  {s.badge}
                </span>
              )}

              <div className="mb-5">
                <p className="text-[#C8A96E] text-xs mb-2">{s.tagline}</p>
                <h3 className="font-serif text-xl text-white mb-3">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>

              <div className="flex items-baseline justify-between pb-5 mb-5 border-b border-[#2A2A2A]">
                <span className="font-serif text-2xl text-[#C8A96E]">{s.price}</span>
                <span className="text-gray-600 text-xs">{s.duration}</span>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {s.includes.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <CheckIcon size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#booking"
                className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                  s.featured
                    ? 'bg-[#C8A96E] text-[#0A0A0A] hover:bg-[#E8C98E]'
                    : 'border border-[#C8A96E]/25 text-[#C8A96E] hover:bg-[#C8A96E]/10 hover:border-[#C8A96E]/50'
                }`}>
                Записаться
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 text-xs mt-8">
          * Итоговая стоимость зависит от состояния и густоты натуральных ресниц — уточняется на консультации.
        </p>
      </div>
    </section>
  )
}

// ─── Why us ───────────────────────────────────────────────────────────────────
function WhyUs() {
  const reasons = [
    { icon: <ShieldIcon />, title: 'Тест на аллергию', desc: 'Проводим перед каждой процедурой. Если реакция — переходим на гипоаллергенный протокол. Бесплатно.' },
    { icon: <LeafIcon />, title: 'Сохраняем ваши ресницы', desc: 'Работаем по анатомической технике изоляции. Натуральные ресницы не склеиваются и не испытывают нагрузки.' },
    { icon: <ClockIcon />, title: 'Держится 3–4 недели', desc: 'Корейский клей и проверенная техника нанесения. Гарантируем результат или делаем доработку бесплатно.' },
    { icon: <AwardIcon />, title: 'Только сертифицированные мастера', desc: 'Регулярные аттестации, обучение у международных тренеров, страховка ответственности мастера.' },
  ]

  return (
    <section className="bg-[#0F0F0F] border-t border-[#1A1A1A] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Почему мы</p>
          <h2 className="section-title">
            Закрываем все<br /><em>ваши страхи</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <div key={i} className="card-dark p-6 hover:border-[#C8A96E]/30">
              <div className="w-12 h-12 rounded-xl bg-[#C8A96E]/8 border border-[#C8A96E]/15 flex items-center justify-center mb-5">
                {r.icon}
              </div>
              <h3 className="font-serif text-white text-lg mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Team ─────────────────────────────────────────────────────────────────────
function Team() {
  const masters = [
    {
      initials: 'АР',
      name: 'Анастасия Романова',
      role: 'Старший мастер-технолог',
      exp: '8 лет',
      speciality: 'Объёмные техники · сложные случаи',
      quote: 'Специализируюсь на клиентках с редкими и повреждёнными ресницами — нахожу решение там, где другие отказывают.',
      certs: ['LVIV LASH SCHOOL — Senior', 'Hypoallergenic Protocol Certified', 'Lash Secret Pro Trainer'],
      tagColor: 'from-[#C8A96E]/20 to-[#C8A96E]/5',
    },
    {
      initials: 'МХ',
      name: 'Мария Хасанова',
      role: 'Мастер-художник',
      exp: '6 лет',
      speciality: 'Классика · натуральный объём',
      quote: 'Призёр чемпионата Республики Татарстан 2023. Считаю, что идеальные ресницы — те, которые не выглядят нарощенными.',
      certs: ['Novalash International Certified', 'Призёр РТ Lash Championship 2023', 'Advanced Volume Technique'],
      tagColor: 'from-[#9B8DFF]/15 to-[#9B8DFF]/5',
    },
    {
      initials: 'ЛШ',
      name: 'Лейла Шарипова',
      role: 'Гипоаллергенный специалист',
      exp: '4 года',
      speciality: 'Чувствительные глаза · аллергики',
      quote: 'Фармацевтическое образование позволяет подобрать состав клея индивидуально. Даже у клиенток с сильными аллергиями всё получается.',
      certs: ['Фармацевтическое образование (КГУ)', 'Allergen-Free Protocol Certified', 'Медицинская косметология'],
      tagColor: 'from-[#4ADE80]/15 to-[#4ADE80]/5',
    },
  ]

  return (
    <section id="team" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Мастера</p>
          <h2 className="section-title mb-5">
            Знакомьтесь<br /><em>с командой</em>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Только сертифицированные специалисты с опытом от 4 лет. Регулярное обучение, аттестация, ответственность за результат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {masters.map((m, i) => (
            <div key={i} className="card-dark p-6 flex flex-col items-center text-center hover:border-[#C8A96E]/30">
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${m.tagColor} border border-[#C8A96E]/20 flex items-center justify-center mb-5`}>
                <span className="font-serif text-2xl text-[#C8A96E]">{m.initials}</span>
              </div>

              <h3 className="font-serif text-xl text-white mb-1">{m.name}</h3>
              <p className="text-[#C8A96E] text-xs mb-1">{m.role}</p>
              <p className="text-gray-600 text-xs mb-4">Опыт {m.exp} · {m.speciality}</p>

              <blockquote className="text-gray-400 text-sm italic leading-relaxed mb-5 border-l-2 border-[#C8A96E]/20 pl-3 text-left">
                «{m.quote}»
              </blockquote>

              <ul className="space-y-1.5 w-full mb-6">
                {m.certs.map((c, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-[#C8A96E] flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>

              <a href="#booking"
                className="w-full py-2.5 border border-[#C8A96E]/20 text-[#C8A96E] text-sm rounded-xl hover:bg-[#C8A96E]/10 hover:border-[#C8A96E]/40 transition-all">
                Записаться к {m.name.split(' ')[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Process ──────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    { n: '01', title: 'Запись онлайн', desc: 'Выбираете мастера, услугу и удобный слот в онлайн-форме ниже. Подтверждение придёт в WhatsApp за 15 минут.' },
    { n: '02', title: 'Консультация', desc: 'Мастер диагностирует ресницы, обсуждает желаемый эффект. Тест на чувствительность — бесплатно.' },
    { n: '03', title: 'Комфортная процедура', desc: 'Мягкий диван, тёплый плед, спокойная музыка. 2–3 часа в удовольствие — многие клиентки засыпают.' },
    { n: '04', title: 'Результат + уход', desc: 'Осматриваем вместе, даём памятку по уходу. Через 7 дней — бесплатный контрольный визит.' },
  ]

  return (
    <section className="bg-[#0F0F0F] border-y border-[#1A1A1A] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Как это работает</p>
          <h2 className="section-title">
            4 шага к<br /><em>идеальным ресницам</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="relative card-dark p-6">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-5 z-10">
                  <div className="w-full h-px bg-gradient-to-r from-[#C8A96E]/30 to-transparent" />
                </div>
              )}
              <div className="font-serif text-5xl text-[#C8A96E]/15 mb-4 leading-none">{s.n}</div>
              <h3 className="font-serif text-lg text-white mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    {
      name: 'Дарья К.',
      date: 'Апрель 2025',
      service: 'Классическое наращивание',
      rating: 5,
      text: 'Очень боялась аллергии — у меня чувствительные глаза и реакция почти на всё. Лейла сделала тест, подобрала специальный клей. Три с половиной недели прошло — ни малейшего покраснения, ресницы держатся как влитые. Это просто чудо.',
    },
    {
      name: 'Алина М.',
      date: 'Март 2025',
      service: 'Объёмное наращивание',
      rating: 5,
      text: 'До этого полгода ходила к мастеру на дом за 700 рублей. Потеряла больше половины своих ресниц. В LashStudio Мария провела диагностику, объяснила всё про правильную технику. Теперь ресницы даже гуще стали. Больше к дешёвым не пойду.',
    },
    {
      name: 'Регина Г.',
      date: 'Февраль 2025',
      service: 'Объёмное наращивание',
      rating: 5,
      text: 'Впервые за два года ухожу на работу без туши и не комплексую. Анастасия долго подбирала форму — сделала разрез глаза визуально больше. Коллеги решили, что я сделала макияж, а не нарастила. Вот это и есть результат мастера.',
    },
  ]

  return (
    <section id="reviews" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Отзывы</p>
          <h2 className="section-title mb-4">
            Что говорят<br /><em>наши клиентки</em>
          </h2>
          <p className="text-gray-600 text-sm">Реальные отзывы с 2ГИС и ВКонтакте</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="card-dark p-6 flex flex-col hover:border-[#C8A96E]/25">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => <StarIcon key={j} filled={j < r.rating} />)}
              </div>

              {/* Text */}
              <blockquote className="text-gray-300 text-sm leading-relaxed italic flex-1 mb-5">
                «{r.text}»
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#2A2A2A]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C8A96E]/20 to-[#C8A96E]/5 border border-[#C8A96E]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A96E] text-sm font-semibold">{r.name[0]}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{r.name}</p>
                  <p className="text-gray-600 text-xs">{r.service} · {r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#booking"
            className="inline-flex items-center gap-2 text-[#C8A96E] text-sm hover:underline underline-offset-4">
            Станьте следующей довольной клиенткой →
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Booking ──────────────────────────────────────────────────────────────────
function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '', comment: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const serviceOptions = [
    'Классическое наращивание — от 1 900 ₽',
    'Объёмное наращивание 2D–5D — от 2 800 ₽',
    'Коррекция — от 1 400 ₽',
    'Бесплатная консультация',
  ]

  const timeSlots = ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00']

  const inputClass = 'input-dark'

  return (
    <section id="booking" className="bg-[#0F0F0F] border-t border-[#1A1A1A] py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Запись</p>
          <h2 className="section-title mb-4">
            Записаться онлайн
          </h2>
          <p className="text-gray-500 text-sm">Заполните форму — свяжемся в течение 15 минут для подтверждения.</p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/25 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-white mb-3">Заявка принята!</h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">Мастер свяжется с вами в WhatsApp или по телефону в течение 15 минут для подтверждения записи.</p>
            <button onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', service:'', date:'', time:'', comment:'' }) }}
              className="mt-6 text-[#C8A96E] text-sm hover:underline underline-offset-4">
              Отправить ещё одну заявку
            </button>
          </div>
        ) : (
          <div className="card-dark p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider mb-2">Ваше имя *</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder="Например, Анна" className={inputClass} />
              </div>

              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider mb-2">Телефон *</label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                  placeholder="+7 (___) ___-__-__" className={inputClass} />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider mb-2">Услуга *</label>
                <select name="service" required value={form.service} onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="" disabled>Выберите услугу...</option>
                  {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider mb-2">Удобная дата *</label>
                <input type="date" name="date" required value={form.date} onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={inputClass} />
              </div>

              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider mb-2">Время *</label>
                <select name="time" required value={form.time} onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="" disabled>Выберите время...</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider mb-2">Пожелания / вопросы</label>
                <textarea name="comment" rows={3} value={form.comment} onChange={handleChange}
                  placeholder="Аллергия, пожелания по объёму, вопросы мастеру..."
                  className={`${inputClass} resize-none`} />
              </div>

              <div className="sm:col-span-2">
                <button type="submit"
                  className="w-full py-4 bg-[#C8A96E] text-[#0A0A0A] rounded-xl font-semibold text-base hover:bg-[#E8C98E] transition-all hover:scale-[1.02] glow-gold">
                  Отправить заявку на запись
                </button>
                <p className="text-center text-gray-700 text-xs mt-3">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
            </form>

            {/* Alternative contacts */}
            <div className="mt-8 pt-8 border-t border-[#2A2A2A]">
              <p className="text-center text-gray-600 text-sm mb-5">Или свяжитесь напрямую:</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://wa.me/78435551234" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366]/8 border border-[#25D366]/30 text-[#25D366] rounded-xl text-sm hover:bg-[#25D366]/15 transition-all">
                  <WhatsAppIcon />WhatsApp
                </a>
                <a href="https://t.me/lashstudio_kzn" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-[#229ED9]/8 border border-[#229ED9]/30 text-[#229ED9] rounded-xl text-sm hover:bg-[#229ED9]/15 transition-all">
                  <TelegramIcon />Telegram
                </a>
                <a href="tel:+78435551234"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-[#C8A96E]/8 border border-[#C8A96E]/30 text-[#C8A96E] rounded-xl text-sm hover:bg-[#C8A96E]/15 transition-all">
                  <PhoneIcon />Позвонить
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#team', label: 'Мастера' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#booking', label: 'Запись' },
  ]

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl mb-3">
              <span className="text-[#C8A96E]">Lash</span><span className="text-white">Studio</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Профессиональное наращивание ресниц в Казани. Безопасно, надолго, с заботой о ваших глазах.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/78435551234" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/20 transition-all">
                <WhatsAppIcon />
              </a>
              <a href="https://t.me/lashstudio_kzn" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#229ED9]/10 border border-[#229ED9]/20 flex items-center justify-center text-[#229ED9] hover:bg-[#229ED9]/20 transition-all">
                <TelegramIcon />
              </a>
              <a href="tel:+78435551234"
                className="w-9 h-9 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/20 flex items-center justify-center text-[#C8A96E] hover:bg-[#C8A96E]/20 transition-all">
                <PhoneIcon />
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>📍 Казань, ул. Пушкина, 12, офис 3</li>
              <li>📞 +7 (843) 555-12-34</li>
              <li>✉️ info@lashstudio-kazan.ru</li>
              <li>⏰ Пн–Вс: 9:00 – 21:00</li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-500 hover:text-[#C8A96E] text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-700">
          <p>© 2025 LashStudio Казань. Все права защищены.</p>
          <p>ИП Романова А.С. · ОГРНИП 325169000012345</p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Process />
      <Team />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  )
}
