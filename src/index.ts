require('dotenv').config();

import CronJobProcessor from "./processor";

const cronJobProcessor = new CronJobProcessor();
const cronTime = process.env.CRON_TIME;
cronJobProcessor.start(cronTime);
