import { Request, Response } from 'express';

import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {

  async index(request: Request, response: Response) {
    const week_day = request.query.week_day as string;
    const subject = request.query.subject as string;
    const time = request.query.time as string;

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      });
    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db('classes')
      .whereExists(function() {
        this.select('classes_schedule.*')
          .from('classes_schedule')
          .whereRaw('`classes_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`classes_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`classes_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`classes_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.status(200).json(classes);
  }

  async create(request: Request, response: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx('users').insert({
        name, avatar, whatsapp, bio,
      });

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx('classes').insert({
        subject, cost, user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        }
      });

      await trx('classes_schedule').insert(classSchedule);

      await trx.commit();

      return response.status(201).send();
    } catch (error) {
      await trx.rollback();

      return response.status(400).json({
        error: "Unexpected error while creating new class"
      });
    }
  }
}