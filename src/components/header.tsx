import { Feather } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";

type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
}

export function Header({title, cartQuantityItems = 0}: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between border-b border-slate-700 pb-5 mx-5">
      <View>
        <Image source={require('@/app/assets/logo.png')} className="h-6 w-32" />
        <Text className="text-white text-xl font-heading" > {title} </Text>
      </View>

      {cartQuantityItems > 0 && (
        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 -right-3 z-10">
            <Text className="text-slate-900 font-bold text-xs" >{cartQuantityItems}</Text>

          </View>

          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>
       )}
    </View>
  )
}