/// Static game content, mirrored from the design prototype.
library;

const statCodes = ['FOR', 'AGI', 'VIT', 'INT', 'PER'];

const statNames = {'FOR': 'FORCE', 'AGI': 'AGILITÉ', 'VIT': 'VITALITÉ', 'INT': 'INTELLECT', 'PER': 'PERCEPTION'};

class QuestDef {
  const QuestDef(this.id, this.name, this.domain, this.target, this.step, this.unit, this.xp, this.stat, {this.session = false, this.scales = false});
  final String id, name, domain, unit, stat;

  /// [target] is the objective at 10 in [stat].
  final int target, step, xp;

  /// A deep-work session: completing one also damages the weekly boss.
  final bool session;

  /// The objective grows with [stat] (see [statScaling]).
  final bool scales;
}

const quests = [
  QuestDef('pompes', 'Pompes', 'corps', 100, 10, '', 120, 'FOR', scales: true),
  QuestDef('gainage', 'Gainage', 'corps', 5, 1, ' min', 150, 'AGI', scales: true),
  QuestDef('lecture', 'Lecture', 'esprit', 30, 5, ' min', 80, 'INT', scales: true),
  QuestDef('eau', 'Eau', 'habitudes', 8, 1, ' verres', 60, 'VIT'),
  QuestDef('travail', 'Travail profond', 'travail', 2, 1, '', 180, 'INT', session: true),
];

const baseStat = 10;

/// Each stat point above [baseStat] raises a scaling quest's objective by 5 %.
const statScaling = 0.05;

/// Objective for [q] given its stat value, rounded to the quest's step.
int scaledTarget(QuestDef q, int stat) {
  if (!q.scales) return q.target;
  final raw = q.target * (1 + statScaling * (stat - baseStat));
  return ((raw / q.step).round() * q.step).clamp(q.target, 1 << 30);
}

class HabitDef {
  const HabitDef(this.id, this.name, this.debuff, this.stat, this.xp);
  final String id, name, debuff, stat;
  final int xp;
}

const habits = [
  HabitDef('tabac', 'Tabac', 'Manque', 'PER', 40),
  HabitDef('reseaux', 'Réseaux sociaux > 1\u00A0h', 'Distraction', 'INT', 30),
  HabitDef('sucre', 'Sucre ajouté', 'Langueur', 'VIT', 30),
  HabitDef('coucher', 'Coucher après 23:30', 'Fatigue', 'AGI', 30),
  HabitDef('alcool', 'Alcool', 'Ivresse', 'AGI', 40),
  HabitDef('jeux', 'Jeux vidéo > 2\u00A0h', 'Apathie', 'PER', 30),
];

HabitDef habitById(String id) => habits.firstWhere((h) => h.id == id);

/// (id, label, quests it adds to the daily quest)
const domains = [
  ('corps', 'CORPS', 'Pompes · Gainage'),
  ('esprit', 'ESPRIT', 'Lecture'),
  ('travail', 'TRAVAIL', 'Travail profond · Donjon'),
  ('habitudes', 'HABITUDES', 'Hydratation'),
];

/// (short name, label, minimum level)
const ranks = [
  ('E', 'Éveillé', 1),
  ('D', 'Initié', 6),
  ('C', 'Aguerri', 14),
  ('B', 'Avancé', 24),
  ('A', 'Confirmé', 36),
  ('S', 'Expert', 50),
  ('SS', 'Maître', 65),
  ('SSS', 'Légende', 80),
  ('NATIONAL', 'Élite nationale', 100),
  ('MONARQUE', 'Au-delà de toute mesure', 150),
];

class TitleDef {
  const TitleDef(this.id, this.name, this.desc);
  final String id, name, desc;
}

const titles = [
  TitleDef('riser', 'Lève-tôt', 'Accomplir la quête avant 08:00, 7 fois'),
  TitleDef('iron', 'Volonté de fer', 'Maintenir une série de 14 jours'),
  TitleDef('survivor', 'Survivant', 'Terminer une quête de pénalité'),
  TitleDef('unstoppable', 'Inarrêtable', 'Nettoyer une porte de rang C'),
  TitleDef('resist', 'Résistant', '30 jours sans tabac'),
];

const xpPerSlip = 60;
const debuffStatMalus = 2;
const debuffXpMalus = 0.1;
const debuffPurgeDays = 3;
const pointsPerLevel = 3;
const dailyBonusPoints = 3;
const bossDamage = 15;
const bossSessionsMax = 7;
const bossRewardXp = 1500;

/// Missing the daily quest costs this share of the current level's XP, per missed day.
const penaltyXpShare = 0.25;

/// XP gains are multiplied by this until the penalty quest is done.
const penaltyGainFactor = 0.5;
const penaltyQuest = '45 min de cardio';

/// Reminder times (hour, minute) while the daily quest is unfinished.
const reminderTimes = [(20, 0), (23, 0)];

int xpForLevel(int level) => 200 * level;
