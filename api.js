const GEN_IA_API = ''

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const api = axios.create({
  headers: HEADERS,
  baseURL: GEN_IA_API,
  timeout: 150000,
});