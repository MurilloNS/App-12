import { View, Text } from "react-native";

export default function Pessoal() {
  return (
    <View style={{ marginTop: 30, marginLeft: 30 }}>
      <Text>Dados Pessoais:</Text>
      <View style={{ marginLeft: 20 }}>
        <Text>Nome: Murillo Nonato Silva</Text>
        <Text>Idade: 21</Text>
        <Text>CPF: 504.xxx.xxx-xx</Text>
      </View>
    </View>
  );
}
