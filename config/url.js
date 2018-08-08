import env from './env'

const DEV_URL = 'http://127.0.0.1:81/'
const PRO_URL = 'http://127.0.0.1:81/'

export default env === 'development' ? DEV_URL : PRO_URL
