import { hashPassword, checkPassword } from "../../src/utils/crypto.js";

describe("Password", () => {
  test("Hash a password", async () => {
    const password = "123";
    const hashed = await hashPassword(password);

    expect(typeof hashed).toBe("string");
    expect(hashed.length).toBe(160);
  });

  test("Validate if password is equal", async () => {
    const password = "123";
    const hashed =
      "2dfc8ceb430fe23155657465c55481283893d7a14f11a06bdee82c5cf195a3c1f8d521b9b590cbb5c7ad215a95655d1f6df5999416c51f87e863709f7435174f278c269af80429e17f8923427e723b54";

    const isEqual = await checkPassword(password, hashed);

    expect(isEqual).toBe(true);
  });

  test("Validate if password is not equal", async () => {
    const password = "1234";
    const hashed =
      "2dfc8ceb430fe23155657465c55481283893d7a14f11a06bdee82c5cf195a3c1f8d521b9b590cbb5c7ad215a95655d1f6df5999416c51f87e863709f7435174f278c269af80429e17f8923427e723b54";

    expect(checkPassword(password, hashed)).rejects.toBe(false);
  });
});
