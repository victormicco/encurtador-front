import ky from "ky";

import { env } from "@/constants/env.mjs";

export const apiLink = ky.create({
  prefixUrl: env.NEXT_PUBLIC_LINK_BASE_URL,
  timeout: 180000,
});
