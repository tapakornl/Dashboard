var endpoint = 'http://localhost:8080';

if (process.env.REACT_APP_BASE_URL) {
  endpoint = process.env.REACT_APP_BASE_URL;
}

const API_CONSTANTS = {
  LOGIN_URL: endpoint + '/api/v2.0/login',
  DEVICES_CONTROL_URL: endpoint + '/api/v2.0/devicecontrol',
  DAIKIN_FIREBASE_BASE_PATH: '/building/daikin/building_main/',
};

export { API_CONSTANTS };
