import React from "react";

const PatientPanel = () => {
  return (
    <div>
      PatientPanel
      <div className="table-container">
        <table>
          <thead>
            <tr>
            
              <th>Doctor Name</th>
              <th>Date Issued</th>
              <th>Medication Details</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Younes Damouna</td>
              <td>12-11-2023</td>
              <td className="medication">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, soluta nulla? Inventore dolorem eius adipisci ipsa temporibus voluptates dolore dolores doloremque aspernatur atque, similique nesciunt odio repudiandae culpa praesentium quibusdam?</td>
                <td>approved</td>
            </tr>
            <tr>
              <td>Younes Damouna</td>
              <td>12-11-2023</td>
              <td className="medication">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, soluta nulla? Inventore dolorem eius adipisci ipsa temporibus voluptates dolore dolores doloremque aspernatur atque, similique nesciunt odio repudiandae culpa praesentium quibusdam?</td>
                <td>approved</td>
            </tr>
            <tr>
              <td>Younes Damouna</td>
              <td>12-11-2023</td>
              <td className="medication">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, soluta nulla? Inventore dolorem eius adipisci ipsa temporibus voluptates dolore dolores doloremque aspernatur atque, similique nesciunt odio repudiandae culpa praesentium quibusdam?</td>
                <td>approved</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientPanel;
