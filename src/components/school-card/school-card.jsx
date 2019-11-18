import React from "react";
 
const SchoolCard = ({ delSchoolCard, data, idx }) => {
  return ( 
    <>
    <div className="card-header">
      <div className={"card-closebutton"} onClick={() =>delSchoolCard(data.num)}>CLOSE</div>
      <div className="card-info">
        Schulen dieser Art im Kreis: {data.number_to_compare}<br />
        {data.status}, Standorttyp: {data.typ}<br />
        Lehrer insgesamt: {data.teacher},Vollzeit: {data.fulltime} ,Teilzeit: {data.parttime}<br />
        Abg&auml;nger: {data.without_grade+data.haupt+data.haupt_10+data.real+data.fachabi+data.abi+data.changed+data.changed_7_9}
      </div>
    </div>
    <div className={"card card-" + idx}> 
        <table>
          <thead> 
            <tr>
              <th>Was?</th>
              <th>Schule</th>
              <th>Vergleich</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sch&uuml;ler</td>
              <td>{data.students}</td>
              <td>{data.c_students}</td>
            </tr>
            <tr>
              <td>Neu in Klasse 5</td>
              <td>{data.students}</td>
              <td>{data.c_students}</td>
            </tr>
            <tr>
              <td colSpan = "3"></td>
            </tr>
            <tr>
              <td>Ausländer</td>
              <td>{data.migration}</td>
              <td>{data.c_migration}</td>
            </tr>
            <tr>
              <td>Förder</td>
              <td>{data.inclusion}</td>
              <td>{data.c_inclusion}</td>
            </tr>
            <tr>
              <td>Wiederholer</td>
              <td>{data.repeat}</td>
              <td>{data.c_repeat}</td>
            </tr>
            <tr>
              <td colSpan = "3"></td>
            </tr>
            <tr className="tr_gray">
              <td colSpan="3">Lehrer insgesamt: {data.teacher},Vollzeit: {data.fulltime} ,Teilzeit: {data.parttime}</td>
            </tr>
            <tr>
              <td>Sch&uuml:er pro Lehrer</td>
              <td>{data.students_per_teacher}</td>
              <td>{data.c_students_per_teacher}</td>
            </tr>
            <tr>
              <td>Sch&uuml;ler pro Vollzeit</td>
              <td>{data.students_per_fulltime}</td>
              <td>{data.c_students_per_fulltime}</td>
            </tr>
            <tr>
              <td colSpan = "3"></td>
            </tr>
            <tr className="tr_gray">
              <td colSpan="3">Abg&auml;nger: {data.without_grade+data.haupt+data.haupt_10+data.real+data.fachabi+data.abi+data.changed+data.changed_7_9}</td>
            </tr>
            <tr>
              <td>ohne Abschluss</td>
              <td>{data.without_grade}</td>
              <td>{data.c_without_grade}</td>
            </tr>
            <tr>
              <td>Haupt</td>
              <td>{data.haupt}</td>
              <td>{data.c_haupt}</td>
            </tr>
            <tr>
              <td>Haupt 10</td>
              <td>{data.haupt_10}</td>
              <td>{data.c_haupt_10}</td>
            </tr>
            <tr>
              <td>Real</td>
              <td>{data.real}</td>
              <td>{data.c_real}</td>
            </tr>
            <tr>
              <td>Fachabi</td>
              <td>{data.fachabi}</td>
              <td>{data.c_fachabi}</td>
            </tr>
            <tr>
              <td>Abitur</td>
              <td>{data.abi}</td>
              <td>{data.c_abi}</td>
            </tr>
            <tr>
              <td>Wechsler</td>
              <td>{data.changed}</td>
              <td>{data.c_changed}</td>
            </tr>
            <tr>
              <td>Wechsler 7-9</td>
              <td>{data.changed_7_9}</td>
              <td>{data.c_changed__7_9}</td>
            </tr>
          </tbody>
        </table>

    </div>
    </>
  );
};

export default SchoolCard;
