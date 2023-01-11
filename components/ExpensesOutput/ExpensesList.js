import { FlatList } from "react-native";
import ExpensesItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  const renderExpenseItem = (itemData) => {
 
    return <ExpensesItem {...itemData.item} />;
  };
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  );
};

export default ExpensesList;
