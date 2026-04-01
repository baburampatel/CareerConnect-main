# CareerConnect

## Description

CareerConnect is a modern job portal and career management platform designed to connect job seekers with recruiters efficiently. It features user profile management, job browsing and application functionality, and dedicated recruiter/admin interfaces for managing job postings and companies. The project leverages a clean, responsive UI and provides role-based access for students and recruiters.

**Key Features:**
- User authentication and profile management
- Job listing, search, and application
- Company and recruiter dashboards
- Admin interfaces for managing companies and jobs
- Modern, responsive frontend built with React and Vite

## Installation

### Prerequisites

- Node.js (v16 or above recommended)
- npm or yarn

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Sankrityayana/CareerConnect.git
   cd CareerConnect
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   # or
   yarn install
   ```

   To run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Backend Setup**
   > _Backend setup details should be added here if available (e.g., installing dependencies, environment variables, running the backend server)_

## Usage

After installing dependencies and starting the frontend server:

- Access the application at `http://localhost:5173` (default Vite port).
- Register as a student/job-seeker or recruiter.
- Students can browse jobs, apply, and manage their profiles.
- Recruiters can create company profiles and post job openings.
- Admin features allow for company and job management.

> _Consider adding screenshots or GIFs here for better clarity._

## Technologies Used

- **Frontend**:
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
  - [Redux](https://redux.js.org/)
  - [React Router](https://reactrouter.com/)
  - UI Libraries: shadcn/ui, Lucide Icons
  - CSS (custom and framework utilities)

- **Backend** (inferred from code snippets):
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ODM)
  - JWT Authentication

## Project Structure

The repository is organized as follows (partial, see [frontend directory](https://github.com/Sankrityayana/CareerConnect/tree/main/frontend) for more):

```
CareerConnect/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   ├── shared/
│   │   │   ├── ui/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   ├── package.json
│   ├── README.md
│   └── ...
├── backend/
│   ├── models/
│   │   └── application.model.js
│   └── ...
├── README.md
└── ...
```

_Note: Only partial structure is shown due to API result limitations. [See full structure here.](https://github.com/Sankrityayana/CareerConnect/tree/main)_

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request describing your changes.

Please ensure code style consistency and add tests where applicable.

## License

This project is licensed under the MIT License.

## Credits

- Developed and maintained by [Sankrityayana](https://github.com/Sankrityayana)
- Thanks to contributors and open-source libraries used in the project.

## Contact

For questions, issues, or feature requests, please open an issue on GitHub or contact the maintainer:

- GitHub: [Sankrityayana](https://github.com/Sankrityayana)
- Email: _Add your email here (if desired)_
