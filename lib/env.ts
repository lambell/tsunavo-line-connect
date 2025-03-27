/**
 * 必須の環境変数を取得
 * 未設定の場合はエラーをスロー
 */
export function getRequiredEnvVar(key: keyof NodeJS.ProcessEnv): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`環境変数${key}が設定されていません。`)
  }
  return value
}

/**
 * LINE関連の環境変数
 */
export const lineConfig = {
  get liffId() {
    return getRequiredEnvVar('NEXT_PUBLIC_LIFF_ID')
  },
  get channelId() {
    return getRequiredEnvVar('LINE_CHANNEL_ID')
  },
  get channelSecret() {
    return getRequiredEnvVar('LINE_CHANNEL_SECRET')
  }
}

/**
 * Shopify関連の環境変数
 */
export const shopifyConfig = {
  get shopName() {
    return getRequiredEnvVar('SHOPIFY_SHOP_NAME')
  },
  get adminApiAccessToken() {
    return getRequiredEnvVar('SHOPIFY_ADMIN_API_ACCESS_TOKEN')
  },
  get apiVersion() {
    return getRequiredEnvVar('SHOPIFY_API_VERSION')
  },
  get webhookSecret() {
    return getRequiredEnvVar('SHOPIFY_WEBHOOK_SECRET')
  }
}

/**
 * アプリケーション関連の環境変数
 */
export const appConfig = {
  get isDevelopment() {
    return process.env.NODE_ENV === 'development'
  },
  get appUrl() {
    return getRequiredEnvVar('NEXT_PUBLIC_APP_URL')
  }
} 