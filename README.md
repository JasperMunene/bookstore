
# Bookstore Project

This is a full-stack web application for managing a bookstore. It includes a Node.js Express backend, PostgreSQL database, and a React frontend with Tailwind CSS for styling.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/JasperMunene/bookstore-project.git
```

2. Navigate to the project directory:

```bash
cd bookstore
```

3. Install dependencies for both the server and client:

```bash
npm install
cd client
npm install
```

4. Set up the PostgreSQL database:

   - Create a new PostgreSQL database.
   - Update the `config.js` file in the `server` directory with your database credentials.

5. Run the migrations to set up the database schema:

```bash
npm run migrate
```

### Development

To start the development server for both the server and client, run:

```bash
npm run dev
```

This will start the server on `http://localhost:5555` and the React app on `http://localhost:5173`.

### Usage

Open your browser and visit `http://localhost:5173` to access the bookstore application.

## Project Structure

- `client`: Contains the React frontend.
- `server`: Contains the Node.js Express backend.
- `database`: Contains migration files for PostgreSQL.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- React
- Tailwind CSS

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the [MIT Licence](./MIT-LICENSE.txt).
```

