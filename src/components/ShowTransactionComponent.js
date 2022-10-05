import { useState } from "react";
import { Button ,CardBody,Collapse,Card,Table} from "reactstrap";

const ShowTransaction = ({ trnxList }) => {

    const [toggle, setToggle] = useState(false);

    const displayTransactions = trnxList.map((trnx) => {
        return (
            <tr>
                <td>{trnx.comment}</td>
                <td>{trnx.amount}</td>
                <td>{trnx.trnxType}</td>
            </tr>
        );
    })
    
    return (
        <div>
            <Button color="primary" onClick={() => setToggle((prevState)=> !prevState)}>SHOW TRANSACTION</Button>
            <Collapse isOpen={toggle}>
                <Card>
                    <CardBody>
                        <Table>
                            <tbody>
                                {displayTransactions}
                            </tbody>    
                        </Table>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}

export default ShowTransaction;