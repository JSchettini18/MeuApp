import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CarDetailScreen from '../screens/CarDetailScreen';
import LogoutScreen from '../screens/LogoutScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 22 }}>☰</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Detalhes" component={CarDetailScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#00D3DB', 
        },
        drawerActiveTintColor: '#000', 
        drawerInactiveTintColor: '#000', 
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen name="Início" component={HomeStack} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Sair" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}
