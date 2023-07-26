import Cards from "../components/Cards"
import Navbar from "../components/Navbar"
import salary from '../assets/icons/salary.png';
import expense from '../assets/icons/expenses.png';
import jar from '../assets/icons/jar.png';
import loan from '../assets/icons/personal.png';
import DataTable from "../components/DataTable";
import DataChart from "../components/DataChart";

import { Button, Input, Modal } from 'antd';
import { useState } from 'react';
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    const data = {
        labels: [ 'Salary',  'Expenses', 'Loan','Savings'],
        datasets: [
          {
            label: 'Price',
            data: [2, 3, 4,4],
            backgroundColor: [
              '#b5e745',
              '#ffd966',
              '#c74c43',
              '#5cc8d7',
            ],
            borderColor: [
              '#b5e745',
              '#ffd966',
              '#c74c43',
              '#5cc8d7',
          
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div><Navbar/>
    
    <div>
    <Button className="ml-[4%] mb-3" onClick={showModal}>
        Add Salary
      </Button>
      <Modal title="Add Current Salary"  footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Input type="number" className="p-2 mb-3"/>
      <div className=" flex">
      <Button>Submit</Button>
      </div>
     
      </Modal>
    </div>
   
    <div className="flex-wrap flex justify-evenly w-auto ">
    <Cards icon={salary} title ="Salary" value="$ 98,000"/>
    <Cards icon={expense} title ="Expenses" value="$ 98,000"/>
    <Cards icon={loan} title ="loan" value="$ 98,000"/>
    <Cards icon={jar} title ="Savings" value="$ 98,000"/>

    </div>
    <div className="flex flex-wrap justify-evenly mt-20">

    
<div className="w-[50%] min-w-[350px]">
        <DataTable/>
</div>

<div><DataChart data={data}/></div>
</div>
    </div>
  )
}

export default Dashboard
