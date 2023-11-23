import React from "react";
import { Row, Accordion } from "react-bootstrap";
import { question } from "../data";


const QAList = ({ data , deleteOneItem }) => {
  const localData = JSON.parse(localStorage.getItem("items"));
  const onDeleteItem = (ID) => {
    if(localStorage.getItem("items") != null){
      const idx = question.findIndex((e)=> e.id === ID);
      question.splice(idx, 1);
      deleteOneItem(question);
    }
  }
  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items") != null ? (
          localData.map((e, index) => {
            return (
              <Accordion.Item key={index} eventKey={e.id}>
                <Accordion.Header>
                  <div className="m-auto"> {e.q} </div>
                </Accordion.Header>

                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline "> {e.a}</div>
                  <button onClick={()=>{onDeleteItem(e.id)}} className="btnColor mx-5">مسح</button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5 ">لا يوجد اسئلة الان</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAList;
