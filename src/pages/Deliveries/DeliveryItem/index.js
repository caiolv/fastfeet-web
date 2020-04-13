import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import { TableRow } from './styles';

export default function DeliveryItem() {
  return (
    <TableRow>
      <td>
        <span>#01</span>
      </td>
      <td>
        <span>Ludwig van Beethoven</span>
      </td>
      <td>
        <div>
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="Entregador"
          />
          <span>Gaspar Antunes</span>
        </div>
      </td>
      <td>
        <span>Rio do Sul</span>
      </td>
      <td>
        <span>Santa Catarina</span>
      </td>
      <td>
        <span>Status</span>
      </td>
      <td>
        <button type="button">
          <MdMoreHoriz size={20} color="#C6C6C6" />
        </button>
      </td>
    </TableRow>
  );
}
