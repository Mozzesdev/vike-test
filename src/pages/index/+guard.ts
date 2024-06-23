export { guard };

import { redirect } from "vike/abort";
import type { GuardAsync } from "vike/types";

const guard: GuardAsync = async (): ReturnType<GuardAsync> => {
  throw redirect("/dashboard");
};
