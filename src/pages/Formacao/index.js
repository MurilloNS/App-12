import { View, Text } from "react-native";

export default function Formacao() {
  return (
    <View>
      <View style={{ marginTop: 30, marginLeft: 30 }}>
        <Text>Formação:</Text>
        <View style={{ marginLeft: 20 }}>
          <Text>Técnico em Informática para Internet</Text>
          <Text>Início e Término: 2018 - 2019</Text>
          <Text>ETEC de Praia Grande</Text>
        </View>

        <View style={{ marginLeft: 20, marginTop: 15 }}>
          <Text>Análise e Desenvolvimento de Sistemas</Text>
          <Text>Início e Término: 2021 - 2023</Text>
          <Text>FATEC de Praia Grande</Text>
        </View>
      </View>

      <View style={{ marginTop: 30, marginLeft: 30 }}>
        <Text>Experiência:</Text>
        <View style={{ marginLeft: 20 }}>
          <Text>Estagiário em Desenvolvimento de Software</Text>
          <Text>06/2022 - Atualmente</Text>
          <Text>Santos Port Authority</Text>
        </View>
      </View>
    </View>
  );
}
