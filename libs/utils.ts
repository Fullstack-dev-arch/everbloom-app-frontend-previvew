type ErrorData = {
  code: number;
  message: string;
};

type TxError = {
  data: ErrorData;
  error: string;
};

export const isEqualAddress = (addr1: string, addr2: string) => {
  return addr1.toLocaleLowerCase() === addr2.toLocaleLowerCase();
};

export const isUserRejected = (err: any) => {
  return typeof err === "object" && "code" in err && err.code === 4001;
};

export const isGasEstimationError = (err: TxError): boolean =>
  err?.data?.code === -32000;

export const truncateAddress = (address: string | null | undefined) => {
  if (!address) return "No wallet";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num: any) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min;
};

export const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const isValidEmail = (email: string) => {
  if (email == "") return true;
  if (!email || email == " ") return false;
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
