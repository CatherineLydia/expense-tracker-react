import { Row } from "reactstrap";

const Balance = (props) => {
    return (
        <>
            <Row>
                <p>Balance</p>
            </Row>
            <Row>
                <p>${props.incomeAmt - props.expenseAmt}</p>
            </Row>
        </>
    )

}

export default Balance;