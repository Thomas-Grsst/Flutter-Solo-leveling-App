/* @ds-bundle: {"format":4,"namespace":"SKERAConsoleDesignSystem_b835ab","components":[{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"KpiCard","sourcePath":"components/cards/KpiCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Gauge","sourcePath":"components/core/Gauge.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"SearchField","sourcePath":"components/core/SearchField.jsx"},{"name":"Segmented","sourcePath":"components/core/Segmented.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"},{"name":"DataTable","sourcePath":"components/datatable/DataTable.jsx"},{"name":"SubTable","sourcePath":"components/datatable/DataTable.jsx"},{"name":"DatePicker","sourcePath":"components/datepicker/DatePicker.jsx"},{"name":"Loader","sourcePath":"components/feedback/Loader.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/Loader.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"SkeletonRow","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"SkeletonKpi","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Snackbar","sourcePath":"components/feedback/Snackbar.jsx"},{"name":"SnackbarStack","sourcePath":"components/feedback/Snackbar.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"FilterBar","sourcePath":"components/filters/FilterBar.jsx"},{"name":"FilterButton","sourcePath":"components/filters/FilterBar.jsx"},{"name":"FilterPanel","sourcePath":"components/filters/FilterPanel.jsx"},{"name":"FilterToken","sourcePath":"components/filters/FilterToken.jsx"},{"name":"FilterAdd","sourcePath":"components/filters/FilterToken.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"TextInput","sourcePath":"components/forms/Field.jsx"},{"name":"TextArea","sourcePath":"components/forms/Field.jsx"},{"name":"Select","sourcePath":"components/forms/Field.jsx"},{"name":"Combobox","sourcePath":"components/forms/Field.jsx"},{"name":"ImpersonationBanner","sourcePath":"components/navigation/ImpersonationBanner.jsx"},{"name":"PerimeterSelect","sourcePath":"components/navigation/PerimeterSelect.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Topbar","sourcePath":"components/navigation/Topbar.jsx"},{"name":"NotificationPanel","sourcePath":"components/notifications/NotificationPanel.jsx"},{"name":"Modal","sourcePath":"components/overlays/Modal.jsx"},{"name":"ModalField","sourcePath":"components/overlays/Modal.jsx"},{"name":"ModalInput","sourcePath":"components/overlays/Modal.jsx"},{"name":"CommandPalette","sourcePath":"components/search/CommandPalette.jsx"},{"name":"PALETTE_CHIPS","sourcePath":"components/search/CommandPalette.jsx"},{"name":"EmptyState","sourcePath":"components/states/EmptyState.jsx"},{"name":"Stepper","sourcePath":"components/stepper/Stepper.jsx"},{"name":"ColumnsMenu","sourcePath":"components/table/ColumnsMenu.jsx"},{"name":"ContextMenu","sourcePath":"components/table/ContextMenu.jsx"},{"name":"Pagination","sourcePath":"components/table/Pagination.jsx"}],"sourceHashes":{"components/cards/Card.jsx":"fa2320799c4b","components/cards/KpiCard.jsx":"fb5e730fed8a","components/core/Button.jsx":"be252ffa12aa","components/core/Checkbox.jsx":"4f3d9d737a23","components/core/Gauge.jsx":"64822331638a","components/core/Icon.jsx":"96aa6b0351dc","components/core/Kbd.jsx":"b5ee2747f56d","components/core/SearchField.jsx":"82d12f784bbd","components/core/Segmented.jsx":"6ab0e9ec02fa","components/core/StatusPill.jsx":"a37070480e81","components/core/Toggle.jsx":"7fc6e95e87b8","components/datatable/DataTable.jsx":"314008b15805","components/datepicker/DatePicker.jsx":"e3aeea211c55","components/feedback/Loader.jsx":"346eb0d5e020","components/feedback/Skeleton.jsx":"f74a62299b4c","components/feedback/Snackbar.jsx":"efe32855cea5","components/feedback/Tooltip.jsx":"f22ef999e1ee","components/filters/FilterBar.jsx":"91ff8fbd56ef","components/filters/FilterPanel.jsx":"bc4b4115a74b","components/filters/FilterToken.jsx":"576d72333a49","components/forms/Field.jsx":"d7085fce71e2","components/navigation/ImpersonationBanner.jsx":"ca3283fea8f1","components/navigation/PerimeterSelect.jsx":"f41c5f282b77","components/navigation/Sidebar.jsx":"36d96f7f8478","components/navigation/Topbar.jsx":"6a73b8292e73","components/notifications/NotificationPanel.jsx":"09824291107b","components/overlays/Modal.jsx":"5507b29446f9","components/search/CommandPalette.jsx":"c17d2614efb5","components/states/EmptyState.jsx":"7f0c6117a012","components/stepper/Stepper.jsx":"a03d10ae71de","components/table/ColumnsMenu.jsx":"ba5dd12cb6ab","components/table/ContextMenu.jsx":"4026c1c79a5c","components/table/Pagination.jsx":"257124afbd56","extracted/v-c4875e08.js":"d93964ac7393","ui_kits/console/doc-page.js":"f52ae9c02fca","ui_kits/console/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SKERAConsoleDesignSystem_b835ab = window.SKERAConsoleDesignSystem_b835ab || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/Card.jsx
try { (() => {
const EDGE = {
  signal: 'var(--accent)',
  ok: 'var(--ok-bar, var(--ok))',
  warn: 'var(--warn-bar, var(--warn))',
  crit: 'var(--crit)',
  info: 'var(--info-bar, var(--info))'
};
/** Carte SKERA — neutre, signal (liseré accent 3px), statut (liseré sémantique), coin bento optionnel. Jamais de fond coloré plein. */
function Card({
  edge,
  bento,
  padding = '16px 18px',
  children,
  style
}) {
  const s = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border)',
    borderRadius: bento ? 'var(--r-card) 0 var(--r-card) var(--r-card)' : 'var(--r-card)',
    boxShadow: 'var(--shadow-card)',
    padding,
    position: 'relative',
    overflow: bento ? 'hidden' : undefined,
    ...(edge ? {
      borderLeft: `3px solid ${EDGE[edge] || EDGE.signal}`
    } : null),
    ...style
  };
  return React.createElement('div', {
    style: s
  }, bento && React.createElement('div', {
    style: {
      position: 'absolute',
      top: -1,
      right: -1,
      width: 27,
      height: 27,
      background: 'var(--bg-page)',
      borderLeft: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      borderRadius: '0 0 0 10px'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/KpiCard.jsx
try { (() => {
/** Carte KPI — liseré gauche accent 3px, valeur display 800 tracking -0.045em, label micro-uppercase. */
function KpiCard({
  label,
  value,
  unit,
  detail,
  edge = 'left',
  tone,
  style
}) {
  const topBar = edge === 'top';
  const barColor = tone === 'ok' ? 'var(--ok-bar,var(--ok))' : tone === 'warn' ? 'var(--warn-bar,var(--warn))' : tone === 'crit' ? 'var(--crit)' : 'var(--accent)';
  return React.createElement(__ds_scope.Card, {
    padding: '15px 18px',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...(topBar ? {
        borderTop: `2px solid ${barColor}`
      } : {
        borderLeft: `3px solid ${barColor}`
      }),
      ...style
    }
  }, React.createElement('span', {
    style: {
      font: '600 10px var(--font-ui)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-micro)'
    }
  }, label), React.createElement('span', {
    style: {
      font: '800 27px/1.05 var(--font-ui)',
      letterSpacing: '-0.045em',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--ink)'
    }
  }, value, unit && React.createElement('small', {
    style: {
      font: '600 13px var(--font-ui)',
      color: 'var(--ink-weak)',
      marginLeft: 6,
      letterSpacing: 0
    }
  }, unit)), detail && React.createElement('span', {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-2)'
    }
  }, detail));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/** Bouton SKERA — primaire (accent + halo), ghost, destructif (#C42121), sm. Rayon 8px, jamais pill. */
function Button({
  variant = 'ghost',
  size = 'md',
  icon,
  children,
  disabled,
  onClick,
  style
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: size === 'sm' ? '6px 11px' : '9px 15px',
    borderRadius: 'var(--r-btn)',
    border: '1px solid transparent',
    font: `600 ${size === 'sm' ? '11.5px' : '12.5px'} var(--font-ui)`,
    whiteSpace: 'nowrap',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? .55 : 1
  };
  const variants = {
    primary: {
      background: 'var(--accent-solid)',
      color: '#fff',
      boxShadow: 'var(--shadow-cta)'
    },
    ghost: {
      background: 'var(--surface-card)',
      color: 'var(--ink)',
      border: '1px solid var(--border)'
    },
    destructive: {
      background: 'var(--crit-solid)',
      color: '#fff'
    },
    destructiveGhost: {
      background: 'var(--crit-soft)',
      color: 'var(--crit)'
    }
  };
  return React.createElement('button', {
    onClick: disabled ? undefined : onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Gauge.jsx
try { (() => {
const C = {
  g: '#3DD68C',
  o: '#EAB308',
  r: '#E5484D',
  accent: 'var(--accent)'
};
/** Jauge « pixel » — barre 6px, label + valeur tabulaire. */
function Gauge({
  label,
  value,
  max = 100,
  tone = 'accent',
  showValue = true,
  style
}) {
  const pct = Math.min(100, Math.round(value / max * 100));
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label != null && React.createElement('div', {
    style: {
      display: 'flex',
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, React.createElement('b', {
    style: {
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, label), showValue && React.createElement('span', {
    style: {
      marginLeft: 'auto',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600,
      color: tone === 'r' ? 'var(--err)' : tone === 'o' ? 'var(--warn)' : 'var(--ink)'
    }
  }, pct + ' %')), React.createElement('div', {
    style: {
      height: 6,
      borderRadius: 999,
      background: 'var(--surface-alt)',
      overflow: 'hidden'
    }
  }, React.createElement('i', {
    style: {
      display: 'block',
      height: '100%',
      width: pct + '%',
      borderRadius: 999,
      background: C[tone] || C.accent
    }
  })));
}
Object.assign(__ds_scope, { Gauge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Gauge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const P = {
  search: '<circle cx="11" cy="11" r="7"/><path d="M16.5 16.5 21 21"/>',
  user: '<circle cx="12" cy="8" r="3.5"/><path d="M4.5 20c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6"/>',
  box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
  bell: '<path d="M18 9a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6"/><path d="M10.5 20a2 2 0 0 0 3 0"/>',
  panelLeft: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9.5 4v16"/>',
  ticket: '<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v2a2.5 2.5 0 0 0 0 5v2a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-2a2.5 2.5 0 0 0 0-5z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  building: '<path d="M3 21h18"/><path d="M5 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15"/><path d="M15 11h3a2 2 0 0 1 2 2v8"/><path d="M8.5 8h3M8.5 12h3M8.5 16h3"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  network: '<rect x="9" y="3" width="6" height="5" rx="1.5"/><rect x="2.5" y="16" width="6" height="5" rx="1.5"/><rect x="15.5" y="16" width="6" height="5" rx="1.5"/><path d="M12 8v4M5.5 16v-2a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2"/>',
  shield: '<path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  fileText: '<path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5M9 13h6M9 17h6"/>',
  receipt: '<path d="M4 2v20l2-1.5L8 22l2-1.5L12 22l2-1.5L16 22l2-1.5L20 22V2l-2 1.5L16 2l-2 1.5L12 2l-2 1.5L8 2 6 3.5z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronRight: '<path d="m9 6 6 6-6 6"/>',
  chevronLeft: '<path d="m15 6-6 6 6 6"/>',
  chevronUp: '<path d="m6 15 6-6 6 6"/>',
  check: '<path d="M4 12.5 9.5 18 20 6.5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  gripVertical: '<circle cx="9" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="18" r="1"/>',
  moreVertical: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  key: '<circle cx="8" cy="16" r="4"/><path d="m10.8 13.2 8.7-8.7M15 7l2.5 2.5M18 4l2 2"/>',
  trash: '<path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13M10 11v6M14 11v6"/>',
  externalLink: '<path d="M15 3h6v6M21 3l-9 9M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  rotateCw: '<path d="M21 12a9 9 0 1 1-2.6-6.3L21 8"/><path d="M21 3v5h-5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
  alertTriangle: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  columns: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18"/>',
  filter: '<path d="M4 5h16l-6.5 7.7V19l-3-1.5v-4.8z"/>',
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  layoutDashboard: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
  cornerDownLeft: '<path d="M20 4v7a4 4 0 0 1-4 4H4"/><path d="m9 10-5 5 5 5"/>',
  arrowUpDown: '<path d="m7 15-4 4 4 4M3 19h13"/><path d="m17 9 4-4-4-4M21 5H8"/>',
  loader: '<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13.5 13.5 0 0 1 0 18 13.5 13.5 0 0 1 0-18z"/>',
  history: '<path d="M3 12a9 9 0 1 0 2.6-6.3L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 3"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M12 11v5"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 5-5"/>',
  xCircle: '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>',
  alertCircle: '<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.2 4.2M9.9 5.1A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-2.6 3.4M6.3 6.3C3.6 8.2 2 12 2 12s3.5 7 10 7c1.4 0 2.6-.3 3.7-.7"/>',
  pencil: '<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
  play: '<path d="M6 4l14 8-14 8z"/>',
  pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
  power: '<path d="M12 2v10M18.4 6.6a9 9 0 1 1-12.8 0"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  upload: '<path d="M12 21V9m0 0-4 4m4-4 4 4"/><path d="M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
  archive: '<rect x="3" y="4" width="18" height="5" rx="1"/><path d="M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M10 13h4"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  unlock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.7-1.5"/>',
  plusCircle: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  minus: '<path d="M5 12h14"/>',
  arrowRight: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5m6 6-6-6 6-6"/>',
  wifiOff: '<path d="M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 12.5a10 10 0 0 1 5.2-2.7M12.8 5.1A15 15 0 0 1 22 9M2 9a15 15 0 0 1 4.3-2.6"/><path d="M12 20h.01"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
  bookmark: '<path d="M19 21 12 16.5 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/><path d="M1 14h6M9 8h6M17 16h6"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  terminal: '<path d="m5 7 5 5-5 5M12 19h8"/>',
  hardDrive: '<path d="M22 12H2M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.8 1.5z"/><path d="M6 16h.01M10 16h.01"/>',
  cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  chevronsUpDown: '<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',
  listFilter: '<path d="M3 6h18M7 12h10M10 18h4"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  fileDown: '<path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5M12 12v6m0 0-3-3m3 3 3-3"/>',
  message: '<path d="M21 12a8 8 0 0 1-8 8H6l-3 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"/>',
  helpCircle: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17h.01"/>'
};
/** Icône Lucide inline — trait 1.75, taille 14–20px. */
function Icon({
  name,
  size = 16,
  strokeWidth = 1.75,
  style
}) {
  const d = P[name] || P.box;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      flex: 'none',
      ...style
    },
    'aria-hidden': true,
    dangerouslySetInnerHTML: {
      __html: d
    }
  });
}
const ICON_NAMES = Object.keys(P);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/** Case à cocher 16px — cochée = fond accent. */
function Checkbox({
  checked,
  onChange,
  disabled,
  label,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontSize: 12.5,
      color: 'var(--ink)',
      ...style
    }
  }, React.createElement('span', {
    onClick: disabled ? undefined : () => onChange && onChange(!checked),
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: checked ? '1px solid var(--accent-solid)' : '1px solid var(--border)',
      background: checked ? 'var(--accent-solid)' : 'var(--surface-card)',
      color: '#fff'
    }
  }, checked && React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 11,
    strokeWidth: 3
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
/** Rappel clavier — Ctrl K, Échap, ↑↓, ↵. */
function Kbd({
  children,
  style
}) {
  return React.createElement('kbd', {
    style: {
      font: '600 10px var(--font-ui)',
      color: 'var(--ink-weak)',
      border: '1px solid var(--border)',
      borderRadius: 4,
      padding: '1px 5px',
      background: 'var(--surface-card)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/core/SearchField.jsx
try { (() => {
/** Champ de recherche — surface page, bordure fine, raccourci Ctrl K optionnel. */
function SearchField({
  placeholder = 'Rechercher…',
  shortcut,
  onClick,
  focus,
  style
}) {
  return React.createElement('button', {
    onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 8px 0 10px',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      cursor: 'pointer',
      border: focus ? '1px solid var(--accent)' : '1px solid var(--border)',
      boxShadow: focus ? '0 0 0 3px var(--accent-mist)' : 'none',
      borderRadius: 'var(--r-btn)',
      background: 'var(--bg-page)',
      color: 'var(--ink-2)',
      font: '400 13px var(--font-ui)',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'search',
    size: 15
  }), React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, placeholder), shortcut && React.createElement(__ds_scope.Kbd, null, shortcut));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/core/Segmented.jsx
try { (() => {
/** Contrôle segmenté — segment actif = fond accent doux + texte accent. Bascule Admin/Client, toggle de thème. */
function Segmented({
  options,
  value,
  onChange,
  pill = false,
  size = 'md',
  style
}) {
  const r = pill ? 999 : 'var(--r-field)';
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      border: '1px solid var(--border)',
      borderRadius: r,
      padding: 2,
      gap: 2,
      background: 'var(--surface-card)',
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    const on = opt.value === value;
    return React.createElement('button', {
      key: opt.value,
      onClick: () => onChange && onChange(opt.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: size === 'sm' ? '4px 8px' : '6px 12px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: pill ? 999 : 'calc(var(--r-field) - 2px)',
        font: `${on ? 600 : 500} 12px var(--font-ui)`,
        background: on ? 'var(--accent-soft)' : 'transparent',
        color: on ? 'var(--accent-ink)' : 'var(--ink-2)'
      }
    }, opt.icon, opt.label);
  }));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
const TONES = {
  ok: ['var(--ok)', 'var(--ok-soft)'],
  info: ['var(--info)', 'var(--info-soft)'],
  warn: ['var(--warn)', 'var(--warn-soft)'],
  err: ['var(--err)', 'var(--err-soft)'],
  neutral: ['var(--neutral)', 'var(--neutral-soft)'],
  accent: ['var(--accent-ink)', 'var(--accent-soft)']
};
/** Pastille d'état — pill 999px, micro-uppercase, point ou spinner. */
function StatusPill({
  tone = 'neutral',
  spinning,
  children,
  style
}) {
  const [fg, bg] = TONES[tone] || TONES.neutral;
  const dot = spinning ? React.createElement('span', {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      border: '1.5px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'skera-spin 1s linear infinite'
    }
  }) : React.createElement('span', {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  });
  return React.createElement(React.Fragment, null, React.createElement('style', null, '@keyframes skera-spin{to{transform:rotate(360deg)}}'), React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 999,
      font: '600 9.5px var(--font-ui)',
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      color: fg,
      background: bg,
      ...style
    }
  }, dot, children));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
/** Interrupteur 34×19 — actif = accent. */
function Toggle({
  on,
  onChange,
  style
}) {
  return React.createElement('span', {
    onClick: () => onChange && onChange(!on),
    style: {
      width: 34,
      height: 19,
      borderRadius: 999,
      position: 'relative',
      flex: 'none',
      cursor: 'pointer',
      display: 'inline-block',
      background: on ? 'var(--accent)' : 'var(--surface-alt)',
      border: on ? '1px solid var(--accent)' : '1px solid var(--border)',
      ...style
    }
  }, React.createElement('b', {
    style: {
      position: 'absolute',
      top: 1.5,
      left: on ? 'auto' : 2,
      right: on ? 2 : 'auto',
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(0,0,0,.25)'
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/datepicker/DatePicker.jsx
try { (() => {
const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const DAYS = ['lu', 'ma', 'me', 'je', 've', 'sa', 'di'];
function grid(y, m) {
  const first = new Date(y, m, 1);
  let off = (first.getDay() + 6) % 7;
  const n = new Date(y, m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < off; i++) cells.push(null);
  for (let d = 1; d <= n; d++) cells.push(d);
  while (cells.length % 7) cells.push(null);
  return cells;
}
/** Sélecteur de date (ou plage) — champ + calendrier mensuel, lundi en premier, chiffres tabulaires. */
function DatePicker({
  year = 2026,
  month = 9,
  value,
  rangeEnd,
  today = 5,
  open = true,
  label,
  presets = ['Aujourd\u2019hui', '7 derniers jours', '30 derniers jours', 'Ce mois'],
  style
}) {
  const cells = grid(year, month);
  const inR = d => value && rangeEnd && d > value && d < rangeEnd;
  const fmt = d => d ? String(d).padStart(2, '0') + '/' + String(month + 1).padStart(2, '0') + '/' + year : '';
  return React.createElement('div', {
    style: {
      position: 'relative',
      width: 300,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label && React.createElement('div', {
    style: {
      font: '600 10px var(--font-ui)',
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--ink-micro)',
      marginBottom: 6
    }
  }, label), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 11px',
      border: open ? '1px solid var(--accent)' : '1px solid var(--border)',
      boxShadow: open ? '0 0 0 3px var(--accent-mist)' : 'none',
      borderRadius: 'var(--r-field)',
      background: 'var(--bg-page)',
      fontSize: 12.5,
      fontVariantNumeric: 'tabular-nums'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'calendar',
    size: 15,
    style: {
      color: 'var(--ink-weak)'
    }
  }), React.createElement('span', {
    style: {
      flex: 1,
      color: value ? 'var(--ink)' : 'var(--ink-weak)',
      fontWeight: value ? 500 : 400
    }
  }, value ? rangeEnd ? fmt(value) + ' → ' + fmt(rangeEnd) : fmt(value) : 'JJ/MM/AAAA')), open && React.createElement('div', {
    style: {
      position: 'absolute',
      top: '100%',
      marginTop: 6,
      left: 0,
      width: 300,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      boxShadow: 'var(--shadow-pop)',
      padding: 12,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement('span', {
    style: {
      display: 'flex',
      padding: 4,
      borderRadius: 6,
      color: 'var(--ink-2)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevronLeft',
    size: 15
  })), React.createElement('b', {
    style: {
      flex: 1,
      textAlign: 'center',
      font: '700 13px var(--font-ui)',
      textTransform: 'capitalize',
      color: 'var(--ink)'
    }
  }, MONTHS[month] + ' ' + year), React.createElement('span', {
    style: {
      display: 'flex',
      padding: 4,
      borderRadius: 6,
      color: 'var(--ink-2)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevronRight',
    size: 15
  }))), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 2
    }
  }, DAYS.map(d => React.createElement('span', {
    key: d,
    style: {
      textAlign: 'center',
      font: '600 9.5px var(--font-ui)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-micro)',
      padding: '2px 0 6px'
    }
  }, d)), cells.map((d, i) => {
    const sel = d === value || d === rangeEnd;
    const range = inR(d);
    const isT = d === today;
    return React.createElement('span', {
      key: i,
      style: {
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: range ? 0 : 8,
        fontSize: 12.5,
        fontVariantNumeric: 'tabular-nums',
        color: !d ? 'transparent' : sel ? '#fff' : 'var(--ink)',
        background: sel ? 'var(--accent)' : range ? 'var(--accent-soft)' : 'transparent',
        fontWeight: sel || isT ? 700 : 500,
        boxShadow: isT && !sel ? 'inset 0 0 0 1px var(--accent)' : 'none'
      }
    }, d || '');
  })), presets.length > 0 && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      paddingTop: 8,
      borderTop: '1px solid var(--border)'
    }
  }, presets.map((p, i) => React.createElement('span', {
    key: i,
    style: {
      padding: '4px 9px',
      borderRadius: 999,
      border: i === 0 ? '1px solid var(--accent)' : '1px solid var(--border)',
      background: i === 0 ? 'var(--accent-soft)' : 'var(--surface-card)',
      color: i === 0 ? 'var(--accent-ink)' : 'var(--ink-2)',
      font: '600 11px var(--font-ui)'
    }
  }, p)))));
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/datepicker/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Loader.jsx
try { (() => {
/** Loader : spinner 1s linear (16/20/28px) + libellé optionnel. Jamais en plein écran — préférer Skeleton pour une page. */
function Loader({
  size = 20,
  label,
  inline = true,
  tone = 'accent',
  style
}) {
  const color = tone === 'accent' ? 'var(--accent)' : 'var(--ink-2)';
  return React.createElement('span', {
    role: 'status',
    style: {
      display: inline ? 'inline-flex' : 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--ink-2)',
      font: '500 12px var(--font-ui)',
      ...style
    }
  }, React.createElement('style', null, '@keyframes skera-spin{to{transform:rotate(360deg)}}'), React.createElement('span', {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: Math.max(2, size / 10) + 'px solid var(--surface-alt)',
      borderTopColor: color,
      animation: 'skera-spin 1s linear infinite',
      flex: 'none'
    }
  }), label);
}
/** Barre de progression indéterminée (haut de carte ou de tableau), 2px accent. */
function ProgressBar({
  value,
  style
}) {
  return React.createElement('span', {
    style: {
      display: 'block',
      height: 2,
      background: 'var(--surface-alt)',
      borderRadius: 2,
      overflow: 'hidden',
      position: 'relative',
      ...style
    }
  }, React.createElement('style', null, '@keyframes skera-indet{0%{left:-40%}100%{left:100%}}'), React.createElement('i', {
    style: value != null ? {
      display: 'block',
      height: '100%',
      width: value + '%',
      background: 'var(--accent)'
    } : {
      position: 'absolute',
      top: 0,
      height: '100%',
      width: '40%',
      background: 'var(--accent)',
      animation: 'skera-indet 1.2s ease-in-out infinite'
    }
  }));
}
Object.assign(__ds_scope, { Loader, ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Loader.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
const pulse = '@keyframes skera-pulse{0%,100%{opacity:1}50%{opacity:.55}}';
/** Bloc squelette (texte, cercle, rect) — surface alternée, pulsation 1.4s. */
function Skeleton({
  width = '100%',
  height = 12,
  radius = 4,
  circle,
  style
}) {
  return React.createElement(React.Fragment, null, React.createElement('style', null, pulse), React.createElement('span', {
    'aria-hidden': true,
    style: {
      display: 'block',
      width: circle ? height : width,
      height,
      borderRadius: circle ? '50%' : radius,
      background: 'var(--surface-alt)',
      animation: 'skera-pulse 1.4s ease-in-out infinite',
      ...style
    }
  }));
}
/** Squelette de ligne de tableau (case, avatar/trigramme, 3 colonnes texte, pastille). */
function SkeletonRow({
  cols = [160, 70, 110],
  pill = true,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '10px 12px',
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, React.createElement(Skeleton, {
    height: 15,
    width: 15
  }), React.createElement(Skeleton, {
    height: 28,
    width: 28,
    radius: 6
  }), cols.map((w, i) => React.createElement(Skeleton, {
    key: i,
    width: w,
    height: 11
  })), pill && React.createElement(Skeleton, {
    width: 84,
    height: 18,
    radius: 999
  }));
}
/** Squelette de carte KPI. */
function SkeletonKpi({
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderLeft: '3px solid var(--surface-alt)',
      borderRadius: 'var(--r-card)',
      padding: '14px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, React.createElement(Skeleton, {
    width: 90,
    height: 9
  }), React.createElement(Skeleton, {
    width: 70,
    height: 24,
    radius: 6
  }), React.createElement(Skeleton, {
    width: 140,
    height: 9
  }));
}
Object.assign(__ds_scope, { Skeleton, SkeletonRow, SkeletonKpi });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Snackbar.jsx
try { (() => {
const T = {
  info: ['info', 'var(--info)'],
  ok: ['checkCircle', 'var(--ok)'],
  warn: ['alertTriangle', 'var(--warn)'],
  err: ['xCircle', 'var(--err)']
};
/** Snackbar (notification transitoire) — ancrée bas-droite, surface carte, liseré gauche sémantique, action optionnelle, croix. */
function Snackbar({
  tone = 'info',
  title,
  message,
  action,
  progress,
  onClose,
  style
}) {
  const [icon, color] = T[tone] || T.info;
  return React.createElement('div', {
    role: 'status',
    style: {
      width: 360,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderLeft: '3px solid ' + color,
      borderRadius: 'var(--r-field)',
      boxShadow: 'var(--shadow-pop)',
      padding: '11px 12px 11px 14px',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-ui)',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      color,
      marginTop: 1
    }
  }), React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && React.createElement('b', {
    style: {
      font: '700 12.5px var(--font-ui)',
      color: 'var(--ink)'
    }
  }, title), message && React.createElement('span', {
    style: {
      fontSize: 12,
      lineHeight: 1.45,
      color: 'var(--ink-2)'
    }
  }, message), action && React.createElement('button', {
    style: {
      alignSelf: 'flex-start',
      marginTop: 4,
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      font: '600 12px var(--font-ui)',
      color: 'var(--accent-ink)'
    }
  }, action)), React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Fermer',
    style: {
      display: 'flex',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 2,
      color: 'var(--ink-weak)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 14
  })), progress != null && React.createElement('span', {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 2,
      width: progress + '%',
      background: color,
      opacity: .5
    }
  }));
}
/** Pile de snackbars (bas-droite, 8px d'écart, la plus récente en bas). */
function SnackbarStack({
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      zIndex: 40,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Snackbar, SnackbarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip au survol — chrome sombre #16181A, texte 11.5px blanc, flèche 6px, 4 placements. Toujours visible ici (specimen) ; en prod, afficher sur hover/focus après 300 ms. */
function Tooltip({
  text,
  shortcut,
  placement = 'top',
  children,
  style
}) {
  const pos = {
    top: {
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    left: {
      right: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    right: {
      left: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }[placement];
  const arrow = {
    top: {
      top: '100%',
      left: '50%',
      marginLeft: -5,
      borderWidth: '5px 5px 0',
      borderColor: 'var(--chrome-dark) transparent transparent'
    },
    bottom: {
      bottom: '100%',
      left: '50%',
      marginLeft: -5,
      borderWidth: '0 5px 5px',
      borderColor: 'transparent transparent var(--chrome-dark)'
    },
    left: {
      left: '100%',
      top: '50%',
      marginTop: -5,
      borderWidth: '5px 0 5px 5px',
      borderColor: 'transparent transparent transparent var(--chrome-dark)'
    },
    right: {
      right: '100%',
      top: '50%',
      marginTop: -5,
      borderWidth: '5px 5px 5px 0',
      borderColor: 'transparent var(--chrome-dark) transparent transparent'
    }
  }[placement];
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, React.createElement('span', {
    role: 'tooltip',
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--chrome-dark)',
      color: '#fff',
      font: '500 11.5px/1.3 var(--font-ui)',
      padding: '6px 9px',
      borderRadius: 6,
      whiteSpace: 'nowrap',
      boxShadow: '0 6px 18px rgba(0,0,0,.25)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      zIndex: 20,
      pointerEvents: 'none'
    }
  }, text, shortcut && React.createElement('kbd', {
    style: {
      font: '600 10px var(--font-ui)',
      color: '#C8C8D2',
      border: '1px solid rgba(255,255,255,.25)',
      borderRadius: 4,
      padding: '0 4px'
    }
  }, shortcut), React.createElement('i', {
    style: {
      position: 'absolute',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      ...arrow
    }
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/filters/FilterPanel.jsx
try { (() => {
/** Panneau de filtres (V) — popover ~620px : nav de catégories à badges, options cochables, pied Annuler / Appliquer (n). Pas de récap en jetons (maquette V). */
function FilterPanel({
  categories = [],
  activeCategory = 0,
  searchPlaceholder = 'Rechercher…',
  options = [],
  applyCount = 0,
  onApply,
  onCancel,
  onReset,
  width = 620,
  style
}) {
  const total = applyCount;
  const ck = on => React.createElement('span', {
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: on ? '1px solid var(--accent-solid)' : '1px solid var(--border)',
      background: on ? 'var(--accent-solid)' : 'var(--surface-card)',
      color: '#fff'
    }
  }, on && React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 11,
    strokeWidth: 3
  }));
  return React.createElement('div', {
    style: {
      width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'calc(var(--r-field) + 2px)',
      boxShadow: 'var(--shadow-pop)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '14px 16px 12px',
      font: '700 15px var(--font-ui)',
      letterSpacing: '-.01em',
      color: 'var(--ink)'
    }
  }, 'Filtres', React.createElement('button', {
    onClick: onReset,
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      font: '600 11px var(--font-ui)',
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--accent-ink)'
    }
  }, 'Tout réinitialiser')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '208px 1fr',
      borderTop: '1px solid var(--border)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: 10,
      borderRight: '1px solid var(--border)',
      background: 'var(--bg-page)'
    }
  }, categories.map((c, i) => React.createElement('span', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 10px',
      borderRadius: 'var(--r-field)',
      font: '600 12px var(--font-ui)',
      color: i === activeCategory ? 'var(--accent-ink)' : 'var(--ink-2)',
      background: i === activeCategory ? 'var(--accent-soft)' : 'transparent',
      cursor: 'pointer'
    }
  }, c.label, React.createElement('span', {
    style: {
      minWidth: 18,
      height: 18,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      padding: '0 4px',
      font: '700 10px var(--font-ui)',
      background: c.count ? 'var(--accent-solid)' : 'var(--surface-alt)',
      color: c.count ? '#fff' : 'var(--ink-weak)'
    }
  }, c.count || 0)))), React.createElement('div', {
    style: {
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 10px',
      fontSize: 12,
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      color: 'var(--ink-weak)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'search',
    size: 14
  }), searchPlaceholder), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      padding: 4,
      maxHeight: 200,
      overflow: 'hidden'
    }
  }, options.map((o, i) => o.section ? React.createElement('div', {
    key: i,
    style: {
      font: '600 9.5px var(--font-ui)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-weak)',
      padding: '6px 9px 3px',
      borderTop: o.sep ? '1px solid var(--border)' : 'none',
      marginTop: o.sep ? 4 : 0
    }
  }, o.section) : React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 9px',
      borderRadius: 'calc(var(--r-field) - 2px)',
      fontSize: 12.5,
      color: 'var(--ink)',
      fontWeight: o.checked ? 600 : 400,
      cursor: 'pointer'
    }
  }, ck(o.checked), o.label))))), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      padding: '12px 16px',
      borderTop: '1px solid var(--border)'
    }
  }, React.createElement('button', {
    onClick: onCancel,
    style: {
      padding: '6px 11px',
      cursor: 'pointer',
      borderRadius: 'var(--r-btn)',
      border: '1px solid var(--border)',
      background: 'var(--surface-card)',
      color: 'var(--ink)',
      font: '600 11.5px var(--font-ui)'
    }
  }, 'Annuler'), React.createElement('button', {
    onClick: onApply,
    style: {
      padding: '6px 11px',
      cursor: 'pointer',
      borderRadius: 'var(--r-btn)',
      border: 'none',
      background: 'var(--accent-solid)',
      color: '#fff',
      font: '600 11.5px var(--font-ui)',
      boxShadow: 'var(--shadow-cta)'
    }
  }, `Appliquer (${total})`)));
}
Object.assign(__ds_scope, { FilterPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/FilterPanel.jsx", error: String((e && e.message) || e) }); }

// components/filters/FilterToken.jsx
try { (() => {
/** Jeton de filtre scindé [ CLÉ | valeur ▾ ] — actif = bordure accent + clé accent doux. */
function FilterToken({
  name,
  value,
  active,
  onClick,
  onRemove,
  style
}) {
  return React.createElement('span', {
    onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'stretch',
      borderRadius: 'var(--r-btn)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      background: 'var(--surface-card)',
      border: active ? '1px solid var(--accent-ink)' : '1px solid var(--border)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      padding: '5px 9px',
      display: 'flex',
      alignItems: 'center',
      font: '600 9.5px var(--font-ui)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      background: active ? 'var(--accent-soft)' : 'var(--surface-alt)',
      color: active ? 'var(--accent-ink)' : 'var(--ink-micro)',
      borderRight: active ? '1px solid var(--accent-ink)' : '1px solid var(--border)'
    }
  }, name), React.createElement('span', {
    style: {
      padding: '5px 10px',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--ink)',
      fontSize: 11.5,
      fontWeight: 600
    }
  }, value, React.createElement(__ds_scope.Icon, {
    name: 'chevronDown',
    size: 12,
    style: {
      color: active ? 'var(--accent-ink)' : 'var(--ink-weak)'
    }
  }), onRemove && React.createElement('span', {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'flex',
      color: 'var(--ink-weak)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 12
  }))));
}
/** Chip pointillé « Filtre » avec icône plus (V). */
function FilterAdd({
  label = 'Filtre',
  onClick,
  style
}) {
  return React.createElement('button', {
    onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 11px',
      border: '1px dashed var(--border)',
      background: 'transparent',
      cursor: 'pointer',
      borderRadius: 'var(--r-btn)',
      color: 'var(--ink-2)',
      font: '600 11.5px var(--font-ui)',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'plus',
    size: 12
  }), label);
}
Object.assign(__ds_scope, { FilterToken, FilterAdd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/FilterToken.jsx", error: String((e && e.message) || e) }); }

// components/filters/FilterBar.jsx
try { (() => {
/** Barre « Filtres actifs » : jetons + « Tout effacer ». */
function FilterBar({
  filters = [],
  onClearAll,
  onAdd,
  onRemove,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      flexWrap: 'wrap',
      ...style
    }
  }, React.createElement('span', {
    style: {
      fontSize: 11,
      color: 'var(--ink-weak)',
      fontWeight: 600
    }
  }, 'Filtres actifs'), filters.map((f, i) => React.createElement(__ds_scope.FilterToken, {
    key: i,
    ...f,
    active: true,
    onRemove: onRemove ? () => onRemove(i) : undefined
  })), onAdd && React.createElement(__ds_scope.FilterAdd, {
    onClick: onAdd
  }), onClearAll && React.createElement('button', {
    onClick: onClearAll,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontSize: 11.5,
      color: 'var(--ink-weak)',
      fontFamily: 'var(--font-ui)',
      padding: '4px 8px'
    }
  }, 'Tout effacer'));
}
/** Bouton icône compact à compteur (V) : filter ou columns. */
function FilterButton({
  count = 0,
  active,
  icon = 'filter',
  title = 'Filtres',
  onClick,
  style
}) {
  return React.createElement('button', {
    onClick,
    title,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 9px',
      cursor: 'pointer',
      borderRadius: 'var(--r-btn)',
      font: '600 11.5px var(--font-ui)',
      border: active || count > 0 ? '1px solid var(--accent)' : '1px solid var(--border)',
      color: active || count > 0 ? 'var(--accent-ink)' : 'var(--ink-2)',
      background: active || count > 0 ? 'var(--accent-soft)' : 'var(--surface-card)',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), count > 0 && React.createElement('b', {
    style: {
      font: '700 10px var(--font-ui)',
      letterSpacing: '.04em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, count));
}
Object.assign(__ds_scope, { FilterBar, FilterButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const base = state => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  minHeight: 36,
  padding: '0 11px',
  boxSizing: 'border-box',
  width: '100%',
  border: state === 'error' ? '1px solid var(--err)' : state === 'focus' ? '1px solid var(--accent)' : '1px solid var(--border)',
  boxShadow: state === 'focus' ? '0 0 0 3px var(--accent-mist)' : state === 'error' ? '0 0 0 3px rgba(180,35,24,.12)' : 'none',
  borderRadius: 'var(--r-field)',
  font: '400 12.5px var(--font-ui)',
  color: 'var(--ink)',
  background: state === 'disabled' ? 'var(--surface-alt)' : state === 'readonly' ? 'transparent' : 'var(--bg-page)',
  opacity: state === 'disabled' ? .6 : 1,
  cursor: state === 'disabled' ? 'not-allowed' : 'text'
});
/** Enveloppe de champ : label micro-uppercase (+ * requis), contrôle, aide ou erreur dessous. */
function Field({
  label,
  required,
  hint,
  error,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, label && React.createElement('span', {
    style: {
      font: '600 10px var(--font-ui)',
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--ink-micro)'
    }
  }, label, required && React.createElement('span', {
    style: {
      color: 'var(--err)',
      fontWeight: 700
    }
  }, ' *')), children, error ? React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 11.5,
      color: 'var(--err)',
      fontWeight: 500
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'alertCircle',
    size: 13
  }), error) : hint && React.createElement('span', {
    style: {
      fontSize: 11,
      color: 'var(--ink-weak)'
    }
  }, hint));
}
/** Champ texte. state : default | focus | error | disabled | readonly. Vide = placeholder en --ink-weak. */
function TextInput({
  value,
  placeholder = 'Saisir…',
  state = 'default',
  mono,
  prefix,
  suffix,
  style
}) {
  const ro = state === 'readonly';
  return React.createElement('div', {
    style: {
      ...base(state),
      ...(ro ? {
        border: '1px dashed var(--border)',
        padding: '0 11px'
      } : null),
      ...style
    }
  }, prefix && React.createElement('span', {
    style: {
      display: 'flex',
      color: 'var(--ink-weak)'
    }
  }, prefix), React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontFamily: mono ? 'var(--font-mono)' : undefined,
      fontWeight: value ? 500 : 400,
      color: value ? 'var(--ink)' : 'var(--ink-weak)'
    }
  }, value || placeholder), ro && React.createElement(__ds_scope.Icon, {
    name: 'lock',
    size: 13,
    style: {
      color: 'var(--ink-weak)'
    }
  }), suffix && React.createElement('span', {
    style: {
      display: 'flex',
      color: 'var(--ink-weak)'
    }
  }, suffix));
}
/** Zone de texte libre. */
function TextArea({
  value,
  placeholder = 'Saisir…',
  rows = 3,
  state = 'default',
  style
}) {
  return React.createElement('div', {
    style: {
      ...base(state),
      alignItems: 'flex-start',
      padding: '9px 11px',
      minHeight: rows * 20 + 18,
      ...style
    }
  }, React.createElement('span', {
    style: {
      flex: 1,
      whiteSpace: 'pre-wrap',
      lineHeight: '20px',
      color: value ? 'var(--ink)' : 'var(--ink-weak)'
    }
  }, value || placeholder));
}
/** Liste déroulante (valeur unique). open=true affiche le menu d'options. */
function Select({
  value,
  placeholder = 'Sélectionner…',
  options = [],
  open,
  state = 'default',
  style
}) {
  return React.createElement('div', {
    style: {
      position: 'relative',
      ...style
    }
  }, React.createElement('div', {
    style: {
      ...base(open ? 'focus' : state),
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    style: {
      flex: 1,
      color: value ? 'var(--ink)' : 'var(--ink-weak)',
      fontWeight: value ? 500 : 400
    }
  }, value || placeholder), React.createElement(__ds_scope.Icon, {
    name: 'chevronDown',
    size: 14,
    style: {
      color: 'var(--ink-weak)'
    }
  })), open && React.createElement('div', {
    style: {
      position: 'absolute',
      top: 40,
      left: 0,
      right: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      boxShadow: 'var(--shadow-pop)',
      padding: 4,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column'
    }
  }, options.map((o, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 9px',
      borderRadius: 6,
      fontSize: 12.5,
      color: 'var(--ink)',
      background: o === value ? 'var(--accent-soft)' : 'transparent',
      fontWeight: o === value ? 600 : 400
    }
  }, React.createElement('span', {
    style: {
      flex: 1
    }
  }, o), o === value && React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 14,
    style: {
      color: 'var(--accent-ink)'
    }
  })))));
}
/** Combo box : saisie + filtrage + multi-sélection en chips (pill, croix). */
function Combobox({
  query = '',
  placeholder = 'Rechercher ou créer…',
  selected = [],
  options = [],
  open,
  state = 'default',
  style
}) {
  return React.createElement('div', {
    style: {
      position: 'relative',
      ...style
    }
  }, React.createElement('div', {
    style: {
      ...base(open ? 'focus' : state),
      flexWrap: 'wrap',
      padding: '4px 8px',
      gap: 6
    }
  }, selected.map((s, i) => React.createElement('span', {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 8px',
      borderRadius: 999,
      background: 'var(--accent-soft)',
      color: 'var(--accent-ink)',
      font: '600 11px var(--font-ui)'
    }
  }, s, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 11
  }))), React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 80,
      padding: '4px 2px',
      color: query ? 'var(--ink)' : 'var(--ink-weak)'
    }
  }, query || (selected.length ? '' : placeholder), open && React.createElement('span', {
    style: {
      display: 'inline-block',
      width: 1.5,
      height: 14,
      background: 'var(--accent)',
      marginLeft: 1,
      verticalAlign: -2
    }
  })), React.createElement(__ds_scope.Icon, {
    name: 'chevronsUpDown',
    size: 14,
    style: {
      color: 'var(--ink-weak)'
    }
  })), open && React.createElement('div', {
    style: {
      position: 'absolute',
      top: '100%',
      marginTop: 4,
      left: 0,
      right: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      boxShadow: 'var(--shadow-pop)',
      padding: 4,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column'
    }
  }, options.length === 0 ? React.createElement('div', {
    style: {
      padding: '8px 9px',
      fontSize: 12,
      color: 'var(--ink-weak)'
    }
  }, 'Aucun résultat') : options.map((o, i) => {
    const on = selected.includes(o);
    return React.createElement('div', {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '8px 9px',
        borderRadius: 6,
        fontSize: 12.5,
        color: 'var(--ink)'
      }
    }, React.createElement('span', {
      style: {
        width: 15,
        height: 15,
        borderRadius: 4,
        border: on ? '1px solid var(--accent)' : '1px solid var(--border)',
        background: on ? 'var(--accent)' : 'var(--surface-card)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }
    }, on && React.createElement(__ds_scope.Icon, {
      name: 'check',
      size: 10,
      strokeWidth: 3
    })), o);
  })));
}
Object.assign(__ds_scope, { Field, TextInput, TextArea, Select, Combobox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ImpersonationBanner.jsx
try { (() => {
/** Bandeau d'impersonation (mode DEV/support) — chrome sombre #16181A pleine largeur au-dessus du contenu. */
function ImpersonationBanner({
  user = 'Denise Pasquier — DFS · Dupont & Fils SARL',
  onQuit,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '9px 18px',
      background: 'var(--chrome-dark)',
      color: '#E8E8EE',
      fontSize: 12.5,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      padding: '2px 8px',
      borderRadius: 4,
      background: 'rgba(255,255,255,.14)',
      font: '800 10px var(--font-ui)',
      letterSpacing: '.12em'
    }
  }, 'DEV'), React.createElement('span', null, 'Vous êtes connecté en tant que ', React.createElement('strong', null, user)), React.createElement('button', {
    onClick: onQuit,
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      font: '600 12px var(--font-ui)',
      color: '#FF8177',
      textDecoration: 'underline'
    }
  }, "Quitter l'impersonation"));
}
Object.assign(__ds_scope, { ImpersonationBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ImpersonationBanner.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PerimeterSelect.jsx
try { (() => {
const DEFAULT_AGENCIES = [{
  name: 'Lyon Est',
  code: 'LYE',
  clients: 142,
  checked: true
}, {
  name: 'Lyon Sud',
  code: 'LYS',
  clients: 97,
  checked: true
}, {
  name: 'Villeurbanne',
  code: 'VLB',
  clients: 79,
  checked: true
}];
/** Sélecteur de Périmètre (header) : libellé + badge compteur + chevron ; menu à cases pour restreindre la portée globale. */
function PerimeterSelect({
  badge = '3 agences',
  open = false,
  agencies = DEFAULT_AGENCIES,
  onToggle,
  style
}) {
  const total = agencies.filter(a => a.checked).reduce((s, a) => s + a.clients, 0);
  const all = agencies.every(a => a.checked);
  return React.createElement('div', {
    style: {
      position: 'relative',
      ...style
    }
  }, React.createElement('button', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 10px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-btn)',
      cursor: 'pointer',
      font: '500 12.5px var(--font-ui)',
      color: 'var(--ink-2)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'building',
    size: 16
  }), 'Périmètre', React.createElement('b', {
    style: {
      color: 'var(--accent-ink)',
      background: 'var(--accent-soft)',
      borderRadius: 999,
      padding: '2px 9px',
      font: '600 11px var(--font-ui)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, badge), React.createElement(__ds_scope.Icon, {
    name: 'chevronDown',
    size: 14,
    style: {
      color: 'var(--ink-weak)'
    }
  })), open && React.createElement('div', {
    style: {
      position: 'absolute',
      top: 42,
      left: 0,
      width: 264,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      boxShadow: 'var(--shadow-pop)',
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      zIndex: 10
    }
  }, React.createElement('div', {
    style: {
      font: '600 9.5px var(--font-ui)',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: 'var(--ink-micro)',
      padding: '4px 6px 8px'
    }
  }, 'Agences couvertes'), agencies.map((a, i) => React.createElement('label', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '7px 6px',
      borderRadius: 6,
      fontSize: 12.5,
      color: 'var(--ink)'
    }
  }, React.createElement(__ds_scope.Checkbox, {
    checked: a.checked,
    onChange: onToggle ? v => onToggle(i, v) : undefined
  }), React.createElement('span', {
    style: {
      flex: 1
    }
  }, a.name), React.createElement('span', {
    style: {
      font: '600 10px var(--font-mono)',
      color: 'var(--ink-weak)'
    }
  }, a.code), React.createElement('span', {
    style: {
      fontSize: 11,
      color: 'var(--ink-weak)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, a.clients))), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      borderTop: '1px solid var(--border)',
      marginTop: 6,
      padding: '9px 6px 2px',
      fontSize: 11.5,
      color: 'var(--ink-2)'
    }
  }, React.createElement('span', {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, all ? `Toutes les agences · ${total} clients` : `${total} clients dans le périmètre`), React.createElement('button', {
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      font: '600 11px var(--font-ui)',
      color: 'var(--accent-ink)'
    }
  }, all ? 'Restreindre' : 'Tout sélectionner'))));
}
Object.assign(__ds_scope, { PerimeterSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PerimeterSelect.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  label: 'Mon poste de travail',
  icon: 'layoutDashboard'
}, {
  label: 'Clients',
  icon: 'user',
  active: true
}, {
  label: 'Produits',
  icon: 'box',
  badge: '22',
  children: [{
    label: 'Evolucloud',
    badge: '9'
  }, {
    label: 'Dedicloud',
    badge: '5'
  }, {
    label: 'Antispam',
    badge: '6'
  }, {
    label: 'OpenVPN',
    badge: '2'
  }]
}, {
  label: 'Tickets',
  icon: 'ticket',
  badge: '12'
}, {
  label: 'IPAM',
  icon: 'network'
}];
function NavItem({
  it,
  sub,
  hover
}) {
  const on = it.active;
  return React.createElement('button', {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      border: 'none',
      padding: sub ? '7px 11px 7px 37px' : '8px 11px',
      borderRadius: 'var(--r-btn)',
      font: `${on ? 600 : 500} ${sub ? '12.5px' : '13px'} var(--font-ui)`,
      background: hover ? 'var(--surface-alt)' : 'transparent',
      color: on ? 'var(--accent-ink)' : 'var(--ink-2)'
    }
  }, on && React.createElement('span', {
    style: {
      position: 'absolute',
      left: -12,
      top: 5,
      bottom: 5,
      width: 3,
      borderRadius: '0 3px 3px 0',
      background: 'var(--accent)'
    }
  }), it.icon && React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16
  }), React.createElement('span', {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, it.label), it.badge && React.createElement('span', {
    style: {
      font: '700 10.5px var(--font-ui)',
      fontVariantNumeric: 'tabular-nums',
      color: on ? 'var(--accent-ink)' : 'var(--ink-weak)'
    }
  }, it.badge), it.children && React.createElement(__ds_scope.Icon, {
    name: it.open ? 'chevronDown' : 'chevronRight',
    size: 14,
    style: {
      color: on ? 'var(--accent-ink)' : 'var(--ink-weak)'
    }
  }));
}
/** Sidebar 216px — item actif = pastille pleine #E10600 + halo. Rail réduit 62px via collapsed. */
function Sidebar({
  items = DEFAULT_ITEMS,
  collapsed,
  sectionLabel = null,
  user = {
    initials: 'GC',
    name: 'Guillaume Charpin',
    role: 'Technicien cloud · LYE'
  },
  logoSrc,
  height = '100%',
  style
}) {
  if (collapsed) {
    return React.createElement('div', {
      style: {
        width: 62,
        height,
        background: 'var(--surface-chrome)',
        borderRight: '1px solid var(--border)',
        padding: '14px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        boxSizing: 'border-box',
        ...style
      }
    }, React.createElement('span', {
      style: {
        width: 32,
        height: 32,
        borderRadius: 9,
        background: 'var(--accent-solid)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '800 15px var(--font-ui)',
        marginBottom: 12
      }
    }, 'S'), items.map((it, i) => React.createElement('span', {
      key: i,
      title: it.label,
      style: {
        display: 'flex',
        padding: 9,
        borderRadius: 'var(--r-btn)',
        background: it.active ? 'var(--accent-soft)' : 'transparent',
        color: it.active ? 'var(--accent-ink)' : 'var(--ink-2)',
        marginTop: it.foot ? 'auto' : 0
      }
    }, React.createElement(__ds_scope.Icon, {
      name: it.icon || 'box',
      size: 17
    }))));
  }
  return React.createElement('div', {
    style: {
      width: 216,
      height,
      background: 'var(--surface-chrome)',
      borderRight: '1px solid var(--border)',
      padding: '14px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      boxSizing: 'border-box',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 10px 18px'
    }
  }, logoSrc ? React.createElement('img', {
    src: logoSrc,
    style: {
      height: 18,
      display: 'block'
    },
    alt: 'SKERA'
  }) : React.createElement('span', {
    style: {
      font: '800 16px var(--font-ui)',
      letterSpacing: '.04em',
      color: 'var(--accent)'
    }
  }, 'SKERA'), React.createElement('span', {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      color: 'var(--ink-weak)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'panelLeft',
    size: 15
  }))), sectionLabel && React.createElement('div', {
    style: {
      font: '600 9.5px var(--font-ui)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-micro)',
      padding: '0 11px 5px'
    }
  }, sectionLabel), items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      marginTop: it.foot ? 'auto' : 0
    }
  }, React.createElement(NavItem, {
    it
  }), it.children && it.open !== false && it.children.map((c, j) => React.createElement(NavItem, {
    key: j,
    it: c,
    sub: true
  })))), user && React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '12px 10px 2px',
      borderTop: '1px solid var(--border)',
      marginTop: 10
    }
  }, React.createElement('span', {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--accent-solid)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 11px var(--font-ui)',
      flex: 'none'
    }
  }, user.initials), React.createElement('span', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, React.createElement('b', {
    style: {
      font: '600 12px var(--font-ui)',
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, user.name), React.createElement('span', {
    style: {
      fontSize: 10.5,
      color: 'var(--ink-weak)',
      whiteSpace: 'nowrap'
    }
  }, user.role))));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Topbar.jsx
try { (() => {
const pmi = {
  display: 'flex',
  alignItems: 'center',
  gap: 9,
  padding: '9px 11px',
  borderRadius: 6,
  font: '500 12.5px var(--font-ui)',
  color: 'var(--ink)',
  cursor: 'pointer'
};
/** Header 60px : Périmètre → recherche Ctrl K → bascule Admin/Client → cloche → avatar. Le thème se règle dans le menu profil (clic avatar). */
function Topbar({
  mode = 'Admin',
  onMode,
  theme = 'light',
  onTheme,
  notifCount = 3,
  initials = 'GC',
  user = {
    name: 'Guillaume Charpin',
    role: 'Technicien cloud · LYE',
    email: 'g.charpin@xefi.fr'
  },
  profileOpen = false,
  perimeter = '3 agences',
  showPerimeter = true,
  logoSrc,
  onSearch,
  style
}) {
  return React.createElement('div', {
    style: {
      height: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '0 20px',
      background: 'var(--surface-chrome)',
      borderBottom: '1px solid var(--border)',
      boxSizing: 'border-box',
      ...style
    }
  }, logoSrc ? React.createElement('img', {
    src: logoSrc,
    style: {
      height: 17,
      display: 'block'
    },
    alt: 'SKERA'
  }) : null, showPerimeter && React.createElement(__ds_scope.PerimeterSelect, {
    badge: perimeter
  }), React.createElement('div', {
    style: {
      flex: '1 1 auto',
      maxWidth: 480,
      margin: '0 auto'
    }
  }, React.createElement(__ds_scope.SearchField, {
    placeholder: 'Rechercher un client, une VM, une demande…',
    shortcut: 'Ctrl K',
    onClick: onSearch
  })), React.createElement(__ds_scope.Segmented, {
    options: ['Admin', 'Client'],
    value: mode,
    onChange: onMode,
    size: 'sm'
  }), React.createElement('button', {
    title: 'Notifications',
    style: {
      position: 'relative',
      width: 34,
      height: 34,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--ink-2)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'bell',
    size: 18
  }), notifCount > 0 && React.createElement('span', {
    style: {
      position: 'absolute',
      top: 1,
      right: 1,
      minWidth: 15,
      height: 15,
      padding: '0 4px',
      background: 'var(--accent-solid)',
      color: '#fff',
      border: '2px solid var(--surface-chrome)',
      borderRadius: 999,
      font: '700 9px/11px var(--font-ui)',
      textAlign: 'center'
    }
  }, notifCount)), React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, React.createElement('span', {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--accent-solid)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 11px var(--font-ui)',
      cursor: 'pointer'
    }
  }, initials), profileOpen && React.createElement('span', {
    style: {
      position: 'absolute',
      top: 38,
      right: 0,
      width: 272,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      boxShadow: 'var(--shadow-pop)',
      padding: 6,
      display: 'flex',
      flexDirection: 'column',
      zIndex: 20
    }
  }, React.createElement('span', {
    style: {
      display: 'flex',
      gap: 11,
      padding: '11px 10px 12px'
    }
  }, React.createElement('span', {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--accent-solid)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '800 13px var(--font-ui)',
      flex: 'none'
    }
  }, initials), React.createElement('span', {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement('b', {
    style: {
      font: '700 13.5px var(--font-ui)',
      color: 'var(--ink)'
    }
  }, user.name), React.createElement('span', {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-2)',
      marginTop: 2
    }
  }, user.role), user.email && React.createElement('span', {
    style: {
      fontSize: 11,
      color: 'var(--ink-weak)',
      marginTop: 1
    }
  }, user.email))), React.createElement('span', {
    style: {
      height: 1,
      background: 'var(--border)',
      margin: '4px 0 6px'
    }
  }), React.createElement('span', {
    style: {
      padding: '2px 10px 6px',
      font: '600 9.5px var(--font-ui)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-weak)'
    }
  }, 'Thème'), React.createElement('span', {
    style: {
      display: 'flex',
      gap: 4,
      padding: '0 8px 8px'
    }
  }, [['light', 'Clair'], ['dark', 'Sombre'], ['system', 'Système']].map(([v, l]) => React.createElement('button', {
    key: v,
    onClick: onTheme ? () => onTheme(v) : undefined,
    style: {
      flex: 1,
      textAlign: 'center',
      padding: '7px 0',
      borderRadius: 6,
      cursor: 'pointer',
      border: theme === v ? '1px solid var(--accent)' : '1px solid var(--border)',
      background: theme === v ? 'var(--accent-soft)' : 'transparent',
      font: `${theme === v ? 600 : 500} 11.5px var(--font-ui)`,
      color: theme === v ? 'var(--accent-ink)' : 'var(--ink-2)'
    }
  }, l))), React.createElement('span', {
    style: {
      height: 1,
      background: 'var(--border)',
      margin: '4px 0 6px'
    }
  }), React.createElement('span', {
    style: pmi
  }, React.createElement(__ds_scope.Icon, {
    name: 'settings',
    size: 14,
    style: {
      color: 'var(--ink-weak)'
    }
  }), 'Préférences'), React.createElement('span', {
    style: pmi
  }, React.createElement(__ds_scope.Icon, {
    name: 'box',
    size: 14,
    style: {
      color: 'var(--ink-weak)'
    }
  }), 'Gestion de la plateforme'), React.createElement('span', {
    style: {
      ...pmi,
      color: 'var(--crit)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 14,
    style: {
      color: 'var(--crit)'
    }
  }), 'Se déconnecter'))));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Topbar.jsx", error: String((e && e.message) || e) }); }

// components/notifications/NotificationPanel.jsx
try { (() => {
const TONE = {
  ok: 'var(--ok)',
  warn: 'var(--warn)',
  err: 'var(--err)',
  info: 'var(--info)'
};
/** Panneau de notifications (clic sur la cloche) — popover 380px : onglets Toutes / Non lues, groupes Aujourd'hui / Plus tôt, ligne = point non-lu, icône sémantique, titre, détail, horodatage, action. */
function NotificationPanel({
  items = [],
  tab = 'all',
  unread = 0,
  width = 380,
  style
}) {
  const groups = [...new Set(items.map(i => i.group || 'Aujourd\u2019hui'))];
  return React.createElement('div', {
    style: {
      width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      boxShadow: 'var(--shadow-pop)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px 0'
    }
  }, React.createElement('b', {
    style: {
      font: '700 14px var(--font-ui)',
      color: 'var(--ink)'
    }
  }, 'Notifications'), unread > 0 && React.createElement('span', {
    style: {
      padding: '1px 7px',
      borderRadius: 999,
      background: 'var(--accent)',
      color: '#fff',
      font: '700 10px var(--font-ui)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, unread), React.createElement('button', {
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      font: '600 11px var(--font-ui)',
      color: 'var(--accent-ink)'
    }
  }, 'Tout marquer comme lu')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14,
      padding: '8px 14px 0',
      borderBottom: '1px solid var(--border)'
    }
  }, [['all', 'Toutes'], ['unread', 'Non lues']].map(([k, l]) => React.createElement('span', {
    key: k,
    style: {
      padding: '6px 0 8px',
      font: '600 12px var(--font-ui)',
      color: tab === k ? 'var(--accent-ink)' : 'var(--ink-2)',
      borderBottom: tab === k ? '2px solid var(--accent)' : '2px solid transparent',
      marginBottom: -1
    }
  }, l))), React.createElement('div', {
    style: {
      maxHeight: 420,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }
  }, groups.map(g => React.createElement(React.Fragment, {
    key: g
  }, React.createElement('div', {
    style: {
      padding: '10px 14px 4px',
      font: '600 9.5px var(--font-ui)',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: 'var(--ink-micro)'
    }
  }, g), items.filter(i => (i.group || 'Aujourd\u2019hui') === g).map((n, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      padding: '10px 14px',
      background: n.unread ? 'var(--accent-soft)' : 'transparent',
      borderBottom: '1px solid var(--border)'
    }
  }, React.createElement('span', {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-alt)',
      color: TONE[n.tone] || 'var(--ink-2)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: n.icon || 'bell',
    size: 15
  })), React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement('b', {
    style: {
      font: (n.unread ? 700 : 600) + ' 12.5px var(--font-ui)',
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, n.title), React.createElement('span', {
    style: {
      marginLeft: 'auto',
      fontSize: 10.5,
      color: 'var(--ink-weak)',
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums'
    }
  }, n.time)), n.detail && React.createElement('span', {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-2)',
      lineHeight: 1.4
    }
  }, n.detail), n.action && React.createElement('span', {
    style: {
      marginTop: 3,
      font: '600 11.5px var(--font-ui)',
      color: 'var(--accent-ink)'
    }
  }, n.action)), n.unread && React.createElement('span', {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--accent)',
      marginTop: 6,
      flex: 'none'
    }
  })))))), React.createElement('div', {
    style: {
      padding: '10px 14px',
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
      font: '600 11.5px var(--font-ui)',
      color: 'var(--accent-ink)'
    }
  }, 'Voir toutes les notifications'));
}
Object.assign(__ds_scope, { NotificationPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/notifications/NotificationPanel.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Modal.jsx
try { (() => {
/** Modale (V) — small 360px (confirmation : titre, sous-titre, corps, pied) ou large (formulaire : en-tête surface alternée + croix, corps, pied bordé). Rayon r-card+6, scrim flouté via overlay. */
function Modal({
  size = 'small',
  title,
  subtitle,
  danger,
  children,
  footer,
  onClose,
  overlay = false,
  width,
  style
}) {
  const large = size === 'large';
  const panel = React.createElement('div', {
    style: {
      width: width || (large ? 1020 : 360),
      maxWidth: 'calc(100% - 48px)',
      maxHeight: large ? '92%' : undefined,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'calc(var(--r-card) + 6px)',
      boxShadow: '0 24px 60px rgba(0,0,0,.35)',
      display: 'flex',
      flexDirection: 'column',
      gap: large ? 0 : 12,
      padding: large ? 0 : 22,
      overflow: 'hidden',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, large ? React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 20px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--surface-alt)'
    }
  }, React.createElement('h3', {
    style: {
      font: '700 17px var(--font-ui)',
      letterSpacing: '-.01em',
      margin: 0,
      color: danger ? 'var(--crit)' : 'var(--ink)'
    }
  }, title), subtitle && React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, subtitle), React.createElement('button', {
    onClick: onClose,
    style: {
      marginLeft: 'auto',
      display: 'flex',
      padding: 5,
      borderRadius: 'var(--r-btn)',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--ink-2)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 16
  }))) : React.createElement(React.Fragment, null, React.createElement('h3', {
    style: {
      font: '700 17px var(--font-ui)',
      letterSpacing: '-.01em',
      margin: 0,
      color: danger ? 'var(--crit)' : 'var(--ink)'
    }
  }, title), subtitle && React.createElement('div', {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)',
      margin: '-7px 0 0'
    }
  }, subtitle)), React.createElement('div', {
    style: large ? {
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      overflowY: 'auto',
      minHeight: 0
    } : {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, children), footer && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      ...(large ? {
        padding: '14px 20px',
        borderTop: '1px solid var(--border)'
      } : {
        paddingTop: 4
      })
    }
  }, footer));
  if (!overlay) return panel;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--scrim)',
      backdropFilter: 'blur(2px)',
      zIndex: 30
    }
  }, panel);
}
/** Champ de formulaire de modale : label micro-uppercase (+ astérisque requise), contrôle en dessous. */
function ModalField({
  label,
  required,
  hint,
  children,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, React.createElement('span', {
    style: {
      font: '600 10px var(--font-ui)',
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--ink-micro)'
    }
  }, label, required && React.createElement('span', {
    style: {
      color: 'var(--err)',
      fontWeight: 700
    }
  }, ' *')), children, hint && React.createElement('span', {
    style: {
      fontSize: 11,
      color: 'var(--ink-weak)'
    }
  }, hint));
}
/** Input texte de modale — surface page, bordure fine, rayon 10px. */
function ModalInput({
  placeholder,
  value,
  mono,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 11px',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      background: 'var(--bg-page)',
      font: `${value ? 500 : 400} 12.5px ${mono ? 'var(--font-mono)' : 'var(--font-ui)'}`,
      color: value ? 'var(--ink)' : 'var(--ink-weak)',
      ...style
    }
  }, value || placeholder);
}
Object.assign(__ds_scope, { Modal, ModalField, ModalInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Modal.jsx", error: String((e && e.message) || e) }); }

// components/search/CommandPalette.jsx
try { (() => {
const micro = {
  font: '600 9.5px var(--font-ui)',
  letterSpacing: '.09em',
  textTransform: 'uppercase',
  color: 'var(--ink-micro)'
};
function Skeleton({
  w = '60%'
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '9px 10px'
    }
  }, React.createElement('span', {
    style: {
      width: 16,
      height: 16,
      borderRadius: 5,
      background: 'var(--surface-alt)'
    }
  }), React.createElement('span', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      flex: 1
    }
  }, React.createElement('span', {
    style: {
      height: 9,
      width: w,
      borderRadius: 4,
      background: 'var(--surface-alt)'
    }
  }), React.createElement('span', {
    style: {
      height: 7,
      width: '38%',
      borderRadius: 4,
      background: 'var(--surface-alt)',
      opacity: .7
    }
  })));
}
function Row({
  it
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '8px 10px',
      borderRadius: 8,
      background: it.active ? 'var(--accent-soft)' : 'transparent',
      cursor: 'pointer'
    }
  }, it.icon && React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 15,
    style: {
      color: it.active ? 'var(--accent-ink)' : 'var(--ink-weak)'
    }
  }), React.createElement('span', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      flex: 1
    }
  }, React.createElement('b', {
    style: {
      font: '600 13px var(--font-ui)',
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, it.title, it.code && React.createElement('span', {
    style: {
      font: '600 10px var(--font-mono)',
      color: 'var(--ink-2)',
      background: 'var(--surface-alt)',
      borderRadius: 4,
      padding: '2px 5px',
      marginLeft: 8,
      verticalAlign: 1
    }
  }, it.code)), it.meta && React.createElement('em', {
    style: {
      fontStyle: 'normal',
      fontSize: 11,
      color: 'var(--ink-weak)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, it.meta)), it.right && React.createElement('span', {
    style: {
      fontSize: 11,
      color: it.active ? 'var(--accent-ink)' : 'var(--ink-weak)',
      flex: 'none'
    }
  }, it.right), it.chevron && React.createElement(__ds_scope.Icon, {
    name: 'chevronRight',
    size: 14,
    style: {
      color: 'var(--ink-weak)'
    }
  }));
}
function Chip({
  c
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 999,
      font: '600 11px var(--font-ui)',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      border: c.active ? '1px solid var(--accent)' : '1px solid var(--border)',
      background: c.active ? 'var(--accent-soft)' : 'var(--surface-card)',
      color: c.active ? 'var(--accent-ink)' : 'var(--ink-2)'
    }
  }, c.label, c.loading ? React.createElement('span', {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      border: '1.5px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'skera-spin 1s linear infinite',
      opacity: .8
    }
  }) : c.count != null && React.createElement('b', {
    style: {
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 700,
      opacity: .85
    }
  }, c.count));
}
/**
 * Palette de commandes ⌘K — modale centrée ~660px, max-hauteur 74vh, scrim flouté.
 * Sections : state 'ok' (items), 'loading' (Recherche… + squelettes), 'empty' (repliée, « Aucun résultat » + Parcourir), 'error' (ligne d'erreur + Réessayer).
 */
function CommandPalette({
  query = '',
  placeholder = 'Rechercher un client, un serveur, une VM, un accès OpenVPN, un antispam…',
  chips = [],
  sections = [],
  emptyState,
  footerLeft,
  footerRight,
  overlay = true,
  width = 660,
  style
}) {
  const panel = React.createElement('div', {
    style: {
      width,
      maxWidth: 'calc(100% - 40px)',
      maxHeight: '74vh',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'calc(var(--r-card) + 2px)',
      boxShadow: '0 34px 80px rgba(8,12,24,.36)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
      animation: 'skera-pop .14s ease-out',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, React.createElement('style', null, '@keyframes skera-spin{to{transform:rotate(360deg)}}@keyframes skera-pop{from{opacity:0;transform:translateY(10px) scale(.99)}to{opacity:1;transform:none}}'), React.createElement('span', {
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }, React.createElement(__ds_scope.Kbd, null, 'Échap')), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '15px 44px 11px 17px'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'search',
    size: 17,
    style: {
      color: 'var(--ink-weak)'
    }
  }), query ? React.createElement('span', {
    style: {
      font: '600 15px var(--font-ui)',
      color: 'var(--ink)'
    }
  }, query, React.createElement('span', {
    style: {
      display: 'inline-block',
      width: 1.5,
      height: 16,
      background: 'var(--accent)',
      marginLeft: 2,
      verticalAlign: -3
    }
  })) : React.createElement('span', {
    style: {
      font: '400 14px var(--font-ui)',
      color: 'var(--ink-weak)',
      flex: 1,
      minWidth: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, placeholder)), chips.length > 0 && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      padding: '0 16px 12px',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      borderBottom: '1px solid var(--border)'
    }
  }, chips.map((c, i) => React.createElement(Chip, {
    key: i,
    c
  }))), React.createElement('div', {
    style: {
      padding: '8px 8px 6px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      overflowY: 'auto',
      minHeight: 0
    }
  }, emptyState && React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      padding: '28px 20px 22px',
      textAlign: 'center'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'search',
    size: 26,
    style: {
      color: 'var(--ink-weak)'
    }
  }), React.createElement('b', {
    style: {
      font: '700 15px var(--font-ui)',
      color: 'var(--ink)'
    }
  }, emptyState.title), React.createElement('span', {
    style: {
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      maxWidth: '46ch'
    }
  }, emptyState.help), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      paddingTop: 4
    }
  }, emptyState.primary && React.createElement('button', {
    style: {
      padding: '8px 14px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--r-btn)',
      background: 'var(--accent-solid)',
      color: '#fff',
      font: '600 12px var(--font-ui)',
      boxShadow: 'var(--shadow-cta)'
    }
  }, emptyState.primary), emptyState.secondary && React.createElement('button', {
    style: {
      padding: '8px 14px',
      cursor: 'pointer',
      borderRadius: 'var(--r-btn)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      color: 'var(--ink)',
      font: '600 12px var(--font-ui)'
    }
  }, emptyState.secondary))), sections.map((s, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      padding: '8px 10px 4px'
    }
  }, s.icon && React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 12,
    style: {
      color: 'var(--ink-weak)'
    }
  }), React.createElement('span', {
    style: micro
  }, s.label), s.linkRight && React.createElement('button', {
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      font: '600 11px var(--font-ui)',
      color: 'var(--accent-ink)'
    }
  }, s.linkRight)), s.state === 'loading' && React.createElement(React.Fragment, null, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '2px 10px',
      fontSize: 11.5,
      color: 'var(--ink-weak)'
    }
  }, React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      border: '1.5px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'skera-spin 1s linear infinite'
    }
  }), 'Recherche…'), React.createElement(Skeleton, {
    w: '58%'
  }), React.createElement(Skeleton, {
    w: '42%'
  })), s.state === 'empty' && React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 10px',
      fontSize: 12,
      color: 'var(--ink-weak)'
    }
  }, 'Aucun résultat', s.browseLabel && React.createElement('button', {
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      font: '600 11.5px var(--font-ui)',
      color: 'var(--accent-ink)'
    }
  }, s.browseLabel)), s.state === 'error' && React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      margin: '4px 8px',
      padding: '8px 11px',
      borderRadius: 'var(--r-field)',
      background: 'var(--err-soft)',
      color: 'var(--err)',
      fontSize: 12
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'alertTriangle',
    size: 14
  }), React.createElement('span', {
    style: {
      flex: 1
    }
  }, 'Impossible d\u2019interroger ce service · ', React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, s.errorCode || 'ERR-4207')), React.createElement('button', {
    style: {
      border: '1px solid currentColor',
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      borderRadius: 6,
      padding: '4px 10px',
      font: '600 11px var(--font-ui)'
    }
  }, 'Réessayer')), (s.items || []).map((it, j) => React.createElement(Row, {
    key: j,
    it
  }))))), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 16px',
      borderTop: '1px solid var(--border)',
      fontSize: 11,
      color: 'var(--ink-weak)',
      marginTop: 'auto'
    }
  }, footerLeft || React.createElement(React.Fragment, null, React.createElement('span', null, '\u2191\u2193 naviguer'), React.createElement('span', null, '\u21B5 ouvrir'), React.createElement('span', null, '\u21E5 filtrer la catégorie')), React.createElement('span', {
    style: {
      marginLeft: 'auto',
      fontVariantNumeric: 'tabular-nums'
    }
  }, footerRight)));
  if (!overlay) return panel;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: 90,
      background: 'var(--scrim)',
      backdropFilter: 'blur(2px)',
      zIndex: 20
    }
  }, panel);
}
const PALETTE_CHIPS = ['Tout', 'Clients', 'Serveurs', 'VM', 'OpenVPN', 'Antispam', 'Contrats', 'Factures', 'Tickets'];
Object.assign(__ds_scope, { CommandPalette, PALETTE_CHIPS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/search/CommandPalette.jsx", error: String((e && e.message) || e) }); }

// components/states/EmptyState.jsx
try { (() => {
const K = {
  empty: {
    icon: 'search',
    title: 'Aucun résultat',
    help: 'Élargissez le périmètre ou retirez un filtre pour retrouver des résultats.',
    primary: 'Effacer les filtres',
    secondary: 'Voir tous les clients'
  },
  blank: {
    icon: 'plusCircle',
    title: 'Aucun client pour le moment',
    help: 'Créez votre premier client pour démarrer le provisioning sur cette agence.',
    primary: 'Créer le client'
  },
  unreachable: {
    icon: 'wifiOff',
    title: 'Service indisponible',
    help: 'Le service ne répond pas (erreur 504). Vos filtres sont conservés — réessayez dans quelques instants.',
    primary: 'Réessayer',
    secondary: 'Contacter le support interne',
    code: '504'
  },
  denied: {
    icon: 'lock',
    title: 'Accès restreint',
    help: 'Votre rôle ne couvre pas ces données. Demandez l\u2019accès à un administrateur de la plateforme.',
    primary: 'Demander l\u2019accès',
    secondary: 'Revenir au poste de travail'
  },
  error: {
    icon: 'alertTriangle',
    title: 'Impossible de charger les données',
    help: 'Une erreur est survenue côté plateforme. L\u2019incident est tracé.',
    primary: 'Réessayer',
    code: 'ERR-4207'
  }
};
/** État de tableau / section : empty (filtres), blank (première utilisation), unreachable (504), denied (droits), error (ERR-xxxx). */
function EmptyState({
  kind = 'empty',
  title,
  help,
  primary,
  secondary,
  code,
  compact,
  onPrimary,
  onSecondary,
  style
}) {
  const k = {
    ...K[kind],
    ...(title && {
      title
    }),
    ...(help && {
      help
    }),
    ...(primary !== undefined && {
      primary
    }),
    ...(secondary !== undefined && {
      secondary
    }),
    ...(code && {
      code
    })
  };
  const danger = kind === 'unreachable' || kind === 'error';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      padding: compact ? '28px 16px' : '56px 20px',
      textAlign: 'center',
      color: 'var(--ink-2)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: danger ? 'var(--err-soft)' : kind === 'denied' ? 'var(--warn-soft)' : 'var(--surface-alt)',
      color: danger ? 'var(--err)' : kind === 'denied' ? 'var(--warn)' : 'var(--ink-2)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 22
  })), React.createElement('b', {
    style: {
      font: '700 15px var(--font-ui)',
      color: 'var(--ink)'
    }
  }, k.title), React.createElement('span', {
    style: {
      fontSize: 12.5,
      maxWidth: '52ch',
      lineHeight: 1.55
    }
  }, k.help, k.code && React.createElement(React.Fragment, null, ' ', React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--ink)'
    }
  }, k.code))), (k.primary || k.secondary) && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      paddingTop: 4
    }
  }, k.primary && React.createElement('button', {
    onClick: onPrimary,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '7px 12px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--r-btn)',
      background: 'var(--accent)',
      color: '#fff',
      font: '600 11.5px var(--font-ui)',
      boxShadow: 'var(--shadow-cta)'
    }
  }, danger && React.createElement(__ds_scope.Icon, {
    name: 'rotateCw',
    size: 13
  }), k.primary), k.secondary && React.createElement('button', {
    onClick: onSecondary,
    style: {
      padding: '7px 12px',
      cursor: 'pointer',
      borderRadius: 'var(--r-btn)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      color: 'var(--ink)',
      font: '600 11.5px var(--font-ui)'
    }
  }, k.secondary)));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/states/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/datatable/DataTable.jsx
try { (() => {
const th = {
  font: '600 10px var(--font-ui)',
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  color: 'var(--ink-micro)',
  textAlign: 'left',
  padding: '8px 12px',
  borderBottom: '1px solid var(--border)',
  background: 'var(--surface-alt)',
  whiteSpace: 'nowrap'
};
const td = {
  padding: '7px 12px',
  borderBottom: '1px solid var(--border)',
  color: 'var(--ink-2)',
  verticalAlign: 'middle',
  fontVariantNumeric: 'tabular-nums',
  fontSize: 12.5
};
/**
 * Datatable : en-têtes triables (flèche sur la colonne active), case de sélection, ligne survolée / sélectionnée / dépliée,
 * accordéon (expandable → sous-tableau rendu dans une ligne pleine largeur, fond surface alternée, filet accent à gauche),
 * états state='loading' | 'empty' | 'blank' | 'unreachable' | 'denied' | 'error' (via EmptyState), bouton ⋮ en fin de ligne.
 */
function DataTable({
  columns = [],
  rows = [],
  state,
  sort,
  selectable = true,
  expandable = false,
  actions = true,
  renderExpanded,
  style
}) {
  const colSpan = columns.length + (selectable ? 1 : 0) + (expandable ? 1 : 0) + (actions ? 1 : 0);
  return React.createElement('div', {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, expandable && React.createElement('th', {
    style: {
      ...th,
      width: 32
    }
  }), selectable && React.createElement('th', {
    style: {
      ...th,
      width: 34,
      paddingLeft: 14
    }
  }, React.createElement(__ds_scope.Checkbox, {})), columns.map((c, i) => React.createElement('th', {
    key: i,
    style: {
      ...th,
      textAlign: c.align || 'left',
      cursor: c.sortable === false ? 'default' : 'pointer'
    }
  }, React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      color: sort && sort.key === c.key ? 'var(--ink)' : undefined
    }
  }, c.label, c.sortable !== false && React.createElement(__ds_scope.Icon, {
    name: sort && sort.key === c.key ? sort.dir === 'desc' ? 'chevronDown' : 'chevronUp' : 'chevronsUpDown',
    size: 12,
    style: {
      opacity: sort && sort.key === c.key ? 1 : .5
    }
  })))), actions && React.createElement('th', {
    style: {
      ...th,
      width: 36
    }
  }))), React.createElement('tbody', null, state === 'loading' && [0, 1, 2, 3, 4].map(i => React.createElement('tr', {
    key: 'sk' + i
  }, React.createElement('td', {
    colSpan,
    style: {
      padding: 0
    }
  }, React.createElement(__ds_scope.SkeletonRow, {
    style: {
      borderBottom: i === 4 ? 'none' : undefined
    }
  })))), state && state !== 'loading' && React.createElement('tr', null, React.createElement('td', {
    colSpan,
    style: {
      padding: 0
    }
  }, React.createElement(__ds_scope.EmptyState, {
    kind: state
  }))), !state && rows.map((r, ri) => {
    const bg = r.selected ? 'var(--accent-soft)' : r.hover || r.expanded ? 'var(--surface-alt)' : 'transparent';
    return React.createElement(React.Fragment, {
      key: ri
    }, React.createElement('tr', {
      style: {
        background: bg
      }
    }, expandable && React.createElement('td', {
      style: {
        ...td,
        width: 32,
        paddingRight: 0,
        color: 'var(--ink-2)'
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        transition: 'transform .15s',
        transform: r.expanded ? 'rotate(90deg)' : 'none'
      }
    }, React.createElement(__ds_scope.Icon, {
      name: 'chevronRight',
      size: 14
    }))), selectable && React.createElement('td', {
      style: {
        ...td,
        width: 34,
        paddingLeft: 14
      }
    }, React.createElement(__ds_scope.Checkbox, {
      checked: !!r.selected
    })), columns.map((c, ci) => React.createElement('td', {
      key: ci,
      style: {
        ...td,
        textAlign: c.align || 'left',
        ...(c.strong ? {
          color: 'var(--ink)',
          fontWeight: 600
        } : null),
        ...(c.mono ? {
          fontFamily: 'var(--font-mono)',
          fontSize: 12
        } : null)
      }
    }, typeof c.render === 'function' ? c.render(r) : r[c.key])), actions && React.createElement('td', {
      style: {
        ...td,
        width: 36,
        color: 'var(--ink-weak)',
        textAlign: 'right'
      }
    }, React.createElement(__ds_scope.Icon, {
      name: 'moreVertical',
      size: 15
    }))), r.expanded && renderExpanded && React.createElement('tr', null, React.createElement('td', {
      colSpan,
      style: {
        padding: 0,
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface-alt)'
      }
    }, React.createElement('div', {
      style: {
        margin: '0 0 0 ' + ((expandable ? 32 : 0) + (selectable ? 34 : 0) + 12) + 'px',
        padding: '10px 14px 12px 0',
        borderLeft: '2px solid var(--accent)',
        paddingLeft: 14
      }
    }, renderExpanded(r)))));
  }))));
}
/** Sous-tableau compact pour l'accordéon : en-têtes 9.5px, lignes 30px, sans bordure extérieure. */
function SubTable({
  columns = [],
  rows = [],
  style
}) {
  const sth = {
    font: '600 9.5px var(--font-ui)',
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: 'var(--ink-micro)',
    textAlign: 'left',
    padding: '4px 10px 6px',
    borderBottom: '1px solid var(--border)'
  };
  const std = {
    padding: '6px 10px',
    fontSize: 12,
    color: 'var(--ink-2)',
    borderBottom: '1px solid var(--border)',
    fontVariantNumeric: 'tabular-nums'
  };
  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'var(--surface-card)',
      borderRadius: 8,
      overflow: 'hidden',
      border: '1px solid var(--border)',
      ...style
    }
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map((c, i) => React.createElement('th', {
    key: i,
    style: {
      ...sth,
      textAlign: c.align || 'left'
    }
  }, c.label)))), React.createElement('tbody', null, rows.map((r, i) => React.createElement('tr', {
    key: i
  }, columns.map((c, j) => React.createElement('td', {
    key: j,
    style: {
      ...std,
      textAlign: c.align || 'left',
      ...(c.strong ? {
        color: 'var(--ink)',
        fontWeight: 600
      } : null),
      ...(c.mono ? {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5
      } : null),
      borderBottom: i === rows.length - 1 ? 'none' : std.borderBottom
    }
  }, typeof c.render === 'function' ? c.render(r) : r[c.key]))))));
}
Object.assign(__ds_scope, { DataTable, SubTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/datatable/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/stepper/Stepper.jsx
try { (() => {
/** Stepper de formulaire : étapes numérotées (faite = coche accent, courante = pastille accent, à venir = neutre), horizontal ou vertical. */
function Stepper({
  steps = [],
  current = 0,
  orientation = 'horizontal',
  style
}) {
  const h = orientation === 'horizontal';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: h ? 'row' : 'column',
      alignItems: h ? 'flex-start' : 'stretch',
      gap: h ? 0 : 0,
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current,
      now = i === current,
      err = s.error;
    const dot = React.createElement('span', {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        flex: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '700 11.5px var(--font-ui)',
        fontVariantNumeric: 'tabular-nums',
        background: err ? 'var(--err)' : done || now ? 'var(--accent)' : 'var(--surface-card)',
        color: done || now || err ? '#fff' : 'var(--ink-2)',
        border: done || now || err ? 'none' : '1px solid var(--border)',
        boxShadow: now ? '0 0 0 4px var(--accent-soft)' : 'none'
      }
    }, done ? React.createElement(__ds_scope.Icon, {
      name: 'check',
      size: 13,
      strokeWidth: 2.5
    }) : err ? '!' : i + 1);
    const txt = React.createElement('span', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        minWidth: 0
      }
    }, React.createElement('b', {
      style: {
        font: (now ? 700 : 600) + ' 12.5px var(--font-ui)',
        color: now ? 'var(--ink)' : done ? 'var(--ink-2)' : 'var(--ink-weak)',
        whiteSpace: 'nowrap'
      }
    }, s.label), s.meta && React.createElement('span', {
      style: {
        fontSize: 11,
        color: err ? 'var(--err)' : 'var(--ink-weak)',
        whiteSpace: 'nowrap'
      }
    }, s.meta));
    const line = i < steps.length - 1 && React.createElement('span', {
      style: h ? {
        flex: 1,
        height: 2,
        margin: '12px 10px 0',
        background: done ? 'var(--accent)' : 'var(--border)',
        borderRadius: 2
      } : {
        width: 2,
        minHeight: 22,
        margin: '4px 0 4px 12px',
        background: done ? 'var(--accent)' : 'var(--border)',
        borderRadius: 2
      }
    });
    return React.createElement(React.Fragment, {
      key: i
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: h ? 'flex-start' : 'center',
        gap: 10,
        flex: h ? 'none' : undefined
      }
    }, dot, txt), line);
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/stepper/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/table/ColumnsMenu.jsx
try { (() => {
/** Menu « Colonnes » : cases afficher/masquer, poignée de réorganisation, lien Réinitialiser. */
function ColumnsMenu({
  columns = [],
  onToggle,
  onReset,
  width = 280,
  style
}) {
  return React.createElement('div', {
    style: {
      width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      boxShadow: 'var(--shadow-pop)',
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      font: '600 11px var(--font-ui)',
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--ink-micro)'
    }
  }, 'Colonnes', React.createElement('button', {
    onClick: onReset,
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      font: '600 10.5px var(--font-ui)',
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--accent-ink)'
    }
  }, 'Réinitialiser')), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, columns.map((c, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '7px 4px',
      fontSize: 12.5,
      borderRadius: 6,
      background: c.dragging ? 'var(--surface-alt)' : 'transparent'
    }
  }, React.createElement('span', {
    style: {
      display: 'flex',
      color: 'var(--ink-weak)',
      cursor: 'grab'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'gripVertical',
    size: 13
  })), React.createElement(__ds_scope.Checkbox, {
    checked: c.visible,
    disabled: c.locked,
    onChange: onToggle ? v => onToggle(i, v) : undefined
  }), React.createElement('span', {
    style: {
      color: c.visible ? 'var(--ink)' : 'var(--ink-weak)'
    }
  }, c.label), c.locked && React.createElement('span', {
    style: {
      marginLeft: 'auto',
      fontSize: 10.5,
      color: 'var(--ink-weak)'
    }
  }, 'fixe')))));
}
Object.assign(__ds_scope, { ColumnsMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/table/ColumnsMenu.jsx", error: String((e && e.message) || e) }); }

// components/table/ContextMenu.jsx
try { (() => {
/** Menu contextuel (clic droit / ⋮) — surface carte, rayon 10px, lignes 32px, destructif #C42121 après séparateur. */
function ContextMenu({
  items = [],
  width = 216,
  style
}) {
  return React.createElement('div', {
    style: {
      width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-field)',
      boxShadow: 'var(--shadow-pop)',
      padding: 5,
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, items.map((it, i) => it === '---' ? React.createElement('div', {
    key: i,
    style: {
      height: 1,
      background: 'var(--border)',
      margin: '4px 6px'
    }
  }) : React.createElement('button', {
    key: i,
    onClick: it.onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 32,
      padding: '0 9px',
      border: 'none',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      borderRadius: 6,
      font: '500 12.5px var(--font-ui)',
      color: it.destructive ? 'var(--crit)' : 'var(--ink)',
      background: it.hover ? it.destructive ? 'var(--crit-soft)' : 'var(--surface-alt)' : 'transparent'
    }
  }, it.icon && React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 14,
    style: {
      color: it.destructive ? 'var(--crit)' : 'var(--ink-weak)'
    }
  }), React.createElement('span', {
    style: {
      flex: 1
    }
  }, it.label), it.shortcut && React.createElement('span', {
    style: {
      fontSize: 11,
      color: 'var(--ink-weak)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, it.shortcut))));
}
Object.assign(__ds_scope, { ContextMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/table/ContextMenu.jsx", error: String((e && e.message) || e) }); }

// components/table/Pagination.jsx
try { (() => {
const btn = on => ({
  width: 26,
  height: 26,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: 6,
  border: on ? '1px solid var(--accent-solid)' : '1px solid var(--border)',
  background: on ? 'var(--accent-solid)' : 'var(--surface-card)',
  color: on ? '#fff' : 'var(--ink-2)',
  font: '600 11.5px var(--font-ui)',
  fontVariantNumeric: 'tabular-nums'
});
/** Pagination : range « 1–25 sur 318 » à gauche, pager à droite (page active = pastille accent),
 *  + « Éléments par page » (PROPOSITION — variante dropdown ou segmented). */
function Pagination({
  from,
  to,
  total,
  page,
  pages,
  onPage,
  pageSize = 25,
  pageSizes = [10, 25, 50, 100],
  pageSizeVariant = 'dropdown',
  onPageSize,
  style
}) {
  const nums = [];
  for (let i = 1; i <= pages; i++) {
    if (pages > 5 && i > 3 && i < pages) {
      if (i === 4) nums.push('…');
      continue;
    }
    nums.push(i);
  }
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 11.5,
      color: 'var(--ink-2)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, `${from}–${to} sur ${total}`), React.createElement('span', {
    style: {
      flex: 1
    }
  }), pageSizeVariant !== 'none' && React.createElement('span', null, 'Éléments par page'), pageSizeVariant === 'dropdown' && React.createElement('button', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 9px',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-btn)',
      background: 'var(--surface-card)',
      color: 'var(--ink)',
      font: '600 11.5px var(--font-ui)',
      cursor: 'pointer',
      fontVariantNumeric: 'tabular-nums'
    }
  }, pageSize, React.createElement(__ds_scope.Icon, {
    name: 'chevronDown',
    size: 12,
    style: {
      color: 'var(--ink-weak)'
    }
  })), pageSizeVariant === 'segmented' && React.createElement('span', {
    style: {
      display: 'inline-flex',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-btn)',
      padding: 2,
      gap: 2,
      background: 'var(--surface-card)'
    }
  }, pageSizes.map(n => React.createElement('button', {
    key: n,
    onClick: onPageSize ? () => onPageSize(n) : undefined,
    style: {
      padding: '3px 8px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 6,
      font: `${n === pageSize ? 600 : 500} 11px var(--font-ui)`,
      fontVariantNumeric: 'tabular-nums',
      background: n === pageSize ? 'var(--accent-soft)' : 'transparent',
      color: n === pageSize ? 'var(--accent-ink)' : 'var(--ink-2)'
    }
  }, n))), React.createElement('span', {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, React.createElement('button', {
    style: btn(false),
    onClick: onPage ? () => onPage(page - 1) : undefined
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevronLeft',
    size: 13
  })), nums.map((n, i) => n === '…' ? React.createElement('span', {
    key: i,
    style: {
      padding: '0 3px',
      color: 'var(--ink-weak)'
    }
  }, '…') : React.createElement('button', {
    key: i,
    style: btn(n === page),
    onClick: onPage ? () => onPage(n) : undefined
  }, n)), React.createElement('button', {
    style: btn(false),
    onClick: onPage ? () => onPage(page + 1) : undefined
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevronRight',
    size: 13
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/table/Pagination.jsx", error: String((e && e.message) || e) }); }

// extracted/v-c4875e08.js
try { (() => {
if (!window.__galRender) {
  window.__galRender = 1;
  (function () {
    const LOGO = window.__resources && window.__resources.skeraLogo || 'galerie/skera-logo.svg';
    const I = n => `<i data-lucide="${n}"></i>`;
    const pill = (c, t, run) => `<span class="pill ${c}${run ? ' run' : ''}"><i></i>${t}</span>`;
    const ST = {
      a: pill('ok', 'Actif'),
      p: pill('inf', 'En production', 1),
      e: pill('er', 'En erreur'),
      d: pill('wa', 'À décommissionner'),
      x: pill('off', 'Décommissionné'),
      o: pill('off', 'Éteinte'),
      ok: pill('ok', 'Prêt'),
      ko: pill('wa', 'Pas prêt')
    };
    const DESIGNS = [{
      c: 'd1',
      sh: 'side',
      n: 'Console claire · Light',
      d: 'Space Grotesk / DM Sans — coins 16px, ombres froides'
    }, {
      c: 'd1d dk',
      sh: 'side',
      n: 'Console claire · Dark',
      d: 'Mêmes tokens, surfaces profondes #0B0C11'
    }, {
      c: 'd2l',
      sh: 'side',
      n: 'Signal · Light',
      d: 'Archivo / Public Sans — technique, bordures franches, coins 6px'
    }, {
      c: 'd2 dk',
      sh: 'side',
      n: 'Signal · Dark',
      d: 'Noir bleuté #101014, en-têtes soulignés'
    }, {
      c: 'd10l',
      sh: 'side',
      n: 'Graphite · Light',
      d: 'Manrope — gris froid, KPI soulignés rouge'
    }, {
      c: 'd10 dk',
      sh: 'side',
      n: 'Graphite · Dark',
      d: 'Ardoise mi-sombre, pastilles saturées'
    }, {
      c: 'd4l sv2 nv1',
      sh: 'side',
      n: 'Cockpit · Light',
      d: 'Plus Jakarta Sans — sidebar plate à la couleur du header, sélection imbriquée N1'
    }, {
      c: 'd4d dk sv2 nv1',
      sh: 'side',
      n: 'Cockpit · Dark',
      d: 'Nuit marine #101623, sidebar plate, sélection imbriquée N1'
    }];
    const NAVA = [['layout-dashboard', "Vue d'ensemble"], ['server', 'Evolucloud'], ['hard-drive', 'Dedicloud'], ['globe', 'Hébergement web'], ['mail-warning', 'Antispam'], ['shield', 'Pare-feu & NAT'], ['network', 'IPAM'], ['send', 'SMTP']];
    const NAVC = ["Vue d'ensemble", 'Evolucloud', 'Hébergement web', 'Antispam', 'Support'];
    const TOPBAR = `<div class="top"><div class="srch">${I('search')}<span>Rechercher une ressource…</span><kbd>⌘K</kbd></div><span class="tsp"></span><div class="thm"><span class="on">${I('sun')}</span><span>${I('moon')}</span></div>${I('bell')}<div class="ava">TB</div></div>`;
    function shellA(t, inner, a) {
      const RIDX = {
        dash: 0,
        evo: 1,
        dedi: 2,
        ipam: 6
      };
      if (t.sh === 'rail') return `<div class="sh s-rail"><aside class="rail"><div class="rmark">S</div>${NAVA.map((it, i) => `<div class="ri${i === RIDX[a] ? ' on' : ''}" title="${it[1]}">${I(it[0])}</div>`).join('')}<div class="sfoot"><div class="ri">${I('settings')}</div></div></aside><main><div class="top"><img class="wl" src="${LOGO}" alt="SKERA"><div class="srch">${I('search')}<span>Rechercher une ressource…</span><kbd>⌘K</kbd></div><span class="tsp"></span><div class="thm"><span class="on">${I('moon')}</span><span>${I('sun')}</span></div>${I('bell')}<div class="ava">TB</div></div><div class="content">${inner}</div></main></div>`;
      const sub = (k, l) => `<div class="ni sub${a === k ? ' on' : ''}">${l}</div>`;
      return `<div class="sh s-side"><aside class="side"><div class="shead"><img src="${LOGO}" alt="SKERA"><span class="scol">${I('chevron-left')}</span></div>
<div class="ni${a === 'dash' ? ' on' : ''}">${I('layout-dashboard')}Tableau de bord</div>
<div class="ni">${I('package')}Produits<span class="gch">${I('chevron-up')}</span></div>
${sub('evo', 'Evolucloud')}${sub('dedi', 'Dedicloud')}${sub('web', 'Hébergement web')}${sub('spam', 'Antispam')}${sub('fw', 'Pare-feu & NAT')}${sub('smtp', 'SMTP')}
<div class="ni${a === 'ipam' ? ' on' : ''}">${I('network')}IPAM<span class="gch">${I('chevron-down')}</span></div>
<div class="ni">${I('settings')}Gestion de la plateforme<span class="gch">${I('chevron-down')}</span></div></aside><main>${TOPBAR}<div class="content">${inner}</div></main></div>`;
    }
    const NAVCS = [['layout-dashboard', "Vue d'ensemble"], ['server', 'Evolucloud'], ['globe', 'Hébergement web'], ['mail-warning', 'Antispam'], ['life-buoy', 'Support']];
    function shellC(t, inner, a) {
      return `<div class="sh s-side"><aside class="side"><div class="shead"><img src="${LOGO}" alt="SKERA"><span class="scol">${I('chevron-left')}</span></div>
${NAVCS.map((it, i) => `<div class="ni${i === a ? ' on' : ''}">${I(it[0])}${it[1]}</div>`).join('')}
<div class="sfoot"><div class="ni">${I('settings')}Paramètres</div></div></aside><main><div class="top"><div class="srch">${I('search')}<span>Rechercher…</span><kbd>⌘K</kbd></div><span class="tsp"></span><span class="cbadge">${I('building-2')}Cabinet Roux</span><div class="thm"><span class="on">${I('sun')}</span><span>${I('moon')}</span></div><div class="ava">CR</div></div><div class="content">${inner}</div></main></div>`;
    }
    /* ── A1/A2 · Connexions ── */
    const fld = (l, v, ph, extra) => `<div class="fld"><label>${l}</label><div class="in${extra || ''}">${ph ? `<span class="ph">${v}</span>` : v}</div></div>`;
    const MSL = `<svg width="16" height="16" viewBox="0 0 16 16"><rect width="7.4" height="7.4" fill="#F25022"></rect><rect x="8.6" width="7.4" height="7.4" fill="#7FBA00"></rect><rect y="8.6" width="7.4" height="7.4" fill="#00A4EF"></rect><rect x="8.6" y="8.6" width="7.4" height="7.4" fill="#FFB900"></rect></svg>`;
    function loginPage(tag, h1, sub, card, foot) {
      return `<div class="lsplit"><div class="lbrand"><span class="ltag">${tag}</span><h1>${h1}</h1><p class="lsub">${sub}</p><div class="lstats"><div><b>99,98 %</b><span>Disponibilité 30 j</span></div><div><b>4</b><span>Datacenters en France</span></div><div><b>6 min</b><span>Production moyenne d'une VM</span></div></div></div><div class="lform">${card}<div class="lgfoot">${foot}</div></div></div>`;
    }
    function loginA(t) {
      return loginPage('Console d\'administration · SKE-A', 'La production cloud de tous vos clients, dans une seule console.', 'Provisioning automatisé en 6 étapes, parc en temps réel, hébergement souverain.', `<div class="card lgc"><img src="${LOGO}" alt="SKERA"><span class="lgt">Connexion technicien</span><h1>Bienvenue</h1><p class="lgs">L'authentification passe par votre compte Microsoft professionnel.</p>
<span class="btn msbtn">${MSL}Se connecter avec Microsoft</span>
<div class="lghint">${I('shield-check')}Session sécurisée par Entra ID — MFA requis.</div></div>`, '<span>SKE-A v4.2.1</span><span>·</span><span>Support interne</span>');
    }
    function loginC(t) {
      return loginPage('Espace client · SKE-C', 'Votre parc cloud, en temps réel.', 'Machines virtuelles, sites web, licences : suivez tout votre périmètre depuis un seul endroit.', `<div class="card lgc"><img src="${LOGO}" alt="SKERA"><span class="lgt">Espace client</span><h1>Bienvenue</h1><p class="lgs">Connectez-vous avec le compte Microsoft de votre entreprise.</p>
<span class="btn msbtn">${MSL}Se connecter avec Microsoft</span>
<div class="lghint">${I('info')}Pas encore d'accès ? Contactez votre agence.</div></div>`, '<span>SKE-C</span><span>·</span><span>skera.fr</span>');
    }
    /* ── A3 · Dashboard SKE-A ── */
    const CHART = `<svg viewBox="0 0 600 175"><line class="gline" x1="0" y1="40" x2="600" y2="40"></line><line class="gline" x1="0" y1="85" x2="600" y2="85"></line><line class="gline" x1="0" y1="130" x2="600" y2="130"></line><path class="charea" d="M0,128C50,124 100,96 150,100C200,104 260,70 320,74C380,78 450,50 520,54C560,56 580,44 600,42L600,160L0,160Z"></path><path class="ch1" d="M0,128C50,124 100,96 150,100C200,104 260,70 320,74C380,78 450,50 520,54C560,56 580,44 600,42"></path><path class="ch2" d="M0,144C60,141 120,126 180,130C240,134 300,108 360,112C420,116 480,94 540,98C570,100 590,90 600,88"></path><path class="ch3" d="M0,155C70,153 130,144 190,147C250,150 310,135 370,138C430,141 490,126 550,129C575,130 590,124 600,122"></path><text class="xlab" x="0" y="172">J-30</text><text class="xlab" x="145" y="172">J-22</text><text class="xlab" x="295" y="172">J-15</text><text class="xlab" x="445" y="172">J-7</text><text class="xlab" x="548" y="172">Aujourd'hui</text></svg>`;
    const JOBS = [['vm-prd-atlas-07', 'Nexalys', 'Étape 4/6 — Configuration réseau', 66], ['vm-prd-helios-03', 'Cabinet Roux', 'Étape 2/6 — Allocation du stockage', 33], ['srv-ded-042', 'Ozalide', 'Étape 6/6 — Tests finaux', 92]];
    function dashA(t) {
      const kpis = `<div class="kpis"><div class="card kpi st-ok"><span class="klab">Ressources en production</span><span class="kval">312</span><span class="kd"><b>+14</b> ce mois</span></div><div class="card kpi st-ok"><span class="klab">Productions en cours</span><span class="kval">6</span><span class="kd">étape moyenne 3/6</span></div><div class="card kpi st-wa"><span class="klab">Demandes en attente</span><span class="kval">4</span><span class="kd">2 à valider aujourd'hui</span></div><div class="card kpi st-ok"><span class="klab">Disponibilité 30 j</span><span class="kval">99,98 %</span><span class="kd"><b>SLA respecté</b></span></div></div>`;
      const jobs = JOBS.map(j => `<div class="job"><div class="jr"><span class="jn">${j[0]}</span><span class="js">${j[2].split(' — ')[0]}</span></div><div class="jd">${j[1]} — ${j[2].split(' — ')[1]}</div><div class="pg"><i style="width:${j[3]}%"></i></div></div>`).join('');
      return shellA(t, `<div class="phead"><h1>Vue d'ensemble</h1><span class="sub">Console SKE-A</span><span class="tsp"></span><span class="btn gh sm">${I('calendar')}30 derniers jours</span><span class="btn pri">${I('rocket')}Mettre en production</span></div>
${kpis}
<div class="row2"><div class="card"><div class="ct"><h2>Production &amp; consommation</h2><div class="leg"><span><i style="background:var(--acc)"></i>Production</span><span><i style="background:var(--infd)"></i>CPU</span><span><i style="background:var(--wad)"></i>RAM</span></div></div><div class="chart">${CHART}</div></div>
<div class="card"><div class="ct"><h2>Productions en cours</h2><span class="lnk">Tout voir</span></div><div class="jobs">${jobs}</div></div></div>
<div class="card"><div class="ct"><h2>Dernières demandes</h2><span class="lnk">Toutes les demandes</span></div><table class="tbl"><thead><tr><th>Demande</th><th>Client</th><th>Agence</th><th>Produit</th><th>Statut</th></tr></thead><tbody>
<tr><td class="nm">DEM-2418</td><td>Nexalys</td><td>Agence Ouest</td><td>Evolucloud</td><td>${pill('wa', 'En attente de validation')}</td></tr>
<tr><td class="nm">DEM-2417</td><td>Ardena Santé</td><td>Agence Lyon</td><td>Hébergement web</td><td>${pill('inf', 'Installation en cours', 1)}</td></tr>
<tr><td class="nm">DEM-2415</td><td>Cabinet Roux</td><td>Agence Paris</td><td>Antispam</td><td>${pill('ok', 'Validé')}</td></tr>
</tbody></table></div>`, 'dash');
    }
    /* ── A4 · Dashboard SKE-C ── */
    function dashC(t) {
      const prods = [['server', 'Evolucloud', '<b>12</b> VM actives · 1 en production'], ['globe', 'Hébergement web', '<b>8</b> sites en ligne'], ['mail-warning', 'Antispam', '<b>240</b> licences SpamRock'], ['shield', 'Pare-feu & NAT', '<b>1</b> pare-feu · 24 règles']].map(p => `<div class="card prod"><span class="pic">${I(p[0])}</span><span class="pn">${p[1]}</span><span class="pv">${p[2]}</span></div>`).join('');
      const parc = [['check-circle-2', '<b>vm-prd-helios-02</b> redémarrée avec succès', 'il y a 26 min', ''], ['loader', '<b>vm-prd-helios-03</b> en production — étape 2/6', 'en cours', ''], ['alert-triangle', 'Quota de licences antispam bientôt atteint', '240 / 250', '']].map(f => `<div class="fi"><span class="fic">${I(f[0])}</span><span>${f[1]}</span><span class="ft">${f[2]}</span></div>`).join('');
      return shellC(t, `<div class="phead"><h1>Bonjour, Cabinet Roux</h1><span class="sub">Votre parc cloud</span><span class="tsp"></span><span class="btn pri">${I('plus')}Nouvelle demande</span></div>
<div class="prods">${prods}</div>
<div class="row2c"><div class="card"><div class="ct"><h2>État du parc</h2><span class="lnk">Journal</span></div><div class="feed parc">${parc}</div></div>
<div class="card"><div class="ct"><h2>Quota du contrat</h2><span class="lnk">Contrat</span></div><div class="qbody">
<div class="fbrow"><div class="fbl"><b>Machines virtuelles</b><span class="fv">12 / 15</span></div><div class="fb o"><i style="width:80%"></i></div></div>
<div class="fbrow"><div class="fbl"><b>Stockage SSD</b><span class="fv">3,2 / 5 To</span></div><div class="fb g"><i style="width:64%"></i></div></div>
<div class="fbrow"><div class="fbl"><b>Licences antispam</b><span class="fv">240 / 250</span></div><div class="fb r"><i style="width:96%"></i></div></div>
</div></div></div>`, 0);
    }
    /* ── tableaux ── */
    function tblCard(toolbar, head, rows, pgn) {
      return `<div class="card tcard">${toolbar}<div class="tblbox"><table class="tbl"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div><div class="pgn">${pgn}<span class="tsp"></span><span class="pp">${I('chevron-left')}</span><span class="pp on">1</span><span class="pp">2</span><span class="pp">3</span><span class="pp">${I('chevron-right')}</span></div></div>`;
    }
    const dots = `<span style="display:flex;padding:5px;border-radius:6px;color:var(--t3)">${I('ellipsis')}</span>`;
    const EVOA = [['vm-prd-vega-01', 'Ardena Santé', 'Agence Lyon', 'a', 'LYO-01', '8', '32 Go', '500 Go', ''], ['vm-stg-nova-01', 'Ardena Santé', 'Agence Lyon', 'o', 'PAR-02', '2', '8 Go', '100 Go', ''], ['vm-prd-helios-02', 'Cabinet Roux', 'Agence Paris', 'p', 'PAR-02', '4', '16 Go', '250 Go', 'hov'], ['vm-bkp-rhea-02', 'Cabinet Roux', 'Agence Paris', 'd', 'RBX-01', '2', '4 Go', '2 To', ''], ['vm-stg-lyra-01', 'Mairie de Vannes', 'Agence Ouest', 'o', 'RBX-01', '2', '8 Go', '100 Go', ''], ['vm-prd-atlas-01', 'Nexalys', 'Agence Ouest', 'a', 'PAR-01', '8', '32 Go', '500 Go', 'sel'], ['vm-prd-orion-04', 'Nexalys', 'Agence Paris', 'e', 'PAR-01', '16', '64 Go', '1 To', ''], ['vm-prd-mira-03', 'Ozalide', 'Agence Lyon', 'a', 'LYO-01', '4', '16 Go', '250 Go', ''], ['vm-old-pallas-01', 'Ozalide', 'Agence Lyon', 'x', 'RBX-01', '2', '8 Go', '100 Go', '']];
    function evoA(t) {
      const rows = EVOA.map(v => `<tr class="${v[8]}"><td><span class="cb${v[8] === 'sel' ? ' on' : ''}"></span></td><td class="nm">${v[0]}</td><td>${v[1]}</td><td>${v[2]}</td><td>${ST[v[3]]}</td><td class="num">${v[4]}</td><td class="num">${v[5]} vCPU</td><td class="num">${v[6]}</td><td class="num">${v[7]}</td>${t.sh === 'rail' ? '<td>' + dots + '</td>' : ''}</tr>`).join('');
      const toolbar = `${tbTools('Filtrer par nom, client…', '3', '7', '')}
<div class="bulk"><span class="n">1 sélectionnée</span><span class="tsp"></span><span class="btn gh sm">${I('power')}Allumer</span><span class="btn gh sm">${I('power-off')}Éteindre</span><span class="btn dsolid sm">${I('trash-2')}Supprimer</span></div>`;
      return shellA(t, `<div class="phead"><h1>Evolucloud</h1><span class="sub">86 machines · tri par client</span><span class="tsp"></span><span class="btn gh sm">${I('download')}Exporter</span><span class="btn pri">${I('plus')}Nouvelle machine</span></div>
${SYNTH_EVO}
${tblCard(toolbar, `<th style="width:36px"><span class="cb"></span></th><th>Nom</th><th>Client ↓</th><th>Agence</th><th>Statut</th><th>Datacenter</th><th>CPU</th><th>RAM</th><th>Stockage</th>${t.sh === 'rail' ? '<th></th>' : ''}`, rows, `<span>86 machines · page 1 sur 9</span>`)}`, 'evo');
    }
    function evoC(t) {
      const rows = [['vm-prd-helios-02', 'p', 'PAR-02', '4', '16 Go', '250 Go', 'hov'], ['vm-prd-hera-01', 'a', 'PAR-02', '8', '32 Go', '500 Go', ''], ['vm-prd-zeus-03', 'a', 'PAR-01', '8', '32 Go', '500 Go', ''], ['vm-stg-eos-02', 'o', 'PAR-02', '2', '8 Go', '100 Go', ''], ['vm-bkp-rhea-02', 'd', 'RBX-01', '2', '4 Go', '2 To', '']].map(v => `<tr class="${v[6]}"><td><span class="cb"></span></td><td class="nm">${v[0]}</td><td>${ST[v[1]]}</td><td class="num">${v[2]}</td><td class="num">${v[3]} vCPU</td><td class="num">${v[4]}</td><td class="num">${v[5]}</td>${t.sh === 'rail' ? '<td>' + dots + '</td>' : ''}</tr>`).join('');
      const toolbar = `<div class="toolbar"><div class="srch" style="flex:0 1 230px">${I('search')}<span>Filtrer…</span></div><span class="ftk on"><span class="fk">Statut</span><span class="fv2">Actives ${I('x')}</span></span><span class="fadd">${I('plus')}Filtre</span><span class="tsp"></span><div class="fbrow" style="width:190px"><div class="fbl" style="font-size:11px"><b>Quota VM</b><span class="fv">12 / 15</span></div><div class="fb o"><i style="width:80%"></i></div></div><span class="btn pri">${I('plus')}Demander une machine</span></div>`;
      return shellC(t, `<div class="phead"><h1>Evolucloud</h1><span class="sub">Vos machines virtuelles</span></div>
${tblCard(toolbar, `<th style="width:36px"><span class="cb"></span></th><th>Nom ↓</th><th>Statut</th><th>Datacenter</th><th>CPU</th><th>RAM</th><th>Stockage</th>${t.sh === 'rail' ? '<th></th>' : ''}`, rows, `<span>12 machines · page 1 sur 2</span>`)}`, 1);
    }
    function dedi(t) {
      const rows = [['DED-0142', 'Dell PowerEdge R650', 'PAR-01', '2× Xeon Silver 4310', '128 Go', '4× 1,92 To NVMe', 'ok'], ['DED-0141', 'HPE ProLiant DL360', 'PAR-02', '2× Xeon Gold 5318', '256 Go', '8× 1,92 To NVMe', 'ok', 'hov'], ['DED-0139', 'Dell PowerEdge R750', 'RBX-01', '2× Xeon Gold 6338', '512 Go', '12× 3,84 To NVMe', 'ko'], ['DED-0137', 'Dell PowerEdge R650', 'LYO-01', '2× Xeon Silver 4314', '128 Go', '4× 960 Go NVMe', 'ok'], ['DED-0135', 'HPE ProLiant DL380', 'PAR-01', '2× Xeon Gold 5320', '384 Go', '8× 3,84 To NVMe', 'ko'], ['DED-0132', 'Dell PowerEdge R750', 'RBX-01', '2× Xeon Gold 6330', '256 Go', '6× 1,92 To NVMe', 'ok']].map(v => `<tr class="${v[7] || ''}"><td class="nm">${v[0]}</td><td>${v[1]}</td><td class="num">${v[2]}</td><td>${v[3]}</td><td class="num">${v[4]}</td><td class="num">${v[5]}</td><td>${ST[v[6]]}</td>${t.sh === 'rail' ? '<td>' + dots + '</td>' : ''}</tr>`).join('');
      const toolbar = tbTools('Filtrer par référence…', '2', '7', '');
      return shellA(t, `<div class="phead"><h1>Dedicloud — serveurs en stock</h1><span class="sub">14 serveurs disponibles</span><span class="tsp"></span><span class="btn gh sm">${I('refresh-cw')}Vérifier la préparation</span><span class="btn pri">${I('plus')}Réceptionner un serveur</span></div>
${SYNTH_DEDI}
${tblCard(toolbar, `<th>Référence ↓</th><th>Modèle</th><th>Datacenter</th><th>CPU</th><th>RAM</th><th>Disques</th><th>État</th>${t.sh === 'rail' ? '<th></th>' : ''}`, rows, `<span>14 serveurs · page 1 sur 2</span>`)}`, 'dedi');
    }
    function ipam(t) {
      const bar = p => {
        const c = p < 70 ? 'g' : p <= 90 ? 'o' : 'r';
        return `<div class="cellfb"><div class="fb ${c}"><i style="width:${p}%"></i></div><span class="fpct ${c}">${p} %</span></div>`;
      };
      const rows = [['net-prod-nexalys', 'Nexalys', 'Agence Ouest', '12', '10.12.0.0/16', '6', bar(82)], ['net-lan-roux', 'Cabinet Roux', 'Agence Paris', '24', '10.24.0.0/20', '3', bar(63), 'hov'], ['net-dmz-ardena', 'Ardena Santé', 'Agence Lyon', '31', '10.31.8.0/22', '2', bar(94)], ['net-prod-ozalide', 'Ozalide', 'Agence Lyon', '18', '10.18.0.0/18', '4', bar(47)], ['net-bkp-vannes', 'Mairie de Vannes', 'Agence Ouest', '42', '10.42.0.0/24', '1', bar(28)], ['net-prod-vellum', 'Groupe Vellum', 'Agence Paris', '15', '10.15.0.0/16', '8', bar(76)]].map(v => `<tr class="${v[7] || ''}"><td class="nm">${v[0]}</td><td>${v[1]}</td><td>${v[2]}</td><td class="num">${v[3]}</td><td class="num">${v[4]}</td><td class="num">${v[5]}</td><td>${v[6]}</td>${t.sh === 'rail' ? '<td>' + dots + '</td>' : ''}</tr>`).join('');
      const toolbar = `${tbTools('Filtrer par réseau, client…', '2', '7', '')}`.replace('<span class="tsp"></span></div>', `<span class="tsp"></span><span class="leg"><span><span class="fpct g">●</span> &lt; 70 %</span><span><span class="fpct o">●</span> 70–90 %</span><span><span class="fpct r">●</span> &gt; 90 %</span></span></div>`);
      return shellA(t, `<div class="phead"><h1>IPAM — réseaux</h1><span class="sub">24 réseaux · 41 sous-réseaux</span><span class="tsp"></span><span class="btn gh sm">${I('download')}Exporter</span><span class="btn pri">${I('plus')}Nouveau réseau</span></div>
${SYNTH_IPAM}
${tblCard(toolbar, `<th>Réseau ↓</th><th>Client</th><th>Agence</th><th>VLAN</th><th>Plage</th><th>Sous-rés.</th><th>Remplissage</th>${t.sh === 'rail' ? '<th></th>' : ''}`, rows, `<span>24 réseaux · page 1 sur 3</span>`)}`, 'ipam');
    }
    function agence(t) {
      const fc = [['243', 'Liste des clients', 'id-card', 'on'], ['190', 'Antispam', 'shield', ''], ['84', 'VPN', 'lock', '']].map(c => `<div class="card fcard ${c[3]}"><span class="fci">${I(c[2])}</span><span class="fcv">${c[0]}</span><span class="fcl">${c[1]}</span></div>`).join('');
      const CL0 = [['ADS', 'ADESIDEES', 'Agence Lyon', '1'], ['AEF', 'AGRU ENVIRONNEMENT FRANCE', 'Agence Lyon', '3'], ['AFQ', 'CTE-SA', 'Agence Lyon', '1'], ['AFY', 'ASSOCIATION LES FOYERS MATTER MONTELIMAR', 'Agence Lyon', '1'], ['AIM', 'ARTIXIUM FRANCE', 'Agence Lyon', '1', 'hov'], ['AKO', 'ASKCO', 'Agence Ouest', '1'], ['AKS', 'AKILYS', 'Agence Lyon', '2'], ['ALE', 'ALBARELLE HOLDING', 'Agence Lyon', '1'], ['ALO', 'ALOREM', 'Agence Lyon', '1'], ['AMQ', 'AMDI - APPLICATIONS MECANIQUES ET DEVELOPPEMENT INFO…', 'Agence Paris', '1']];
      const CL = t.c.includes('d10') ? CL0.slice(0, 9) : CL0;
      const rows = CL.map(c => `<tr class="${c[4] || ''}"><td class="nm">${c[0]}</td><td>${c[1]}</td><td><span class="agp">${c[2]}</span></td><td><span class="numlnk">${c[3]}</span></td><td><span class="chev">${I('chevron-right')}</span></td></tr>`).join('');
      const toolbar = tbTools('Rechercher un client de mon agence…', '1', '5', '');
      const pgn = `<span>Éléments par page : <b style="color:var(--t1)">10</b> ${I('chevron-down')}</span><span class="tsp"></span><span class="pp">${I('chevron-left')}</span><span class="pp on">1</span><span class="pp">2</span><span class="pp">3</span><span class="pp">…</span><span class="pp">25</span><span class="pp">${I('chevron-right')}</span>`;
      return shellA(t, `<div class="phead"><h1>Tableau de bord de l'agence</h1><span class="hlp">${I('circle-help')}</span></div>
<p class="psub">Cette page récapitule les contrats et produits actifs de votre agence.</p>
<div class="fld" style="gap:8px"><label>Filtrer les clients par produit</label><div class="fcards">${fc}</div></div>
<div class="phead" style="margin-top:2px"><h1 style="font-size:16px">Mes clients</h1><span class="cntb">243</span><span class="tsp"></span><span class="btn gh sm">${I('download')}Exporter</span><span class="btn pri">${I('plus')}Nouveau client</span></div>
<div class="card tcard">${toolbar}<div class="tblbox"><table class="tbl"><thead><tr><th>Trigramme ↑</th><th>Nom</th><th>Agence</th><th>Contrats actifs</th><th style="text-align:right">Actions</th></tr></thead><tbody>${rows}</tbody></table></div><div class="pgn">${pgn}</div></div>`, 'dash');
    }

    /* ── D · modales, formulaire long, notifications ── */
    function smallModal(t) {
      return `<div class="bgfake">${ipam(t)}</div><div class="scrim"></div><div class="mwrap"><div class="md mdS"><h3>Ajouter un sous-réseau</h3><p class="msub">net-prod-nexalys · 10.12.0.0/16</p>
<div class="fld"><label>Nom du sous-réseau</label><div class="in fx">snet-prod-web</div></div>
<div class="f2"><div class="fld"><label>Plage CIDR</label><div class="in num">10.12.42.0/24</div></div><div class="fld"><label>VLAN</label><div class="in">12${I('chevron-down')}</div></div></div>
<div class="fld"><label>Passerelle</label><div class="in num">10.12.42.1</div></div>
<div class="tgrow"><span>DHCP activé<small>Attribution automatique des adresses</small></span><span class="tg on"><b></b></span></div>
<div class="mfoot"><span class="btn gh">Annuler</span><span class="btn pri">${I('plus')}Créer le sous-réseau</span></div></div></div>`;
    }
    function longForm(t) {
      const sl = (l, v, p) => `<div class="fld"><label>${l}</label><div class="slrow"><div class="sl" style="--v:${p}%"><i></i><b></b></div><span class="sv">${v}</span></div></div>`;
      return shellA(t, `<div class="phead"><h1>Nouvelle production — Evolucloud</h1><span class="sub">Brouillon enregistré</span><span class="tsp"></span><span class="btn gh sm">Annuler</span><span class="btn pri">${I('rocket')}Lancer la production</span></div>
<div class="fgrid"><div class="card fpage">
<div class="msec">Général</div>
<div class="f2"><div class="fld"><label>Nom de la machine</label><div class="in fx">vm-prd-atlas-09</div></div><div class="fld"><label>Client</label><div class="in">Nexalys${I('chevron-down')}</div></div></div>
<div class="f2"><div class="fld"><label>Agence</label><div class="in">Agence Ouest${I('chevron-down')}</div></div><div class="fld"><label>Environnement</label><div class="seg"><span class="on">Production</span><span>Staging</span></div></div></div>
<div class="msec">Infrastructure</div>
<div class="f2"><div class="fld"><label>Datacenter</label><div class="in">PAR-01 — Paris${I('chevron-down')}</div></div><div class="fld"><label>Image système</label><div class="in">Ubuntu Server 24.04 LTS${I('chevron-down')}</div></div></div>
<div class="f2"><div class="fld"><label>Rôle serveur</label><div class="in">Serveur web${I('chevron-down')}</div></div><div class="fld"><label>VLAN</label><div class="in">vlan-prod-12${I('chevron-down')}</div></div></div>
<div class="msec">Ressources</div>
<div class="f2">${sl('vCPU', '8 vCPU', 25)}${sl('Mémoire', '32 Go', 40)}</div>
<div class="f2">${sl('Stockage SSD', '500 Go', 30)}<div class="fld"><label>Options</label><div style="display:flex;gap:16px;padding-top:4px"><div class="tgrow" style="gap:8px"><span>HDS</span><span class="tg on" style="margin-left:0"><b></b></span></div><div class="tgrow" style="gap:8px"><span>IP publique</span><span class="tg on" style="margin-left:0"><b></b></span></div><div class="tgrow" style="gap:8px"><span>IPv6</span><span class="tg" style="margin-left:0"><b></b></span></div></div></div></div>
<div class="msec">Intégration</div>
<div class="f2"><div class="fld"><label>Endpoint API de post-installation</label><div class="in num">https://api.nexalys.fr/hooks/provision<span class="apibtn">${I('zap')}Tester</span></div></div><div class="fld"><label>Clé API</label><div class="in"><span class="pwin">••••••••••••</span>${I('eye')}</div></div></div>
<div class="apiok">${I('check-circle-2')}Appel testé — 200 OK en 142 ms</div>
<div class="msec">Notes</div>
<div class="fld"><label>Description libre</label><div class="in ta"><span class="ph">Contexte, contraintes, fenêtre de mise en production…</span></div></div>
</div>
<div style="display:flex;flex-direction:column;gap:14px">
<div class="card"><div class="ct"><h2>Ressources contractuelles</h2></div><div class="qbody">
<div class="fbrow"><div class="fbl"><b>vCPU</b><span class="fv">54 / 80</span></div><div class="fb g"><i style="width:67%"></i></div></div>
<div class="fbrow"><div class="fbl"><b>Mémoire</b><span class="fv">288 / 384 Go</span></div><div class="fb o"><i style="width:75%"></i></div></div>
<div class="fbrow"><div class="fbl"><b>Stockage</b><span class="fv">9,1 / 10 To</span></div><div class="fb r"><i style="width:91%"></i></div></div>
</div></div>
<div class="card"><div class="ct"><h2>Récapitulatif</h2></div><div class="qbody" style="gap:8px">
<div class="fi" style="border:none;padding:2px 0"><span>Production estimée</span><span class="ft"><b style="color:var(--t1)">≈ 6 min</b></span></div>
<div class="fi" style="border:none;padding:2px 0"><span>Étapes AWX</span><span class="ft"><b style="color:var(--t1)">6</b></span></div>
<div class="fi" style="border:none;padding:2px 0"><span>Coût mensuel estimé</span><span class="ft"><b style="color:var(--t1)">184 € HT</b></span></div>
</div></div></div></div>`, 'evo');
    }
    function notif(t) {
      const it = (u, c, ic, t1, t2, t3) => `<div class="nitem${u ? ' unread' : ''}"><span class="nic ${c}">${I(ic)}</span><div><div class="nt1">${t1}</div><div class="nt2">${t2}</div><div class="nt3">${t3}</div></div></div>`;
      return dashA(t) + `<div class="npanel"><div class="nhead"><h3>Centre d'activité</h3><span class="lnk2">Tout marquer comme lu</span></div><div class="ntabs"><span class="on">Notifications · 12</span><span>Actions · 24</span></div>
<div class="nday">Aujourd'hui</div>
${it(1, 'er', 'alert-octagon', 'vm-prd-orion-04 en erreur', 'Échec à l\'étape 5/6 — rollback effectué automatiquement.', 'il y a 18 min')}
${it(1, 'ok', 'rocket', 'Production terminée', 'vm-prd-atlas-07 est active pour Nexalys.', 'il y a 42 min')}
${it(1, 'inf', 'file-check-2', 'Demande à valider', 'DEM-2418 — Evolucloud pour Nexalys (Agence Ouest).', 'il y a 1 h')}
<div class="nday">Hier</div>
${it(1, 'wa', 'gauge', 'Quota bientôt atteint', 'Licences SpamRock : 240 / 250 pour Cabinet Roux.', '17:24')}
${it(0, 'nt', 'wrench', 'Maintenance planifiée', 'Datacenter RBX-01 — le 24 sept, 02:00 à 04:00.', '09:10')}
${it(0, 'ok', 'hard-drive-download', 'Snapshots terminés', '34 machines sauvegardées sans erreur.', '06:00')}
${AFOOT}</div>`;
    }
    function confirmDel(t) {
      return `<div class="bgfake">${evoA(t)}</div><div class="scrim"></div><div class="mwrap"><div class="md mdS"><span class="dgico">${I('trash-2')}</span><h3>Supprimer cette machine ?</h3><p class="msub">vm-prd-orion-04 · Nexalys · PAR-01</p>
<div class="dglist"><span>${I('x-circle')}La VM et ses disques seront détruits.</span><span>${I('x-circle')}Les snapshots associés seront purgés sous 7 jours.</span><span>${I('x-circle')}Cette action est irréversible.</span></div>
<div class="fld"><label>Saisissez le nom de la machine pour confirmer</label><div class="in"><span class="ph">vm-prd-orion-04</span></div></div>
<div class="mfoot"><span class="btn gh">Annuler</span><span class="btn dsolid">${I('trash-2')}Supprimer définitivement</span></div></div></div>`;
    }
    function filterModal(t) {
      const op = (l, v) => `<div class="fld"><label>${l}</label><div class="in">${v}${I('chevron-down')}</div></div>`;
      return `<div class="bgfake">${evoA(t)}</div><div class="scrim"></div><div class="mwrap"><div class="md mdS"><h3>Ajouter un filtre</h3><p class="msub">Evolucloud · 86 machines</p>
<div class="fchips"><span class="ftk on"><span class="fk">Agence</span><span class="fv2">Ouest ${I('x')}</span></span><span class="fmore">2 filtres actifs</span></div>
${op('Colonne', 'Datacenter')}
<div class="f2">${op('Opérateur', 'est l\'un de')}<div class="fld"><label>Valeur</label><div class="in fx">PAR-01, PAR-02</div></div></div>
<div class="fld"><label>Suggestions</label><div class="fsug"><span class="ftk">PAR-01</span><span class="ftk">PAR-02</span><span class="ftk">LYO-01</span><span class="ftk">RBX-01</span></div></div>
<div class="fld"><label>Combinaison avec les filtres existants</label><div class="seg"><span class="on">ET</span><span>OU</span></div></div>
<div class="tgrow"><span>Enregistrer comme vue<small>Visible par toute mon agence</small></span><span class="tg"><b></b></span></div>
<div class="mfoot"><span class="btn gh">Annuler</span><span class="btn pri">${I('filter')}Appliquer le filtre</span></div></div></div>`;
    }
    function userMenu(t) {
      const item = (ic, l, sub, extra, right) => `<div class="uitem${extra || ''}">${I(ic)}<span><b>${l}</b>${sub ? `<span class="sub">${sub}</span>` : ''}</span>${right ? `<span class="uk">${right}</span>` : ''}</div>`;
      return dashA(t) + `<div class="umenu"><div class="uhead"><div class="ava">TB</div><div><div class="uh1">Thomas Berger</div><div class="uh2">t.berger@skera.fr · Agence Ouest</div></div></div>
<div class="usep"></div>
<div class="ulab">Langue</div><div class="lseg"><div class="seg"><span class="on">Français</span><span>English</span></div></div>
<div class="usep"></div>
${item('download', 'Télécharger l\'application', 'Windows · macOS · Linux', '')}
${item('user-cog', 'Mon compte', '', '')}
${item('settings', 'Préférences', '', '', '⌘,')}
<div class="usep"></div>
${item('log-out', 'Se déconnecter', '', ' dang')}</div>`;
    }
    function rowMenu(t) {
      const it = (ic, l, right, cls) => `<div class="uitem${cls || ''}">${I(ic)}<span><b>${l}</b></span>${right ? `<span class="uk">${right}</span>` : ''}</div>`;
      const base = evoA(t).replace('<tr class="hov">', '<tr class="hov open">');
      return base + `<div class="rmenu"><div class="rmhead"><span class="rmn">vm-prd-helios-02</span><span class="rmm">Cabinet Roux · PAR-02</span></div><div class="usep"></div>
${it('panel-right-open', 'Voir la fiche', '↵')}
${it('terminal', 'Ouvrir la console')}
<div class="usep"></div>
<div class="ulab">Alimentation</div>
${it('rotate-cw', 'Redémarrer')}
${it('power-off', 'Éteindre')}
<div class="usep"></div>
<div class="ulab">Exploitation</div>
${it('camera', 'Créer un snapshot')}
${it('sliders-horizontal', 'Modifier les ressources')}
${it('move-right', 'Migrer vers un autre datacenter')}
<div class="usep"></div>
${it('trash-2', 'Supprimer la machine', '', ' dang')}</div>`;
    }
    /* propositions d'affichage du quota contractuel (SKE-C) */
    const QROWS = [['vm-prd-helios-02', 'p', 'PAR-02', '4', '16 Go', '250 Go', 'hov'], ['vm-prd-hera-01', 'a', 'PAR-02', '8', '32 Go', '500 Go', ''], ['vm-prd-zeus-03', 'a', 'PAR-01', '8', '32 Go', '500 Go', ''], ['vm-stg-eos-02', 'o', 'PAR-02', '2', '8 Go', '100 Go', ''], ['vm-bkp-rhea-02', 'd', 'RBX-01', '2', '4 Go', '2 To', '']];
    function qRows(ghost, t) {
      t = t || {};
      let r = QROWS.map(v => `<tr class="${v[6]}"><td><span class="cb"></span></td><td class="nm">${v[0]}</td><td>${ST[v[1]]}</td><td class="num">${v[2]}</td><td class="num">${v[3]} vCPU</td><td class="num">${v[4]}</td><td class="num">${v[5]}</td>${t.sh === 'rail' ? '<td>' + dots + '</td>' : ''}</tr>`).join('');
      if (ghost) r += [1, 2, 3].map(i => `<tr class="ghost"><td></td><td colspan="6"><span class="gslot">${I('plus')}Emplacement disponible sur votre contrat — ${i} sur 3</span></td><td></td></tr>`).join('');
      return r;
    }
    function qHead(title, sub, extra) {
      return `<div class="phead"><h1>${title}</h1><span class="sub">${sub}</span><span class="tsp"></span>${extra || ''}</div>`;
    }
    function qToolbar() {
      return tbTools('Filtrer…', '1', '7', '');
    }
    function qTable(ghost, t) {
      t = t || {};
      return tblCard(qToolbar(), `<th style="width:36px"><span class="cb"></span></th><th>Nom ↓</th><th>Statut</th><th>Datacenter</th><th>CPU</th><th>RAM</th><th>Stockage</th>${t.sh === 'rail' ? '<th></th>' : ''}`, qRows(ghost, t), `<span>12 machines · page 1 sur 2</span>`);
    }
    function quotaBanner(t) {
      return shellC(t, qHead('Evolucloud', 'Vos machines virtuelles', '<span class="btn pri">' + I('plus') + 'Demander une machine</span>') + `<div class="card qban"><div class="qbl"><span class="qbt"><b>12</b> machines sur les <b>15</b> de votre contrat</span><span class="qbs">3 emplacements disponibles · contrat CTR-2291 jusqu'au 31/12/2026</span></div><div class="qbb"><div class="fb o"><i style="width:80%"></i></div></div><span class="lnk">Voir le contrat</span></div>` + qTable(false, t), 1);
    }
    function quotaRing(t) {
      const R = 2 * Math.PI * 26;
      return shellC(t, qHead('Evolucloud', 'Vos machines virtuelles') + `<div class="qtop"><div class="card qring"><svg viewBox="0 0 64 64"><circle class="qrb" cx="32" cy="32" r="26"></circle><circle class="qrf" cx="32" cy="32" r="26" stroke-dasharray="${(R * 0.8).toFixed(1)} ${R.toFixed(1)}" transform="rotate(-90 32 32)"></circle></svg><div class="qrl"><span class="qrv">12 <small>/ 15</small></span><span class="qrt">Machines du contrat</span><span class="qrs">3 disponibles</span></div><span class="btn pri">${I('plus')}Demander</span></div>
<div class="card qsec"><div class="qbody">
<div class="fbrow"><div class="fbl"><b>Stockage SSD</b><span class="fv">3,2 / 5 To</span></div><div class="fb g"><i style="width:64%"></i></div></div>
<div class="fbrow"><div class="fbl"><b>vCPU</b><span class="fv">24 / 40</span></div><div class="fb g"><i style="width:60%"></i></div></div>
</div></div></div>` + qTable(false, t), 1);
    }
    function quotaTitle(t) {
      return shellC(t, qHead('Evolucloud', '<span class="qcnt">12 / 15 machines</span>', '<span class="qhint">' + I('info') + '3 emplacements restants</span><span class="btn pri">' + I('plus') + 'Demander une machine</span>') + qTable(false, t), 1);
    }
    function quotaGhost(t) {
      return shellC(t, qHead('Evolucloud', 'Vos machines virtuelles', '<span class="btn pri">' + I('plus') + 'Demander une machine</span>') + qTable(true, t), 1);
    }
    /* quota — variantes visibles (esprit Q2, sans carte secondaire) */
    const QRING = pct => {
      const R = 2 * Math.PI * 26;
      return `<svg viewBox="0 0 64 64"><circle class="qrb" cx="32" cy="32" r="26"></circle><circle class="qrf" cx="32" cy="32" r="26" stroke-dasharray="${(R * pct).toFixed(1)} ${R.toFixed(1)}" transform="rotate(-90 32 32)"></circle></svg>`;
    };
    function quotaR1(t) {
      return shellC(t, qHead('Evolucloud', 'Vos machines virtuelles', '<span class="btn pri">' + I('plus') + 'Demander une machine</span>') + `<div class="card qring wide">${QRING(.8)}<div class="qrl"><span class="qrv">12 <small>/ 15</small></span><span class="qrt">Machines de votre contrat</span><span class="qrs">3 emplacements disponibles</span></div><span class="qrctr">Contrat CTR-2291 · jusqu'au 31/12/2026</span></div>` + qTable(false, t), 1);
    }
    function quotaR2(t) {
      return shellC(t, qHead('Evolucloud', 'Vos machines virtuelles', '<span class="btn pri">' + I('plus') + 'Demander une machine</span>') + `<div class="card qsegc st-wa"><div class="qsegl"><span class="qsegt"><b>12</b> machines créées sur <b>15</b></span><span class="qsegs">Il vous reste 3 emplacements sur votre contrat</span></div><div class="qseg">${[...Array(15)].map((_, i) => `<i class="${i < 12 ? 'on' : ''}"></i>`).join('')}</div></div>` + qTable(false, t), 1);
    }
    function quotaR3(t) {
      return shellC(t, qHead('Evolucloud', 'Vos machines virtuelles', '<span class="btn pri">' + I('plus') + 'Demander une machine</span>') + `<div class="card qbigc"><span class="qbig">12<small>/ 15</small></span><div class="qbigl"><span class="qbigt">Machines de votre contrat</span><div class="fb o"><i style="width:80%"></i></div><span class="qbigs">3 emplacements disponibles · contrat CTR-2291</span></div></div>` + qTable(false, t), 1);
    }
    function quotaR4(t) {
      return shellC(t, qHead('Evolucloud', 'Vos machines virtuelles', '<span class="btn pri">' + I('plus') + 'Demander une machine</span>') + `<div class="card qring wide acc">${QRING(.8)}<div class="qrl"><span class="qrv">3 <small>restantes</small></span><span class="qrt">Sur les 15 machines de votre contrat</span><span class="qrs alert">${I('alert-triangle')}Vous approchez de la limite</span></div><span class="qrctr">Contrat CTR-2291 · jusqu'au 31/12/2026</span><span class="btn gh sm">${I('file-text')}Voir le contrat</span></div>` + qTable(false, t), 1);
    }
    function dediForm(t) {
      const F = (l, ph, o, sel, st, hint, err) => `<div class="fld"><label>${l}${o ? ' <b class="req">*</b>' : ''}</label><div class="in${st ? ' ' + st : ''}">${sel ? `<span class="ph">${ph}</span><span class="selc">${I('chevron-down')}</span>` : `<span class="ph">${ph}</span>`}</div>${err ? `<span class="ferr">${I('alert-circle')}Ce champ est obligatoire.</span>` : ''}${hint ? `<span class="fhint">${hint}</span>` : ''}</div>`;
      const noStock = n => `La valeur vient de l'offre — il n'existe pas de pièce ${n} en stock.`;
      return `<div class="bgfake">${dedi(t)}</div><div class="scrim"></div><div class="mwrap"><div class="md mdL"><div class="mhead"><h3>Renseigner un Dédicloud</h3><span class="mx">${I('x')}</span></div>
<div class="mbody">
<div class="msec">Informations principales</div>
<div class="f3">${F("Type d'équipement", "Type d'équipement", 1, 1, 'err', '', 1)}${F('Type d\'équipement technique', 'Type d\'équipement technique', 1, 1, 'err', '', 1)}${F('Offre', 'Offre', 1, 1, 'err', '', 1)}</div>
<div class="f3">${F('Datacenter', 'Datacenter', 1, 1, 'err', '', 1)}${F('Switch', 'n/n/n;n/n/n', 0, 0, '', '')}${F('N° de baie', 'N° de baie', 1, 0, 'err', '', 1)}</div>
<div class="f3">${F('N° du U', 'N° du U', 1, 0, 'err', '', 1)}${F('N° de série', 'N° de série', 1, 0, 'err', '', 1)}<div></div></div>
<div class="msec">Ressource</div>
<div class="f3">${F('CPU', 'CPU', 0, 0, '', noStock('CPU'))}${F('RAM (Go)', 'RAM', 0, 0, '', noStock('RAM'))}${F('Stockage (Go)', 'Stockage', 0, 0, '', noStock('Stockage'))}</div>
<div class="f3">${F('IP ILO admin', 'IP ILO admin', 0, 0, '')}${F('Identifiant ILO admin', 'Identifiant ILO admin', 0, 0, '')}<div class="fld"><label>Mot de passe ILO admin</label><div class="in"><span class="ph">Mot de passe ILO admin</span>${I('eye-off')}</div></div></div>
<div class="warnbox">${I('alert-triangle')}<span>Pour permettre la mise en production du Dedicloud, les champs Switch, IP ILO admin, identifiant ILO admin et mot de passe ILO admin doivent être renseignés.</span></div>
</div>
<div class="mfoot"><span class="btn gh">Annuler</span><span class="btn pri dis">Créer</span></div></div></div>`;
    }
    /* sélection d'un item imbriqué dans deux parents */
    function nestSide(t) {
      if (t.sh === 'rail') return nestRail(t);
      const bc = `<div class="bcrumb">Gestion de la plateforme${I('chevron-right')}Utilisateurs & rôles${I('chevron-right')}<b>Rôles & permissions</b></div>`;
      const rows = [['Administrateur plateforme', '12', 'Tous les produits, toutes les agences'], ['Technicien production', '34', 'Evolucloud, Dedicloud — écriture'], ['Responsable d\'agence', '18', 'Lecture sur son périmètre d\'agence'], ['Lecture seule', '57', 'Aucune action de production']].map(r => `<tr><td class="nm">${r[0]}</td><td class="num">${r[1]}</td><td>${r[2]}</td>${t.sh === 'rail' ? '<td>' + dots + '</td>' : ''}</tr>`).join('');
      const inner = bc + `<div class="phead"><h1>Rôles & permissions</h1><span class="sub">4 rôles · 121 comptes</span><span class="tsp"></span><span class="btn pri">${I('plus')}Nouveau rôle</span></div>` + tblCard(`<div class="toolbar"><div class="srch" style="flex:0 1 230px">${I('search')}<span>Filtrer un rôle…</span></div><span class="fadd">${I('plus')}Filtre</span><span class="tsp"></span><span class="btn gh sm">${I('download')}Exporter</span></div>`, `<th>Rôle ↓</th><th>Comptes</th><th>Périmètre</th>`, rows, `<span>4 rôles</span>`);
      return `<div class="sh s-side"><aside class="side"><div class="shead"><img src="${LOGO}" alt="SKERA"><span class="scol">${I('chevron-left')}</span></div>
<div class="ni">${I('layout-dashboard')}Tableau de bord</div>
<div class="ni">${I('package')}Produits<span class="gch">${I('chevron-down')}</span></div>
<div class="ni">${I('network')}IPAM<span class="gch">${I('chevron-down')}</span></div>
<div class="ni pon">${I('settings')}Gestion de la plateforme<span class="gch">${I('chevron-up')}</span></div>
<div class="ngrp">
  <div class="ni sub pon">Utilisateurs & rôles<span class="gch">${I('chevron-up')}</span></div>
  <div class="ngrp2">
    <div class="ni sub2 on">Rôles & permissions</div>
    <div class="ni sub2">Comptes</div>
    <div class="ni sub2">Groupes</div>
  </div>
  <div class="ni sub">Agences</div>
  <div class="ni sub">Journal d'audit</div>
</div></aside><main>${TOPBAR}<div class="content">${inner}</div></main></div>`;
    }
    /* fiche client (trigramme) — résumé visuel */
    const DONUT = (segs, r) => {
      const R = 2 * Math.PI * (r || 26);
      let off = 0;
      return `<svg viewBox="0 0 64 64" class="dn"><circle cx="32" cy="32" r="${r || 26}" fill="none" stroke="var(--c2)" stroke-width="10"></circle>${segs.map(s => {
        const l = R * s[0];
        const el = `<circle cx="32" cy="32" r="${r || 26}" fill="none" stroke="${s[1]}" stroke-width="10" stroke-dasharray="${l.toFixed(1)} ${(R - l).toFixed(1)}" stroke-dashoffset="${(-off).toFixed(1)}" transform="rotate(-90 32 32)"></circle>`;
        off += l;
        return el;
      }).join('')}</svg>`;
    };
    const SPARK = `<svg viewBox="0 0 220 56" class="spk"><path class="charea" d="M0,44C24,41 48,33 72,35C96,37 120,24 144,26C168,28 196,16 220,13L220,56L0,56Z"></path><path class="ch1" d="M0,44C24,41 48,33 72,35C96,37 120,24 144,26C168,28 196,16 220,13"></path></svg>`;
    const STACK = `<div class="stk"><i style="width:75%;background:var(--okd)"></i><i style="width:8%;background:var(--erd)"></i><i style="width:17%;background:var(--wad)"></i></div>`;
    const gauge = (l, v, p, c) => `<div class="fbrow"><div class="fbl"><b>${l}</b><span class="fv">${v}</span></div><div class="fb ${c}"><i style="width:${p}%"></i></div></div>`;
    const TILES = cls => `<div class="ctiles ${cls || ''}">
<div class="card ctile st-ok"><span class="ctt">Répartition des produits</span><div class="ctb">${DONUT([[.38, 'var(--acc)'], [.25, 'var(--infd)'], [.22, 'var(--wad)']])}<div class="dnl"><span><i style="background:var(--acc)"></i>12 machines</span><span><i style="background:var(--infd)"></i>8 sites web</span><span><i style="background:var(--wad)"></i>240 licences</span></div></div></div>
<div class="card ctile st-er"><span class="ctt">Quotas contractuels</span><div class="qbody">${gauge('Machines', '12 / 15', 80, 'o')}${gauge('Stockage', '3,2 / 5 To', 64, 'g')}${gauge('Licences', '240 / 250', 96, 'r')}</div></div>
<div class="card ctile st-ok"><span class="ctt">Consommation 30 jours</span><div class="ctb col">${SPARK}<span class="ctv">+14 %<small>vs mois précédent</small></span></div></div>
<div class="card ctile st-wa"><span class="ctt">État du parc</span><div class="ctb col">${STACK}<div class="dnl row"><span><i style="background:var(--okd)"></i>18 actifs</span><span><i style="background:var(--erd)"></i>1 en erreur</span><span><i style="background:var(--wad)"></i>2 à décommissionner</span></div></div></div>
</div>`;
    const CLROWS = [['ADS', 'ADESIDEES', 'Agence Lyon', '1'], ['AEF', 'AGRU ENVIRONNEMENT FRANCE', 'Agence Lyon', '3'], ['AIM', 'ARTIXIUM FRANCE', 'Agence Lyon', '1', 'open'], ['AKO', 'ASKCO', 'Agence Ouest', '1'], ['AKS', 'AKILYS', 'Agence Lyon', '2']];
    function clTable(expand) {
      const rows = CLROWS.map(c => {
        const tr = `<tr class="${c[4] || ''}"><td class="nm">${c[0]}</td><td>${c[1]}</td><td><span class="agp">${c[2]}</span></td><td><span class="numlnk">${c[3]}</span></td><td><span class="chev">${I(c[4] ? 'chevron-down' : 'chevron-right')}</span></td></tr>`;
        return tr + (c[4] && expand ? `<tr class="exp"><td colspan="5">${TILES('in')}</td></tr>` : '');
      }).join('');
      const toolbar = `<div class="toolbar"><div class="srch" style="flex:0 1 300px">${I('search')}<span>Rechercher un client de mon agence…</span></div><span class="fadd">${I('plus')}Filtre</span><span class="tsp"></span><span class="btn gh sm">${I('download')}Exporter</span></div>`;
      return tblCard(toolbar, `<th>Trigramme ↑</th><th>Nom</th><th>Agence</th><th>Contrats actifs</th><th style="text-align:right">Actions</th>`, rows, `<span>243 clients · page 1 sur 25</span>`);
    }
    function cliRow(t) {
      return shellA(t, `<div class="phead"><h1>Tableau de bord de l'agence</h1><span class="sub">243 clients</span></div>` + clTable(true), 'dash');
    }
    function cliPage(t) {
      return shellA(t, `<div class="bcrumb">Mes clients${I('chevron-right')}<b>AIM · ARTIXIUM FRANCE</b></div>
<div class="phead"><h1><span class="trig">AIM</span>ARTIXIUM FRANCE</h1><span class="sub">Agence Lyon · 1 contrat actif</span><span class="tsp"></span><span class="btn gh sm">${I('file-text')}Contrat</span><span class="btn pri">${I('plus')}Nouvelle demande</span></div>` + TILES() + tblCard(`<div class="toolbar"><span class="ftk on"><span class="fk">Produit</span><span class="fv2">Evolucloud ${I('x')}</span></span><span class="fadd">${I('plus')}Filtre</span><span class="tsp"></span><span class="btn gh sm">${I('download')}Exporter</span></div>`, `<th>Ressource ↓</th><th>Statut</th><th>Datacenter</th><th>CPU</th><th>RAM</th>`, [['vm-prd-helios-02', 'p', 'PAR-02', '4', '16 Go'], ['vm-prd-hera-01', 'a', 'PAR-02', '8', '32 Go'], ['vm-stg-eos-02', 'o', 'PAR-02', '2', '8 Go']].map(v => `<tr><td class="nm">${v[0]}</td><td>${ST[v[1]]}</td><td class="num">${v[2]}</td><td class="num">${v[3]} vCPU</td><td class="num">${v[4]}</td>${t.sh === 'rail' ? '<td>' + dots + '</td>' : ''}</tr>`).join(''), `<span>12 ressources · page 1 sur 2</span>`), 'dash');
    }
    function cliDrawer(t) {
      return shellA(t, `<div class="phead"><h1>Tableau de bord de l'agence</h1><span class="sub">243 clients</span></div>` + clTable(false), 'dash') + `<div class="scrim soft"></div><div class="drawer"><div class="dwh"><div><span class="trig">AIM</span><span class="dwn">ARTIXIUM FRANCE</span><span class="dwm">Agence Lyon · 1 contrat actif</span></div><span class="mx">${I('x')}</span></div><div class="dwb">${TILES('stack')}</div><div class="mfoot"><span class="btn gh">${I('file-text')}Contrat</span><span class="btn pri">${I('arrow-right')}Ouvrir la fiche</span></div></div>`;
    }
    /* bandeau de synthèse au-dessus des tableaux */
    const BARS = (vals, labs) => {
      const max = Math.max(...vals);
      return `<div class="bars">${vals.map((v, i) => `<span class="bar"><i style="height:${Math.round(v / max * 100)}%"></i><em>${labs[i]}</em></span>`).join('')}</div>`;
    };
    const tileS = (state, title, body) => '<div class="card ctile st-' + state + '"><span class="ctt">' + title + '</span>' + body + '</div>';
    const tile = (title, body, cls) => `<div class="card ctile ${cls || ''}"><span class="ctt">${title}</span>${body}</div>`;
    const SYNTH_EVO = `<div class="ctiles t3">
${tileS('er', 'Statuts du parc', `<div class="ctb">${DONUT([[.68, 'var(--okd)'], [.08, 'var(--infd)'], [.03, 'var(--erd)'], [.11, 'var(--t3)']])}<div class="dnl"><span><i style="background:var(--okd)"></i>58 actives</span><span><i style="background:var(--infd)"></i>6 en production</span><span><i style="background:var(--erd)"></i>2 en erreur</span><span><i style="background:var(--t3)"></i>10 éteintes</span></div></div>`)}
${tileS('ok', 'Machines par datacenter', `<div class="ctb col">${BARS([28, 24, 19, 15], ['PAR-01', 'PAR-02', 'LYO-01', 'RBX-01'])}</div>`)}
${tileS('ok', 'vCPU consommés — 30 jours', `<div class="ctb col">${SPARK}<span class="ctv">412 <small>+9 % vs mois précédent</small></span></div>`)}
</div>`;
    const SYNTH_DEDI = `<div class="ctiles t3">
${tileS('wa', 'Préparation du stock', `<div class="ctb">${DONUT([[.64, 'var(--okd)'], [.36, 'var(--wad)']])}<div class="dnl"><span><i style="background:var(--okd)"></i>9 serveurs prêts</span><span><i style="background:var(--wad)"></i>5 à préparer</span></div></div>`)}
${tileS('ok', 'Stock par datacenter', `<div class="ctb col">${BARS([5, 4, 3, 2], ['PAR-01', 'PAR-02', 'LYO-01', 'RBX-01'])}</div>`)}
${tileS('ok', 'Capacité disponible', `<div class="qbody">${gauge('vCPU libres', '168 / 320', 52, 'g')}${gauge('RAM libre', '1,8 / 3,5 To', 51, 'g')}${gauge('Disques libres', '46 / 72', 64, 'o')}</div>`)}
</div>`;
    const SYNTH_IPAM = `<div class="ctiles t3">
${tileS('er', 'Remplissage des réseaux', `<div class="ctb">${DONUT([[.5, 'var(--okd)'], [.29, 'var(--wad)'], [.21, 'var(--erd)']])}<div class="dnl"><span><i style="background:var(--okd)"></i>12 sous 70 %</span><span><i style="background:var(--wad)"></i>7 entre 70 et 90 %</span><span><i style="background:var(--erd)"></i>5 au-delà de 90 %</span></div></div>`)}
${tileS('ok', 'Sous-réseaux par agence', `<div class="ctb col">${BARS([16, 12, 9, 4], ['Paris', 'Lyon', 'Ouest', 'Autres'])}</div>`)}
${tileS('wa', 'Adresses libres', `<div class="ctb col">${SPARK}<span class="ctv">4 812 <small>- 6 % en 30 jours</small></span></div>`)}
</div>`;
    /* gestion des colonnes et des filtres — propositions */
    const EROWS = EVOA.map(v => `<tr class="${v[8] === 'sel' ? '' : v[8]}"><td><span class="cb"></span></td><td class="nm">${v[0]}</td><td>${v[1]}</td><td>${v[2]}</td><td>${ST[v[3]]}</td><td class="num">${v[4]}</td><td class="num">${v[5]} vCPU</td><td class="num">${v[6]}</td></tr>`).join('');
    const EHEAD = `<th style="width:36px"><span class="cb"></span></th><th>Nom</th><th>Client ↓</th><th>Agence</th><th>Statut</th><th>Datacenter</th><th>CPU</th><th>RAM</th>`;
    function tblPage(t, toolbar, extra, head, rows) {
      return shellA(t, `<div class="phead"><h1>Evolucloud</h1><span class="sub">86 machines · tri par client</span></div>` + tblCard(toolbar, head || EHEAD, rows || EROWS, `<span>86 machines · page 1 sur 9</span>`), 'evo') + (extra || '');
    }
    const ibtn = (ic, n, on) => `<span class="ibtn${on ? ' on' : ''}">${I(ic)}${n ? `<b>${n}</b>` : ''}</span>`;
    const COLS = [['Nom', 1, 1], ['Client', 1], ['Agence', 1], ['Statut', 1], ['Datacenter', 1], ['CPU', 1], ['RAM', 1], ['Stockage', 0], ['Adresse IP', 0], ['VLAN', 0], ['Offre', 0], ['Date de création', 0], ['Dernier redémarrage', 0]];
    const colList = g => COLS.map(c => `<div class="colrow">${g ? `<span class="grip">${I('grip-vertical')}</span>` : ''}<span class="ck${c[1] ? ' on' : ''}">${c[1] ? I('check') : ''}</span><span class="cl">${c[0]}</span>${c[2] ? `<span class="clk">${I('lock')}</span>` : ''}</div>`).join('');
    function colPop(t) {
      const tb = tbTools('Filtrer par nom, client…', '3', '7', `<span class="btn gh sm">${I('download')}Exporter</span><span class="btn pri">${I('plus')}Nouvelle machine</span>`);
      return tblPage(t, tb, `<div class="cpop left"><div class="cph">Colonnes affichées<span class="cpr">Réinitialiser</span></div><div class="in sm"><span class="ph">Rechercher une colonne…</span></div><div class="collist">${colList(1)}</div><div class="mfoot sm"><span class="btn gh sm">Annuler</span><span class="btn pri sm">Appliquer</span></div></div>`);
    }
    function colDrawer(t) {
      const tb = `<div class="toolbar"><div class="srch" style="flex:0 1 230px">${I('search')}<span>Filtrer par nom, client…</span></div><span class="fadd">${I('plus')}Filtre</span><span class="tsp"></span>${ibtn('columns-3', '7 / 13', 1)}<span class="btn pri">${I('plus')}Nouvelle machine</span></div>`;
      return tblPage(t, tb, `<div class="scrim soft"></div><div class="drawer"><div class="dwh"><div><span class="dwn">Colonnes du tableau</span><span class="dwm">7 affichées sur 13 · glisser pour réordonner</span></div><span class="mx">${I('x')}</span></div><div class="dwb"><div class="ulab">Affichées</div><div class="collist">${colList(1)}</div></div><div class="mfoot"><span class="btn gh">Réinitialiser</span><span class="btn pri">Appliquer</span></div></div>`);
    }
    const FCH = [['Agence', 'Ouest'], ['Client', 'Nexalys'], ['Statut', 'Actif'], ['Datacenter', 'PAR-01'], ['CPU', '≥ 8'], ['RAM', '≥ 32 Go']];
    function filtChips(t) {
      const chips = FCH.map(f => `<span class="ftk on"><span class="fk">${f[0]}</span><span class="fv2">${f[1]} ${I('x')}</span></span>`).join('');
      const tb = `<div class="toolbar wrap"><div class="srch" style="flex:0 1 200px">${I('search')}<span>Filtrer…</span></div>${chips}<span class="fmorep">+ 9 autres</span><span class="fclr">Tout effacer</span><span class="tsp"></span>${ibtn('columns-3', '7')}<span class="btn pri">${I('plus')}Nouvelle machine</span></div>`;
      return tblPage(t, tb, `<div class="cpop wide2"><div class="cph">15 filtres actifs<span class="cpr">Tout effacer</span></div><div class="fall">${[...FCH, ['Offre', 'Standard'], ['VLAN', '12'], ['Stockage', '≥ 250 Go'], ['IP publique', 'Oui'], ['HDS', 'Non'], ['Environnement', 'Production'], ['Créée après', '01/01/2026'], ['Sauvegarde', 'Activée'], ['Snapshot', '< 7 jours']].map(f => `<span class="ftk on"><span class="fk">${f[0]}</span><span class="fv2">${f[1]} ${I('x')}</span></span>`).join('')}</div></div>`);
    }
    const FGRP = [['Agence', ['Ouest', 'Paris', 'Lyon']], ['Statut', ['Actif', 'En production', 'En erreur', 'Éteinte']], ['Datacenter', ['PAR-01', 'PAR-02', 'LYO-01', 'RBX-01']], ['Ressources', ['CPU ≥ 8', 'RAM ≥ 32 Go', 'Stockage ≥ 250 Go']]];
    function filtDrawer(t) {
      const tb = `<div class="toolbar"><div class="srch" style="flex:0 1 230px">${I('search')}<span>Filtrer par nom, client…</span></div>${ibtn('filter', '15', 1)}<span class="fclr">Tout effacer</span><span class="tsp"></span>${ibtn('columns-3', '7')}<span class="btn pri">${I('plus')}Nouvelle machine</span></div>`;
      return tblPage(t, tb, `<div class="scrim soft"></div><div class="drawer"><div class="dwh"><div><span class="dwn">Filtres</span><span class="dwm">15 critères actifs</span></div><span class="mx">${I('x')}</span></div><div class="dwb"><div class="in sm"><span class="ph">Rechercher un filtre…</span></div>${FGRP.map(g => `<div class="fgrp"><div class="ulab">${g[0]}</div>${g[1].map((o, i) => `<div class="colrow"><span class="ck${i < 2 ? ' on' : ''}">${i < 2 ? I('check') : ''}</span><span class="cl">${o}</span></div>`).join('')}</div>`).join('')}</div><div class="mfoot"><span class="btn gh">Réinitialiser</span><span class="btn pri">Appliquer (15)</span></div></div>`);
    }
    function filtFacets(t) {
      const tb = `<div class="toolbar"><div class="srch" style="flex:0 1 230px">${I('search')}<span>Filtrer par nom, client…</span></div><span class="fclr">Tout effacer</span><span class="tsp"></span>${ibtn('columns-3', '7')}<span class="btn pri">${I('plus')}Nouvelle machine</span></div>`;
      const facets = `<aside class="facets"><div class="fch">${I('filter')}Filtres<span class="fcn">15</span></div><div class="in sm"><span class="ph">Rechercher…</span></div>${FGRP.map(g => `<div class="fgrp"><div class="ulab">${g[0]}</div>${g[1].map((o, i) => `<div class="colrow"><span class="ck${i < 2 ? ' on' : ''}">${i < 2 ? I('check') : ''}</span><span class="cl">${o}</span></div>`).join('')}</div>`).join('')}</aside>`;
      return shellA(t, `<div class="phead"><h1>Evolucloud</h1><span class="sub">86 machines · tri par client</span></div><div class="fsplit">${facets}${tblCard(tb, EHEAD, EROWS, `<span>86 machines · page 1 sur 9</span>`)}</div>`, 'evo');
    }
    function filtBuilder(t) {
      const tb = `<div class="toolbar"><div class="srch" style="flex:0 1 230px">${I('search')}<span>Filtrer par nom, client…</span></div>${ibtn('filter', '15', 1)}<span class="fsave">${I('bookmark')}Enregistrer la vue</span><span class="tsp"></span>${ibtn('columns-3', '7')}<span class="btn pri">${I('plus')}Nouvelle machine</span></div>`;
      const row = (c, o, v, j) => `<div class="fbr">${j ? `<span class="fbj">${j}</span>` : '<span class="fbj mut">Où</span>'}<div class="in sm">${c}${I('chevron-down')}</div><div class="in sm">${o}${I('chevron-down')}</div><div class="in sm fx">${v}</div><span class="fbx">${I('x')}</span></div>`;
      return tblPage(t, tb, `<div class="cpop wide3"><div class="cph">Conditions de filtrage<span class="cpr">Tout effacer</span></div>${row('Agence', 'est', 'Ouest')}${row('Statut', 'est l\'un de', 'Actif, En production', 'ET')}${row('CPU', '≥', '8', 'ET')}${row('Datacenter', 'est l\'un de', 'PAR-01, PAR-02', 'ET')}<div class="fbadd">${I('plus')}Ajouter une condition<span class="fbg">${I('brackets')}Ajouter un groupe</span></div><div class="mfoot sm"><span class="btn gh sm">Annuler</span><span class="btn pri sm">Appliquer (15)</span></div></div>`);
    }
    /* filtres en langage métier (alternatives à F4) */
    const TBF = n => `<div class="toolbar"><div class="srch" style="flex:0 1 230px">${I('search')}<span>Filtrer par nom, client…</span></div>${ibtn('filter', n, 1)}${ibtn('columns-3', '7')}<span class="fsave">${I('bookmark')}Enregistrer la vue</span><span class="tsp"></span><span class="btn pri">${I('plus')}Nouvelle machine</span></div>`;
    const pick = v => `<span class="pk">${v}${I('chevron-down')}</span>`;
    function fltNat(t) {
      return tblPage(t, TBF('4'), `<div class="cpop wide3"><div class="cph">Ce que vous affichez<span class="cpr">Tout effacer</span></div>
<div class="nlp">Afficher les machines de l'agence ${pick('Ouest')} dont le statut est ${pick('Actif, En production')}, hébergées à ${pick('PAR-01, PAR-02')} et disposant de ${pick('8 vCPU ou plus')}.</div>
<div class="nladd">${I('plus')}Ajouter un critère<span class="nlh">Le tableau se met à jour immédiatement · 41 machines correspondent</span></div>
<div class="mfoot sm"><span class="btn gh sm">Annuler</span><span class="btn pri sm">Appliquer</span></div></div>`);
    }
    function fltCards(t) {
      const crit = [['building-2', 'Agence', 'Ouest'], ['activity', 'Statut', 'Actif, En production'], ['server', 'Datacenter', 'PAR-01, PAR-02'], ['cpu', 'Processeur', '8 vCPU ou plus']].map(c => `<div class="critc"><span class="cci">${I(c[0])}</span><div class="ccl"><span class="cck">${c[1]}</span><span class="ccv">${c[2]}</span></div><span class="ccx">${I('x')}</span></div>`).join('');
      return tblPage(t, TBF('4'), `<div class="cpop wide2"><div class="cph">Critères appliqués · 4<span class="cpr">Tout effacer</span></div><div class="critl">${crit}</div>
<div class="nladd">${I('plus')}Ajouter un critère<span class="nlh">41 machines correspondent</span></div>
<div class="mfoot sm"><span class="btn gh sm">Annuler</span><span class="btn pri sm">Appliquer</span></div></div>`);
    }
    function fltGuided(t) {
      const q = (t1, opts) => `<div class="gq"><div class="gqt">${t1}</div><div class="gqo">${opts.map((o, i) => `<span class="ftk${i < 2 ? ' on' : ''}">${o}${i < 2 ? ' ' + I('check') : ''}</span>`).join('')}</div></div>`;
      return tblPage(t, TBF('4'), `<div class="scrim soft"></div><div class="drawer"><div class="dwh"><div><span class="dwn">Affiner la liste</span><span class="dwm">41 machines correspondent sur 86</span></div><span class="mx">${I('x')}</span></div>
<div class="dwb">${q('Quelles agences ?', ['Ouest', 'Paris', 'Lyon', 'Toutes'])}${q('Quels statuts ?', ['Actif', 'En production', 'En erreur', 'Éteinte'])}${q('Quels datacenters ?', ['PAR-01', 'PAR-02', 'LYO-01', 'RBX-01'])}${q('Quelle taille de machine ?', ['Petite', 'Moyenne', 'Grande'])}</div>
<div class="mfoot"><span class="btn gh">Réinitialiser</span><span class="btn pri">Voir les 41 machines</span></div></div>`);
    }
    function fltViews(t) {
      const v = (ic, l, n, on) => `<div class="vrow${on ? ' on' : ''}">${I(ic)}<span class="vl">${l}</span><span class="vn">${n}</span></div>`;
      return tblPage(t, TBF('4'), `<div class="cpop wide2"><div class="cph">Vues de mon métier<span class="cpr">Gérer</span></div>
<div class="views">${v('alert-octagon', 'Machines en erreur', '2')}${v('power-off', 'Machines éteintes depuis 30 jours', '7')}${v('trash-2', 'À décommissionner', '4')}${v('building-2', 'Parc de mon agence', '41', 'on')}${v('rocket', 'Productions de la semaine', '6')}</div>
<div class="usep"></div><div class="ulab">Affiner cette vue</div>
<div class="gqo">${['Actif', 'En production', 'PAR-01', '8 vCPU ou plus'].map((o, i) => `<span class="ftk${i < 2 ? ' on' : ''}">${o}${i < 2 ? ' ' + I('check') : ''}</span>`).join('')}</div>
<div class="nladd" style="padding-top:6px">${I('bookmark')}Enregistrer comme nouvelle vue<span class="nlh">41 machines</span></div></div>`);
    }
    /* filtres à onglets par catégorie (reprise du modèle existant) */
    const FCAT = [['Datacenter', 2], ['Offre', 0], ['Type d\'équipement', 1], ['Type technique', 0], ['Agence', 1]];
    const fbadge = n => `<span class="fbd${n ? ' on' : ''}">${n}</span>`;
    const fopt = (l, on) => `<div class="fopt"><span class="ck${on ? ' on' : ''}">${on ? I('check') : ''}</span><span class="cl">${l}</span></div>`;
    function fltTabs(t) {
      return tblPage(t, TBF('4'), `<div class="cpop wide2 pad0"><div class="cph pad">Filtres<span class="cpr">Tout réinitialiser</span></div>
<div class="ftabs">${FCAT.slice(0, 4).map((c, i) => `<span class="ftab${i ? '' : ' on'}">${c[0]}${fbadge(c[1])}</span>`).join('')}</div>
<div class="fbody"><div class="in"><span class="ph">Datacenter</span><span class="selc">${I('chevron-up')}</span></div>
<div class="fopts">${fopt('PAR-01', 1)}${fopt('PAR-02', 1)}${fopt('LYO-01')}${fopt('RBX-01')}</div></div>
<div class="mfoot sm pad"><span class="btn gh sm">Annuler</span><span class="btn pri sm">Appliquer (4)</span></div></div>`);
    }
    function fltTabsV(t) {
      return tblPage(t, TBF('4'), `<div class="cpop wide3 pad0"><div class="cph pad">Filtres<span class="cpr">Tout réinitialiser</span></div>
<div class="fvsplit"><div class="fvnav">${FCAT.map((c, i) => `<span class="fvtab${i ? '' : ' on'}">${c[0]}${fbadge(c[1])}</span>`).join('')}</div>
<div class="fbody"><div class="in sm"><span class="ph">Rechercher un datacenter…</span></div><div class="fopts">${fopt('PAR-01', 1)}${fopt('PAR-02', 1)}${fopt('LYO-01')}${fopt('RBX-01')}${fopt('MT3')}</div></div></div>
<div class="mfoot sm pad"><span class="btn gh sm">Annuler</span><span class="btn pri sm">Appliquer (4)</span></div></div>`);
    }
    function fltTabsRecap(t) {
      return tblPage(t, TBF('4'), `<div class="cpop wide2 pad0"><div class="cph pad">Filtres<span class="cpr">Tout réinitialiser</span></div>
<div class="ftabs">${FCAT.slice(0, 4).map((c, i) => `<span class="ftab${i ? '' : ' on'}">${c[0]}${fbadge(c[1])}</span>`).join('')}</div>
<div class="fbody"><div class="in sm"><span class="ph">Rechercher un datacenter…</span></div><div class="fopts">${fopt('PAR-01', 1)}${fopt('PAR-02', 1)}${fopt('LYO-01')}${fopt('RBX-01')}</div></div>
<div class="frecap"><span class="frt">Sélection · 4</span><div class="fall">${[['Datacenter', 'PAR-01'], ['Datacenter', 'PAR-02'], ['Type', 'Serveur'], ['Agence', 'Ouest']].map(f => `<span class="ftk on"><span class="fk">${f[0]}</span><span class="fv2">${f[1]} ${I('x')}</span></span>`).join('')}</div></div>
<div class="mfoot sm pad"><span class="btn gh sm">Annuler</span><span class="btn pri sm">Appliquer (4)</span></div></div>`);
    }
    /* H2 — où voir ce qui est sélectionné */
    const FVNAV = n => `<div class="fvnav">${FCAT.map((c, i) => `<span class="fvtab${i ? '' : ' on'}">${c[0]}${fbadge(c[1])}</span>`).join('')}</div>`;
    const FRECAP = `<div class="frecap"><span class="frt">Sélection · 4 critères</span><div class="fall">${[['Datacenter', 'PAR-01'], ['Datacenter', 'PAR-02'], ['Type', 'Serveur'], ['Agence', 'Ouest']].map(f => `<span class="ftk on"><span class="fk">${f[0]}</span><span class="fv2">${f[1]} ${I('x')}</span></span>`).join('')}</div></div>`;
    function h2Pop(body, recap) {
      return `<div class="cpop wide3 pad0"><div class="cph pad">Filtres<span class="cpr">Tout réinitialiser</span></div>
<div class="fvsplit">${FVNAV()}<div class="fbody">${body}</div></div>${recap || ''}
<div class="mfoot sm pad"><span class="btn gh sm">Annuler</span><span class="btn pri sm">Appliquer (4)</span></div></div>`;
    }
    function fltH2a(t) {
      return tblPage(t, TBF('4'), h2Pop(`<div class="in sm"><span class="ph">Rechercher un datacenter…</span></div>
<div class="fopts"><div class="fsecl">Sélectionnés · 2</div>${fopt('PAR-01', 1)}${fopt('PAR-02', 1)}<div class="fsep"></div><div class="fsecl">Tous les datacenters</div>${fopt('LYO-01')}${fopt('MT3')}${fopt('RBX-01')}</div>`));
    }
    function fltH2b(t) {
      return tblPage(t, TBF('4'), h2Pop(`<div class="in sm"><span class="ph">Rechercher un datacenter…</span></div>
<div class="fopts">${fopt('LYO-01')}${fopt('MT3')}${fopt('PAR-01', 1)}${fopt('PAR-02', 1)}${fopt('RBX-01')}</div>`, FRECAP));
    }
    function fltH2c(t) {
      return tblPage(t, TBF('4'), h2Pop(`<div class="in sm"><span class="ph">Rechercher un datacenter…</span></div>
<div class="fopts"><div class="fsecl">Sélectionnés · 2</div>${fopt('PAR-01', 1)}${fopt('PAR-02', 1)}<div class="fsep"></div><div class="fsecl">Tous les datacenters</div>${fopt('LYO-01')}${fopt('MT3')}${fopt('RBX-01')}</div>`, FRECAP));
    }
    const tbTools = (ph, nf, nc, right) => `<div class="toolbar"><div class="srch" style="flex:0 1 230px">${I('search')}<span>${ph}</span></div>${ibtn('filter', nf, nf !== '0')}${ibtn('columns-3', nc)}<span class="tsp"></span>${right || ''}</div>`;
    function nestRail(t) {
      const rail = `<aside class="rail"><div class="rmark">S</div>${[['layout-dashboard'], ['server'], ['hard-drive'], ['globe'], ['mail-warning'], ['shield'], ['network'], ['settings', 1]].map(r => `<div class="ri${r[1] ? ' on' : ''}">${I(r[0])}</div>`).join('')}</aside>`;
      const sect = `<aside class="secnav"><div class="secnt">Gestion de la plateforme</div>
<div class="ni par">Utilisateurs & rôles<span class="gch">${I('chevron-up')}</span></div>
<div class="ngrp2"><div class="ni sub2 on">Rôles & permissions</div><div class="ni sub2">Comptes</div><div class="ni sub2">Groupes</div></div>
<div class="ni">Agences</div><div class="ni">Journal d'audit</div><div class="ni">Intégrations</div></aside>`;
      const rows = [['Administrateur plateforme', '12', 'Tous les produits, toutes les agences'], ['Technicien production', '34', 'Evolucloud, Dedicloud — écriture'], ["Responsable d'agence", '18', "Lecture sur son périmètre d'agence"], ['Lecture seule', '57', 'Aucune action de production']].map(r => `<tr><td class="nm">${r[0]}</td><td class="num">${r[1]}</td><td>${r[2]}</td>${t.sh === 'rail' ? '<td>' + dots + '</td>' : ''}</tr>`).join('');
      return `<div class="sh s-secnav">${rail}${sect}<main>${TOPBAR}<div class="content"><div class="bcrumb">Gestion de la plateforme${I('chevron-right')}Utilisateurs & rôles${I('chevron-right')}<b>Rôles & permissions</b></div>
<div class="phead"><h1>Rôles & permissions</h1><span class="sub">4 rôles · 121 comptes</span><span class="tsp"></span><span class="btn pri">${I('plus')}Nouveau rôle</span></div>
${tblCard(`<div class="toolbar"><div class="srch" style="flex:0 1 230px">${I('search')}<span>Filtrer un rôle…</span></div>${ibtn('filter', '0')}${ibtn('columns-3', '4')}<span class="tsp"></span><span class="btn gh sm">${I('download')}Exporter</span></div>`, `<th>Rôle ↓</th><th>Comptes</th><th>Périmètre</th>`, rows, `<span>4 rôles</span>`)}</div></main></div>`;
    }
    function cmdkScreen(t) {
      const g = (title, rows) => `<div class="ckg"><div class="ulab">${title}</div>${rows}</div>`;
      const row = (ic, l, m, right, on) => `<div class="ckrow${on ? ' on' : ''}">${I(ic)}<span><b>${l}</b><em>${m}</em></span>${right || ''}</div>`;
      return dashA(t) + `<div class="scrim"></div><div class="cmdkw"><div class="cmdk">
<div class="ckin">${I('search')}<span class="ckq">prod</span><span class="ckhint">Échap pour fermer</span></div>
<div class="ckb">
${g('Pages', row('server', 'Evolucloud', 'Produits', '<span class="ckk">↵</span>', 1) + row('hard-drive', 'Dedicloud', 'Produits') + row('layout-dashboard', "Vue d'ensemble", 'Tableau de bord'))}
${g('Machines', row('server', 'vm-prd-atlas-07', 'Nexalys · PAR-01', ST.p) + row('server', 'vm-prd-helios-02', 'Cabinet Roux · PAR-02', ST.p) + row('server', 'vm-prd-orion-04', 'Nexalys · PAR-01', ST.e))}
${g('Clients', row('building-2', 'ARTIXIUM FRANCE', 'AIM · Agence Lyon') + row('building-2', 'ADESIDEES', 'ADS · Agence Lyon'))}
${g('Actions', row('rocket', 'Mettre une machine en production', 'Evolucloud') + row('file-plus-2', 'Créer une demande', 'SKE-C'))}
</div><div class="ckf"><span>${I('corner-down-left')}Ouvrir</span><span>${I('arrow-up')}${I('arrow-down')}Naviguer</span><span class="tsp"></span><span>12 résultats</span></div></div></div>`;
    }
    /* ── rendu ── */
    const SCREENS = [['A1 · Connexion SKE-A', 'Console interne — accès technicien', loginA], ['A2 · Connexion SKE-C', 'Espace client revendeur', loginC], ['A5 · Recherche globale (⌘K / Ctrl+K)', 'Palette ouverte au raccourci : pages, machines, clients, actions — premier résultat pré-sélectionné', cmdkScreen], ['A3 · Dashboard SKE-A', 'KPI, graphique multi-séries, productions « Étape X/6 »', dashA], ['A4 · Dashboard SKE-C', 'Produits actifs, état du parc, quotas du contrat', dashC], ['B1 · Evolucloud — SKE-A', 'Colonnes Client / Agence affichées, tri par client, outils de filtre et de colonnes à côté de la recherche', evoA], ['B1a · Filtres ouverts (H2)', 'Catégories en colonne, compteurs, sélection épinglée en tête de catégorie', fltH2a], ['B1b · Colonnes ouvertes (K1)', 'Popover de colonnes : cases à cocher, recherche, glisser pour réordonner, Nom verrouillée', colPop], ['B2 · Evolucloud — SKE-C', 'Client / Agence retirés, quota du contrat en quinze emplacements (12 utilisés sur 15)', quotaR2], ['B3 · Dedicloud en stock — SKE-A', 'États Prêt / Pas prêt', dedi], ['B4 · IPAM — SKE-A', 'Taux de remplissage : vert < 70 % · orange 70–90 % · rouge > 90 %', ipam], ['B5 · Tableau de bord de l\u2019agence — SKE-A', 'Filtres par produit, liste des clients, contrats actifs', agence], ['B5b · Fiche client (trigramme) — SKE-A', 'Synthèse visuelle en quatre tuiles puis les ressources du client', cliPage], ['D1 · Modale courte', '5 champs — ajout d\u2019un sous-réseau, état focus', smallModal], ['D2 · Formulaire long', '~16 champs : API testable, sliders, jauges contractuelles, texte libre', longForm], ['D3 · Centre d\u2019activité — Notifications', 'Onglets Notifications / Actions, groupé par jour, pied de synchronisation', notif], ['D3b · Centre d\u2019activité — Actions', 'Compteurs En cours / En erreur, journal des actions, lien Log externe', actTabs], ['D4 · Confirmation destructive', 'Suppression avec conséquences et saisie de confirmation', confirmDel], ['D5 · Modale « Ajouter un filtre »', 'Colonne, opérateur, valeur, combinaison ET / OU, enregistrement en vue', filterModal], ['D6 · Menu utilisateur', 'Sous-menu de langue (5 langues), compte, téléchargement de l\u2019application, déconnexion', langSub], ['D7 · Menu d\u2019actions sur une ligne', 'Ouvert depuis le « … » de la ligne : fiche, console, alimentation, exploitation, suppression', rowMenu], ['D8 · Formulaire en modale large', 'Renseigner un Dédicloud : 3 colonnes, champs obligatoires en erreur, aides de saisie, alerte de mise en production', dediForm], ['D9 · Navigation imbriquée', 'Enfant sélectionné sous deux parents : parents en rouge, filets de groupe, fil d\u2019Ariane', nestSide]];
    function buildGalerie(only) {
      const designs = only && only.length ? DESIGNS.filter(d => only.indexOf(d.c) > -1) : DESIGNS;
      let html = '';
      designs.forEach((d, ci) => {
        html += `<div class="collab" style="top:20px;left:${40 + ci * 1420}px"><b>${d.n}</b><span>${d.d}</span></div>`;
      });
      SCREENS.forEach((s, ri) => {
        const y = 130 + ri * 950;
        html += `<div class="rowlab" style="top:${y - 46}px;left:40px"><b>${s[0]}</b><span>${s[1]}</span></div>`;
        designs.forEach((d, ci) => {
          html += `<div class="frame ${d.c}" data-screen-label="${s[0]} — ${d.n}" style="top:${y}px;left:${40 + ci * 1420}px">${s[2](d)}</div>`;
        });
      });
      return {
        html,
        cols: designs.length,
        rows: SCREENS.length
      };
    }
    class GalerieTablet extends HTMLElement {
      connectedCallback() {
        const only = (this.getAttribute('designs') || '').split(',').map(s => s.trim()).filter(Boolean);
        const designs = only.length ? DESIGNS.filter(d => only.indexOf(d.c) > -1) : DESIGNS;
        const W = 834,
          H = 1112,
          CW = W + 60,
          RH = H + 110;
        let html = '';
        designs.forEach((d, ci) => {
          html += `<div class="collab" style="top:20px;left:${40 + ci * CW}px;width:${W}px"><b>${d.n}</b><span>Tablette 834 × 1112</span></div>`;
        });
        SCREENS.forEach((s, ri) => {
          const y = 130 + ri * RH;
          html += `<div class="rowlab" style="top:${y - 46}px;left:40px"><b>${s[0]}</b><span>${s[1]}</span></div>`;
          designs.forEach((d, ci) => {
            html += `<div class="frame tab ${d.c}" data-screen-label="${s[0]} — tablette" style="top:${y}px;left:${40 + ci * CW}px">${s[2]({
              c: d.c,
              sh: 'rail'
            })}</div>`;
          });
        });
        this.style.cssText = `position:relative;display:block;width:${40 + (designs.length - 1) * CW + W + 40}px;height:${130 + (SCREENS.length - 1) * RH + H + 60}px`;
        this.innerHTML = html;
        if (window.lucide) window.lucide.createIcons();
      }
    }
    if (!customElements.get('galerie-tablet')) customElements.define('galerie-tablet', GalerieTablet);
    class GalerieSkera extends HTMLElement {
      connectedCallback() {
        this.render();
      }
      static get observedAttributes() {
        return ['designs'];
      }
      attributeChangedCallback() {
        if (this.isConnected) this.render();
      }
      render() {
        const only = (this.getAttribute('designs') || '').split(',').map(s => s.trim()).filter(Boolean);
        const g = buildGalerie(only);
        this.style.cssText = `position:relative;display:block;width:${40 + (g.cols - 1) * 1420 + 1360 + 40}px;height:${130 + (g.rows - 1) * 950 + 850 + 60}px`;
        this.innerHTML = g.html;
        if (window.lucide) window.lucide.createIcons();
      }
    }
    if (!customElements.get('galerie-skera')) customElements.define('galerie-skera', GalerieSkera);

    /* variantes de page de connexion (test) */
    class GalerieLogins extends HTMLElement {
      connectedCallback() {
        const vs = (this.getAttribute('variants') || '').split(';').map(s => s.trim()).filter(Boolean);
        let html = '';
        vs.forEach((v, i) => {
          const p = v.split('|');
          html += `<div class="collab" style="top:20px;left:${40 + i * 1420}px"><b>${p[1] || p[0]}</b><span>${p[2] || ''}</span></div>`;
          html += `<div class="frame ${p[0]}" data-screen-label="${p[1] || p[0]}" style="top:130px;left:${40 + i * 1420}px">${loginA({
            c: p[0]
          })}</div>`;
        });
        this.style.cssText = `position:relative;display:block;width:${40 + (vs.length - 1) * 1420 + 1400}px;height:1040px`;
        this.innerHTML = html;
        if (window.lucide) window.lucide.createIcons();
      }
    }
    if (!customElements.get('galerie-logins')) customElements.define('galerie-logins', GalerieLogins);
    const LANGS = [['Français', 'FR'], ['English', 'EN'], ['Deutsch', 'DE'], ['Español', 'ES'], ['Italiano', 'IT']];
    function umenuShell(langBlock, extra) {
      return `<div class="umenu"><div class="uhead"><div class="ava">TB</div><div><div class="uh1">Thomas Berger</div><div class="uh2">t.berger@skera.fr · Agence Ouest</div></div></div><div class="usep"></div>${langBlock}<div class="usep"></div>
<div class="uitem">${I('download')}<span><b>Télécharger l'application</b><span class="sub">Windows · macOS · Linux</span></span></div>
<div class="uitem">${I('user-cog')}<span><b>Mon compte</b></span></div>
<div class="uitem">${I('settings')}<span><b>Préférences</b></span><span class="uk">⌘,</span></div>
<div class="usep"></div>
<div class="uitem dang">${I('log-out')}<span><b>Se déconnecter</b></span></div></div>${extra || ''}`;
    }
    function langSub(t) {
      return dashA(t) + umenuShell(`<div class="uitem hov">${I('globe')}<span><b>Langue</b><span class="sub">Français</span></span><span class="uk">${I('chevron-right')}</span></div>`, `<div class="usub"><div class="ulab">Choisir la langue</div>${LANGS.map((l, i) => `<div class="uitem${i ? '' : ' hov'}"><span class="lcode">${l[1]}</span><span><b>${l[0]}</b></span>${i ? '' : `<span class="uk">${I('check')}</span>`}</div>`).join('')}</div>`);
    }
    function langSelect(t) {
      return dashA(t) + umenuShell(`<div class="ulab">Langue de l'interface</div><div class="lseg"><div class="in">${I('globe')}Français${I('chevron-down')}</div></div>`);
    }
    function langCodes(t) {
      return dashA(t) + umenuShell(`<div class="ulab">Langue</div><div class="lcodes">${LANGS.map((l, i) => `<span class="${i ? '' : 'on'}" title="${l[0]}">${l[1]}</span>`).join('')}</div><div class="lchint">Français</div>`);
    }
    const ACTS = [['VMs · Imports — Server 172.16.11.228', '#17328', 'ok', 'Réussi', '1m 21s'], ['VMs · Imports — Server 172.16.11.228', '#17311', 'ok', 'Réussi', '1m 54s'], ['Evolucloud · Production vm-prd-atlas-07', '#17302', 'inf', 'En cours', 'étape 4/6'], ['IPAM · Création net-prod-vellum', '#17295', 'er', 'Erreur', '12s'], ['VMs · Imports — Server 172.16.11.228', '#17288', 'ok', 'Réussi', '10s']];
    const arow = a => `<div class="aitem"><div class="ai1"><span class="an">${a[0]}</span><span class="aid">${a[1]}</span></div><div class="ai2">${pill(a[2], a[3], a[2] === 'inf' ? 1 : 0)}<span class="adur">${a[4]}</span></div></div>`;
    const AKPI = `<div class="akpis"><div class="akpi st-ok"><b>3</b><span>En cours</span></div><div class="akpi er"><b>1</b><span>En erreur</span></div></div>`;
    const AFOOT = `<div class="afoot"><span class="async"><i></i>Synchronisé il y a moins d'une minute</span><span class="btn pri sm">${I('external-link')}Log externe</span></div>`;
    const NROWS = (() => {
      const it = (u, c, ic, t1, t2, t3) => `<div class="nitem${u ? ' unread' : ''}"><span class="nic ${c}">${I(ic)}</span><div><div class="nt1">${t1}</div><div class="nt2">${t2}</div><div class="nt3">${t3}</div></div></div>`;
      return it(1, 'er', 'alert-octagon', 'vm-prd-orion-04 en erreur', 'Échec à l\'étape 5/6 — rollback automatique.', 'il y a 18 min') + it(1, 'ok', 'rocket', 'Production terminée', 'vm-prd-atlas-07 est active pour Nexalys.', 'il y a 42 min') + it(1, 'inf', 'file-check-2', 'Demande à valider', 'DEM-2418 — Evolucloud pour Nexalys.', 'il y a 1 h') + it(0, 'wa', 'gauge', 'Quota bientôt atteint', 'Licences SpamRock : 240 / 250.', '17:24');
    })();
    function actTabs(t) {
      return dashA(t) + `<div class="npanel"><div class="nhead"><h3>Centre d'activité</h3><span class="lnk2">Tout marquer comme lu</span></div><div class="ntabs"><span>Notifications · 12</span><span class="on">Actions · 24</span></div>${AKPI}<div class="alist">${ACTS.map(arow).join('')}</div>${AFOOT}</div>`;
    }
    function actSplit(t) {
      return dashA(t) + `<div class="npanel wide"><div class="nhead"><h3>Centre d'activité</h3><span class="lnk2">Tout marquer comme lu</span></div><div class="nsplit"><div class="ncol"><div class="ncolh">${I('bell')}Notifications<span class="ncnt">4 non lues</span></div>${NROWS}</div><div class="ncol"><div class="ncolh">${I('activity')}Mes actions<span class="ncnt">3 en cours</span></div><div class="alist">${ACTS.slice(0, 4).map(arow).join('')}</div></div></div>${AFOOT}</div>`;
    }
    function actUnified(t) {
      return dashA(t) + `<div class="npanel"><div class="nhead"><h3>Centre d'activité</h3><span class="lnk2">Tout marquer comme lu</span></div><div class="nchips"><span class="ftk on"><span class="fv2">Tout · 36</span></span><span class="ftk"><span class="fv2">Notifications</span></span><span class="ftk"><span class="fv2">Mes actions</span></span><span class="ftk"><span class="fv2">Erreurs · 1</span></span></div>
<div class="nday">Aujourd'hui</div>${arow(ACTS[2])}${NROWS.split('</div></div>')[0] + '</div></div>'}${arow(ACTS[3])}${arow(ACTS[0])}
<div class="nday">Hier</div>${arow(ACTS[4])}${AFOOT}</div>`;
    }
    class GalerieProps extends HTMLElement {
      connectedCallback() {
        const items = (this.getAttribute('screens') || '').split(';').map(s => s.trim()).filter(Boolean);
        const fns = {
          fltH2a,
          fltH2b,
          fltH2c,
          fltTabs,
          fltTabsV,
          fltTabsRecap,
          fltNat,
          fltCards,
          fltGuided,
          fltViews,
          colPop,
          colDrawer,
          filtChips,
          filtDrawer,
          filtFacets,
          filtBuilder,
          cliRow,
          cliPage,
          cliDrawer,
          nestSide,
          svSide: t => dashA(t),
          svRail: t => dashA(Object.assign({}, t, {
            sh: "rail"
          })),
          langSub,
          langSelect,
          langCodes,
          actTabs,
          actSplit,
          actUnified,
          quotaBanner,
          quotaRing,
          quotaTitle,
          quotaGhost,
          quotaR1,
          quotaR2,
          quotaR3,
          quotaR4
        };
        const per = parseInt(this.getAttribute('cols') || '3', 10);
        let html = '';
        items.forEach((it, i) => {
          const p = it.split('|');
          const col = i % per,
            row = Math.floor(i / per);
          const x = 40 + col * 1420,
            y = 130 + row * 1010;
          html += `<div class="collab" style="top:${y - 80}px;left:${x}px"><b>${p[1]}</b><span>${p[2] || ''}</span></div>`;
          html += `<div class="frame ${p[3] || 'd4l'}" data-screen-label="${p[1]}" style="top:${y}px;left:${x}px">${fns[p[0]]({
            c: p[3] || 'd4l',
            sh: 'side'
          })}</div>`;
        });
        const rows = Math.ceil(items.length / per);
        this.style.cssText = `position:relative;display:block;width:${40 + (Math.min(items.length, per) - 1) * 1420 + 1400}px;height:${130 + (rows - 1) * 1010 + 900}px`;
        this.innerHTML = html;
        if (window.lucide) window.lucide.createIcons();
      }
    }
    if (!customElements.get('galerie-props')) customElements.define('galerie-props', GalerieProps);
    window.SKERA_DESKTOP = SCREENS;
  })();
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "extracted/v-c4875e08.js", error: String((e && e.message) || e) }); }

// ui_kits/console/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/console/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Gauge = __ds_scope.Gauge;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.SubTable = __ds_scope.SubTable;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.Loader = __ds_scope.Loader;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.SkeletonRow = __ds_scope.SkeletonRow;

__ds_ns.SkeletonKpi = __ds_scope.SkeletonKpi;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.SnackbarStack = __ds_scope.SnackbarStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.FilterButton = __ds_scope.FilterButton;

__ds_ns.FilterPanel = __ds_scope.FilterPanel;

__ds_ns.FilterToken = __ds_scope.FilterToken;

__ds_ns.FilterAdd = __ds_scope.FilterAdd;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Combobox = __ds_scope.Combobox;

__ds_ns.ImpersonationBanner = __ds_scope.ImpersonationBanner;

__ds_ns.PerimeterSelect = __ds_scope.PerimeterSelect;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Topbar = __ds_scope.Topbar;

__ds_ns.NotificationPanel = __ds_scope.NotificationPanel;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ModalField = __ds_scope.ModalField;

__ds_ns.ModalInput = __ds_scope.ModalInput;

__ds_ns.CommandPalette = __ds_scope.CommandPalette;

__ds_ns.PALETTE_CHIPS = __ds_scope.PALETTE_CHIPS;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.ColumnsMenu = __ds_scope.ColumnsMenu;

__ds_ns.ContextMenu = __ds_scope.ContextMenu;

__ds_ns.Pagination = __ds_scope.Pagination;

})();
