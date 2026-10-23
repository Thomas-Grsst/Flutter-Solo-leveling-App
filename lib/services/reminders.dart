import 'package:flutter/foundation.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:flutter_timezone/flutter_timezone.dart';
import 'package:timezone/data/latest.dart' as tzdata;
import 'package:timezone/timezone.dart' as tz;

import '../game/data.dart';
import '../game/state.dart';

/// Local notifications for the daily quest: reminders at 20:00 and 23:00 while it is
/// unfinished, and a notice at midnight when it was missed. Android only.
class Reminders implements ReminderScheduler {
  final _plugin = FlutterLocalNotificationsPlugin();
  bool _ready = false;

  static const _details = NotificationDetails(
    android: AndroidNotificationDetails(
      'penalty_reminders',
      'Rappels de pénalité',
      channelDescription: 'Rappels quand la quête quotidienne n\'est pas terminée.',
      importance: Importance.high,
      priority: Priority.high,
    ),
  );

  Future<void> init() async {
    if (kIsWeb || defaultTargetPlatform != TargetPlatform.android) return;
    try {
      tzdata.initializeTimeZones();
      final zone = await FlutterTimezone.getLocalTimezone();
      tz.setLocalLocation(tz.getLocation(zone.identifier));
      await _plugin.initialize(settings: const InitializationSettings(android: AndroidInitializationSettings('@mipmap/ic_launcher')));
      _ready = true;
    } catch (e) {
      debugPrint('Reminders disabled: $e');
    }
  }

  AndroidFlutterLocalNotificationsPlugin? get _android => _plugin.resolvePlatformSpecificImplementation<AndroidFlutterLocalNotificationsPlugin>();

  @override
  Future<bool> requestPermission() async => _ready && (await _android?.requestNotificationsPermission() ?? false);

  @override
  Future<void> sync({required bool enabled, required int remainingToday, required int totalToday, required bool penaltyPending, required DateTime now}) async {
    if (!_ready) return;
    await _plugin.cancelAll();
    if (!enabled) return;
    var id = 0;
    Future<void> at(DateTime when, String body) => _plugin.zonedSchedule(
      id: id++,
      scheduledDate: tz.TZDateTime.from(when, tz.local),
      notificationDetails: _details,
      androidScheduleMode: AndroidScheduleMode.inexactAllowWhileIdle,
      title: 'NOTIFICATION DU SYSTÈME',
      body: body,
    );

    final penalty = penaltyPending ? ' Quête de pénalité en attente.' : '';
    // A week ahead, so reminders keep coming even if the app is not opened.
    for (var day = 0; day < 7; day++) {
      if (day == 0 && remainingToday == 0) continue;
      final left = day == 0 ? remainingToday : totalToday;
      for (final (h, m) in reminderTimes) {
        final when = DateTime(now.year, now.month, now.day + day, h, m);
        if (!when.isAfter(now)) continue;
        await at(when, '$left objectif${left > 1 ? 's' : ''} restant${left > 1 ? 's' : ''}. Pénalité à minuit.$penalty');
      }
      await at(DateTime(now.year, now.month, now.day + day + 1, 0, 1), 'Quête quotidienne échouée. La pénalité a été appliquée : ouvrez Ascend pour la lever.');
    }
  }
}
