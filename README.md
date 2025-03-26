# Resollect Financial Portfolio Management Dashboard

A React-based financial portfolio management dashboard with loan management and document upload functionality. This project replicates the Resollect interface for managing loan portfolios with modern UI components and responsive design.


![Dashboard](https://github.com/user-attachments/assets/b5bfde9c-e83c-4e71-a39a-c472096135aa)

![Upload image](https://github.com/user-attachments/assets/0acf6027-9f53-49c2-865c-06763a115b22)

![Mobile view](https://github.com/user-attachments/assets/3df3bf90-4ba6-4f3c-943c-bfc70c9a78e5)


## 📌 Features

### Layout & Navigation
- **Sidebar Menu** with sections:
  - Dashboard
  - Portfolio (active view)
  - Notifications
  - Notices
  - Auction
  - Data Upload
  - Control Panel
  - User Management
  - Permissions
- **Header** with user profile dropdown
- **Responsive Design** for different screen sizes

### Portfolio Table Features
- **Search Functionality** for loan numbers
- **Column Selection** dropdown to hide/show specific columns
- **Filter Tabs**: All, Pre-Sarfaesi, NPA, 13(3) Responses, Symbolic Possession, DM Order, Physical Possessions, Auctions
- **Sortable Columns** with ascending/descending toggle
- **Pagination** with 10 entries per page
- **Multi-select** functionality for batch operations
- **Table Footer** showing total records and page navigation

### Document Upload
- **Modal Interface** for document uploads
- **Form Validation** to ensure file types match document types
- **File Selection** with preview of selected file name
- **Helpful Error Messages** for mismatched file types
- **Document Categories** with appropriate type validation

## 🛠️ Technologies Used

- **React.js** (v18.2.0) - Frontend library
- **React Table** (v7.8.0) - Table management with sorting and pagination
- **Framer Motion** (v10.12.16) - Animations for enhanced UX
- **Tailwind CSS** (v3.3.2) - Utility-first styling

## 📋 Project Structure

```
src/
  ├── components/
  │   ├── Header.js - Top navigation bar with user profile
  │   ├── Sidebar.js - Navigation sidebar with menu options
  │   ├── PortfolioTable.js - Main data table with pagination
  │   └── UploadDocumentModal.js - Document upload modal
  ├── App.js - Main component and layout structure
  ├── App.css - Global styles
  ├── index.js - Application entry point
  └── index.css - Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/username/resollect_assignment.git
cd resollect_assignment
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open your browser to `http://localhost:3000`

## 🖼️ Key UI Components

### Portfolio Table
- Displays loan information with sortable columns
- Allows horizontal scrolling for wide data tables
- Vertical scrolling confined to table area only
- Supports column visibility toggling
- Pagination (10 entries per page)

### Document Upload Modal
- Slides in from the right side
- Validates document types against file types
- Provides helpful error messages
- Disables submission for invalid entries

## 💻 Implementation Details

### File Type Validation
The application validates uploaded files against the selected document type:
- PDF: .pdf files
- Image: .jpg, .jpeg, .png, .gif, .webp
- Text Document: .txt, .doc, .docx, .rtf
- Spreadsheet: .xls, .xlsx, .csv

### Table Pagination
Table pagination is handled through React Table's `usePagination` hook, showing 10 entries per page with navigation controls to move between pages.

### Responsive Design
The dashboard is responsive across different screen sizes, with appropriate layout changes for mobile and tablet views.


## 👨‍💻 Author

**Govind Madaan**

- GitHub: [@Govind156](https://github.com/Govind156)
- LinkedIn: [Govind Madaan](https://www.linkedin.com/in/govindmadaan/) 
