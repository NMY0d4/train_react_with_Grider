import { Fragment } from 'react';

function Table({ data, config, keyFn }) {
  const renderedHead = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return (
      <th key={column.label} className='border-b-2'>
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => (
    <tr className='border-b' key={keyFn(rowData)}>
      {config.map((el) => (
        <td className='p-3' key={el.label}>
          {el.render(rowData)}
        </td>
      ))}
    </tr>
  ));

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHead}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
