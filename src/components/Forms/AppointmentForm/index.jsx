import React, { useEffect, useState } from "react";
import Button from "../../Button";
import FormGroup from "../../FormGroup";
import { request } from "../../../helpers/apiCalls/getMedications";
import AlertMessage from "../../AlertMessage";

const AppointmentForm = () => {
  const patient_id = 1;
  const [res, setRes] = useState("");
  const [data, setData] = useState({
    doctor_id: "",
    patient_id: patient_id,
    date_time: "",
  });

  const [doctorTimes, setDoctorTimes] = useState([]);
  const handleClickSchudle = async () => {
    setRes({"Status":""})
    try {
      const PostData = await request({
        route: "add/appointment",
        method: "POST",

        body: data,
      });
      setRes(PostData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getDoctorTime = async () => {
      try {
        const responseDoctorTime = await request({
          route: "get/doctorsByAvailability",
        });
        setDoctorTimes(responseDoctorTime);
      } catch (error) {
        console.log(error);
      }
    };
    getDoctorTime();
  }, []);
console.log(res.status);
  return (
    <div className="">
      {doctorTimes.length !== 0 ? (
        <>
          <h2 className="text-center bold">Appointment Details</h2>
          <form action="" method="post">
            <div className="form-group d-flex column">
              {res.status === "Success" ? (
                <AlertMessage message={"Appointment Scheduled"} type={"success"} showing={true} />
              ) : (
                <></>
              )}
              <label htmlFor="appo">Select a Date </label>
              <select
                id="appo"
                onChange={(e) => {
                  setData(JSON.parse(e.target.value));
                }}
              >
                {Array.isArray(doctorTimes)
                  ? doctorTimes?.map((doct,index) => {
                      return (
                        <option key={index}
                          value={JSON.stringify({
                            doctor_id: doct.doctor_id,
                            patient_id: patient_id,
                            date_time: doct.date_time,
                            id: doct.id,
                          })}
                        >
                          {doct.doctor_name} {doct.date_time} 
                        </option>
                      );
                    })
                  : null}
              </select>
            </div>

            <Button
              text={"Schudle"}
              className={"primary-btn text-white bg-primary text-center fs-sm"}
              onClick={handleClickSchudle}
            />
          </form>
        </>
      ) : (
        <div className="d-flex center">No Available Appointments </div>
      )}
    </div>
  );
};

export default AppointmentForm;
