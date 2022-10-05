import { createContext, useState } from "react"
import { Container, Row } from "reactstrap"
import Balance from "./BalanceComponent"
import IncomeExpense from "./IncomeExpenseComponent"
import Transaction from "./TransactionComponent"

export const SetIncomeContext = createContext();
export const SetExpenseContext = createContext();

const ExpenseTrackerPage = () => {
    const [incomeAmt, setIncomeAmt] = useState(100);
    const [expenseAmt, setExpenseAmt] = useState(50);

    return (
        <Container>
            <Row style={{marginTop:"5%"}}>
                <h1>Expense Tracker</h1>
            </Row>
            <Row style={{marginTop:"10%"}}>
                <Balance incomeAmt={incomeAmt} expenseAmt={expenseAmt}/>
            </Row>
            <Row>
                <IncomeExpense incomeAmt={incomeAmt} expenseAmt={expenseAmt}/>
            </Row>
            <Row style={{ marginTop: "10%" }}>
                <SetIncomeContext.Provider value={setIncomeAmt}>
                    <SetExpenseContext.Provider value={setExpenseAmt}>
                        <Transaction />
                    </SetExpenseContext.Provider>
                </SetIncomeContext.Provider>
            </Row>
        </Container>
    )
}

export default ExpenseTrackerPage;