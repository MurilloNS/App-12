import { View, Text } from "react-native";

export default function Experiencia() {
  return (
    <View style={{ marginTop: 30, marginLeft: 30 }}>
      <Text>Projetos:</Text>
      <View style={{ marginLeft: 20, marginBottom: 30 }}>
        <Text>
          Aplicativo para os funcionários da Santos Port Authority visualizarem
          a situação dos navios, criado com React Native onde consumia um API já
          criada pelo time senior. Permitiram colocar esse projeto em nosso
          portfólio
        </Text>
        <Text style={{ marginTop: 10 }}>
          Link: https://github.com/MurilloNS/spa-apk
        </Text>
        <Text>Santos Port Authority</Text>
      </View>
    </View>
  );
}
