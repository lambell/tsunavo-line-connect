import { prisma } from '@/lib/prisma'

export async function getLineConfig(shopDomain: string) {
  const shop = await prisma.shop.findUnique({
    where: { shopifyShopDomain: shopDomain },
    include: { lineConfig: true }
  })

  if (!shop?.lineConfig) {
    throw new Error('LINE設定が見つかりません。先にLINE公式アカウントとの連携を行ってください。')
  }

  return {
    channelId: shop.lineConfig.channelId,
    channelSecret: shop.lineConfig.channelSecret,
    liffId: shop.lineConfig.liffId
  }
}

export async function saveLineConfig(shopDomain: string, config: {
  channelId: string
  channelSecret: string
  liffId: string
}) {
  const shop = await prisma.shop.findUnique({
    where: { shopifyShopDomain: shopDomain }
  })

  if (!shop) {
    throw new Error('ショップが見つかりません')
  }

  return prisma.lineConfig.upsert({
    where: { shopId: shop.id },
    update: {
      channelId: config.channelId,
      channelSecret: config.channelSecret,
      liffId: config.liffId,
      updatedAt: new Date()
    },
    create: {
      shopId: shop.id,
      channelId: config.channelId,
      channelSecret: config.channelSecret,
      liffId: config.liffId
    }
  })
} 