import 'dotenv/config';

export interface AppConfig {
  API_URL: string,
  API_TOKEN: string,
}

export default {
  name: 'CoolApp',
  version: '1.0.0',
  extra: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
  },
};