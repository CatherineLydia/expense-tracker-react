import { Row,Col,Container } from "reactstrap";

const IncomeExpense = (props) => {
    return (
        <Container>
                <Row style={{border:"1px solid blue",alignContent:"start",padding:"10px",marginTop:"10%"}}>
                <Col xs="6" style={{ color: "green" }} onClick={() => {props.setIncomeAmt((amt)=> amt+100)}}>
                        <div>
                            Income
                        </div>
                        <div>
                            ${props.incomeAmt}
                        </div>
                    </Col>
                    <Col xs="6" style={{ color: "red" }} onClick={() => {props.setExpenseAmt((amt)=> amt+50)}}>
                        <div>
                            Expense
                        </div>
                        <div>
                            ${props.expenseAmt}
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default IncomeExpense;