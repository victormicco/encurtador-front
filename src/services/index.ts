import { type Options } from "ky";
import { apiLink } from "../lib/ky";
import { GetLink } from "./types";

export const linkService = {
  async getLink() {
    const response = await apiLink.get(`shortcut`, {
      cache: "no-store",
      timeout: false,
    });
    const data = await response.json<any>();
    return data;
  },

  async getShortcuted(id: any) {
    const response = await apiLink.get(`shortcut/${id}`, {
        cache: "no-store",
        timeout: false,
      });
      const data = await response.json<any>();
      return data;
  },

  async sendLink(data: GetLink) {
    const randomPath = Math.random()

    const response = await apiLink.post("shortcut", {
        json: {
            link: data.link,
            linkShort: `rota.com/${randomPath.toFixed()}`
        }
    })
    
    const res = response.json<any>()
    return res
  }
};
