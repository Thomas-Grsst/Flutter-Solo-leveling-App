/// Static game content, mirrored from the design prototype.
library;

const statCodes = ['FOR', 'AGI', 'VIT', 'INT', 'PER'];

const statNames = {'FOR': 'FORCE', 'AGI': 'AGILITÉ', 'VIT': 'VITALITÉ', 'INT': 'INTELLECT', 'PER': 'PERCEPTION'};

class QuestDef {
  const QuestDef(this.id, this.name, this.target, this.step, this.unit, this.xp, this.stat, {this.session = false});
  final String id, name, unit, stat;
  final int target, step, xp;

  /// A deep-work session: completing one also damages the weekly boss.
  final bool session;
}

const quests = [
  QuestDef('pompes', 'Pompes', 100, 10, '', 120, 'FOR'),
  QuestDef('gainage', 'Gainage', 5, 1, ' min', 150, 'AGI'),
  QuestDef('lecture', 'Lecture', 30, 5, ' min', 80, 'INT'),
  QuestDef('eau', 'Eau', 8, 1, ' verres', 60, 'VIT'),
  QuestDef('travail', 'Travail profond', 2, 1, '', 180, 'INT', session: true),
];

class HabitDef {
  const HabitDef(this.id, this.name, this.debuff, this.stat, this.xp);
  final String id, name, debuff, stat;
  final int xp;
}

const habits = [
  HabitDef('tabac', 'Tabac', 'Manque', 'PER', 40),
  HabitDef('reseaux', 'Réseaux sociaux > 1\u00A0h', 'Distraction', 'INT', 30),
  HabitDef('sucre', 'Sucre ajouté', 'Langueur', 'VIT', 30),
  HabitDef('coucher', 'Coucher après 00:30', 'Fatigue', 'AGI', 30),
  HabitDef('alcool', 'Alcool', 'Ivresse', 'AGI', 40),
  HabitDef('jeux', 'Jeux vidéo > 2\u00A0h', 'Apathie', 'PER', 30),
];

HabitDef habitById(String id) => habits.firstWhere((h) => h.id == id);

const domains = [
  ('corps', 'CORPS', 'FOR · AGI · VIT'),
  ('esprit', 'ESPRIT', 'INT · PER'),
  ('travail', 'TRAVAIL', 'Concentration'),
  ('habitudes', 'HABITUDES', 'Sommeil, hydratation'),
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

int xpForLevel(int level) => 200 * level;
