/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // add more env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob: (pattern: string) => Record<string, () => Promise<{ [key: string]: any }>>;
}
