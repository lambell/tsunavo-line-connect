'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Page,
  Layout,
  LegacyCard,
  FormLayout,
  TextField,
  Button,
  Text,
  List,
  Banner,
  Tabs
} from '@shopify/polaris'

export default function LineSettings() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  
  const [messagingConfig, setMessagingConfig] = useState({
    channelId: '',
    channelSecret: '',
    channelToken: ''
  })

  const [loginConfig, setLoginConfig] = useState({
    channelId: '',
    channelSecret: '',
    liffId: ''
  })

  const handleMessagingSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/settings/line/messaging', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messagingConfig)
      })
      if (!response.ok) throw new Error('設定の保存に失敗しました')
      router.refresh()
    } catch (error) {
      console.error('Error:', error)
      alert('設定の保存に失敗しました')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLoginSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/settings/line/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginConfig)
      })
      if (!response.ok) throw new Error('設定の保存に失敗しました')
      router.refresh()
    } catch (error) {
      console.error('Error:', error)
      alert('設定の保存に失敗しました')
    } finally {
      setIsLoading(false)
    }
  }

  const tabs = [
    {
      id: 'messaging',
      content: 'Messaging API',
      accessibilityLabel: 'Messaging API設定',
      panelID: 'messaging-panel',
    },
    {
      id: 'login',
      content: 'LINEログイン',
      accessibilityLabel: 'LINEログイン設定',
      panelID: 'login-panel',
    },
  ]

  return (
    <Page
      title="LINE設定"
      subtitle="LINE公式アカウントとの連携設定"
    >
      <Layout>
        <Layout.Section>
          <Tabs
            tabs={tabs}
            selected={selectedTab}
            onSelect={setSelectedTab}
          />
          
          {selectedTab === 0 ? (
            <LegacyCard sectioned>
              <FormLayout>
                <TextField
                  label="チャネルID"
                  value={messagingConfig.channelId}
                  onChange={(value) => setMessagingConfig(prev => ({
                    ...prev,
                    channelId: value
                  }))}
                  autoComplete="off"
                  helpText="LINE Messaging APIのチャネルIDを入力"
                />
                <TextField
                  label="チャネルシークレット"
                  value={messagingConfig.channelSecret}
                  onChange={(value) => setMessagingConfig(prev => ({
                    ...prev,
                    channelSecret: value
                  }))}
                  type="password"
                  autoComplete="off"
                />
                <TextField
                  label="チャネルアクセストークン"
                  value={messagingConfig.channelToken}
                  onChange={(value) => setMessagingConfig(prev => ({
                    ...prev,
                    channelToken: value
                  }))}
                  type="password"
                  autoComplete="off"
                />
                <Button
                  variant="primary"
                  loading={isLoading}
                  onClick={handleMessagingSubmit}
                >
                  Messaging API設定を保存
                </Button>
              </FormLayout>
            </LegacyCard>
          ) : (
            <LegacyCard sectioned>
              <FormLayout>
                <TextField
                  label="チャネルID"
                  value={loginConfig.channelId}
                  onChange={(value) => setLoginConfig(prev => ({
                    ...prev,
                    channelId: value
                  }))}
                  autoComplete="off"
                  helpText="LINEログインのチャネルIDを入力"
                />
                <TextField
                  label="チャネルシークレット"
                  value={loginConfig.channelSecret}
                  onChange={(value) => setLoginConfig(prev => ({
                    ...prev,
                    channelSecret: value
                  }))}
                  type="password"
                  autoComplete="off"
                />
                <TextField
                  label="LIFF ID"
                  value={loginConfig.liffId}
                  onChange={(value) => setLoginConfig(prev => ({
                    ...prev,
                    liffId: value
                  }))}
                  autoComplete="off"
                  helpText="LINEログイン用のLIFFアプリIDを入力"
                />
                <Button
                  variant="primary"
                  loading={isLoading}
                  onClick={handleLoginSubmit}
                >
                  LINEログイン設定を保存
                </Button>
              </FormLayout>
            </LegacyCard>
          )}
        </Layout.Section>

        <Layout.Section variant="oneThird">
          <LegacyCard sectioned title="設定手順">
            <Text as="p" variant="bodyMd">
              {selectedTab === 0 ? (
                <>LINE Messaging APIの設定手順：</>
              ) : (
                <>LINEログインの設定手順：</>
              )}
            </Text>
            <List type="number">
              {selectedTab === 0 ? (
                <>
                  <List.Item>
                    LINE Developersで新規プロバイダーを作成
                  </List.Item>
                  <List.Item>
                    Messaging APIチャネルを作成
                  </List.Item>
                  <List.Item>
                    チャネルシークレットを取得
                  </List.Item>
                  <List.Item>
                    Messaging API設定からチャネルアクセストークンを発行
                  </List.Item>
                </>
              ) : (
                <>
                  <List.Item>
                    LINE Developersで新規プロバイダーを作成（または既存のものを使用）
                  </List.Item>
                  <List.Item>
                    LINEログインチャネルを作成
                  </List.Item>
                  <List.Item>
                    LIFFアプリを追加
                  </List.Item>
                  <List.Item>
                    リダイレクトURLを設定
                  </List.Item>
                </>
              )}
            </List>
          </LegacyCard>

          <LegacyCard sectioned>
            <Banner tone="info">
              <p>
                {selectedTab === 0 ? (
                  <>
                    Messaging API設定後、LINE公式アカウントから注文通知などを
                    送信できるようになります。
                  </>
                ) : (
                  <>
                    LINEログイン設定後、ストアフロントにLINEログインボタンが
                    表示されます。テーマのカスタマイズから配置を変更できます。
                  </>
                )}
              </p>
            </Banner>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  )
} 