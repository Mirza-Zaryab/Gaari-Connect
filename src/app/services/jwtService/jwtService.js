import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout', 'Invalid access_token');
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit('onNoAccessToken');

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('https://api.gariconnect.com:8080/api/user/create', data)
        .then((response) => {
          if (response.data) {
            resolve(response.data.user.data);
          } else {
            reject(response.data.error);
          }
        }).catch(error => {
          reject([
            {
              type: error.response.data.type,
              message: error.response.data.error.message
            }
          ]);
        })
    });
  };

  signInWithEmailAndPassword = (phoneno, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post('https://api.gariconnect.com:8080/api/auth/signin', {
          phoneno,
          password
        })
        .then((response) => {
          if (response.data) {
            var obj = {
              role: (response.data.roleId == 1) ? 'admin' : response.data.roleId,
              data: {
                displayName: response.data.firstname,
                email: response.data.email
              }
            }
            this.setSession(response.accessToken);
            resolve(obj);
          } else {
            reject(response.data.error);
          }
        })
        .catch(error => {
          reject([
            {
              type: error.response.data.type,
              message: error.response.data.message
            },
            {
              type: error.response.data.type,
              message: error.response.data.message
            }
          ]);
        })
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .get('https://api.gariconnect.com:8080/api/auth/token' + this.getAccessToken())
        .then((response) => {
          if (response) {
            var obj = {
              role: (response.data.roleId == 1) ? 'admin' : response.data.roleId,
              data: {
                displayName: response.data.firstname,
                email: response.data.email
              }
            }
            this.setSession(response.token);
            resolve(obj);
          } else {
            this.logout();
            reject(new Error('Failed to login with token.'));
          }
        })
        .catch((error) => {
          this.logout();
          reject(new Error('Failed to login with token.'));
        });
    });
  };

  updateUserData = (user) => {
    return axios.post('/api/auth/user/update', {
      user,
    });
  };

  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem('jwt_access_token', access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem('jwt_access_token');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    return window.localStorage.getItem('jwt_access_token');
  };
}

const instance = new JwtService();

export default instance;
