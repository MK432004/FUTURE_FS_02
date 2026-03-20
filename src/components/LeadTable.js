import axios from "axios";

function LeadTable({ leads, fetchLeads }) {

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/leads/${id}`, { status });
    fetchLeads();
  };

  const deleteLead = async (id) => {
    await axios.delete(`http://localhost:5000/api/leads/${id}`);
    fetchLeads();
  };

  return (
    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Source</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {leads.map((lead) => (
          <tr key={lead._id}>

            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.source}</td>

            <td>
              <select
                value={lead.status}
                onChange={(e) =>
                  updateStatus(lead._id, e.target.value)
                }
              >
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="converted">Converted</option>
              </select>
            </td>

            <td>
              <button
                className="delete-btn"
                onClick={() => deleteLead(lead._id)}
              >
                Delete
              </button>
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default LeadTable;


