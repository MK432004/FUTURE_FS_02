import { useEffect, useState } from "react";
import axios from "axios";

import LeadForm from "./components/LeadForm";
import LeadTable from "./components/LeadTable";

function App(){

  const [leads,setLeads] = useState([]);
  const [search,setSearch] = useState("");

  const fetchLeads = async ()=>{
    const res = await axios.get("http://localhost:5000/api/leads");
    setLeads(res.data);
  };

  useEffect(()=>{
    fetchLeads();
  },[]);

  const filteredLeads = leads.filter((lead)=>
    lead.name.toLowerCase().includes(search.toLowerCase())
  );

  return(
    <div className="container">

      <h1>Mini CRM Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">

        <div className="card">
          <h3>Total Leads</h3>
          <p>{leads.length}</p>
        </div>

        <div className="card">
          <h3>Converted Leads</h3>
          <p>
            {leads.filter((lead)=>lead.status==="Converted").length}
          </p>
        </div>

      </div>

      {/* Search */}
      <input
        placeholder="Search lead"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      {/* Add Lead Form */}
      <LeadForm fetchLeads={fetchLeads}/>

      {/* Leads Table */}
      <LeadTable
        leads={filteredLeads}
        fetchLeads={fetchLeads}
      />

    </div>
  );
}

export default App;