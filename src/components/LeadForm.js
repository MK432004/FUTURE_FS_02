import { useState } from "react";
import axios from "axios";

function LeadForm({ fetchLeads }) {

  const [lead, setLead] = useState({
    name: "",
    email: "",
    source: ""
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/leads", lead);

    setLead({ name: "", email: "", source: "" });

    fetchLeads();
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Name"
        value={lead.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={lead.email}
        onChange={handleChange}
      />

      <input
        name="source"
        placeholder="Source"
        value={lead.source}
        onChange={handleChange}
      />

      <button>Add Lead</button>

    </form>
  );
}

export default LeadForm;