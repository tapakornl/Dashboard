import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_BASE_URL;

class UserService {
  getDevices() {
    return axios.get(API_URL + 'api/v2.0/devices', {
      headers: authHeader(),
    });
  }

  getDeviceHistory(
    starttime: any,
    endtime: any,
    device_id: any,
    subdevice_idx: any,
    device_activity: any,
    sample_min: any
  ) {
    let url: string = `?RequestId=123&starttime=${starttime}&endtime=${endtime}&device_id=${device_id}&subdevice_idx=${subdevice_idx}&device_activity=${device_activity}&sample_min=${sample_min}`;
    return axios.get(API_URL + 'api/v2.0/historydevice' + url, {
      headers: authHeader(),
    });
  }

  postAutomations(
    allowNotification: boolean,
    roomName: string,
    subDeviceName: string,
    parameter: string,
    comparator: string,
    value: string | number,
    active: boolean
  ) {
    let payload: any = {
      automation_image: '',
      automation_name: 'automation_daikin',
      trigger: {
        trigger_device: {
          [roomName]: {
            [subDeviceName]: {
              [parameter]: {
                [comparator]: value,
              },
            },
          },
        },
      },
      condition: {
        condition_value: '',
        condition_event: '',
      },
      action: {},
      allow_notification: allowNotification ? active : false,
      notification_message: `${parameter} is higher than limit`,
    };

    return axios.post(
      API_URL + 'api/v2.0/automations/',
      {
        headers: authHeader(),
      },
      payload
    );
  }
}

export default new UserService();
