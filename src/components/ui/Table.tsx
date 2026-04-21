interface TableProps {
  children: React.ReactNode;
}

interface TableComponent extends React.FC<TableProps> {
  Header: React.FC<TableProps>;
  Body: React.FC<TableProps>;
  Row: React.FC<TableProps>;
}

const Table: TableComponent = ({ children }) => {
  return (
    <div className="border border-snow/20 overflow-auto text-sm rounded">
      <table className="w-full min-w-200">{children}</table>
    </div>
  );
};

const TableHeader: React.FC<TableProps> = ({ children }) => {
  return (
    <thead>
      <tr className="border-b border-snow/20 text-nowrap">{children}</tr>
    </thead>
  );
};

const TableBody: React.FC<TableProps> = ({ children }) => {
  return <tbody className="text-center text-xs table-body">{children}</tbody>;
};

const TableRow: React.FC<TableProps> = ({ children }) => {
  return (
    <tr className="border-b border-snow/20 last:border-none text-nowrap">
      {children}
    </tr>
  );
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;

export default Table;
