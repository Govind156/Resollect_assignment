import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioTable = ({ activeFilter, setActiveFilter }) => {
  const [loans, setLoans] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLoans, setSelectedLoans] = useState([]);
  const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    loanNo: true,
    loanType: true,
    borrower: true,
    borrowerAddress: true,
    coBorrowerName: true,
    coBorrowerAddress: true,
    currentDpd: true,
    sanctionAmount: true,
    region: true,
    status: true
  });

  // Sample loan data
  useEffect(() => {
    setLoans([
      {
        loanNo: 'L2BU3247',
        loanType: 'Home Loan',
        borrower: 'Vedika Sachar',
        borrowerAddress: '83 Yogi Ganj, Kanpur-208720',
        coBorrowerName: 'Divit Vora',
        coBorrowerAddress: '24/543, Acharya Path Ghope-422360',
        currentDpd: 91,
        sanctionAmount: '₹ 1934968',
        region: 'West',
        status: 'UP'
      },
      {
        loanNo: 'L2BU3243',
        loanType: 'Car Loan',
        borrower: 'Hrishita Agrawal',
        borrowerAddress: '86/622, Deo Path, Burhanipore 641186',
        coBorrowerName: 'Manak Tak',
        coBorrowerAddress: '5/8 Tafla Road, Sultani Pur Majra 918878',
        currentDpd: 100,
        sanctionAmount: '₹ 1842143',
        region: 'North',
        status: 'MP'
      },
      {
        loanNo: 'L2BU3250',
        loanType: 'Car Loan',
        borrower: 'Priyansh Soman',
        borrowerAddress: 'H.No. 152 Andha Street Amritsar-417782',
        coBorrowerName: 'Zenia Dara',
        coBorrowerAddress: 'H.No. 42, Srivastava Marg, Junagadh-361124',
        currentDpd: 100,
        sanctionAmount: '₹ 4537889',
        region: 'East',
        status: 'TS'
      },
      {
        loanNo: 'L2BU3248',
        loanType: 'Home Loan',
        borrower: 'Priyansh Chanda',
        borrowerAddress: '24, Ray Chowk Dantulal-809332',
        coBorrowerName: 'Zain Ghosh',
        coBorrowerAddress: 'H.No. 59, Dugar Street Kolhapur-543900',
        currentDpd: 100,
        sanctionAmount: '₹ 2681712',
        region: 'West',
        status: 'AP'
      },
      {
        loanNo: 'L2BU3265',
        loanType: 'Personal Loan',
        borrower: 'Vivaan Virk',
        borrowerAddress: 'H.No. 653 Dada Ganj Khairatpur 279923',
        coBorrowerName: 'Elakshi Chahal',
        coBorrowerAddress: '16/45 Divan Road Jabalpur 962051',
        currentDpd: 76,
        sanctionAmount: '₹ 3863514',
        region: 'West',
        status: 'MH'
      },
      {
        loanNo: 'L2BU3266',
        loanType: 'Personal Loan',
        borrower: 'Nirvi Sahni',
        borrowerAddress: '41/42, Dua, Amoroha-741195',
        coBorrowerName: 'Dhaksh Lata',
        coBorrowerAddress: '48/41, Garde Path Uluberia 709956',
        currentDpd: 75,
        sanctionAmount: '₹ 2687368',
        region: 'East',
        status: 'WB'
      },
      {
        loanNo: 'L2BU3267',
        loanType: 'Personal Loan',
        borrower: 'Samara Jain',
        borrowerAddress: '79/10 Barad Zila Thoothukudi 606938',
        coBorrowerName: 'Chirag Tripathi',
        coBorrowerAddress: '23/11 Ravel Street, Panchkula-508035',
        currentDpd: 76,
        sanctionAmount: '₹ 3617146',
        region: 'South',
        status: 'GJ'
      },
      // 10 more dummy rows
      {
        loanNo: 'L2BU3270',
        loanType: 'Home Loan',
        borrower: 'Aanya Sharma',
        borrowerAddress: '12/A, Mayur Vihar, Delhi-110091',
        coBorrowerName: 'Rajesh Sharma',
        coBorrowerAddress: '12/A, Mayur Vihar, Delhi-110091',
        currentDpd: 85,
        sanctionAmount: '₹ 4250000',
        region: 'North',
        status: 'DL'
      },
      {
        loanNo: 'L2BU3271',
        loanType: 'Car Loan',
        borrower: 'Vihaan Kapoor',
        borrowerAddress: '45, Jubilee Hills, Hyderabad-500033',
        coBorrowerName: 'Kavya Kapoor',
        coBorrowerAddress: '45, Jubilee Hills, Hyderabad-500033',
        currentDpd: 120,
        sanctionAmount: '₹ 1450000',
        region: 'South',
        status: 'TG'
      },
      {
        loanNo: 'L2BU3272',
        loanType: 'Personal Loan',
        borrower: 'Arjun Malhotra',
        borrowerAddress: '78, Park Street, Kolkata-700016',
        coBorrowerName: 'Neha Malhotra',
        coBorrowerAddress: '78, Park Street, Kolkata-700016',
        currentDpd: 60,
        sanctionAmount: '₹ 850000',
        region: 'East',
        status: 'WB'
      },
      {
        loanNo: 'L2BU3273',
        loanType: 'Home Loan',
        borrower: 'Ishaan Patel',
        borrowerAddress: '23, Marine Drive, Mumbai-400020',
        coBorrowerName: 'Riya Patel',
        coBorrowerAddress: '23, Marine Drive, Mumbai-400020',
        currentDpd: 95,
        sanctionAmount: '₹ 7500000',
        region: 'West',
        status: 'MH'
      },
      {
        loanNo: 'L2BU3274',
        loanType: 'Car Loan',
        borrower: 'Kabir Singh',
        borrowerAddress: '56, Model Town, Ludhiana-141002',
        coBorrowerName: 'Simran Singh',
        coBorrowerAddress: '56, Model Town, Ludhiana-141002',
        currentDpd: 110,
        sanctionAmount: '₹ 1750000',
        region: 'North',
        status: 'PB'
      },
      {
        loanNo: 'L2BU3275',
        loanType: 'Personal Loan',
        borrower: 'Aditi Verma',
        borrowerAddress: '34, Civil Lines, Allahabad-211001',
        coBorrowerName: 'Sanjay Verma',
        coBorrowerAddress: '34, Civil Lines, Allahabad-211001',
        currentDpd: 70,
        sanctionAmount: '₹ 920000',
        region: 'North',
        status: 'UP'
      },
      {
        loanNo: 'L2BU3276',
        loanType: 'Home Loan',
        borrower: 'Advait Menon',
        borrowerAddress: '12, MG Road, Bangalore-560001',
        coBorrowerName: 'Meera Menon',
        coBorrowerAddress: '12, MG Road, Bangalore-560001',
        currentDpd: 90,
        sanctionAmount: '₹ 6850000',
        region: 'South',
        status: 'KA'
      },
      {
        loanNo: 'L2BU3277',
        loanType: 'Car Loan',
        borrower: 'Dhruv Reddy',
        borrowerAddress: '78, Anna Nagar, Chennai-600040',
        coBorrowerName: 'Ananya Reddy',
        coBorrowerAddress: '78, Anna Nagar, Chennai-600040',
        currentDpd: 100,
        sanctionAmount: '₹ 1250000',
        region: 'South',
        status: 'TN'
      },
      {
        loanNo: 'L2BU3278',
        loanType: 'Personal Loan',
        borrower: 'Reyansh Joshi',
        borrowerAddress: '45, Aundh, Pune-411007',
        coBorrowerName: 'Tanya Joshi',
        coBorrowerAddress: '45, Aundh, Pune-411007',
        currentDpd: 65,
        sanctionAmount: '₹ 780000',
        region: 'West',
        status: 'MH'
      },
      {
        loanNo: 'L2BU3279',
        loanType: 'Home Loan',
        borrower: 'Aarav Bansal',
        borrowerAddress: '23, Vaishali, Ghaziabad-201012',
        coBorrowerName: 'Myra Bansal',
        coBorrowerAddress: '23, Vaishali, Ghaziabad-201012',
        currentDpd: 80,
        sanctionAmount: '₹ 5250000',
        region: 'North',
        status: 'UP'
      }
    ]);
  }, []);

  const filters = [
    'All',
    'Pre Sarfaesi',
    'NPA',
    '13(3) Responses',
    'Symbolic Possession',
    'DM Order',
    'Physical Possessions',
    'Auctions'
  ];

  const allColumns = [
    { id: 'loanNo', label: 'Loan No.' },
    { id: 'loanType', label: 'Loan Type' },
    { id: 'borrower', label: 'Borrower' },
    { id: 'borrowerAddress', label: 'Borrower Address' },
    { id: 'coBorrowerName', label: 'Co-Borrower 1 Name' },
    { id: 'coBorrowerAddress', label: 'Co-Borrower 1 Address' },
    { id: 'currentDpd', label: 'Current DPD' },
    { id: 'sanctionAmount', label: 'Sanction Amount' },
    { id: 'region', label: 'Region' },
    { id: 'status', label: 'Status' }
  ];

  const toggleColumn = (columnId) => {
    setVisibleColumns(prev => ({
      ...prev,
      [columnId]: !prev[columnId]
    }));
  };

  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'selection',
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedLoans.includes(row.original.loanNo)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedLoans([...selectedLoans, row.original.loanNo]);
              } else {
                setSelectedLoans(selectedLoans.filter(id => id !== row.original.loanNo));
              }
            }}
          />
        ),
        disableSortBy: true
      },
      ...(visibleColumns.loanNo ? [{
        Header: 'Loan No.',
        accessor: 'loanNo',
        Cell: ({ value }) => (
          <span className="text-blue-500 hover:underline cursor-pointer">{value}</span>
        )
      }] : []),
      ...(visibleColumns.loanType ? [{
        Header: 'Loan Type',
        accessor: 'loanType',
      }] : []),
      ...(visibleColumns.borrower ? [{
        Header: 'Borrower',
        accessor: 'borrower',
      }] : []),
      ...(visibleColumns.borrowerAddress ? [{
        Header: 'Borrower Address',
        accessor: 'borrowerAddress',
      }] : []),
      ...(visibleColumns.coBorrowerName ? [{
        Header: 'Co-Borrower 1 Name',
        accessor: 'coBorrowerName',
      }] : []),
      ...(visibleColumns.coBorrowerAddress ? [{
        Header: 'Co-Borrower 1 Address',
        accessor: 'coBorrowerAddress',
      }] : []),
      ...(visibleColumns.currentDpd ? [{
        Header: 'Current DPD',
        accessor: 'currentDpd',
      }] : []),
      ...(visibleColumns.sanctionAmount ? [{
        Header: 'Sanction Amount',
        accessor: 'sanctionAmount',
      }] : []),
      ...(visibleColumns.region ? [{
        Header: 'Region',
        accessor: 'region',
      }] : []),
      ...(visibleColumns.status ? [{
        Header: 'Status',
        accessor: 'status',
      }] : []),
    ],
    [selectedLoans, visibleColumns]
  );

  const filteredLoans = useMemo(() => {
    return loans.filter(loan =>
      loan.loanNo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [loans, searchTerm]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data: filteredLoans,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
      
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b pb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-md text-sm border transition-colors ${
              activeFilter === filter
                ? 'bg-primary text-white border-primary'
                : 'text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      {/* Search and actions */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="w-full md:w-96">
          <input
            type="text"
            placeholder="Search Loan Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <div className="relative">
            <button 
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
              onClick={() => setShowColumnsDropdown(!showColumnsDropdown)}
            >
              <span>Select Columns</span>
              <svg className={`w-4 h-4 ml-2 transition-transform ${showColumnsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <AnimatePresence>
              {showColumnsDropdown && (
                <motion.div 
                  className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="p-2">
                    {allColumns.map(column => (
                      <div key={column.id} className="flex items-center px-3 py-2 hover:bg-gray-50">
                        <input
                          type="checkbox"
                          id={`column-${column.id}`}
                          checked={visibleColumns[column.id]}
                          onChange={() => toggleColumn(column.id)}
                          className="mr-2"
                        />
                        <label htmlFor={`column-${column.id}`} className="cursor-pointer w-full">
                          {column.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="ml-2">
            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <span>More Filters</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Number of selected loans */}
      <div className="text-right mb-4 text-sm text-gray-600">
        {selectedLoans.length} loans selected
      </div>
      
      {/* Table Container - flexGrow to take remaining space */}
      <div className="flex-grow overflow-hidden">
        {/* Horizontal scrolling container */}
        <div className="overflow-x-auto h-full">
          {/* Vertical scrolling container */}
          <div className="overflow-y-auto h-full">
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200 table-fixed">
              <thead className="bg-gray-50 sticky top-0 z-10">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                      >
                        <div className="flex items-center">
                          {column.render('Header')}
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                              </svg>
                            )
                          ) : (
                            ''
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <motion.tr
                      {...row.getRowProps()}
                      whileHover={{ backgroundColor: 'rgba(243, 244, 246, 0.7)' }}
                    >
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="border-t border-gray-200 py-3 px-2 mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Total {filteredLoans.length} results
        </div>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`px-3 py-1 rounded border ${
              !canPreviousPage
                ? 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'
                : 'border-blue-500 text-blue-500 hover:bg-blue-50'
            }`}
          >
            Previous
          </button>
          <span className="text-gray-700 text-sm">
            Page{' '}
            <span className="font-medium">{pageIndex + 1}</span> of{' '}
            <span className="font-medium">{pageOptions.length}</span>
          </span>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`px-3 py-1 rounded border ${
              !canNextPage
                ? 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'
                : 'border-blue-500 text-blue-500 hover:bg-blue-50'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTable; 