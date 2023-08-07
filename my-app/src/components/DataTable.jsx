import   { useState } from 'react';

const DataTable = () => {
  // Sample data
  const [data, setData] = useState([
    { expense: 'Apple MacBook Pro 17"', category: 'Laptop', date: '2023-07-26', cost: 2999 },
    { expense: 'Microsoft Surface Pro', category: 'Laptop PC', date: '2023-07-25', cost: 1999 },
    { expense: 'Magic Mouse 2', category: 'Accessories', date: '2023-07-24', cost: 99 },
    { expense: 'Apple MacBook Pro 17"', category: 'Laptop', date: '2023-07-26', cost: 2999 },
    { expense: 'Microsoft Surface Pro', category: 'Laptop PC', date: '2023-07-25', cost: 1999 },
    { expense: 'Magic Mouse 2', category: 'Accessories', date: '2023-07-24', cost: 99 },
    { expense: 'Apple MacBook Pro 17"', category: 'Laptop', date: '2023-07-26', cost: 2999 },
    { expense: 'Microsoft Surface Pro', category: 'Laptop PC', date: '2023-07-25', cost: 1999 },
    { expense: 'Magic Mouse 2', category: 'Accessories', date: '2023-07-24', cost: 99 },
    { expense: 'Apple MacBook Pro 17"', category: 'Laptop', date: '2023-07-26', cost: 2999 },
    { expense: 'Microsoft Surface Pro', category: 'Laptop PC', date: '2023-07-25', cost: 1999 },
    { expense: 'Magic Mouse 2', category: 'Accessories', date: '2023-07-24', cost: 99 },
  ]);

  // State to keep track of the sort order for Price and Date
  const [sortOrderPrice, setSortOrderPrice] = useState('asc');
  const [sortOrderDate, setSortOrderDate] = useState('asc');

  // Function to toggle the sort order when Price header is clicked
  const handleSortPrice = () => {
    const sortedData = [...data];
    if (sortOrderPrice === 'asc') {
      sortedData.sort((a, b) => a.cost - b.cost);
      setSortOrderPrice('desc');
    } else {
      sortedData.sort((a, b) => b.cost - a.cost);
      setSortOrderPrice('asc');
    }
    setData(sortedData);
  };

  // Function to toggle the sort order when Date header is clicked
  const handleSortDate = () => {
    const sortedData = [...data];
    if (sortOrderDate === 'asc') {
      sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
      setSortOrderDate('desc');
    } else {
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
      setSortOrderDate('asc');
    }
    setData(sortedData);
  };

  return (
<div className="relative overflow-scroll h-3/4  no-scrollbar shadow-md sm:rounded-lg" >
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700  uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              SR No
            </th>
            
            <th scope="col" className="px-6 py-3">
              Expense
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3 cursor-pointer" onClick={handleSortDate}>
              Date
            </th>
            <th scope="col" className="px-6 py-3 cursor-pointer" onClick={handleSortPrice}>
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody >
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4">{index + 1}</td>
           
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {item.expense}
              </td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">${item.cost}</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="m-1  font-medium text-blue-600 hover:underline">
                  Edit
                </a>
                <a href="#" className="m-1 font-medium text-blue-600 hover:underline">
                  Edit
                </a>
                <a href="#" className=" m-1 font-medium text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     </div>
  );
};

export default DataTable;
