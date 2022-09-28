import { useState } from "react";
import { Button,Modal, ModalBody, ModalFooter, ModalHeader,Input,Form,Row,Col} from "reactstrap";

const TransactionModal = (props) => {

    const [formInput, setFormInput] = useState({
        comment: "",
        amount: 0,
        trnxType:"income"
    })

    const handleChange = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setFormInput({...formInput, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formInput));
        if (formInput.trnxType === "income") {
            props.setIncomeAmt((incomeAmt) => incomeAmt + parseInt(formInput.amount));
        } else if (formInput.trnxType === "expense") {
            props.setExpenseAmt((expenseAmt) => expenseAmt + parseInt(formInput.amount));
        }
        props.toggleTrnxModal();
    }

    return (
        <>
            <Modal isOpen={props.trnxModal} toggle={props.toggleTrnxModal}>
                <Form onSubmit={handleSubmit}>
                    <ModalHeader toggle={props.toggleTrnxModal}>
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

const AddTransaction = (props) => {

    const [trnxModal, setTrnxModal] = useState(false);

    const toggleTrnxModal = () => {
        setTrnxModal((prevState)=> !prevState)
    }

    return (
        <div>
            <Button color="primary" onClick={() => toggleTrnxModal()}>ADD TRANSACTION</Button>
            <TransactionModal trnxModal={trnxModal} toggleTrnxModal={toggleTrnxModal}
                            setIncomeAmt={props.setIncomeAmt} setExpenseAmt={props.setExpenseAmt}/>
        </div>
    );
}

export default AddTransaction;