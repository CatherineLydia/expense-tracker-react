import { useState } from "react"
import { Container, Row } from "reactstrap"
import AddTransaction from "./AddTransactionComponent"
import Balance from "./BalanceComponent"
import IncomeExpense from "./IncomeExpenseComponent"

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
                <IncomeExpense incomeAmt={incomeAmt} expenseAmt={expenseAmt}
                                setIncomeAmt={setIncomeAmt} setExpenseAmt={setExpenseAmt}/>
            </Row>
            <Row style={{marginTop:"10%"}}>
                <AddTransaction setIncomeAmt={setIncomeAmt} setExpenseAmt={setExpenseAmt} />
            </Row>
        </Container>
    )
}

export default ExpenseTrackerPage;