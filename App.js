import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Pessoal from "./src/pages/Pessoal";
import Formacao from "./src/pages/Formacao";
import Experiencia from "./src/pages/Experiencia";

export default function App() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pessoal" component={Pessoal} />
        <Tab.Screen name="Formacao" component={Formacao} />
        <Tab.Screen name="Experiencia" component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
