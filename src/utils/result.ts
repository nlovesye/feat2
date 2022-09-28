enum ResultCode {
  success = 200,
  un_auth = 401,
  error = 500,
}

interface Result<T = any> {
  code: ResultCode;
  msg: string;
  data?: T;
}

export function createResult<T = any>({
  code = ResultCode.success,
  msg = "成功!",
  data = null,
}: Partial<Result<T>>) {
  return {
    code,
    msg,
    data,
  };
}
