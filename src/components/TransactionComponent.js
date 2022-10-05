import { useReducer } from "react";
import { Container,Row } from "reactstrap"
import AddTransaction from "./AddTransactionComponent"
import ShowTransaction from "./ShowTransactionComponent";

const initialTrnxList = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return [...state, action.payload];
        default:
            return state;
    }
};

const Transaction = () => {

    const [trnxList, dispatch] = useReducer(reducer, initialTrnxList);

    const addTransaction = (trnx) => {
        dispatch({ type: "ADD_TRANSACTION", payload: trnx });
    };

    return (
        <Container>
            <Row style={{ margin: "5%" }}>
                <AddTransaction addTransaction={addTransaction}/>
            </Row>
            <Row style={{ margin: "5%" }}>
                <ShowTransaction trnxList={trnxList}/>
            </Row>
        </Container>
    );
}

export default Transaction;