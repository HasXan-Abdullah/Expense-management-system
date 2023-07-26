import Cards from "../components/Cards"
import Navbar from "../components/Navbar"
import salary from '../assets/icons/salary.png';
import expense from '../assets/icons/expenses.png';
import jar from '../assets/icons/jar.png';
import loan from '../assets/icons/personal.png';
import DataTable from "../components/DataTable";
import DataChart from "../components/DataChart";
const Dashboard = () => {
    const data = {
        labels: [ 'Salary',  'Expenses', 'Loan','Savings'],
        datasets: [
          {
            label: 'Price',
            data: [2, 3, 4,4],
            backgroundColor: [
              '#b6d7a8',
              '#ef968f',
              '#c74c43',
              '#5cc8d7',
            ],
            borderColor: [
              '#b6d7a8',
              '#ef968f',
              '#c74c43',
              '#5cc8d7',
          
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div><Navbar/>
    
   
    <div className="flex-wrap flex justify-evenly w-auto ">
    <Cards icon={salary} title ="Salary" value="$ 98,000"/>
    <Cards icon={expense} title ="Expenses" value="$ 98,000"/>
    <Cards icon={loan} title ="loan" value="$ 98,000"/>
    <Cards icon={jar} title ="Savings" value="$ 98,000"/>

    </div>
    <div className="flex flex-wrap justify-evenly">

    
<div className="w-[50%]">
        <DataTable/>
</div>

<div><DataChart data={data}/></div>
</div>
    </div>
  )
}

export default Dashboard