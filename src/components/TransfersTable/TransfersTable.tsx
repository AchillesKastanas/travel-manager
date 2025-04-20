import TransfersGroup from "@components/TransfersGroup/TransfersGroup";

import "./TransfersTable.scss";

const TransfersTable = () => {
  const groupedData = [
    { label: "Today", count: 4, key: "today" },
    { label: "Tomorrow", count: 2, key: "tomorrow" },
    { label: "Thursday, 3 June", count: 3, key: "june" },
  ];

  return (
    <div className="transfers-table-wrapper">
      <table className="transfers-table">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>STATUS</th>
            <th style={{ width: "18%" }}>TRAVELLER</th>
            <th style={{ width: "18%" }}>ARRIVAL / DEPARTURE</th>
            <th style={{ width: "18%" }}>FROM / TO</th>
            <th style={{ width: "16%" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                OPPORTUNITIES
                <div className="new-label">New</div>
              </div>
            </th>
            <th style={{ width: "22%" }}></th>
          </tr>
        </thead>
        <tbody>
          {groupedData.map(({ label, count, key }) => (
            <TransfersGroup
              key={key}
              label={label}
              count={count}
              groupKey={key}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransfersTable;
