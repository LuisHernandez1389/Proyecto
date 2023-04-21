import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function EditableTable() {
  const [data, setData] = useState([
    { id: "8:00 AM  ", lunes: 'Pierna',martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna' },
    { id: "9:00 AM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "10:00 AM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "11:00 AM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "12:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "1:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "2:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "3:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "4:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "5:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "6:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "7:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "8:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "9:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "10:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "11:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    { id: "12:00 PM  ", lunes: 'Pierna', martes:'brazo', miercoles: 'nalga', jueves: 'espalda', viernes:'pierna', sabado: 'brazo', domingo: 'pierna'  },
    
  ]);
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editedCellValues, setEditedCellValues] = useState({});

  const handleCellEdit = (rowIndex, key, value) => {
    const newEditedCellValues = { ...editedCellValues, [`${rowIndex}-${key}`]: value };
    setEditedCellValues(newEditedCellValues);
  };

  const handleSaveClick = () => {
    const newData = [...data];
    Object.keys(editedCellValues).forEach((cellKey) => {
      const [rowIndex, key] = cellKey.split('-');
      newData[rowIndex][key] = editedCellValues[cellKey];
    });
    setData(newData);
    setEditingRowIndex(null);
    setEditedCellValues({});
  };

  return (
    <div class="table">
      <table>
        <thead>
          <tr>
          <th scope="col">Hora</th>
            <th scope="col">miercoles</th>
            <th scope="col">  Martes</th>
            <th scope="col">  Miercoles</th>
            <th scope="col">  Jueves</th>
            <th scope="col">  Viernes</th>
            <th scope="col">  Sabado</th>
            <th scope="col">  Domingo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr  key={row.id}>
              <td >{row.id}</td>
              <td scope="row"
                contentEditable={editingRowIndex === rowIndex}
                onBlur={(e) => handleCellEdit(rowIndex, 'lunes', e.target.innerText)}
              >
                {editingRowIndex === rowIndex ? (
                  <div>{row.lunes}</div>
                ) : (
                  <div onClick={() => setEditingRowIndex(rowIndex)}>{row.lunes}</div>
                )}
              </td>
              <td scope="row"
                contentEditable={editingRowIndex === rowIndex}
                onBlur={(e) => handleCellEdit(rowIndex, 'martes', parseInt(e.target.innerText))}
              >
                {editingRowIndex === rowIndex ? (
                  <div>{row.martes}</div>
                ) : (
                  <div onClick={() => setEditingRowIndex(rowIndex)}>{row.martes}</div>
                )}
              </td>
              
              <td scope="row"
                contentEditable={editingRowIndex === rowIndex}
                onBlur={(e) => handleCellEdit(rowIndex, 'miercoles', e.target.innerText)}
              >
                {editingRowIndex === rowIndex ? (
                  <div>{row.miercoles}</div>
                ) : (
                  <div onClick={() => setEditingRowIndex(rowIndex)}>{row.miercoles}</div>
                )}
              </td>

              <td scope="row"
                contentEditable={editingRowIndex === rowIndex}
                onBlur={(e) => handleCellEdit(rowIndex, 'jueves', e.target.innerText)}
              >
                {editingRowIndex === rowIndex ? (
                  <div>{row.jueves}</div>
                ) : (
                  <div onClick={() => setEditingRowIndex(rowIndex)}>{row.jueves}</div>
                )}
              </td>
              <td scope="row"
                contentEditable={editingRowIndex === rowIndex}
                onBlur={(e) => handleCellEdit(rowIndex, 'viernes', e.target.innerText)}
              >
                {editingRowIndex === rowIndex ? (
                  <div>{row.viernes}</div>
                ) : (
                  <div onClick={() => setEditingRowIndex(rowIndex)}>{row.viernes}</div>
                )}
              </td>

              <td scope="row"
                contentEditable={editingRowIndex === rowIndex}
                onBlur={(e) => handleCellEdit(rowIndex, 'sabado', e.target.innerText)}
              >
                {editingRowIndex === rowIndex ? (
                  <div>{row.sabado}</div>
                ) : (
                  <div onClick={() => setEditingRowIndex(rowIndex)}>{row.sabado}</div>
                )}
              </td>

              <td scope="row"
                contentEditable={editingRowIndex === rowIndex}
                onBlur={(e) => handleCellEdit(rowIndex, 'domingo', e.target.innerText)}
              >
                {editingRowIndex === rowIndex ? (
                  <div>{row.domingo}</div>
                ) : (
                  <div onClick={() => setEditingRowIndex(rowIndex)}>{row.domingo}</div>
                )}
              </td>

              <td>
                {editingRowIndex === rowIndex ? (
                  <button  class="btn btn-primary" onClick={handleSaveClick}>Save</button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingRowIndex !== null ? (
        <button  class="btn btn-primary" onClick={() => setEditingRowIndex(null)}>Cancel</button>
      ) : null}
    </div>
  );
}

export default EditableTable;