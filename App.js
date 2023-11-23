import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const notify = (message,type) =>
  {
    if(type === "Error") toast.error(message);
    else toast.success(message);
  }
  const [data, setData] = useState(question);
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify(' تمت الاضافة بنجاح',"Success");
  };
  
  //to delete all the data items
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify(' تم حذف جميع العناصر بنجاح',"Success");
  };

  //to rerender the array data
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    notify(' تم حذف السؤال بنجاح',"Success");
    if(items.length <=0) deleteAllItems();
  };
  return (
    <div className="font colorBody text-center ">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="py-2 text-center fs-3"> اسئلة و اجوبة شائعة </div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify}/>
            <QAList data={data} deleteOneItem={deleteOneItem}  />
            {localStorage.getItem("items") != null ? (
              <button onClick={deleteAllItems} className="btnColor w-100 my-3">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default App;
