import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  GEMINI_API_KEY: z.string().min(1, "GEMINI_API_KEY is required"),
  FLUTTERWAVE_PUBLIC_KEY: z.string().min(1, "FLUTTERWAVE_PUBLIC_KEY is required"),
  FLUTTERWAVE_SECRET_KEY: z.string().min(1, "FLUTTERWAVE_SECRET_KEY is required"),
  FLUTTERWAVE_WEBHOOK_HASH: z.string().min(1, "FLUTTERWAVE_WEBHOOK_HASH is required"),
  SESSION_SECRET: z.string().min(32, "SESSION_SECRET must be at least 32 characters"),
  STAFF_SESSION_SECRET: z.string().min(32, "STAFF_SESSION_SECRET must be at least 32 characters"),
  AWS_REGION: z.string().min(1, "AWS_REGION is required"),
  AWS_BUCKET_NAME: z.string().min(1, "AWS_BUCKET_NAME is required"),
  AWS_ACCESS_KEY_ID: z.string().min(1, "AWS_ACCESS_KEY_ID is required"),
  AWS_SECRET_ACCESS_KEY: z.string().min(1, "AWS_SECRET_ACCESS_KEY is required"),
});

export type Env = z.infer<typeof envSchema>;

let cachedEnv: Env | null = null;

export function getEnv(): Env {
  if (cachedEnv) {
    return cachedEnv;
  }

  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    console.error("Environment validation failed:", result.error.format());
    throw new Error("Invalid or missing environment variables. Refer to .env.example.");
  }

  cachedEnv = result.data;
  return cachedEnv;
}

export const env = {
  get DATABASE_URL() { return getEnv().DATABASE_URL; },
  get GEMINI_API_KEY() { return getEnv().GEMINI_API_KEY; },
  get FLUTTERWAVE_PUBLIC_KEY() { return getEnv().FLUTTERWAVE_PUBLIC_KEY; },
  get FLUTTERWAVE_SECRET_KEY() { return getEnv().FLUTTERWAVE_SECRET_KEY; },
  get FLUTTERWAVE_WEBHOOK_HASH() { return getEnv().FLUTTERWAVE_WEBHOOK_HASH; },
  get SESSION_SECRET() { return getEnv().SESSION_SECRET; },
  get STAFF_SESSION_SECRET() { return getEnv().STAFF_SESSION_SECRET; },
  get AWS_REGION() { return getEnv().AWS_REGION; },
  get AWS_BUCKET_NAME() { return getEnv().AWS_BUCKET_NAME; },
  get AWS_ACCESS_KEY_ID() { return getEnv().AWS_ACCESS_KEY_ID; },
  get AWS_SECRET_ACCESS_KEY() { return getEnv().AWS_SECRET_ACCESS_KEY; },
};

