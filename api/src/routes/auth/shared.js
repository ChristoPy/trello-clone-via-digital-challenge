// from: https://stackoverflow.com/a/1373724
const EMAIL_REGEX = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

// from: https://stackoverflow.com/a/14850765
const PASSWORD_REGEX = "(?=.*d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}";

export const EMAIL_SCHEMA = {
  type: "string",
  pattern: EMAIL_REGEX,
};

export const PASSWORD_SCHEMA = {
  type: "string",
  pattern: PASSWORD_REGEX,
};
