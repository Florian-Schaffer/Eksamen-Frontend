import React, {useEffect, useState} from "react";
import loggedIn from "./loggedin";


function Auction({facade}) {


    const[auctions, setAuctions] = useState([]);


    
    return (
        <div>
            <ul className="auction">
                <h1>Auction List</h1>
            </ul>
            <br></br>



            <table className="table">
                <thead>
                    <tr>
                         <th>Auction Name</th> <pre>...</pre>
                         <th>Date</th> <pre>...</pre>
                         <th>Time</th> <pre>...</pre>
                         <th>Location</th>
                     </tr>

                </thead>

                <tbody>
                    {auctions.map((auction)=> <tr key={auction.name}><td>{auction.name}</td></tr>)}
                </tbody>
       
            </table>





        </div>

    )
    


}






export default Auction;