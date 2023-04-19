function Table({ data, config }) {
  const renderedRows = data.map((fruit) => (
    <tr className='border-b' key={fruit.name}>
      {config.map((el) => (
        <td key={el.label} className='p-3'>
          {el.render(fruit)}
        </td>
      ))}
    </tr>
  ));

  const renderedHead = config.map((column) => (
    <th key={column.label} className='border-b-2'>
      {column.label}
    </th>
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
