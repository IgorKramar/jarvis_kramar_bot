import dotenv from 'dotenv';
import path from 'path';
import Joi, { ObjectSchema } from 'joi';

import { EnvVars, EnvVarsFormatted } from '../sharing_types/index';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema: ObjectSchema<EnvVars> = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    BOT_TOKEN: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  botToken: `bot${envVars.BOT_TOKEN}`,
} as EnvVarsFormatted;