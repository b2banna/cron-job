import { CronJob } from 'cron';

import logger from './customLoggerHelper';

export default class CronJobHelper {
    private static _instance: CronJobHelper;
    private _cronJob: CronJob;

    constructor(cronTime: string, onTick: () => Promise<void>) {
        if (CronJobHelper._instance) throw new Error("Error - use CronJobHelper.getInstance()");
        this._cronJob = new CronJob(cronTime, onTick, null, false);
        logger.info('CronJobHelper.constructor()');
    }

    public static getInstance(cronTime: string, onTick: () => Promise<void>) {
        if (!CronJobHelper._instance) {
            CronJobHelper._instance = new CronJobHelper(cronTime, onTick);
        }
        return CronJobHelper._instance;
    }

    public async start(): Promise<void> {
        await this.stop();
        this._cronJob.start();
        logger.info('CronJobHelper.start()');
    }

    public async stop(): Promise<void> {
        if (this._cronJob.running) this._cronJob.stop();
        logger.info('CronJobHelper.stop()');
    }
}
