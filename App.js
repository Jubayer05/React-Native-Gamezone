import React from "react";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewDetails from "./screens/ReviewDetails";
import About from "./screens/About";
import { Button, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ReviewDetails"
        options={{
          title: "My home",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // headerLeft: () => <Bar />,
        }}
        component={ReviewDetails}
      />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => <Bar />,
          }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: "Review Details",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => <Bar />,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: "About page",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => <Bar />,
          }}
        />
      </Stack.Navigator> */}
      <MyDrawer />
    </NavigationContainer>
  );
}

const Bar = () => {
  return (
    <TouchableOpacity>
      <FontAwesome style={{ color: "#fff" }} name="bars" size={32} />
    </TouchableOpacity>
  );
};
