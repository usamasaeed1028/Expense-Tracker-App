import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AllExpensesScreen from "./screen/AllExpensesScreen";
import ManageExpensesScreen from "./screen/ManageExpensesScreen";
import RecentExpensesScreen from "./screen/RecentExpensesScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  const ExpensesOverView = () => {
    return (
      <BottomTabs.Navigator>
        <Stack.Screen name="RecentExpenses" component={RecentExpensesScreen} />
        <Stack.Screen name="AllExpenses" component={AllExpensesScreen} />
      </BottomTabs.Navigator>
    );
  };
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ManageExpense" component={ManageExpensesScreen} />
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverView}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
