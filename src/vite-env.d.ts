/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_URL?: string
  readonly VITE_PIX_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
