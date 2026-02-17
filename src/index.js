import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Deck,
  Slide
} from 'spectacle';
import './styles.css';

// =============================================================
// CONFIGURATION — Update these values with your actual info
// =============================================================

import companyLogo from './images/Come To Study Logo-2.png';

// ADDRESS: Replace with the real address
const COMPANY_ADDRESS = 'Notre adresse';

// GOOGLE MAPS LINK: Replace with your Google Maps link
const GOOGLE_MAPS_LINK = 'https://maps.google.com/?q=YOUR+ADDRESS+HERE';

// =============================================================
// PROFESSORS — Update with real info and images
// =============================================================
// To add professor photos:
//   import prof1Img from './images/professor1.jpg';
// Then set photo: prof1Img below

const professors = [
  {
    id: 1,
    photo: null, // Replace with imported image
    name: 'Nom du Professeur 1',
    career: 'Spécialité / Matière',
    details:
      'Ajoutez ici une description détaillée du professeur : son parcours académique, ses années d\'expérience, ses spécialisations, ses réalisations et tout ce qui le distingue.',
    accentColor: '#1565c0'
  },
  {
    id: 2,
    photo: null,
    name: 'Nom du Professeur 2',
    career: 'Spécialité / Matière',
    details:
      'Ajoutez ici une description détaillée du professeur : son parcours académique, ses années d\'expérience, ses spécialisations, ses réalisations et tout ce qui le distingue.',
    accentColor: '#1e88e5'
  },
  {
    id: 3,
    photo: null,
    name: 'Nom du Professeur 3',
    career: 'Spécialité / Matière',
    details:
      'Ajoutez ici une description détaillée du professeur : son parcours académique, ses années d\'expérience, ses spécialisations, ses réalisations et tout ce qui le distingue.',
    accentColor: '#42a5f5'
  }
];

// =============================================================

const theme = {
  fonts: {
    header: '"Poppins", Helvetica, Arial, sans-serif',
    text: '"Poppins", Helvetica, Arial, sans-serif'
  },
  colors: {
    primary: '#1565c0',
    secondary: '#42a5f5',
    tertiary: '#ffffff',
    quaternary: '#f5f9ff',
    quinary: '#e8f0fe'
  }
};

// Custom template — clean, no buttons
const CustomTemplate = ({ slideNumber, numberOfSlides }) => (
  <div className="slide-number">
    <span className="slide-number__current">{String(slideNumber).padStart(2, '0')}</span>
    <span className="slide-number__sep" />
    <span className="slide-number__total">{String(numberOfSlides).padStart(2, '0')}</span>
  </div>
);

// ─── SLIDE 1: Title / Welcome ───────────────────────────────
const TitleSlideContent = () => (
    <div className="title-slide-wrapper">
      {/* ── LEFT BLUE PANEL ── */}
      <div className="title-left-panel">
        {/* Decorative circles */}
        <div className="left-deco-circle left-deco-1" />
        <div className="left-deco-circle left-deco-2" />
        <div className="left-deco-circle left-deco-3" />

        {/* Logo */}
        <div className={`logo-container${companyLogo ? ' has-logo' : ''}`}>
          {companyLogo ? (
            <img src={companyLogo} alt="Logo" />
          ) : (
            <span>Ajoutez votre<br/>logo ici</span>
          )}
        </div>

        <p className="left-tagline">Guide Post-Bac au Maroc 2026</p>
        <p className="left-tagline left-tagline-sub">Orientation – Filières – Concours – Avenir</p>
      </div>

      {/* ── RIGHT WHITE PANEL ── */}
      <div className="title-right-panel">
        {/* Dot grid decoration */}
        <div className="right-deco right-dots">
          {Array.from({ length: 15 }).map((_, i) => <span key={i} />)}
        </div>

        {/* Floating shapes */}
        <div className="floating-shape shape-circle-1" />
        <div className="floating-shape shape-circle-2" />
        <div className="floating-shape shape-plus">+</div>

        {/* Corner shapes */}
        <div className="right-deco right-corner-shape" />
        <div className="right-deco right-corner-shape-2" />

        {/* Main title */}
        <div className="title-main">
          <h1>
            Come To Study
            <span>Tawjeeh</span>
          </h1>
        </div>

        <div className="title-divider" />

        <p className="title-subtitle">Orientation &amp; Accompagnement Scolaire</p>

        {/* Address card */}
        <div className="address-card">
          <div className="address-icon-row">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {COMPANY_ADDRESS}
          </div>
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="maps-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Voir sur Google Maps
          </a>
        </div>
      </div>
    </div>
);

// ─── SLIDE 2: Professors ────────────────────────────────────

// Small card shown in the grid
const ProfessorCard = ({ prof, onClick, index }) => (
  <div
    className="prof-card"
    style={{
      '--accent': prof.accentColor,
      '--delay': `${0.2 + index * 0.15}s`
    }}
    onClick={onClick}
  >
    {/* Accent top bar */}
    <div className="prof-card__accent-bar" />

    {/* Photo */}
    <div className="prof-card__photo-wrapper">
      <div className="prof-card__photo-ring" />
      {prof.photo ? (
        <img src={prof.photo} alt={prof.name} className="prof-card__photo" />
      ) : (
        <div className="prof-card__photo-placeholder">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      )}
    </div>

    {/* Name */}
    <h3 className="prof-card__name">{prof.name}</h3>

    {/* Career badge */}
    <div className="prof-card__career">{prof.career}</div>

    {/* Details always visible */}
    <p className="prof-card__details-text">{prof.details}</p>

    {/* Decorative corner shapes */}
    <div className="prof-card__deco prof-card__deco-1" />
    <div className="prof-card__deco prof-card__deco-2" />
  </div>
);

// Expanded popup overlay
const ProfessorPopup = ({ prof, onClose }) => (
  <div className="prof-overlay" onClick={onClose}>
    <div
      className="prof-popup"
      style={{ '--accent': prof.accentColor }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button className="prof-popup__close" onClick={onClose}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Accent side bar */}
      <div className="prof-popup__side-accent" />

      <div className="prof-popup__content">
        {/* Photo — bigger */}
        <div className="prof-popup__photo-area">
          <div className="prof-popup__photo-ring" />
          {prof.photo ? (
            <img src={prof.photo} alt={prof.name} className="prof-popup__photo" />
          ) : (
            <div className="prof-popup__photo-placeholder">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="prof-popup__info">
          <h2 className="prof-popup__name">{prof.name}</h2>
          <div className="prof-popup__career">{prof.career}</div>
          <div className="prof-popup__divider" />
          <p className="prof-popup__details">{prof.details}</p>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="prof-popup__deco prof-popup__deco-1" />
      <div className="prof-popup__deco prof-popup__deco-2" />
      <div className="prof-popup__deco prof-popup__deco-3" />
    </div>
  </div>
);

const ProfessorsSlideContent = () => {
  const [selectedProf, setSelectedProf] = useState(null);

  return (
      <div className="prof-slide">
        {/* Background decorations */}
        <div className="prof-bg-shape prof-bg-shape-1" />
        <div className="prof-bg-shape prof-bg-shape-2" />
        <div className="prof-bg-shape prof-bg-shape-3" />

        {/* Title */}
        <div className="prof-slide__header">
          <div className="prof-slide__title-accent" />
          <h2 className="prof-slide__title">Nos Professeurs</h2>
          <p className="prof-slide__subtitle-ar">الأساتذة ديالنا</p>
        </div>

        {/* Cards grid */}
        <div className="prof-cards-container">
          {professors.map((prof, index) => (
            <ProfessorCard
              key={prof.id}
              prof={prof}
              index={index}
              onClick={() => setSelectedProf(prof)}
            />
          ))}
        </div>

        {/* Popup overlay */}
        {selectedProf && (
          <ProfessorPopup
            prof={selectedProf}
            onClose={() => setSelectedProf(null)}
          />
        )}
      </div>
  );
};

// ─── SLIDE 3: Problématique – La Confusion Post-Bac ────────

const confusionPoints = [
  {
    id: 1, emoji: '🧭', icon: '❌',
    titleFr: 'Orientation floue ou inexistante',
    titleAr: 'ما عندهمش توجيه واضح',
    descFr: 'Sans accompagnement ni information claire, la majorité des étudiants choisissent leur filière au hasard ou suivent leurs amis — sans savoir ce qui les attend réellement.',
    descAr: 'بلا ما يكون عندهم شي حد يوجههم، بزاف ديال الطلبة كيختارو شي فيليار عشوائياً ولا كيمشيو مع صحابهم — بلا ما يعرفو شنو كيتسناهم.',
    color: '#1565c0'
  },
  {
    id: 2, emoji: '📚', icon: '⏳',
    titleFr: 'Submergés par le Bac National',
    titleAr: 'مغرقين فالباك الوطني',
    descFr: 'L\'examen national accapare tout le temps et l\'énergie. Les élèves passent des mois à réviser sans jamais se demander : "et après le Bac, je fais quoi ?"',
    descAr: 'الامتحان الوطني كياخد كل الوقت والطاقة. الطلبة كيبقاو شهور كيراجعو بلا ما يسولو راسهم: "من بعد الباك، شنو غادي ندير؟"',
    color: '#1e88e5'
  },
  {
    id: 3, emoji: '🤷', icon: '❓',
    titleFr: 'Aucune idée de ce qui existe',
    titleAr: 'ما عارفش شنو كاين أصلاً',
    descFr: 'ENSA, ENCG, CPGE, FST, EST ? La plupart des bacheliers ne connaissent même pas les noms des écoles, encore moins les conditions d\'accès ou les débouchés.',
    descAr: 'ENSA, ENCG, CPGE, FST, EST? أغلبية ديال الباشلوريين ما كيعرفوش حتى أسماء المدارس، بالك الشروط ديال الدخول ولا الآفاق المهنية.',
    color: '#42a5f5'
  },
  {
    id: 4, emoji: '😴', icon: '🎉',
    titleFr: 'L\'effet post-Bac : relâchement total',
    titleAr: 'من بعد الباك: الراحة الزايدة',
    descFr: 'Le Bac est passé, la pression retombe. Et c\'est exactement là que beaucoup ratent les deadlines : concours, inscriptions, plateformes — tout leur échappe.',
    descAr: 'الباك سالا، الضغط نقص. وهاد الوقت بالضبط كيفوت بزاف ديال الطلبة الديدلاينات: كونكورات، تسجيلات، منصات — كلشي كيفلت ليهم.',
    color: '#64b5f6'
  },
  {
    id: 5, emoji: '🔍', icon: '📵',
    titleFr: 'Informations rares et éparpillées',
    titleAr: 'المعلومات قليلة ومشتتة',
    descFr: 'Les informations sont dispersées entre sites officiels, forums, et rumeurs. Aucun guichet unique. Les élèves se perdent entre des sources contradictoires et des données périmées.',
    descAr: 'المعلومات مفرقة بين المواقع الرسمية والفورومات والإشاعات. ما كاينش موقع واحد يجمع كلشي. الطلبة كيتوهو بين مصادر متناقضة ومعلومات قديمة.',
    color: '#0d47a1'
  },
  {
    id: 6, emoji: '🧠', icon: '💨',
    titleFr: 'On oublie, tout simplement',
    titleAr: 'كنسا وسلام',
    descFr: 'Entre le stress, les vacances et le manque de suivi, beaucoup d\'élèves oublient des deadlines cruciales. Pas de rappel, pas de suivi → pas d\'inscription.',
    descAr: 'بين الستريس والعطلة وقلة المتابعة، بزاف ديال الطلبة كينساو ديدلاينات مهمة بزاف. بلا تذكير، بلا متابعة = بلا تسجيل.',
    color: '#2196f3'
  }
];

const ConfusionCard = ({ point, index, onClick }) => (
  <div
    className="conf-card"
    onClick={onClick}
    style={{
      '--conf-color': point.color,
      '--conf-delay': `${0.1 + index * 0.08}s`
    }}
  >
    <div className="conf-card__top">
      <span className="conf-card__emoji">{point.emoji}</span>
      <span className="conf-card__num">{String(index + 1).padStart(2, '0')}</span>
    </div>
    <h4 className="conf-card__title">{point.titleFr}</h4>
    <p className="conf-card__desc">{point.descFr}</p>
  </div>
);

const ConfusionPopup = ({ point, index, onClose }) => (
  <div className="conf-overlay" onClick={onClose}>
    <div className="conf-popup" onClick={e => e.stopPropagation()} style={{ '--conf-color': point.color }}>
      <button className="conf-popup__close" onClick={onClose}>✕</button>
      <div className="conf-popup__accent" />
      <div className="conf-popup__content">
        {/* Header */}
        <div className="conf-popup__header">
          <div className="conf-popup__header-emoji">{point.emoji}</div>
          <div>
            <div className="conf-popup__num">{String(index + 1).padStart(2, '0')}</div>
            <h3 className="conf-popup__title">{point.titleFr}</h3>
          </div>
        </div>
        <div className="conf-popup__sep" />

        {/* French */}
        <div className="conf-popup__section">
          <div className="conf-popup__lang-label">Français</div>
          <p className="conf-popup__text">{point.descFr}</p>
        </div>

        {/* Darija */}
        <div className="conf-popup__section conf-popup__section--darija">
          <div className="conf-popup__lang-label conf-popup__lang-label--darija">بالدارجة</div>
          <h4 className="conf-popup__title-ar">{point.titleAr}</h4>
          <p className="conf-popup__text-ar">{point.descAr}</p>
        </div>
      </div>
    </div>
  </div>
);

const ConfusionSlideContent = () => {
  const [selected, setSelected] = useState(null);

  return (
      <div className="conf-slide">
        <div className="conf-bg conf-bg-1" />
        <div className="conf-bg conf-bg-2" />
        <div className="conf-bg conf-bg-3" />

        {/* Header */}
        <div className="conf-header">
          <div className="conf-header__badge">⚠️ PROBLÉMATIQUE</div>
          <h2 className="conf-header__title">
            Perdus dans le Système : <span>Le Vrai Défi</span><br />
            des Bacheliers Marocains
          </h2>
          <p className="conf-header__subtitle-ar">تايهين ف النظام: التحدي الحقيقي ديال الباشلوريين المغاربة</p>
        </div>

        {/* Stat bar */}
        <div className="conf-stat-bar">
          <div className="conf-stat">
            <span className="conf-stat__num">72%</span>
            <span className="conf-stat__label">des bacheliers n'ont aucun plan post-bac clair</span>
          </div>
          <div className="conf-stat__divider" />
          <div className="conf-stat">
            <span className="conf-stat__num">45%</span>
            <span className="conf-stat__label">changent de filière dès la 1ère année</span>
          </div>
          <div className="conf-stat__divider" />
          <div className="conf-stat">
            <span className="conf-stat__num">60%</span>
            <span className="conf-stat__label">ratent au moins un deadline de concours</span>
          </div>
        </div>

        {/* Cards */}
        <div className="conf-cards-grid">
          {confusionPoints.map((p, i) => (
            <ConfusionCard key={p.id} point={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>

        {/* Popup */}
        {selected && (
          <ConfusionPopup
            point={selected}
            index={confusionPoints.indexOf(selected)}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
  );
};

// ─── SLIDE 9: La Solution — Come To Study Tawjeeh ───────────

const ctsServices = [
  { id: 1, emoji: '🧭', titleFr: 'Orientation Personnalisée', titleAr: 'توجيه شخصي', descFr: 'Accompagnement sur-mesure : profil, notes, passions et ambitions pour trouver LE parcours idéal.', color: '#1565c0' },
  { id: 2, emoji: '🏫', titleFr: 'Décryptage des Écoles', titleAr: 'شرح المدارس والتخصصات', descFr: 'Tout sur chaque école et filière : ENSA, ENCG, CPGE, médecine, EST, FST… zéro zone d\'ombre.', color: '#1e88e5' },
  { id: 3, emoji: '📝', titleFr: 'Inscription Plateformes', titleAr: 'التسجيل ف المنصات', descFr: 'On gère vos inscriptions : Tawjihi.ma, concours, dossiers — zéro deadline ratée.', color: '#42a5f5' },
  { id: 4, emoji: '🏆', titleFr: 'Prépa Concours', titleAr: 'التحضير للمباريات', descFr: 'ENSA, ENSAM, ENCG, ISCAE, Médecine : cours, simulations et stratégie de réussite.', color: '#0d47a1' },
  { id: 5, emoji: '🧠', titleFr: 'Soutien Psychologique', titleAr: 'مواكبة نفسية', descFr: 'Stress, confiance, motivation — un suivi pour aborder examens et choix sereinement.', color: '#64b5f6' },
  { id: 6, emoji: '📊', titleFr: 'Suivi Académique', titleAr: 'متابعة أكاديمية مستمرة', descFr: 'Bilans réguliers, ajustements et une équipe toujours disponible.', color: '#2196f3' }
];

const SolutionSlideContent = () => (
    <div className="cts-slide">
      {/* Animated background elements */}
      <div className="cts-orb cts-orb-1" />
      <div className="cts-orb cts-orb-2" />
      <div className="cts-orb cts-orb-3" />
      <div className="cts-grid-overlay" />

      {/* Left hero panel */}
      <div className="cts-hero">
        <div className="cts-hero__glow" />
        <img src={companyLogo} alt="Come To Study" className="cts-hero__logo" />
        <div className="cts-hero__badge">✨ LA SOLUTION</div>
        <h2 className="cts-hero__title">Come To Study</h2>
        <h2 className="cts-hero__title cts-hero__title--accent">Tawjeeh</h2>
        <p className="cts-hero__tagline">Le centre d'orientation N°1<br />à Khouribga</p>
        <p className="cts-hero__tagline-ar">المركز رقم 1 ديال التوجيه ف خريبكة</p>
        <div className="cts-hero__tags">
          {['ENSA', 'ENSAM', 'ENCG', 'ISCAE', 'Médecine', 'ENA', 'ISPITS'].map(tag => (
            <span key={tag} className="cts-hero__tag">{tag}</span>
          ))}
        </div>
        <div className="cts-hero__contact">
          <span>📍 Khouribga</span>
          <span>📞 Contact</span>
          <span>🌐 Réseaux</span>
        </div>
      </div>

      {/* Right services panel */}
      <div className="cts-services">
        <h3 className="cts-services__heading">Nos Services</h3>
        <p className="cts-services__heading-ar">الخدمات ديالنا</p>
        <div className="cts-services__list">
          {ctsServices.map((s, i) => (
            <div key={s.id} className="cts-svc" style={{ '--cts-color': s.color, '--cts-delay': `${0.2 + i * 0.08}s` }}>
              <div className="cts-svc__icon">{s.emoji}</div>
              <div className="cts-svc__body">
                <div className="cts-svc__titles">
                  <strong className="cts-svc__title">{s.titleFr}</strong>
                  <span className="cts-svc__title-ar">{s.titleAr}</span>
                </div>
                <p className="cts-svc__desc">{s.descFr}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);

// ─── SLIDE 10: Pourquoi Nous ? (Why Us — Psychological Persuasion) ──

const whyUsReasons = [
  {
    id: 1, emoji: '🏆', trigger: 'PREUVE SOCIALE',
    titleFr: '+500 Étudiants Accompagnés',
    titleAr: 'أكثر من 500 طالب رافقناهم',
    descFr: '95% de nos étudiants intègrent leur premier choix. Nos anciens sont aujourd\'hui en ENSA, médecine, ENCG, ISCAE. Tu ne seras pas le premier — tu seras le prochain.',
    descAr: '95% ديال الطلبة ديالنا دخلو الاختيار الأول ديالهم. اللي قراو عندنا دابا ف ENSA، الطب، ENCG، ISCAE. ماشي غادي تكون الأول — غادي تكون التالي.',
    color: '#1565c0',
    stat: '95%'
  },
  {
    id: 2, emoji: '⏳', trigger: 'NE PERDS PAS',
    titleFr: 'Une Année Perdue = 12 Mois de Retard',
    titleAr: 'عام ضايع = 12 شهر تأخر',
    descFr: 'Sans orientation, tu risques une filière qui ne te plaît pas, un abandon en première année, ou pire : aucune inscription. Le coût d\'une mauvaise décision dépasse tout investissement.',
    descAr: 'بلا توجيه، يمكن تلقا راسك ف شي فيليار ما بغيتيهاش، تخلي ف العام الأول، ولا ما تسجلش أصلاً. ثمن القرار الخاطئ أكبر من أي استثمار.',
    color: '#1e88e5',
    stat: '⚠️'
  },
  {
    id: 3, emoji: '🎯', trigger: 'FAIT POUR TOI',
    titleFr: 'Un Plan Sur-Mesure, Pas du Copier-Coller',
    titleAr: 'خطة مفصلة ليك، ماشي نسخ ولصق',
    descFr: 'On analyse ton profil, tes notes, tes passions et tes ambitions. Résultat : un plan d\'orientation unique, réaliste et aligné avec QUI TU ES vraiment.',
    descAr: 'كنحللو الملف ديالك، النقط، الشغف والطموح ديالك. النتيجة: خطة توجيه فريدة، واقعية ومتوافقة مع شكون نتا حقيقيا.',
    color: '#42a5f5',
    stat: '1:1'
  },
  {
    id: 4, emoji: '👨‍🏫', trigger: 'EXPERTS',
    titleFr: 'Des Spécialistes du Système Marocain',
    titleAr: 'متخصصين ف النظام المغربي',
    descFr: 'Notre équipe maîtrise chaque concours, chaque deadline, chaque filière. Pas de conseils génériques d\'internet — des experts qui vivent le terrain chaque jour.',
    descAr: 'الفريق ديالنا عارف كل كونكور، كل ديدلاين، كل فيليار. ماشي نصائح عامة من الإنترنت — خبراء كيعيشو الميدان كل يوم.',
    color: '#64b5f6',
    stat: '🎓'
  },
  {
    id: 5, emoji: '🛡️', trigger: 'ZÉRO STRESS',
    titleFr: 'On Gère Tout Pour Que Tu Te Concentres',
    titleAr: 'حنا كندبرو على كلشي باش نتا تركز',
    descFr: 'Inscriptions, deadlines, plateformes, dossiers, concours — on prend TOUT en charge. Toi, tu te concentres sur tes études et ton examen national.',
    descAr: 'تسجيلات، ديدلاينات، منصات، ملفات، كونكورات — حنا كنتكلفو بكلشي. نتا غير ركز على القراية والباك الوطني ديالك.',
    color: '#0d47a1',
    stat: '0'
  },
  {
    id: 6, emoji: '🔥', trigger: 'MAINTENANT',
    titleFr: 'Les Places Sont Limitées, Les Deadlines N\'attendent Pas',
    titleAr: 'البلايص محدودين، والديدلاينات ما كتسنا حتا واحد',
    descFr: 'Chaque année, des centaines d\'étudiants ratent leur inscription par manque d\'anticipation. Les concours ouvrent bientôt. Agis maintenant ou regrette plus tard.',
    descAr: 'كل عام، بزاف ديال الطلبة كيفوتهم التسجيل حيت ما خططوش. الكونكورات غادي يبداو قريب. دير شي حاجة دابا ولا ندم من بعد.',
    color: '#2196f3',
    stat: '⏰'
  }
];

const WhyUsCard = ({ reason, index, onClick }) => (
  <div
    className="why-card"
    onClick={onClick}
    style={{ '--why-color': reason.color, '--why-delay': `${0.15 + index * 0.07}s` }}
  >
    <div className="why-card__trigger">{reason.trigger}</div>
    <div className="why-card__top">
      <span className="why-card__emoji">{reason.emoji}</span>
      <span className="why-card__stat">{reason.stat}</span>
    </div>
    <h4 className="why-card__title">{reason.titleFr}</h4>
    <p className="why-card__desc">{reason.descFr}</p>
  </div>
);

const WhyUsPopup = ({ reason, index, onClose }) => (
  <div className="why-overlay" onClick={onClose}>
    <div className="why-popup" onClick={e => e.stopPropagation()} style={{ '--why-color': reason.color }}>
      <button className="why-popup__close" onClick={onClose}>✕</button>
      <div className="why-popup__accent" />
      <div className="why-popup__content">
        <div className="why-popup__header">
          <div className="why-popup__header-emoji">{reason.emoji}</div>
          <div>
            <div className="why-popup__trigger">{reason.trigger}</div>
            <h3 className="why-popup__title">{reason.titleFr}</h3>
          </div>
        </div>
        <div className="why-popup__sep" />
        <div className="why-popup__section">
          <div className="why-popup__lang-label">Français</div>
          <p className="why-popup__text">{reason.descFr}</p>
        </div>
        <div className="why-popup__section why-popup__section--darija">
          <div className="why-popup__lang-label why-popup__lang-label--darija">بالدارجة</div>
          <h4 className="why-popup__title-ar">{reason.titleAr}</h4>
          <p className="why-popup__text-ar">{reason.descAr}</p>
        </div>
      </div>
    </div>
  </div>
);

const WhyUsSlideContent = () => {
  const [selected, setSelected] = useState(null);
  return (
      <div className="why-slide">
        <div className="why-bg why-bg-1" />
        <div className="why-bg why-bg-2" />
        <div className="why-bg why-bg-3" />

        {/* Header */}
        <div className="why-header">
          <div className="why-header__badge">💎 POURQUOI NOUS ?</div>
          <h2 className="why-header__title">
            6 Raisons Pour Lesquelles <span>Ils Nous Font Confiance</span>
          </h2>
          <p className="why-header__subtitle-ar">علاش الطلبة كيختارو Come To Study ؟</p>
        </div>

        {/* Cards grid */}
        <div className="why-cards-grid">
          {whyUsReasons.map((r, i) => (
            <WhyUsCard key={r.id} reason={r} index={i} onClick={() => setSelected(r)} />
          ))}
        </div>

        {/* Contrast comparison bar */}
        <div className="why-contrast">
          <div className="why-contrast__side why-contrast__side--without">
            <div className="why-contrast__label">❌ Sans orientation</div>
            <div className="why-contrast__items">
              <span>Filière au hasard</span>
              <span>Deadlines ratées</span>
              <span>Année perdue</span>
            </div>
          </div>
          <div className="why-contrast__divider">
            <span className="why-contrast__vs">VS</span>
          </div>
          <div className="why-contrast__side why-contrast__side--with">
            <div className="why-contrast__label">✅ Avec Come To Study</div>
            <div className="why-contrast__items">
              <span>Parcours idéal</span>
              <span>Zéro deadline ratée</span>
              <span>Réussite assurée</span>
            </div>
          </div>
        </div>

        {/* Popup */}
        {selected && (
          <WhyUsPopup
            reason={selected}
            index={whyUsReasons.indexOf(selected)}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
  );
};

// ─── SLIDE 8 (moved): Erreurs Courantes ─────────────────────

const problems = [
  {
    id: 1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M3 12h18M3 18h18" />
        <path d="M8 6v12" />
      </svg>
    ),
    title: 'Oubli du Classement des Vœux',
    description: 'Ne pas classer ses choix par ordre de priorité est une erreur fatale. Si vos vœux ne sont pas bien ordonnés, vous risquez d\'être affecté à une filière qui ne vous intéresse pas du tout.',
    titleDarija: 'نسيان ترتيب الاختيارات حسب الأولوية',
    descDarija: 'إلا ما رتبتيش الاختيارات ديالك مزيان حسب الأولوية، يمكن يطيحو ليك ف شي فيليار ما بغيتيهاش. خاصك تفكر مزيان قبل ما تفاليدي.',
    color: '#1565c0',
    emoji: '📋'
  },
  {
    id: 2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: 'Saisie d\'Informations Erronées',
    description: 'Une simple faute dans le numéro de CIN, le nom, la date de naissance ou les notes peut entraîner le rejet de votre candidature. Vérifiez chaque champ deux fois avant de valider.',
    titleDarija: 'إدخال معلومات خاطئة',
    descDarija: 'غلطة صغيرة ف رقم البطاقة ولا السمية ولا تاريخ الازدياد ولا النقط تقدر تخليهم يرفضو ليك الملف ديالك. خاصك تشيكي كل حاجة مرتين قبل ما تسيفطها.',
    color: '#1e88e5',
    emoji: '✏️'
  },
  {
    id: 3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: 'Photos & Documents Illisibles',
    description: 'Télécharger des photos floues, mal cadrées ou des documents scannés en basse qualité peut bloquer votre dossier. Les plateformes exigent des fichiers nets et conformes au format demandé.',
    titleDarija: 'رفع صور غير واضحة',
    descDarija: 'إلا رفعتي تصاور ماشي واضحين ولا دوكيمون مسكاني بجودة خايبة، الملف ديالك يقدر يتبلوكا. المنصات كيطلبو فيشيات واضحين وحسب الفورما المطلوب.',
    color: '#42a5f5',
    emoji: '📸'
  },
  {
    id: 4,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Dépassement des Délais',
    description: 'Chaque concours et chaque plateforme a une date limite stricte. Si vous déposez votre candidature en retard — ne serait-ce que d\'une minute — votre dossier ne sera tout simplement pas accepté.',
    titleDarija: 'تجاوز الآجال',
    descDarija: 'كل كونكور وكل منصة عندها ديدلاين محددة. إلا فاتك الوقت — حتى بدقيقة — الملف ديالك ما غاديش يتقبل أصلاً. خاصك تكون ديما على بال.',
    color: '#0d47a1',
    emoji: '⏰'
  },
  {
    id: 5,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: 'E-mail Non Vérifié',
    description: 'Beaucoup d\'élèves saisissent un e-mail avec une faute ou ne vérifient jamais leur boîte. Les convocations, résultats et confirmations arrivent par mail — si vous ne recevez rien, vous ratez tout.',
    titleDarija: 'عدم التأكد من البريد الإلكتروني',
    descDarija: 'بزاف ديال الطلبة كيكتبو الإيميل ديالهم غلط ولا عمرهم ما كيشوفو البوات ديالهم. الاستدعاءات والنتائج والتأكيدات كيجيو بالإيميل — إلا ما وصلك والو، غادي يفوتك كلشي.',
    color: '#64b5f6',
    emoji: '📧'
  },
  {
    id: 6,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: 'Frais de Concours Non Payés',
    description: 'Certains concours et inscriptions exigent le paiement de frais. Oublier ou ne pas payer à temps annule automatiquement votre candidature, même si le dossier est complet.',
    titleDarija: 'عدم أداء رسوم المباراة',
    descDarija: 'شي كونكورات كيطلبو تخلص الرسوم ديال التسجيل. إلا نسيتي تخلص ولا ما خلصتيش ف الوقت، الكونديداتور ديالك كتتلغى أوتوماتيكمون حتى إلا كان الملف كامل.',
    color: '#2196f3',
    emoji: '💳'
  },
  {
    id: 7,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: 'Convocation Non Suivie',
    description: 'Après l\'inscription, vous devez impérativement surveiller votre espace candidat et votre boîte mail pour la convocation. Ne pas télécharger ou imprimer sa convocation = pas de concours.',
    titleDarija: 'عدم تتبع الاستدعاء',
    descDarija: 'من بعد التسجيل، خاصك تبقى تشيكي الإسباس ديالك والإيميل باش تشوف الاستدعاء. إلا ما تيليشارجتيهش ولا ما طبعتيهش = ما غاديش تدوز الكونكور.',
    color: '#1565c0',
    emoji: '📄'
  }
];

const ProblemCard = ({ problem, index, onClick }) => (
  <div
    className="prob-card"
    onClick={onClick}
    style={{
      '--prob-color': problem.color,
      '--prob-delay': `${0.15 + index * 0.1}s`
    }}
  >
    <div className="prob-card__icon-area">
      <div className="prob-card__emoji">{problem.emoji}</div>
      <div className="prob-card__icon">{problem.icon}</div>
    </div>
    <h4 className="prob-card__title">{problem.title}</h4>
    <p className="prob-card__desc">{problem.description}</p>
    <div className="prob-card__number">{String(index + 1).padStart(2, '0')}</div>
  </div>
);

const ProblemPopup = ({ problem, index, onClose }) => (
  <div className="prob-overlay" onClick={onClose}>
    <div className="prob-popup" onClick={e => e.stopPropagation()} style={{ '--prob-color': problem.color }}>
      <button className="prob-popup__close" onClick={onClose}>✕</button>

      {/* Left accent strip */}
      <div className="prob-popup__accent" />

      {/* Content area */}
      <div className="prob-popup__content">
        {/* Header with emoji, icon and number */}
        <div className="prob-popup__header">
          <div className="prob-popup__header-icon">
            <span className="prob-popup__header-emoji">{problem.emoji}</span>
            <div className="prob-popup__header-svg">{problem.icon}</div>
          </div>
          <div className="prob-popup__header-text">
            <div className="prob-popup__number">{String(index + 1).padStart(2, '0')}</div>
            <h3 className="prob-popup__title-fr">{problem.title}</h3>
          </div>
        </div>

        {/* Separator */}
        <div className="prob-popup__sep" />

        {/* French text */}
        <div className="prob-popup__section">
          <div className="prob-popup__lang-label">Français</div>
          <p className="prob-popup__text-fr">{problem.description}</p>
        </div>

        {/* Darija text */}
        <div className="prob-popup__section prob-popup__section--darija">
          <div className="prob-popup__lang-label prob-popup__lang-label--darija">بالدارجة</div>
          <h4 className="prob-popup__title-darija">{problem.titleDarija}</h4>
          <p className="prob-popup__text-darija">{problem.descDarija}</p>
        </div>
      </div>
    </div>
  </div>
);

const ErreursSlideContent = () => {
  const [selectedProb, setSelectedProb] = useState(null);

  return (
      <div className="prob-slide">
        {/* Background decorations */}
        <div className="prob-bg prob-bg-1" />
        <div className="prob-bg prob-bg-2" />
        <div className="prob-bg prob-bg-3" />
        <div className="prob-bg prob-bg-grid" />

        {/* Header */}
        <div className="prob-header">
          <div className="prob-header__badge">🚨 ATTENTION</div>
          <h2 className="prob-header__title">
            Erreurs Qui Peuvent Vous <span>Coûter</span><br />
            Une Année Entière
          </h2>
          <p className="prob-header__subtitle">أخطاء قد تكلفك سنة كاملة</p>
        </div>

        {/* Problem cards grid — 3x2 */}
        <div className="prob-cards-grid">
          {problems.map((p, i) => (
            <ProblemCard key={p.id} problem={p} index={i} onClick={() => setSelectedProb(p)} />
          ))}
        </div>

        {/* Popup overlay */}
        {selectedProb && (
          <ProblemPopup
            problem={selectedProb}
            index={problems.indexOf(selectedProb)}
            onClose={() => setSelectedProb(null)}
          />
        )}
      </div>
  );
};

// ─── SLIDE 4: Plan / Sommaire ───────────────────────────────

// PLAN ITEMS — Matching actual presentation content
const planItems = [
  { id: 1, number: '01', title: 'Nos Professeurs', subtitle: 'L\'équipe pédagogique qui vous accompagne' },
  { id: 2, number: '02', title: 'La Confusion Post-Bac', subtitle: 'Les défis que rencontrent les bacheliers' },
  { id: 3, number: '03', title: 'Diplômes & Parcours', subtitle: 'BTS, Licence, Master... tout comprendre' },
  { id: 4, number: '04', title: 'Écoles par Secteur', subtitle: 'Guide complet des établissements' },
  { id: 5, number: '05', title: 'Critères de Choix', subtitle: 'Comment choisir la bonne orientation' },
  { id: 6, number: '06', title: 'Erreurs à Éviter', subtitle: 'Les pièges courants et comment les éviter' },
  { id: 7, number: '07', title: 'Notre Solution', subtitle: 'Come To Study Tawjeeh à votre service' }
];

const PlanSlideContent = () => (
    <div className="plan-slide">
      {/* Background decorations */}
      <div className="plan-bg plan-bg-1" />
      <div className="plan-bg plan-bg-2" />

      {/* Header */}
      <div className="plan-header">
        <div className="plan-header__badge">SOMMAIRE</div>
        <h2 className="plan-header__title">
          Notre <span>Plan</span> d'Action
        </h2>
        <p className="plan-header__subtitle-ar">خطة العمل ديالنا</p>
      </div>

      {/* Plan items list */}
      <div className="plan-list">
        {planItems.map((item, i) => (
          <div
            key={item.id}
            className="plan-item"
            style={{ '--plan-delay': `${0.1 + i * 0.08}s` }}
          >
            <div className="plan-item__number">{item.number}</div>
            <div className="plan-item__line" />
            <div className="plan-item__content">
              <h3 className="plan-item__title">{item.title}</h3>
              <p className="plan-item__subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
);

// ─── SLIDE 5: Diplômes & Parcours ───────────────────────────

const institutions = [
  {
    emoji: '🏛️',
    titleFr: 'Université',
    titleAr: 'الجامعة',
    desc: 'Institution mère (Hassan II, Mohammed V…)',
    color: '#1565c0'
  },
  {
    emoji: '🎓',
    titleFr: 'Faculté',
    titleAr: 'الكلية',
    desc: 'Rattachée à l\'univ. (Sciences, Droit, Lettres…)',
    color: '#0097a7'
  },
  {
    emoji: '🏫',
    titleFr: 'Grande École',
    titleAr: 'المدرسة العليا',
    desc: 'Sélective par concours (ENSA, ENCG, EMI…)',
    color: '#7b1fa2'
  },
  {
    emoji: '📖',
    titleFr: 'CPGE',
    titleAr: 'الأقسام التحضيرية',
    desc: '2 ans de prépa intensive pour les Grandes Écoles',
    color: '#e65100'
  }
];

const diplomas = [
  {
    id: 1, level: 'Bac+2', name: 'DEUG',
    fullName: 'Diplôme d\'Études Universitaires Générales',
    duration: '2 ans', where: 'Faculté',
    description: 'Premier cycle universitaire. Formation générale en sciences, lettres, droit ou économie. Permet d\'accéder à la Licence.',
    descDarija: 'شهادة ف سنتين كتقراها فالكلية ديال الجامعة. تكوين عام ف العلوم ولا الآداب ولا القانون. من بعدها تقدر تكمل الليسونس.',
    color: '#43a047'
  },
  {
    id: 2, level: 'Bac+2', name: 'DUT',
    fullName: 'Diplôme Universitaire de Technologie',
    duration: '2 ans', where: 'EST',
    description: 'Formation technique et professionnalisante à l\'École Supérieure de Technologie (EST). Accès direct au marché du travail ou poursuite d\'études en Licence Pro ou école d\'ingénieurs.',
    descDarija: 'شهادة تقنية ف سنتين كتقراها ف EST (المدرسة العليا ديال التكنولوجيا). كتعطيك تكوين تطبيقي و يمكن ليك تخدم ولا تكمل القراية ف ليسونس برو ولا مدرسة المهندسين.',
    color: '#43a047'
  },
  {
    id: 3, level: 'Bac+2', name: 'BTS',
    fullName: 'Brevet de Technicien Supérieur',
    duration: '2 ans', where: 'Lycée technique',
    description: 'Diplôme professionnel préparé en lycée technique ou établissement privé accrédité. Spécialisations variées : comptabilité, informatique, électromécanique…',
    descDarija: 'شهادة مهنية ف سنتين كتقراها ف ليسي تقني ولا مؤسسة خاصة. كاينين بزاف ديال التخصصات: المحاسبة، المعلوميات، الإلكتروميكانيك…',
    color: '#43a047'
  },
  {
    id: 4, level: 'Bac+3', name: 'Licence',
    fullName: 'Licence Fondamentale / Professionnelle',
    duration: '3 ans', where: 'Faculté',
    description: 'Licence Fondamentale (LF) : parcours académique général menant au Master. Licence Professionnelle (LP) : parcours orienté métier avec stages.',
    descDarija: 'الليسونس ف 3 سنين كتقراها فالكلية. كاينة ليسونس فوندومونتال (أكاديمية كتكمل بالماستر) و ليسونس بروفيسيونيل (مهنية فيها الستاج).',
    color: '#1565c0'
  },
  {
    id: 5, level: 'Bac+4', name: 'Bachelor',
    fullName: 'Bachelor (Nouveau Système LMD)',
    duration: '4 ans', where: 'Faculté',
    description: 'Nouveau système universitaire remplaçant progressivement la Licence classique. 4 ans de formation plus complète avec soft skills et langues renforcées.',
    descDarija: 'الباشلور هو النظام الجديد ف 4 سنين بدل 3 ديال الليسونس القديمة. كتقراه فالكلية و فيه تكوين أعمق مع لغات و مهارات زايدين.',
    color: '#1976d2'
  },
  {
    id: 6, level: 'Bac+5', name: 'Master',
    fullName: 'Master Fondamental / Spécialisé',
    duration: '5 ans (Bac+5)', where: 'Faculté',
    description: 'Master Fondamental (recherche académique) ou Master Spécialisé (professionnel). 2 ans après la Licence. Accès sélectif sur dossier.',
    descDarija: 'الماستر كتقراه ف سنتين من بعد الليسونس. كاين ماستر فوندومونتال (بحث أكاديمي) و ماستر متخصص (مهني). الولوج بالانتقاء على الملف.',
    color: '#7b1fa2'
  },
  {
    id: 7, level: 'Bac+5', name: 'Ingénieur',
    fullName: 'Diplôme d\'Ingénieur d\'État',
    duration: '5 ans', where: 'Grandes Écoles',
    description: '2 ans de cycle préparatoire + 3 ans de cycle ingénieur. Écoles : ENSA, EMI, EHTP, ENSAM, INPT, ENSIAS… Accès par concours national (CNC) ou présélection.',
    descDarija: 'ديبلوم المهندس ف 5 سنين: سنتين بريبا + 3 سيكل مهندس. كتقراه ف المدارس العليا بحال ENSA, EMI, EHTP, ENSAM… الدخول بالكونكور الوطني (CNC) ولا الانتقاء.',
    color: '#7b1fa2'
  },
  {
    id: 8, level: 'Bac+5', name: 'ENCG / ISCAE',
    fullName: 'Diplôme des Écoles de Commerce et Gestion',
    duration: '5 ans', where: 'ENCG / ISCAE',
    description: 'Formation en commerce, gestion et management. ENCG : accès post-bac (5 ans). ISCAE : accès à Bac+2 (3 ans de cycle supérieur). Diplôme reconnu par l\'État.',
    descDarija: 'ديبلوم ENCG ولا ISCAE ف التجارة و التسيير. ENCG كتدخل من بعد الباك (5 سنين)، ISCAE كتدخل من بعد باك+2 (3 سنين سيكل). الديبلوم معترف به من الدولة.',
    color: '#7b1fa2'
  },
  {
    id: 9, level: 'Bac+7+', name: 'Médecine',
    fullName: 'Doctorat en Médecine – FMP (Faculté de Médecine et de Pharmacie)',
    duration: '7 ans + spécialisation', where: 'FMP',
    description: 'Études à la Faculté de Médecine et de Pharmacie (FMP – Casablanca, Rabat, Fès, Marrakech, Oujda…). 7 ans + résidanat (4-5 ans) pour la spécialisation. Concours d\'accès très sélectif.',
    descDarija: 'دكتوراه فالطب كتقراها ف FMP (كلية الطب و الصيدلة – كازا، الرباط، فاس، مراكش، وجدة…). 7 سنين + الريزيدانا (4-5 سنين) باش تتخصص. الكونكور ديال الدخول صعيب بزاف.',
    color: '#c62828'
  },
  {
    id: 10, level: 'Bac+6', name: 'Méd. Dentaire',
    fullName: 'Doctorat en Médecine Dentaire – FMD (Faculté de Médecine Dentaire)',
    duration: '6 ans', where: 'FMD',
    description: 'Faculté de Médecine Dentaire (FMD – Casablanca, Rabat). 6 ans d\'études pour devenir chirurgien-dentiste. Accès par concours commun avec la médecine.',
    descDarija: 'طب الأسنان كتقراه ف FMD (كلية طب الأسنان – كازا ولا الرباط). 6 سنين ديال القراية باش تولي طبيب ديال السنان. الدخول بالكونكور مشترك مع الطب.',
    color: '#c62828'
  },
  {
    id: 11, level: 'Bac+6', name: 'Pharmacie',
    fullName: 'Doctorat en Pharmacie – FMP',
    duration: '6 ans', where: 'FMP',
    description: 'Études de Pharmacie à la Faculté de Médecine et de Pharmacie. 6 ans pour le Doctorat en Pharmacie. Possibilité d\'ouvrir son officine ou travailler en industrie pharmaceutique.',
    descDarija: 'الصيدلة كتقراها ف FMP (كلية الطب و الصيدلة). 6 سنين باش تاخد دكتوراه ف الصيدلة و تقدر تحل الفارماسي ديالك ولا تخدم ف الصناعة الدوائية.',
    color: '#c62828'
  },
  {
    id: 12, level: 'Bac+6', name: 'Architecture',
    fullName: 'Diplôme d\'Architecte – ENA (École Nationale d\'Architecture)',
    duration: '6 ans', where: 'ENA',
    description: 'École Nationale d\'Architecture (ENA – Rabat, Fès, Marrakech, Tétouan). 6 ans de formation en architecture et urbanisme. Accès par concours.',
    descDarija: 'الهندسة المعمارية كتقراها ف ENA (المدرسة الوطنية ديال الأرشيتيكتور – الرباط، فاس، مراكش، تطوان). 6 سنين. الدخول بالكونكور.',
    color: '#c62828'
  },
  {
    id: 13, level: 'Bac+8', name: 'Doctorat',
    fullName: 'Doctorat (PhD / Doctorat d\'État)',
    duration: '8 ans (Bac+8)', where: 'Université',
    description: 'Plus haut diplôme universitaire. 3 ans de recherche après le Master. Rédaction et soutenance d\'une thèse devant un jury. Mène à la carrière d\'enseignant-chercheur.',
    descDarija: 'الدكتوراه هي أعلى شهادة جامعية. 3 سنين ديال البحث من بعد الماستر. كتكتب أطروحة و كتناقشها قدام لجنة. كتفتح ليك الباب باش تولي أستاذ باحث.',
    color: '#37474f'
  }
];

const DiplomaPopup = ({ diploma, onClose }) => (
  <div className="dipl-overlay" onClick={onClose}>
    <div className="dipl-popup" onClick={e => e.stopPropagation()} style={{ '--dipl-color': diploma.color }}>
      <button className="dipl-popup__close" onClick={onClose}>✕</button>
      <div className="dipl-popup__accent" />
      <div className="dipl-popup__content">
        {/* Header */}
        <div className="dipl-popup__header">
          <div className="dipl-popup__level-badge">{diploma.level}</div>
          <h3 className="dipl-popup__name">{diploma.name}</h3>
          <p className="dipl-popup__fullname">{diploma.fullName}</p>
        </div>
        <div className="dipl-popup__meta">
          <span className="dipl-popup__meta-item">⏱ {diploma.duration}</span>
          <span className="dipl-popup__meta-item">📍 {diploma.where}</span>
        </div>
        <div className="dipl-popup__sep" />
        {/* French */}
        <div className="dipl-popup__section">
          <div className="dipl-popup__lang-label">Français</div>
          <p className="dipl-popup__text">{diploma.description}</p>
        </div>
        {/* Darija */}
        <div className="dipl-popup__section dipl-popup__section--darija">
          <div className="dipl-popup__lang-label dipl-popup__lang-label--darija">بالدارجة</div>
          <p className="dipl-popup__text-darija">{diploma.descDarija}</p>
        </div>
      </div>
    </div>
  </div>
);

const DiplomesSlideContent = () => {
  const [selectedDiploma, setSelectedDiploma] = useState(null);

  return (
      <div className="dipl-slide">
        {/* BG */}
        <div className="dipl-bg dipl-bg-1" />
        <div className="dipl-bg dipl-bg-2" />

        {/* Header */}
        <div className="dipl-header">
          <div className="dipl-header__badge">PARCOURS & DIPLÔMES</div>
          <h2 className="dipl-header__title">
            Le Système d'Enseignement <span>Supérieur</span> au Maroc
          </h2>
          <p className="dipl-header__subtitle-ar">منظومة التعليم العالي ف المغرب</p>
        </div>

        {/* Institution cards */}
        <div className="dipl-institutions">
          {institutions.map((inst, i) => (
            <div key={i} className="dipl-inst" style={{ '--inst-color': inst.color, '--inst-delay': `${0.1 + i * 0.08}s` }}>
              <div className="dipl-inst__emoji">{inst.emoji}</div>
              <div className="dipl-inst__info">
                <div className="dipl-inst__titles">
                  <span className="dipl-inst__fr">{inst.titleFr}</span>
                  <span className="dipl-inst__ar">{inst.titleAr}</span>
                </div>
                <p className="dipl-inst__desc">{inst.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Diplomas table */}
        <div className="dipl-table-wrap">
          <div className="dipl-table">
            <div className="dipl-table__header">
              <span className="dipl-th dipl-th--level">Niveau</span>
              <span className="dipl-th dipl-th--name">Diplôme</span>
              <span className="dipl-th dipl-th--dur">Durée</span>
              <span className="dipl-th dipl-th--where">Où étudier</span>
            </div>
            <div className="dipl-table__body">
              {diplomas.map((d, i) => (
                <div
                  key={d.id}
                  className="dipl-row"
                  onClick={() => setSelectedDiploma(d)}
                  style={{ '--dipl-color': d.color, '--dipl-delay': `${0.05 + i * 0.035}s` }}
                >
                  <span className="dipl-row__level">{d.level}</span>
                  <span className="dipl-row__name">
                    <strong>{d.name}</strong>
                  </span>
                  <span className="dipl-row__dur">{d.duration}</span>
                  <span className="dipl-row__where">{d.where}</span>
                  <span className="dipl-row__arrow">›</span>
                </div>
              ))}
            </div>
          </div>
          <p className="dipl-table__hint">Cliquez sur un diplôme pour voir les détails en Darija</p>
        </div>

        {/* Popup */}
        {selectedDiploma && (
          <DiplomaPopup
            diploma={selectedDiploma}
            onClose={() => setSelectedDiploma(null)}
          />
        )}
      </div>
  );
};

// ─── SLIDE 6: Types des Écoles par Secteur ──────────────────

const accessTypes = [
  {
    emoji: '🟢',
    titleFr: 'Accès Ouvert',
    titleAr: 'الاستقطاب المفتوح',
    desc: 'Inscription directe selon le type de Bac, sans concours.',
    examples: 'Faculté des Sciences, Faculté de Droit, Faculté des Lettres, FSJES, FLSH…',
    color: '#43a047'
  },
  {
    emoji: '🔴',
    titleFr: 'Accès Limité',
    titleAr: 'الاستقطاب المحدود',
    desc: 'Sélection par présélection, concours écrit et/ou oral.',
    examples: 'ENSA, ENSAM, ENCG, FMP, IAV, ISCAE, FST, EST, CPGE…',
    color: '#e53935'
  }
];

const sectors = [
  {
    id: 1, emoji: '💻', titleFr: 'Sciences & Technologie', titleAr: 'القطاع العلمي والتكنولوجي',
    color: '#1565c0',
    schools: [
      { name: 'ENSA', full: 'École Nationale des Sciences Appliquées', access: 'Concours (présélection + écrit + oral)', duration: '5 ans', cities: 'Kénitra, Tanger, Fès, Marrakech, Oujda, Safi, Béni Mellal, Berrechid, Tétouan, Hoceima, Khouribga', descFr: 'Formation d\'ingénieurs polyvalents. 2 ans de cycle préparatoire intégré + 3 ans de spécialisation. Accès après Bac scientifique via concours national ou présélection.', descDarija: 'مدرسة المهندسين. 5 سنين: سنتين بريبا + 3 تخصص. كتدخل من بعد الباك العلمي بالكونكور ولا الانتقاء. كاينة ف بزاف ديال المدن.' },
      { name: 'ENSAM', full: 'École Nationale Supérieure des Arts et Métiers', access: 'Concours national (présélection + écrit)', duration: '5 ans', cities: 'Casablanca, Meknès, Rabat', descFr: 'Formation d\'ingénieurs en génie mécanique, industriel, électrique et énergétique. Très sélective.', descDarija: 'مدرسة المهندسين ديال الفنون والمهن. تكوين ف الجيني الميكانيكي والصناعي والكهربائي. صعيبة بزاف الدخول.' },
      { name: 'EMI', full: 'École Mohammadia d\'Ingénieurs', access: 'CNC après CPGE', duration: '3 ans (après 2 ans CPGE)', cities: 'Rabat', descFr: 'Première école d\'ingénieurs au Maroc. Accès exclusivement via le Concours National Commun (CNC) après les classes préparatoires.', descDarija: 'أول مدرسة ديال المهندسين ف المغرب. الدخول غير عبر CNC من بعد CPGE. من أحسن المدارس ف البلاد.' },
      { name: 'INPT', full: 'Institut National des Postes et Télécommunications', access: 'CNC après CPGE + cycle prépa intégré post-bac', duration: '5 ans', cities: 'Rabat', descFr: 'Grande école d\'ingénieurs en télécommunications, TIC et cloud computing. Sous tutelle de l\'ANRT. Accès via CNC ou concours post-bac.', descDarija: 'معهد وطني ديال البوسطة والاتصالات فالرباط. كيخرّج مهندسين فالتيليكوم والتكنولوجيا. الدخول بمباراة CNC أو من بعد الباك.' },
      { name: 'ENSIAS', full: 'École Nationale Supérieure d\'Informatique et d\'Analyse des Systèmes', access: 'CNC après CPGE + accès post-bac', duration: '5 ans', cities: 'Rabat', descFr: 'École d\'ingénieurs phare en informatique, cybersécurité, intelligence artificielle et data science. Rattachée à l\'UM5.', descDarija: 'مدرسة وطنية عليا ديال الإنفورماتيك ف الرباط. كتكوّن مهندسين ف البرمجة والذكاء الاصطناعي والأمن المعلوماتي.' },
      { name: 'INSEA', full: 'Institut National de Statistique et d\'Économie Appliquée', access: 'Concours post-bac + CNC post-CPGE', duration: '5 ans', cities: 'Rabat', descFr: 'Institut formant des ingénieurs en statistique, économie appliquée, actuariat, data science et finance quantitative.', descDarija: 'معهد وطني ديال الإحصاء والاقتصاد التطبيقي ف الرباط. كيخرّج مهندسين ف الإحصاء والمالية والداطا ساينس.' },
      { name: 'ENIM / ENSMR', full: 'École Nationale de l\'Industrie Minérale (Mines de Rabat)', access: 'CNC après CPGE', duration: '3 ans (après CPGE)', cities: 'Rabat', descFr: 'Grande école d\'ingénieurs polyvalente : mines, géologie, génie industriel, environnement, énergie. Fondée en 1972.', descDarija: 'مدرسة وطنية ديال المعادن ف الرباط. كتكوّن مهندسين ف المناجم والجيولوجيا والطاقة والصناعة.' },
      { name: 'ENSEM', full: 'École Nationale Supérieure d\'Électricité et de Mécanique', access: 'CNC après CPGE', duration: '3 ans (après CPGE)', cities: 'Casablanca', descFr: 'École d\'ingénieurs spécialisée en génie électrique, mécanique, informatique industrielle et énergie.', descDarija: 'مدرسة وطنية عليا ديال الإليكتريسيتي والميكانيك ف كازا. كتكوّن مهندسين ف الكهرباء والميكانيك.' },
      { name: 'FST', full: 'Faculté des Sciences et Techniques', access: 'Présélection sur dossier', duration: '5 ans (DEUST + Licence + Master)', cities: 'Fès, Marrakech, Settat, Mohammedia, Tanger, Errachidia, Béni Mellal', descFr: 'Formation scientifique et technique à accès limité. DEUST (2 ans) puis Licence et possibilité de cycle ingénieur.', descDarija: 'كلية العلوم والتقنيات. ولوج محدود بالانتقاء. كتقرا DEUST ف سنتين وبعدها الليسونس وتقدر تكمل سيكل مهندس.' },
      { name: 'EST', full: 'École Supérieure de Technologie', access: 'Présélection sur dossier', duration: '2 ans (DUT)', cities: 'Casablanca, Salé, Fès, Agadir, Meknès, Oujda, Safi, Guelmim…', descFr: 'Formation professionnalisante de 2 ans débouchant sur le DUT. Spécialisations en informatique, génie électrique, gestion…', descDarija: 'EST كتعطي DUT ف سنتين. تكوين مهني ف المعلوميات، الجيني الكهربائي، التسيير… الدخول بالانتقاء.' },
      { name: 'AIAC', full: 'Académie Internationale Mohammed VI de l\'Aviation Civile', access: 'Concours post-CPGE (CNC) + post-bac', duration: '5 ans', cities: 'Casablanca (Nouaceur)', descFr: 'École d\'ingénieurs en aviation civile : navigation aérienne, sécurité et maintenance aéronautique.', descDarija: 'أكاديمية دولية ديال الطيران المدني ف كازا. كتكوّن مهندسين ف الملاحة الجوية والصيانة والسلامة.' },
      { name: 'ECC', full: 'École Centrale Casablanca', access: 'CNC après CPGE', duration: '3 ans (après CPGE)', cities: 'Casablanca', descFr: 'Grande école d\'ingénieurs généraliste, partenariat avec le Groupe des Écoles Centrales de France. Créée en 2015.', descDarija: 'مدرسة سونطرال كازا. مدرسة كبيرة ديال المهندسين بشراكة مع فرنسا. كتكوّن مهندسين عامّين.' },
      { name: 'ESITH', full: 'École Supérieure des Industries du Textile et de l\'Habillement', access: 'CNC + post-bac', duration: '5 ans', cities: 'Casablanca', descFr: 'École d\'ingénieurs en génie industriel, logistique, management de la qualité et industries textiles.', descDarija: 'مدرسة عليا ديال صناعة الطيكستيل والألبسة ف كازا. كتكوّن مهندسين ف الصناعة والجودة واللوجيستيك.' },
      { name: 'ESI', full: 'École des Sciences de l\'Information', access: 'CNC + post-bac', duration: '5 ans', cities: 'Rabat', descFr: 'École formant des ingénieurs en sciences de l\'information, documentation, archivistique et gestion du savoir.', descDarija: 'مدرسة علوم المعلومات ف الرباط. كتكوّن مهندسين ف تدبير المعلومات والأرشيف والتوثيق.' },
      { name: 'EMINES / UM6P', full: 'École des Mines – Université Mohammed VI Polytechnique', access: 'Concours propre', duration: '5 ans', cities: 'Ben Guérir', descFr: 'École d\'ingénieurs rattachée à l\'UM6P. Formation en mines, énergie, environnement et sciences des données. Bourses disponibles.', descDarija: 'مدرسة المهندسين ديال UM6P ف بن جرير. تكوين ف المناجم والطاقة والبيانات. كاينة المنح.' },
      { name: 'INSA Euro-Med', full: 'Institut National des Sciences Appliquées Euro-Méditerranée', access: 'Concours post-bac', duration: '5 ans', cities: 'Fès', descFr: 'École d\'ingénieurs polyvalente liée au réseau INSA français (Lyon). Créée au sein de l\'UEMF.', descDarija: 'معهد دولي ديال العلوم التطبيقية ف فاس. مرتبط بشبكة INSA الفرنسية. مدرسة مهندسين متعددة التخصصات.' }
    ]
  },
  {
    id: 2, emoji: '🏥', titleFr: 'Santé & Paramédical', titleAr: 'القطاع الصحي وشبه الصحي',
    color: '#c62828',
    schools: [
      { name: 'FMP – Médecine', full: 'Faculté de Médecine et de Pharmacie – Filière Médecine', access: 'Concours d\'accès très sélectif', duration: '7 ans + résidanat', cities: 'Casablanca, Rabat, Fès, Marrakech, Oujda, Tanger, Agadir', descFr: 'Études de médecine (7 ans). Concours d\'entrée parmi les plus sélectifs au Maroc. Résidanat de 4-5 ans pour la spécialisation.', descDarija: 'كلية الطب والصيدلة – فيليير الطب. 7 سنين + الريزيدانا. الكونكور ديال الدخول صعيب بزاف.' },
      { name: 'FMP – Pharmacie', full: 'Faculté de Médecine et de Pharmacie – Filière Pharmacie', access: 'Concours commun FMP', duration: '6 ans', cities: 'Rabat, Casablanca, Fès, Oujda', descFr: 'Filière pharmacie intégrée aux FMP. 6 ans pour devenir pharmacien d\'officine, hospitalier ou industriel.', descDarija: 'فيليير ديال الصيدلة داخل كليات الطب. 6 سنين باش تولي صيدلاني. كاينة ف الرباط وكازا وفاس ووجدة.' },
      { name: 'FMD', full: 'Faculté de Médecine Dentaire', access: 'Concours commun avec FMP', duration: '6 ans', cities: 'Casablanca, Rabat', descFr: 'Formation en chirurgie dentaire. 6 ans d\'études pour devenir chirurgien-dentiste.', descDarija: 'كلية طب الأسنان. 6 سنين باش تولي طبيب ديال السنان. الكونكور مشترك مع الطب.' },
      { name: 'ISPITS / IFPS', full: 'Institut Supérieur des Professions Infirmières et Techniques de Santé', access: 'Concours (écrit + oral)', duration: '3 ans', cities: 'Multiple villes', descFr: 'Formation des infirmiers, techniciens de santé et sages-femmes. Accès par concours après le Bac scientifique.', descDarija: 'معهد التمريض والتقنيات الصحية. 3 سنين ديال التكوين. الدخول بالكونكور من بعد الباك العلمي.' },
      { name: 'UM6SS', full: 'Université Mohammed VI des Sciences de la Santé', access: 'Concours propre (privé)', duration: '6-7 ans', cities: 'Casablanca', descFr: 'Université privée spécialisée en santé : médecine, pharmacie, dentaire, kinésithérapie, sciences infirmières.', descDarija: 'جامعة محمد السادس ديال علوم الصحة ف كازا. خاصة. فيها الطب والصيدلة وطب الأسنان والكينيزيتيرابي.' }
    ]
  },
  {
    id: 3, emoji: '💼', titleFr: 'Commerce & Gestion', titleAr: 'قطاع التجارة والتسيير',
    color: '#f57c00',
    schools: [
      { name: 'ENCG', full: 'École Nationale de Commerce et de Gestion', access: 'Présélection + concours (TAFEM)', duration: '5 ans', cities: 'Tanger, Casablanca, Settat, Kénitra, Fès, Agadir, Oujda, El Jadida, Dakhla', descFr: 'Grande école de commerce publique. 5 ans : 2 ans préparatoires + 3 ans de spécialisation en marketing, finance, audit, management…', descDarija: 'مدرسة التجارة والتسيير. 5 سنين: سنتين بريبا + 3 تخصص ف الماركتينغ، المالية، التدقيق، المانجمنت… الدخول بالانتقاء + كونكور TAFEM.' },
      { name: 'ISCAE', full: 'Institut Supérieur de Commerce et d\'Administration des Entreprises', access: 'Concours à Bac+2 (ou CPGE)', duration: '3 ans (cycle supérieur)', cities: 'Casablanca, Rabat', descFr: 'Institut de prestige en commerce et gestion. Accès à Bac+2 via concours. Formations en expertise comptable, management et finance.', descDarija: 'ISCAE معهد ديال التجارة والتسيير. كتدخل من بعد باك+2 بالكونكور. تكوين ف المحاسبة والمانجمنت والمالية.' },
      { name: 'FSJES', full: 'Faculté des Sciences Juridiques, Économiques et Sociales', access: 'Accès ouvert', duration: '3 ans (Licence)', cities: 'Toutes les universités', descFr: 'Accès ouvert. Formation en droit, économie et gestion. Licence en 3 ans puis possibilité de Master sélectif.', descDarija: 'كلية الحقوق والاقتصاد. الدخول مفتوح. الليسونس ف 3 سنين وبعدها تقدر تكمل الماستر بالانتقاء.' },
      { name: 'HEM', full: 'Institut des Hautes Études de Management', access: 'Concours (privé reconnu)', duration: '5 ans', cities: 'Casablanca, Rabat, Marrakech, Tanger, Fès', descFr: 'Grande école de commerce privée reconnue par l\'État. Licence et Master en management, finance, marketing.', descDarija: 'معهد عالي ديال التسيير. مدرسة تجارة خاصة كبيرة ومعترف بيها. كتكوّن ف المانجمنت والمالية والتسويق.' },
      { name: 'ESCA', full: 'ESCA École de Management', access: 'Concours (privé)', duration: '5 ans', cities: 'Casablanca', descFr: 'École de commerce privée de référence. Programmes accrédités internationalement (AACSB).', descDarija: 'مدرسة التسيير ESCA ف كازا. من أحسن مدارس التجارة الخاصة. عندها اعتمادات دولية.' }
    ]
  },
  {
    id: 4, emoji: '🌾', titleFr: 'Agriculture & Forêts', titleAr: 'القطاع الفلاحي والغابوي',
    color: '#2e7d32',
    schools: [
      { name: 'IAV Hassan II', full: 'Institut Agronomique et Vétérinaire Hassan II', access: 'Concours national', duration: '5-6 ans', cities: 'Rabat', descFr: 'Grande école d\'agronomie et de médecine vétérinaire. Formations d\'ingénieurs agronomes et de docteurs vétérinaires.', descDarija: 'معهد الحسن الثاني ديال الزراعة والطب البيطري. تكوين المهندسين الفلاحيين والأطباء البيطريين. ف الرباط.' },
      { name: 'ENAM', full: 'École Nationale d\'Agriculture de Meknès', access: 'Concours', duration: '5 ans', cities: 'Meknès', descFr: 'Formation d\'ingénieurs agronomes spécialisés en production végétale, animale et agro-alimentaire.', descDarija: 'المدرسة الوطنية ديال الفلاحة ف مكناس. تكوين المهندسين ف الانتاج النباتي والحيواني والصناعة الغذائية.' },
      { name: 'ENFI', full: 'École Nationale Forestière d\'Ingénieurs', access: 'Concours post-bac', duration: '5 ans', cities: 'Salé', descFr: 'Seule école au Maroc formant des ingénieurs forestiers : gestion des forêts, environnement, biodiversité, lutte contre la désertification.', descDarija: 'مدرسة وطنية ديال الغابات ف سلا، الوحيدة ف المغرب. كتكوّن مهندسين ف تدبير الغابات والبيئة ومحاربة التصحر.' }
    ]
  },
  {
    id: 5, emoji: '🏗️', titleFr: 'BTP & Architecture', titleAr: 'قطاع البناء والهندسة المعمارية',
    color: '#5d4037',
    schools: [
      { name: 'EHTP', full: 'École Hassania des Travaux Publics', access: 'CNC après CPGE ou concours direct', duration: '3-5 ans', cities: 'Casablanca', descFr: 'Grande école d\'ingénieurs en génie civil, hydraulique, génie électrique, météorologie et informatique.', descDarija: 'المدرسة الحسنية ديال الأشغال العمومية ف كازا. تكوين المهندسين ف البناء والماء والكهرباء والمعلوميات.' },
      { name: 'ENA', full: 'École Nationale d\'Architecture', access: 'Concours (dessin + écrit)', duration: '6 ans', cities: 'Rabat, Fès, Marrakech, Tétouan', descFr: 'Formation en architecture et urbanisme. 6 ans d\'études. Concours d\'entrée avec épreuve de dessin.', descDarija: 'المدرسة الوطنية ديال الهندسة المعمارية. 6 سنين. الدخول بكونكور فيه الرسم. كاينة ف الرباط وفاس ومراكش وتطوان.' }
    ]
  },
  {
    id: 6, emoji: '🎓', titleFr: 'Éducation & Formation', titleAr: 'قطاع التربية والتعليم',
    color: '#6a1b9a',
    schools: [
      { name: 'ENS', full: 'École Normale Supérieure', access: 'Concours après CPGE ou Licence', duration: '1-2 ans (après CPGE/Licence)', cities: 'Rabat, Casablanca, Fès, Marrakech, Tétouan, Meknès', descFr: 'Formation des professeurs de l\'enseignement secondaire (qualifiant). Accès après CPGE ou Licence via concours.', descDarija: 'المدرسة العليا ديال الأساتذة. كتكوّن الأساتذة ديال الثانوي التأهيلي. الدخول بالكونكور من بعد CPGE ولا الليسونس.' },
      { name: 'CRMEF', full: 'Centre Régional des Métiers de l\'Éducation et de la Formation', access: 'Concours national de recrutement', duration: '1 an', cities: 'Toutes les régions', descFr: 'Formation des enseignants du primaire, collège et lycée après réussite au concours national de recrutement.', descDarija: 'المركز الجهوي ديال التعليم. كتكوّن فيه الأساتذة ديال الابتدائي والإعدادي والثانوي من بعد ما تنجح ف كونكور التوظيف.' },
      { name: 'ENSET', full: 'École Normale Supérieure de l\'Enseignement Technique', access: 'CNC + post-bac', duration: '5 ans', cities: 'Mohammedia, Rabat', descFr: 'Formation des ingénieurs et enseignants techniques dans les domaines technologiques et industriels.', descDarija: 'مدرسة عليا عادية ديال التعليم التقني ف المحمدية والرباط. كتكوّن مهندسين وأساتذة تقنيين ف المجالات الصناعية.' }
    ]
  },
  {
    id: 7, emoji: '🪖', titleFr: 'Militaire & Sécurité', titleAr: 'القطاع العسكري والأمني',
    color: '#37474f',
    schools: [
      { name: 'ERSSM', full: 'École Royale du Service de Santé Militaire', access: 'Concours très sélectif', duration: '7 ans', cities: 'Rabat', descFr: 'Formation de médecins militaires. Études de médecine complètes avec formation militaire. Bourse et hébergement assurés.', descDarija: 'مدرسة الطب العسكري. 7 سنين ديال الطب + التكوين العسكري. المنحة والسكن مضمونين. الكونكور صعيب بزاف.' },
      { name: 'ERA / EMIA', full: 'École Royale de l\'Air / École Militaire Interarmes', access: 'Concours militaire', duration: '3-5 ans', cities: 'Marrakech / Meknès', descFr: 'Écoles militaires formant les officiers des Forces Armées Royales. ERA pour l\'armée de l\'air, EMIA pour les forces terrestres.', descDarija: 'المدارس العسكرية ديال الضباط. ERA ف مراكش للطيران. EMIA ف مكناس للقوات البرية. الدخول بكونكور عسكري.' },
      { name: 'Académie de Police', full: 'Académie Royale de Police – DGSN', access: 'Concours de police', duration: '2-3 ans', cities: 'Kénitra', descFr: 'Formation des inspecteurs et commissaires de police. Concours ouvert aux bacheliers et licenciés.', descDarija: 'أكاديمية الشرطة ف القنيطرة. كتكوّن المفتشين والكوميسيرات. الكونكور مفتوح للباك والليسونس.' },
      { name: 'Gendarmerie Royale', full: 'École de la Gendarmerie Royale', access: 'Concours', duration: '2-3 ans', cities: 'Marrakech', descFr: 'Formation des officiers et sous-officiers de la Gendarmerie Royale. Concours post-bac ou post-licence.', descDarija: 'مدرسة الدرك الملكي ف مراكش. كتكوّن ضباط وضباط صف ديال الجندرمة. الدخول بمباراة.' },
      { name: 'Protection Civile', full: 'École de la Protection Civile', access: 'Concours', duration: '2 ans', cities: 'Casablanca', descFr: 'Formation des agents et officiers de la protection civile (pompiers, secouristes).', descDarija: 'مدرسة الوقاية المدنية (الحماية المدنية). كتكوّن رجال الإطفاء والإسعاف. الدخول بمباراة.' }
    ]
  },
  {
    id: 8, emoji: '🐟', titleFr: 'Pêche & Navigation', titleAr: 'قطاع الصيد البحري والملاحة',
    color: '#0277bd',
    schools: [
      { name: 'ISPM', full: 'Institut Supérieur de Pêche Maritime', access: 'Concours', duration: '2-3 ans', cities: 'Agadir', descFr: 'Formation de techniciens et ingénieurs en pêche maritime, navigation et gestion des ressources marines.', descDarija: 'المعهد العالي ديال الصيد البحري ف أكادير. تكوين ف الملاحة والصيد البحري وتدبير الموارد البحرية.' },
      { name: 'ISEM', full: 'Institut Supérieur d\'Études Maritimes', access: 'Concours', duration: '3-5 ans', cities: 'Casablanca', descFr: 'Formation d\'officiers de la marine marchande et d\'ingénieurs maritimes. Accès par concours après le Bac.', descDarija: 'المعهد العالي ديال الدراسات البحرية ف كازا. تكوين الضباط ديال البحرية التجارية والمهندسين البحريين.' }
    ]
  },
  {
    id: 9, emoji: '🏨', titleFr: 'Tourisme & Hôtellerie', titleAr: 'قطاع السياحة والفندقة',
    color: '#00838f',
    schools: [
      { name: 'ISITT', full: 'Institut Supérieur International du Tourisme de Tanger', access: 'Concours (présélection + oral)', duration: '3-5 ans', cities: 'Tanger', descFr: 'Formation en management touristique, hôtellerie et restauration. Diplômes reconnus à l\'international.', descDarija: 'المعهد الدولي ديال السياحة ف طنجة. تكوين ف تدبير السياحة والفنادق والمطاعم. الديبلوم معترف به دوليا.' },
      { name: 'OFPPT Tourisme', full: 'Instituts Spécialisés de Tourisme et Hôtellerie (OFPPT)', access: 'Présélection', duration: '2 ans', cities: 'Multiple villes', descFr: 'Formation professionnelle en hôtellerie, restauration et tourisme via l\'OFPPT. Diplôme de Technicien Spécialisé.', descDarija: 'معاهد OFPPT ديال السياحة والفندقة. تكوين مهني ف سنتين. الديبلوم ديال تقني متخصص.' }
    ]
  },
  {
    id: 10, emoji: '📰', titleFr: 'Médias & Traduction', titleAr: 'قطاع الإعلام والترجمة',
    color: '#ad1457',
    schools: [
      { name: 'ISIC', full: 'Institut Supérieur de l\'Information et de la Communication', access: 'Concours (écrit + oral)', duration: '4-5 ans', cities: 'Rabat', descFr: 'Formation de journalistes et de professionnels de la communication. Accès sélectif par concours.', descDarija: 'المعهد العالي ديال الإعلام والاتصال ف الرباط. كتكوّن الصحافيين ومهنيين الاتصال. الدخول بالكونكور.' },
      { name: 'ESRFT (King Fahd)', full: 'École Supérieure Roi Fahd de Traduction', access: 'Concours (langues)', duration: '5 ans', cities: 'Tanger', descFr: 'Formation de traducteurs et interprètes de haut niveau en arabe, français, anglais et espagnol.', descDarija: 'مدرسة الملك فهد للترجمة ف طنجة. تكوين المترجمين ف العربية والفرنسية والإنجليزية والإسبانية.' },
      { name: 'ENA / IRAT', full: 'École Nationale d\'Administration / IRAT', access: 'Concours (Bac+2 ou Licence)', duration: '3 ans', cities: 'Rabat', descFr: 'Formation de cadres de l\'administration publique. IRAT forme les Qaïds et administrateurs territoriaux.', descDarija: 'المدرسة الوطنية ديال الإدارة ف الرباط. IRAT كتكوّن القياد والإداريين. الدخول بالكونكور من باك+2 ولا الليسونس.' },
      { name: 'ISMAC', full: 'Institut Supérieur des Métiers de l\'Audiovisuel et du Cinéma', access: 'Concours post-bac', duration: '5 ans', cities: 'Rabat', descFr: 'Institut public formant des ingénieurs et techniciens en production audiovisuelle, réalisation cinématographique et montage.', descDarija: 'معهد عالي ديال الأوديوفيزويل والسينما ف الرباط. كيكوّن ف الإنتاج والإخراج والمونطاج السينمائي.' }
    ]
  },
  {
    id: 11, emoji: '⚽', titleFr: 'Sport', titleAr: 'القطاع الرياضي',
    color: '#ef6c00',
    schools: [
      { name: 'ENSEPS', full: 'École Normale Supérieure de l\'Éducation Physique et Sportive', access: 'Concours (écrit + épreuves physiques)', duration: '3 ans', cities: 'Casablanca', descFr: 'Formation des professeurs d\'éducation physique et sportive pour le secondaire.', descDarija: 'المدرسة العليا ديال التربية البدنية ف كازا. كتكوّن أساتذة الرياضة ديال الثانوي. الدخول بكونكور كتابي + اختبارات بدنية.' }
    ]
  },
  {
    id: 12, emoji: '📖', titleFr: 'CPGE – Prépas', titleAr: 'الأقسام التحضيرية',
    color: '#4527a0',
    schools: [
      { name: 'MPSI / PCSI / TSI', full: 'Filières Scientifiques et Technologiques', access: 'Présélection sur dossier (notes + appréciations)', duration: '2 ans', cities: 'Casablanca, Rabat, Fès, Marrakech, Meknès, Kénitra, Tanger, Oujda, Agadir…', descFr: 'MPSI (Maths-Physique), PCSI (Physique-Chimie) et TSI (Technologie). Préparation intensive de 2 ans pour le CNC donnant accès à EMI, ENSAM, ENSA, EHTP, INPT…', descDarija: 'CPGE العلمية: MPSI (رياضيات-فيزيك)، PCSI (فيزيك-شيمي)، TSI (تكنولوجيا). سنتين ديال البريبا باش تدوز CNC وتدخل EMI, ENSAM, ENSA…' },
      { name: 'BCPST', full: 'Biologie, Chimie, Physique, Sciences de la Terre', access: 'Présélection sur dossier', duration: '2 ans', cities: 'Plusieurs lycées', descFr: 'Prépa scientifique orientée SVT. Donne accès à IAV, ENAM, écoles vétérinaires et certaines écoles françaises.', descDarija: 'CPGE ديال SVT. سنتين ديال البريبا كتفتح ليك IAV، ENAM، مدارس البيطرة والمدارس الفرنسية.' },
      { name: 'ECS / ECT', full: 'Filières Économiques et Commerciales', access: 'Présélection sur dossier', duration: '2 ans', cities: 'Casablanca, Rabat, Fès, Marrakech…', descFr: 'ECS (voie scientifique) et ECT (voie technologique). Préparation aux concours des grandes écoles de commerce : ISCAE, HEC, ENCG sur titre…', descDarija: 'CPGE ديال التجارة: ECS (علمية) و ECT (تكنولوجية). سنتين ديال البريبا باش تدوز كونكور ISCAE، HEC، والمدارس الفرنسية ديال التجارة.' },
      { name: 'LSH', full: 'Lettres et Sciences Humaines', access: 'Présélection sur dossier', duration: '2 ans', cities: 'Rabat, Meknès, Kénitra…', descFr: 'CPGE littéraires préparant au concours de l\'ENS. Filières Lettres et Sciences Humaines.', descDarija: 'الأقسام التحضيرية ديال الآداب والعلوم الإنسانية. كتحضّر للمباراة ديال المدرسة العليا للأساتذة. سنتين.' }
    ]
  },
  {
    id: 13, emoji: '🏛️', titleFr: 'Universités – Accès Ouvert', titleAr: 'الجامعات ذات الاستقطاب المفتوح',
    color: '#1976d2',
    schools: [
      { name: 'FS', full: 'Faculté des Sciences', access: 'Accès ouvert (bac scientifique)', duration: '3 ans Licence / 5 ans Master', cities: 'Toutes les villes universitaires', descFr: 'Établissement à accès ouvert offrant des licences et masters en maths, physique, chimie, biologie, informatique. Différente de la FST (accès régulé).', descDarija: 'كلية العلوم، الدخول مفتوح لأصحاب الباك العلمي. كتقدم ليصانصات وماسترات ف الرياضيات والفيزيك والشيمي والبيولوجيا.' },
      { name: 'FLSH', full: 'Faculté des Lettres et des Sciences Humaines', access: 'Accès ouvert', duration: '3 ans Licence / 5 ans Master', cities: 'Toutes les villes universitaires', descFr: 'Accès ouvert. Licences en études arabes, françaises, anglaises, histoire, géographie, philosophie, sociologie.', descDarija: 'كلية الآداب والعلوم الإنسانية، الدخول حر. كتقدم ليصانصات ف العربية والفرنسية والإنجليزية والتاريخ والجغرافيا والفلسفة.' },
      { name: 'FP', full: 'Faculté Polydisciplinaire', access: 'Accès ouvert', duration: '3 ans Licence', cities: 'Nador, Errachidia, Khouribga, Larache, Ouarzazate, Safi, Taza, Taroudant…', descFr: 'Établissement à accès ouvert dans les villes sans université principale. Formations diversifiées (sciences, droit, lettres, économie).', descDarija: 'كلية متعددة التخصصات، الدخول حر. موجودة ف المدن لي ما فيهاش جامعة كبيرة. كتجمع بزاف ديال الشعب.' },
      { name: 'Fac. Chariaa', full: 'Faculté de la Chariaa (Quaraouiyine)', access: 'Accès ouvert', duration: '3 ans Licence', cities: 'Fès, Agadir, Aïn Sebâa', descFr: 'Faculté spécialisée en études islamiques, droit musulman et sciences religieuses, rattachée à l\'Université Al Quaraouiyine.', descDarija: 'كلية الشريعة، تابعة لجامعة القرويين. كتدرّس الفقه الإسلامي والعلوم الدينية. الدخول حر لأصحاب الباك.' }
    ]
  },
  {
    id: 14, emoji: '🔧', titleFr: 'Formation Pro (BTS/OFPPT)', titleAr: 'التكوين المهني',
    color: '#546e7a',
    schools: [
      { name: 'BTS', full: 'Brevet de Technicien Supérieur', access: 'Présélection (notes bac)', duration: '2 ans', cities: 'Lycées publics dans tout le Maroc', descFr: 'Diplôme professionnalisant post-bac en 2 ans dans les lycées publics. Filières : comptabilité, commerce, électrotechnique, mécanique, informatique…', descDarija: 'BTS ديبلوم ديال تقني عالي ف 2 سنين. كيدّوه ف الليسيات العمومية. فيه بزاف ديال الشعب: المحاسبة، التجارة، الإنفورماتيك…' },
      { name: 'ISTA / OFPPT', full: 'Instituts Spécialisés de Technologie Appliquée (Technicien Spécialisé)', access: 'Présélection (notes bac)', duration: '2 ans', cities: 'Plus de 100 centres dans tout le Maroc', descFr: 'Formation professionnelle post-bac (Technicien Spécialisé) gérée par l\'OFPPT. Filières : développement informatique, gestion, audiovisuel, commerce, électricité…', descDarija: 'ISTA ديال OFPPT. تكوين مهني بعد الباك ف مستوى تقني متخصص. 2 سنين. الإنفورماتيك، التسيير، التجارة… منتشرين ف كل المغرب.' }
    ]
  },
  {
    id: 15, emoji: '🎨', titleFr: 'Arts, Design & Cinéma', titleAr: 'الفنون والتصميم والسينما',
    color: '#e91e63',
    schools: [
      { name: 'ENSAD', full: 'École Nationale Supérieure d\'Art et de Design', access: 'Concours post-bac', duration: '5 ans', cities: 'Casablanca', descFr: 'École publique formant des designers et créateurs. Design graphique, industriel, espace et arts visuels.', descDarija: 'المدرسة الوطنية العليا ديال الفن والتصميم ف كازا. كتكوّن مصممين وفنانين ف الديزاين الغرافيكي والصناعي.' },
      { name: 'INBA / EBA', full: 'Institut National / École des Beaux-Arts', access: 'Concours post-bac', duration: '4-5 ans', cities: 'Tétouan, Casablanca', descFr: 'Écoles d\'art plastiques et visuels formant des artistes, peintres, sculpteurs et designers.', descDarija: 'المعهد الوطني ديال الفنون الجميلة ف تطوان وكازا. كيكوّن فنانين ف الرسم والنحت والفنون التشكيلية.' },
      { name: 'Conservatoire', full: 'Conservatoire National de Musique et de Danse', access: 'Test d\'aptitude', duration: 'Variable', cities: 'Rabat, Casablanca…', descFr: 'Établissements publics formant des musiciens, danseurs et professionnels du spectacle vivant.', descDarija: 'الكونسيرفاتوار الوطني ديال الموسيقى والرقص. كيكوّن موسيقيين وراقصين وفنانين ديال العروض الحية.' }
    ]
  },
  {
    id: 16, emoji: '🌍', titleFr: 'Universités Privées', titleAr: 'الجامعات الخاصة',
    color: '#00695c',
    schools: [
      { name: 'UIR', full: 'Université Internationale de Rabat', access: 'Concours / dossier', duration: '3-5 ans', cities: 'Rabat', descFr: 'Université semi-publique : ingénierie, médecine, droit, architecture, sciences politiques.', descDarija: 'الجامعة الدولية ديال الرباط، شبه عمومية. فيها الهندسة والطب والقانون والعمارة.' },
      { name: 'UIC', full: 'Université Internationale de Casablanca', access: 'Concours / dossier', duration: '3-5 ans', cities: 'Casablanca', descFr: 'Groupe universitaire privé offrant ingénierie, commerce, santé et architecture.', descDarija: 'الجامعة الدولية ديال كازا، خاصة. فيها بزاف ديال الشعب: الهندسة والتجارة والصحة والعمارة.' },
      { name: 'AUI', full: 'Université Al Akhawayn', access: 'Dossier + test (anglophone)', duration: '4 ans (système américain)', cities: 'Ifrane', descFr: 'Université privée anglophone. Système américain (Bachelor/Master). Sciences, business, ingénierie, humanities.', descDarija: 'جامعة الأخوين ف إفران، خاصة وبالإنجليزية. نظام أمريكي (باشلر/ماستر). فيها العلوم والتجارة والهندسة.' },
      { name: 'UEMF / UM6P', full: 'Univ. Euro-Méditerranéenne / Univ. Mohammed VI Polytechnique', access: 'Concours / dossier', duration: 'Variable', cities: 'Fès / Ben Guérir', descFr: 'Universités à vocation internationale. UEMF : sciences politiques, ingénierie, design. UM6P : agriculture, mines, tech, recherche.', descDarija: 'جامعات دولية. UEMF ف فاس فيها الهندسة والسياسة والتصميم. UM6P ف بن جرير فيها الفلاحة والمناجم والتكنولوجيا.' },
      { name: 'EMSI', full: 'École Marocaine des Sciences de l\'Ingénieur', access: 'Concours (privé reconnu)', duration: '5 ans', cities: 'Casablanca, Rabat, Marrakech, Tanger', descFr: 'Plus grande école d\'ingénieurs privée au Maroc, reconnue par l\'État. Informatique, génie civil, réseaux, industriel.', descDarija: 'أكبر مدرسة مهندسين خاصة ف المغرب، معترف بيها من الدولة. كتكوّن ف الإنفورماتيك والهندسة المدنية والصناعية.' }
    ]
  }
];

const SectorPopup = ({ sector, onClose }) => {
  const [selectedSchool, setSelectedSchool] = useState(null);

  return (
    <div className="sect-overlay" onClick={onClose}>
      <div className="sect-popup" onClick={e => e.stopPropagation()} style={{ '--sect-color': sector.color }}>
        <button className="sect-popup__close" onClick={onClose}>✕</button>
        <div className="sect-popup__accent" />
        <div className="sect-popup__content">
          {/* Header */}
          <div className="sect-popup__header">
            <span className="sect-popup__header-emoji">{sector.emoji}</span>
            <div>
              <h3 className="sect-popup__title">{sector.titleFr}</h3>
              <span className="sect-popup__title-ar">{sector.titleAr}</span>
            </div>
          </div>

          {/* Schools list */}
          <div className="sect-popup__schools">
            {sector.schools.map((s, i) => (
              <div
                key={i}
                className={`sect-school ${selectedSchool === i ? 'sect-school--active' : ''}`}
                onClick={() => setSelectedSchool(selectedSchool === i ? null : i)}
              >
                <div className="sect-school__header">
                  <div className="sect-school__name">
                    <strong>{s.name}</strong>
                    <span className="sect-school__full">{s.full}</span>
                  </div>
                  <div className="sect-school__meta">
                    <span className="sect-school__dur">⏱ {s.duration}</span>
                  </div>
                  <span className="sect-school__arrow">{selectedSchool === i ? '▾' : '›'}</span>
                </div>

                {selectedSchool === i && (
                  <div className="sect-school__details">
                    <div className="sect-school__info-row">
                      <span>📍 <strong>Villes :</strong> {s.cities}</span>
                    </div>
                    <div className="sect-school__info-row">
                      <span>🔑 <strong>Accès :</strong> {s.access}</span>
                    </div>
                    <div className="sect-school__sep" />
                    <div className="sect-school__section">
                      <div className="sect-school__lang-label">Français</div>
                      <p className="sect-school__text">{s.descFr}</p>
                    </div>
                    <div className="sect-school__section sect-school__section--darija">
                      <div className="sect-school__lang-label sect-school__lang-label--darija">بالدارجة</div>
                      <p className="sect-school__text-darija">{s.descDarija}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EcolesSlideContent = () => {
  const [selectedSector, setSelectedSector] = useState(null);

  return (
      <div className="ecol-slide">
        <div className="ecol-bg ecol-bg-1" />
        <div className="ecol-bg ecol-bg-2" />

        {/* Header */}
        <div className="ecol-header">
          <div className="ecol-header__badge">GUIDE DES ÉCOLES</div>
          <h2 className="ecol-header__title">
            Types d'Établissements <span>Après le Bac</span>
          </h2>
          <p className="ecol-header__subtitle">أنواع المؤسسات بعد الباكالوريا</p>
        </div>

        {/* Access type cards */}
        <div className="ecol-access-row">
          {accessTypes.map((a, i) => (
            <div key={i} className="ecol-access" style={{ '--acc-color': a.color }}>
              <span className="ecol-access__emoji">{a.emoji}</span>
              <div className="ecol-access__info">
                <div className="ecol-access__titles">
                  <strong>{a.titleFr}</strong>
                  <span className="ecol-access__ar">{a.titleAr}</span>
                </div>
                <p className="ecol-access__desc">{a.desc}</p>
                <p className="ecol-access__ex">{a.examples}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sectors grid */}
        <div className="ecol-sectors-grid">
          {sectors.map((s) => (
            <div
              key={s.id}
              className="ecol-sector"
              onClick={() => setSelectedSector(s)}
              style={{ '--sect-color': s.color }}
            >
              <span className="ecol-sector__emoji">{s.emoji}</span>
              <span className="ecol-sector__title">{s.titleFr}</span>
              <span className="ecol-sector__count">{s.schools.length} école{s.schools.length > 1 ? 's' : ''}</span>
            </div>
          ))}
        </div>
        <p className="ecol-hint">Cliquez sur un secteur pour voir les écoles et les détails</p>

        {/* Popup */}
        {selectedSector && (
          <SectorPopup
            sector={selectedSector}
            onClose={() => setSelectedSector(null)}
          />
        )}
      </div>
  );
};

// ─── SLIDE 7: Critères de Choix ─────────────────────────────
const CriteresSlideContent = () => (
    <div className="crit-slide">
      <div className="crit-bg crit-bg-1" />
      <div className="crit-bg crit-bg-2" />

      {/* Header */}
      <div className="crit-header">
        <div className="crit-header__badge">🧭 ORIENTATION</div>
        <h2 className="crit-header__title">
          Comment Choisir <span>le Bon Parcours</span> ?
        </h2>
        <p className="crit-header__subtitle-ar">كيفاش تختار الطريق الصحيح؟</p>
      </div>

      {/* Placeholder area for future schema */}
      <div className="crit-placeholder">
        <div className="crit-placeholder__icon">🗺️</div>
        <p className="crit-placeholder__text">Schéma d'aide au choix à venir…</p>
        <p className="crit-placeholder__hint">Critères basés sur vos préférences, compétences et objectifs</p>
      </div>
    </div>
);

// ─── SLIDE 11: Thank You / Merci + Contact ─────────────────

const CONTACT_EMAIL = 'example@gmail.com';
const PHONE_NUMBER = '+212 505050505';
const MAPS_LINK = 'https://maps.google.com/?q=Khouribga+Maroc';

const ThankYouSlideContent = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nouveau contact de ${form.name}`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nTéléphone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_self');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
      <div className="ty-slide">
        {/* Background */}
        <div className="ty-orb ty-orb-1" />
        <div className="ty-orb ty-orb-2" />
        <div className="ty-orb ty-orb-3" />
        <div className="ty-grid-overlay" />

        {/* ── LEFT: Thank you + contact info ── */}
        <div className="ty-left">
          <div className="ty-logo-wrap">
            <img src={companyLogo} alt="Come To Study" className="ty-logo" />
          </div>

          <h1 className="ty-title">Merci !</h1>
          <p className="ty-title-ar">شكراً لكم</p>

          <div className="ty-divider" />

          <p className="ty-subtitle">Pour votre attention et votre confiance</p>
          <p className="ty-subtitle-ar">على الاهتمام ديالكم والثقة ديالكم</p>

          {/* Contact info cards */}
          <div className="ty-info-cards">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="ty-info-card ty-info-card--phone">
              <div className="ty-info-card__icon-wrap">📞</div>
              <div className="ty-info-card__body">
                <span className="ty-info-card__label">Appelez-nous</span>
                <span className="ty-info-card__value">{PHONE_NUMBER}</span>
              </div>
              <span className="ty-info-card__arrow">→</span>
            </a>

            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="ty-info-card ty-info-card--location">
              <div className="ty-info-card__icon-wrap">📍</div>
              <div className="ty-info-card__body">
                <span className="ty-info-card__label">Localisation</span>
                <span className="ty-info-card__value">Khouribga, Maroc</span>
              </div>
              <span className="ty-info-card__arrow">→</span>
            </a>

            <a href={`mailto:${CONTACT_EMAIL}`} className="ty-info-card ty-info-card--email">
              <div className="ty-info-card__icon-wrap">✉️</div>
              <div className="ty-info-card__body">
                <span className="ty-info-card__label">Email</span>
                <span className="ty-info-card__value">{CONTACT_EMAIL}</span>
              </div>
              <span className="ty-info-card__arrow">→</span>
            </a>
          </div>

          <div className="ty-cta">
            <span className="ty-cta__text">Votre avenir commence ici</span>
            <span className="ty-cta__text-ar">المستقبل ديالك كيبدا هنا</span>
          </div>
        </div>

        {/* ── RIGHT: Contact form ── */}
        <div className="ty-right">
          <div className="ty-form-card">
            <div className="ty-form-card__header">
              <h3 className="ty-form-card__title">Contactez-Nous</h3>
              <p className="ty-form-card__title-ar">تواصلو معانا</p>
            </div>

            <form className="ty-form" onSubmit={handleSubmit}>
              <div className="ty-form__group">
                <label className="ty-form__label">Nom complet</label>
                <input
                  className="ty-form__input"
                  type="text"
                  name="name"
                  placeholder="Votre nom..."
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ty-form__row">
                <div className="ty-form__group">
                  <label className="ty-form__label">Email</label>
                  <input
                    className="ty-form__input"
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ty-form__group">
                  <label className="ty-form__label">Téléphone</label>
                  <input
                    className="ty-form__input"
                    type="tel"
                    name="phone"
                    placeholder="+212 ..."
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="ty-form__group">
                <label className="ty-form__label">Message</label>
                <textarea
                  className="ty-form__textarea"
                  name="message"
                  placeholder="Votre message..."
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={`ty-form__btn ${sent ? 'ty-form__btn--sent' : ''}`}>
                {sent ? (
                  <><span className="ty-form__btn-check">✓</span> Envoyé !</>
                ) : (
                  <><span className="ty-form__btn-icon">✈</span> Envoyer le message</>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Floating shapes */}
        <div className="ty-float ty-float-1" />
        <div className="ty-float ty-float-2" />
        <div className="ty-float ty-float-3" />
      </div>
  );
};

// ─── MAIN PRESENTATION ──────────────────────────────────────
const Presentation = () => (
  <Deck
    theme={theme}
    template={({ slideNumber, numberOfSlides }) => (
      <CustomTemplate slideNumber={slideNumber} numberOfSlides={numberOfSlides} />
    )}
    overviewMode={false}
  >
    <Slide backgroundColor="#0a1628" padding={0}><TitleSlideContent /></Slide>
    <Slide backgroundColor="#b8d4f8" padding={0}><ProfessorsSlideContent /></Slide>
    <Slide backgroundColor="#b0c8ee" padding={0}><ConfusionSlideContent /></Slide>
    <Slide backgroundColor="#c8dcf6" padding={0}><PlanSlideContent /></Slide>
    <Slide backgroundColor="#b4d0f8" padding={0}><DiplomesSlideContent /></Slide>
    <Slide backgroundColor="#bccef4" padding={0}><EcolesSlideContent /></Slide>
    <Slide backgroundColor="#c0d4f6" padding={0}><CriteresSlideContent /></Slide>
    <Slide backgroundColor="#b4c4e6" padding={0}><ErreursSlideContent /></Slide>
    <Slide backgroundColor="#0a1628" padding={0}><SolutionSlideContent /></Slide>
    <Slide backgroundColor="#7ab4f2" padding={0}><WhyUsSlideContent /></Slide>
    <Slide backgroundColor="#a8bce8" padding={0}><ThankYouSlideContent /></Slide>
  </Deck>
);

const root = createRoot(document.getElementById('root'));
root.render(<Presentation />);
