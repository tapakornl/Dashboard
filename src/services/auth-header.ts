export default function authHeader() {
  const accessToken = sessionStorage.getItem('accessToken');

  if (accessToken) {
    return {
      Authorization: 'Token ' + accessToken,
      'Content-Type': 'application/json',
    };
  } else {
    return {};
  }
}
