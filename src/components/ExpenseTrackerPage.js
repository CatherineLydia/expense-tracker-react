import { Container, Row } from "reactstrap"
import Balance from "./BalanceComponent"
import IncomeExpense from "./IncomeExpenseComponent"

const ExpenseTrackerPage = () => {
    return (
        <Container>
            <Row style={{marginTop:"5%"}}>
                <h1>Expense Tracker</h1>
            </Row>
            <Row style={{marginTop:"10%"}}>
                <Balance/>
            </Row>
            <Row>
                <IncomeExpense/>
            </Row>
        </Container>
    )
}

export default ExpenseTrackerPage;