import CronJobHelper from "../helpers/cronJobHelper";
import logger from "../helpers/customLoggerHelper";
import CronJobService from "../services/cronJobService";

export default class CronJobProcessor {
    private _cronJobService: CronJobService;

    constructor() {
        this._cronJobService = new CronJobService();
    }

    public async start(cronTime: string): Promise<void> {
        try {
            CronJobHelper.getInstance(cronTime, this._cronJobService.onTick).start();
            logger.info('CronJobProcessor.start()');
        } catch (error) {
            logger.error(error);
        }
    }
} 
