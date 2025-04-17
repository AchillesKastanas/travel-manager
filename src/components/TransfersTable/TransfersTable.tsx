import "./TransfersTable.scss";

const TransfersTable = () => {
  return (
    <div className="transfers-table-wrapper">
      <table className="transfers-table">
        <thead>
          <tr>
            <th style={{ width: "6%" }}>STATUS</th>
            <th style={{ width: "18%" }}>TRAVELER</th>
            <th style={{ width: "18%" }}>ARRIVAL / DEPARTURE</th>
            <th style={{ width: "18%" }}>FROM / TO</th>
            <th style={{ width: "16%" }}>OPPORTUNITIES</th>
            <th style={{ width: "22%" }}></th>
          </tr>
        </thead>
        <tbody>
          <tr className="date-label">
            <td colSpan={6}>Today</td>
          </tr>
          {[...Array(4)].map((_, idx) => (
            <tr className="data-row" key={`today-${idx}`}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
          <tr className="date-label">
            <td colSpan={6}>Tomorrow</td>
          </tr>
          {[...Array(2)].map((_, idx) => (
            <tr className="data-row" key={`tomorrow-${idx}`}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
          <tr className="date-label">
            <td colSpan={6}>Thursday, 3 June</td>
          </tr>
          {[...Array(3)].map((_, idx) => (
            <tr className="data-row" key={`june-${idx}`}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TransfersTable;
