import  { useEffect, useState } from 'react'

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [noFound, setNoDataFound] = useState(false);
 console.log(tickets)
  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donated"));
      if(donatedItems){
        setTickets(donatedItems);
  
      }
      else{
        setNoDataFound("No Data Found")
      }
  }, []);
  return (
    <div>MyTickets</div>
  )
}

export default MyTickets