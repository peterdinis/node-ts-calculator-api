declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_HOST: string | undefined;
      POSTGRES_PORT: number | undefined;
      POSTGRES_USER: string | undefined;
      POSTGRES_PASSWORD: string | undefined;
      POSTGRES_DB: string | undefined;
    }
  }
}
export {};
