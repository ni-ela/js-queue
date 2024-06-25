const GEN_IA_API = ''
const ORIGIN = ''

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const api = axios.create({
  headers: HEADERS,
  baseURL: GEN_IA_API,
  timeout: 150000,
});

export const getAuthHeader = async () => {
  const token = ""
  return {
    Authorization: `Bearer ${token}`,
    "X-Request-Origin": ORIGIN,
    "accept": "application/json"
  };
};