import React from "react";
const SchoolCard = ({ delSchoolCard, data, visited, idx, origin }) => {
  /*
  const visited = localStorage.getItem("wdr-schulfinder-visited") || "";

  var videotour = "";
  if (visited != "") {
    alert("Erster Besuch der Seite, hier folgt nun die Video-Erklärung");
    localStorage.setItem("wdr-schulfinder-visited", 1);
    videotour = "Hier ist das video eingebettet";
  }
  */
  var originCls = origin === 1 ? "origin" : "";
  return (
    <>
      <div className={"card " + originCls}>
        <div className="card-header">
          <div
            className={"card-closebutton"}
            onClick={() => delSchoolCard(data.num)}
          >
            Schlie&szlig;en [X]
          </div>
          <div className="card-info">
            <span className="card-header-school-heading">
              Ausgew&auml;hlte Schule:
            </span>
            <h3 className="card-header-school-name">{data.name}</h3>
            <span className="card-header-school-type-county">
              Schulen dieser Art im Kreis: {data.number_to_compare}
            </span>
            <span className="card-header-school-type">
              {data.status}, Standorttyp: {data.typ}
            </span>
            <span className="card-header-school-teacher">
              Lehrer insgesamt: {data.teacher} ,Vollzeit: {data.fulltime}{" "}
              ,Teilzeit: {data.parttime}
            </span>
            <span className="card-header-school-grades">
              Abg&auml;nger:{" "}
              {data.without_grade +
                data.haupt +
                data.haupt_10 +
                data.real +
                data.fachabi +
                data.abi +
                data.changed +
                data.changed_7_9}
            </span>
          </div>
        </div>
        <div className="card-table">
          <table id="step0">
            <tr>
              <td className="td1">
                <table className="card-table">
                  <thead>
                    <tr>
                      <th className="td1">Was?</th>
                      <th className="td2">Schule</th>
                      <th className="td3">Vergleich</th>
                    </tr>
                  </thead>
                </table>

                <table id="step1" className="card-table">
                  <tbody>
                    <tr className="step1">
                      <td className="td1">Sch&uuml;ler</td>
                      <td className="td2">{data.students}</td>
                      <td className="td3">{data.c_students}</td>
                    </tr>
                    <tr className="step1">
                      <td className="td1">Neu in Klasse 5</td>
                      <td className="td2">{data.students}</td>
                      <td className="td3">{data.c_students}</td>
                    </tr>
                  </tbody>
                </table>
                <table id="step1" className="card-table">
                  <tbody>
                    <tr>
                      <td colSpan="3">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
                <table id="step2" className="card-table">
                  <tbody>
                    <tr className="step2">
                      <td className="td1">Ausländer</td>
                      <td className="td2">{data.migration}</td>
                      <td className="td3">{data.c_migration}</td>
                    </tr>
                    <tr className="step2">
                      <td className="td1">Förder</td>
                      <td className="td2">{data.inclusion}</td>
                      <td className="td3">{data.c_inclusion}</td>
                    </tr>
                    <tr className="step2">
                      <td className="td1">Wiederholer</td>
                      <td className="td2">{data.repeat}</td>
                      <td className="td3">{data.c_repeat}</td>
                    </tr>
                  </tbody>
                </table>
                <table id="step1" className="card-table">
                  <tbody>
                    <tr>
                      <td colSpan="3">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
                <table id="step3" className="card-table">
                  <tbody>
                    <tr className="step3">
                      <td colSpan="3">
                        Lehrer insgesamt: {data.teacher},Vollzeit:{" "}
                        {data.fulltime} ,Teilzeit: {data.parttime}
                      </td>
                    </tr>
                    <tr className="step3">
                      <td className="td1">Sch&uuml;er pro Lehrer</td>
                      <td className="td2">{data.students_per_teacher}</td>
                      <td className="td3">{data.c_students_per_teacher}</td>
                    </tr>
                    <tr className="step3">
                      <td className="td1">Sch&uuml;ler pro Vollzeit</td>
                      <td className="td2">{data.students_per_fulltime}</td>
                      <td className="td3">{data.c_students_per_fulltime}</td>
                    </tr>
                  </tbody>
                </table>
                <table id="step1" className="card-table">
                  <tbody>
                    <tr>
                      <td colSpan="3">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
                <table id="step4" className="card-table">
                  <tbody>
                    <tr className="step4">
                      <td colSpan="3">
                        Abg&auml;nger:{" "}
                        {data.without_grade +
                          data.haupt +
                          data.haupt_10 +
                          data.real +
                          data.fachabi +
                          data.abi +
                          data.changed +
                          data.changed_7_9}
                      </td>
                    </tr>
                    <tr className="step4">
                      <td className="td1">ohne Abschluss</td>
                      <td className="td2">{data.without_grade}</td>
                      <td className="td3">{data.c_without_grade}</td>
                    </tr>
                    <tr className="step4">
                      <td className="td1">Haupt</td>
                      <td className="td2">{data.haupt}</td>
                      <td className="td3">{data.c_haupt}</td>
                    </tr>
                    <tr className="step4">
                      <td className="td1">Haupt 10</td>
                      <td className="td2">{data.haupt_10}</td>
                      <td className="td3">{data.c_haupt_10}</td>
                    </tr>
                    <tr className="step4">
                      <td className="td1">Real</td>
                      <td className="td2">{data.real}</td>
                      <td className="td3">{data.c_real}</td>
                    </tr>
                    <tr className="step4">
                      <td className="td1">Fachabi</td>
                      <td className="td2">{data.fachabi}</td>
                      <td className="td3">{data.c_fachabi}</td>
                    </tr>
                    <tr className="step4">
                      <td className="td1">Abitur</td>
                      <td className="td2">{data.abi}</td>
                      <td className="td3">{data.c_abi}</td>
                    </tr>
                    <tr className="step4">
                      <td className="td1">Wechsler</td>
                      <td className="td2">{data.changed}</td>
                      <td className="td3">{data.c_changed}</td>
                    </tr>
                    <tr className="step4">
                      <td className="td1">Wechsler 7-9</td>
                      <td className="td2">{data.changed_7_9}</td>
                      <td className="td3">{data.c_changed__7_9}</td>
                    </tr>
                  </tbody>
                </table>
                
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default SchoolCard;
