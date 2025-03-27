declare namespace NodeJS {
  interface ProcessEnv {
    // Application
    NODE_ENV: 'development' | 'production'
    NEXT_PUBLIC_APP_URL: string

    // LINE
    NEXT_PUBLIC_LIFF_ID: string
    LINE_CHANNEL_ID: string
    LINE_CHANNEL_SECRET: string

    // Shopify
    SHOPIFY_SHOP_NAME: string
    SHOPIFY_ADMIN_API_ACCESS_TOKEN: string
    SHOPIFY_API_VERSION: string
    SHOPIFY_WEBHOOK_SECRET: string
  }
} 