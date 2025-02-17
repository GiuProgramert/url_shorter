import { z } from "zod";

export const URLSchema = z.object({
  url: z.string().url("Invalid URL").min(1, "URL is required"),
});

export type URLFormInputs = z.infer<typeof URLSchema>;

export type RegisterURLResponse = Pick<URLFormInputs, "url"> & {
  short_url: string;
  created_at: string;
};
