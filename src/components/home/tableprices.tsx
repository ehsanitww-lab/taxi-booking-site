import React from "react";
import "../media.css";

const TablePrices: React.FC = () => {
  return (
    <section className="tarieven-section">
      <div className="tarieven-box">
        <h2 className="tarieven-title">Vaste Tarieven Vanuit Den Haag</h2>

        <table>
          <thead>
            <tr>
              <th>Destination</th>
              <th>1–4 persoon</th>
              <th>1–5 persoon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Taxi Rotterdam The Hague Airport</td>
              <td>€50,–</td>
              <td>€60,–</td>
            </tr>
            <tr>
              <td>Taxi Schiphol Airport</td>
              <td>€85,–</td>
              <td>€95,–</td>
            </tr>
            <tr>
              <td>Taxi Eindhoven Airport</td>
              <td>€220,–</td>
              <td>€250,–</td>
            </tr>
            <tr>
              <td>Taxi Lelystad Airport</td>
              <td>€220,–</td>
              <td>€250,–</td>
            </tr>
          </tbody>
        </table>

        <div className="btn-wrapper">
          <button className="reserve-btn">Direct Reserveren</button>
        </div>
      </div>
    </section>
  );
};

export default TablePrices;
