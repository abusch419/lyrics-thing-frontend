export type Result<SuccessData> = Ok<SuccessData> | Err;

export interface Ok<Data> {
  status: "success";
  data: Data;
}

export interface Err {
  status: "error";
  message: string;
}

export function ok<Data>(data: Data): Ok<Data> {
  return {
    status: "success",
    data,
  };
}

export function err(message: string): Err {
  return {
    status: "error",
    message,
  };
}
