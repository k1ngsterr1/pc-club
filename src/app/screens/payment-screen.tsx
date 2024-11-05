import { Layout } from "@app/layouts/layout";
import AccountInfo from "@entities/ui/AccountTab/account-tab";
import PaymentSelector from "@entities/ui/PaymentSelector/payment-selector";
import Checkbox from "@shared/ui/Checkbox/checkbox";
import Text from "@shared/ui/Text/text";
import React from "react";
import { View } from "react-native";

export const PaymentScreen = () => {
  return (
    <Layout isHeader isTab isPlan>
      <Text className="text-white text-center text-lg mt-8">
        У ВАС БУДЕТ <Text className="text-main">30 МИНУТ</Text>, ЧТОБЫ УСПЕТЬ
        СЕСТЬ ЗА КОМПЬЮТЕР!
      </Text>
      <View className="flex mt-8 flex-col">
        <PaymentSelector
          onPress={() => console.log("lol")}
          name="3+2 Будни"
          price="2400"
        />
        <PaymentSelector
          onPress={() => console.log("lol")}
          marginTop={16}
          name="2+1 Будни"
          price="2400"
        />
        <AccountInfo
          phoneNumber="+7 775 993 25-87"
          account="Аккаунт"
          computer="3 (мой)"
          package="3 + 2 Будни"
          marginTop={16}
        />
        <Checkbox
          marginTop={16}
          label="KAS"
          onToggle={() => console.log("lol")}
        />
      </View>
    </Layout>
  );
};
