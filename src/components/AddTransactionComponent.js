import { useContext, useState } from "react";
import { Button,Modal, ModalBody, ModalFooter, ModalHeader,Input,Form,Row,Col} from "reactstrap";
import { SetExpenseContext, SetIncomeContext } from "./ExpenseTrackerPage";

const TransactionModal = ({ trnxModal, toggleTrnxModal, addTransaction }) => {

    const [formInput, setFormInput] = useState({
        comment: "",
        amount: 0,
        trnxType:"income"
    })

    const setIncomeAmt = useContext(SetIncomeContext);
    const setExpenseAmt = useContext(SetExpenseContext);

    const handleChange = (e) => {
        setFormInput({...formInput, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formInput));
        if (formInput.trnxType === "income") {
            setIncomeAmt((incomeAmt) => incomeAmt + parseInt(formInput.amount));
        } else if (formInput.trnxType === "expense") {
            setExpenseAmt((expenseAmt) => expenseAmt + parseInt(formInput.amount));
        }
        addTransaction(formInput);
        toggleTrnxModal();
    }

    return (
        <>
            <Modal isOpen={trnxModal} toggle={toggleTrnxModal}>
                <Form onSubmit={handleSubmit}>
                    <ModalHeader toggle={toggleTrnxModal}>
                        Add Transaction
                    </ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col>
                                <Row>
                                    <Input type="text" name="comment" id="comment" placeholder="Comment" value={formInput.comment} onChange={handleChange}/>
                                </Row>
                                <Row style={{marginTop:"10px"}}>
                                    <Input type="text" name="amount" id="amount" placeholder="Amount" onChange={handleChange}/>
                                </Row>
                            </Col>
                            <Col style={{margin:"2%"}}>
                                <Row>
                                    <Input type="radio" name="trnxType" id="income" value="income"  onChange={handleChange} />Income
                                </Row>
                                <Row>
                                    <Input type="radio" name="trnxType" id="expense" value="expense" onChange={handleChange}/>Expense
                                </Row>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary">ADD</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}

const AddTransaction = ({addTransaction}) => {

    const [trnxModal, setTrnxModal] = useState(false);

    const toggleTrnxModal = () => {
        setTrnxModal((prevState)=> !prevState)
    }

    return (
        <div>
            <Button color="primary" onClick={() => toggleTrnxModal()}>ADD TRANSACTION</Button>
            <TransactionModal trnxModal={trnxModal} toggleTrnxModal={toggleTrnxModal} addTransaction={addTransaction} />
        </div>
    );
}

export default AddTransaction;