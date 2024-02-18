import { Header } from '@/components/header'
import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View className='pt-12 flex-1' >
      <Header title='Faça seu pedido'  cartQuantityItems={2} />
    </View>
  )
}