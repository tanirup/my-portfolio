// app/libs/microcms.ts
import { createClient } from "microcms-js-sdk";

export type StudyLog = {
  id: string;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
  image?: {
    url: string;
    width: number;
    height: number;
  };
  createdAt: string;
  updatedAt: string;
};

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export async function getStudyLogs() {
  return client.getList<StudyLog>({
    endpoint: "study-log",
    queries: {
      limit: 6,
      orders: "-createdAt",
    },
  });
}