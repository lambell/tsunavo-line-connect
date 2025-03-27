'use client'

import { PropsWithChildren } from 'react'
import { AppProvider } from '@shopify/polaris'

// App Bridgeは開発時のみ使用
export function AppBridgeProvider({ children }: PropsWithChildren) {
  return <>{children}</>
}

export function Providers({ children }: PropsWithChildren) {
  return (
    <AppProvider i18n={{}}>
      {children}
    </AppProvider>
  )
} 