import React, { useState } from 'react';
import Modal from 'react-modal';

// Estilos personalizados del modal
const customModalStyles = {
    content: {
        width: '500px',
        height: '500px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const convertToISODate = (date) => {
  // Divide la fecha en partes (día, mes y año) usando '/' como separador
  const [day, month, year] = date.split('/');

  // Retorna la fecha en formato ISO 8601 (YYYY-MM-DD)
  return `${year}-${month}-${day}`;
};


function TransactionsTableItem(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(props.isChecked);
    const [personDetails, setPersonDetails] = useState({
        name: props.name,
        date: convertToISODate(props.date),
        status: props.status,
        amount: props.amount,
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsCheckboxChecked(false);
        props.handleClick({ target: { checked: false, id: props.id } });
    };

    const handleCheckboxChange = (event) => {
        setIsCheckboxChecked(event.target.checked);
        if (event.target.checked) {
            openModal();
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const convertToDisplayDate = (date) => {
      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    };
  

    const handleSaveChanges = () => {
      // Convierte la fecha a formato DD/MM/YYYY antes de pasarla a props.onEdit
      const updatedDetails = {
          ...personDetails,
          date: convertToDisplayDate(personDetails.date),
      };
  
      // Llama a la función de callback para guardar los cambios
      props.onEdit(props.id, updatedDetails);
  
      // Cierra el modal
      closeModal();
    };
  

    const statusColor = (status) => {
        switch (status) {
            case 'Completada':
                return 'bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400';
            case 'Cancelada':
                return 'bg-rose-100 dark:bg-rose-500/30 text-rose-500 dark:text-rose-400';
            default:
                return 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400';
        }
    };

    const amountColor = (amount) => {
        if (amount.charAt(0) === '+') {
            return 'text-emerald-500';
        }
        return 'text-slate-800 dark:text-slate-300';
    };

    return (
        <>
            <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                    <div className="flex items-center">
                        <input
                            id={props.id}
                            className="form-checkbox"
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            checked={isCheckboxChecked}
                        />
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                        <img
                            className="rounded-full"
                            src={props.image}
                            width="36"
                            height="36"
                            alt={props.name}
                        />
                        <div className="font-medium text-slate-800 dark:text-slate-100 ml-2">
                            {props.name}
                        </div>
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div>{props.date}</div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div>
                        <span className={`text-xs inline-flex rounded-full text-center px-2.5 py-1 ${statusColor(props.status)}`}>
                            {props.status}
                        </span>
                    </div>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className={`text-right font-medium ${amountColor(props.amount)}`}>
                        {props.amount}
                    </div>
                </td>
            </tr>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Editar cita"
                style={customModalStyles}
            >
                <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                    Editar detalles de la cita ✨
                </h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-white mb-2">
                            Nombre:
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={personDetails.name}
                            onChange={handleInputChange}
                            className="form-input w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="date" className="block text-sm font-medium text-slate-700 dark:text-white mb-2">
                            Fecha:
                        </label>
                        <input
                            id="date"
                            type="date"
                            name="date"
                            value={personDetails.date}
                            onChange={handleInputChange}
                            className="form-input w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="status" className="block text-sm font-medium text-slate-700 dark:text-white mb-2">
                            Estado:
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={personDetails.status}
                            onChange={handleInputChange}
                            className="form-select w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:text-white"
                        >
                            <option value="Pendiente">Pendiente</option>
                            <option value="Completada">Completada</option>
                            <option value="Cancelada">Cancelada</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-sm font-medium text-slate-700 dark:text-white mb-2">
                            Examen:
                        </label>
                        <input
                            id="amount"
                            type="text"
                            name="amount"
                            value={personDetails.amount}
                            onChange={handleInputChange}
                            className="form-input w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                          <button
                              type="button"
                              onClick={handleSaveChanges}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-500 text-white">
                            Guardar cambios
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-white border border-slate-300 dark:bg-slate-800 dark:text-white"
                        > Cerrar</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default TransactionsTableItem;
