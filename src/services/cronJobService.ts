import logger from '../helpers/customLoggerHelper';

export default class CronJobService {
    constructor() {
        logger.info('CronJobService.constructor()');
    }

    public async onTick() {
        try {
            logger.info('CronJobService.onTick()');
        } catch (error) {
            logger.error(error);
        }
    }
}
