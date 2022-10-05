import { createContext, useReducer } from "react";
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

export const TrnxListContext = createContext();

const Transaction = () => {

    const [trnxList, dispatch] = useReducer(reducer, initialTrnxList);

    const addTransaction = (trnx) => {
        dispatch({ type: "ADD_TRANSACTION", payload: trnx });
    };

    return (
        <Container>
            <Row style={{ margin: "5%" }}>
                <TrnxListContext.Provider value={trnxList}>
                    <AddTransaction addTransaction={addTransaction} />
                </TrnxListContext.Provider>
            </Row>
            <Row style={{ margin: "5%" }}>
                <TrnxListContext.Provider value={trnxList}>
                    <ShowTransaction />
                </TrnxListContext.Provider>
            </Row>
        </Container>
    );
}

export default Transaction;