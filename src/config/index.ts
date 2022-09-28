const isProdMode = process.env.NODE_ENV === "production";

const APP_NAME = "NODE_SERVER";

const SERVER_HOST = "nlovesye.tpddns.cn";

const API_LISTENING_PORT = isProdMode ? 10020 : 7600;

const DB_URL = `mongodb://admin_node_server:123456@${SERVER_HOST}/node_server`;

const REDIS = {
  host: SERVER_HOST,
  port: 27020,
  password: "123456",
};

const JWT_SECRET =
  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY2NDM1MzQzMywiaWF0IjoxNjY0MzUzNDMzfQ.Nt9BF1OJ_yO4ZMfB0J8MXS7xYuPiTtkuFGV3pF7-HZA";

export { API_LISTENING_PORT, DB_URL, REDIS, JWT_SECRET, isProdMode, APP_NAME };
