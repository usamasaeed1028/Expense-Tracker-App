import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Some bananas",
    amount: 599.53,
    date: new Date("2022-12-01"),
  },
  {
    id: "e3",
    description: "A trouser",
    amount: 99.53,
    date: new Date("2022-01-12"),
  },
  {
    id: "e4",
    description: "Some Apples",
    amount: 9.53,
    date: new Date("2020-04-22"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 19.53,
    date: new Date("2021-08-07"),
  },
  {
    id: "e6",
    description: "A book",
    amount: 19.53,
    date: new Date("2021-08-07"),
  },
  {
    id: "e7",
    description: "A book",
    amount: 19.53,
    date: new Date("2021-08-07"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 19.53,
    date: new Date("2021-08-07"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 19.53,
    date: new Date("2021-08-07"),
  },
  {
    id: "e10",
    description: "A book",
    amount: 19.53,
    date: new Date("2021-08-07"),
  },
];

const ExpensesOutput = ({expensesPeriod }) => {
  // const [expenses, setExpenes] = useState(DUMMY_EXPENSES)
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
})
