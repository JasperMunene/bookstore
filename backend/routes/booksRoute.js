import express from "express";


const createRoutes = (db) => {
    const router = express.Router();


    // Getting all books from the database
router.get('/', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM books");
        const books = result.rows;
        const count = books.length;

        res.status(200).json({
            books,
            count,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
        return; 
    }
});

// Getting a single book from the database
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query('SELECT * FROM books WHERE id=$1', [id]);
        const book = result.rows;

        if (book.length === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            book,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Route for adding a new book
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishyear) {
            return res.status(400).json({
                message: "Send all the required fields",
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishyear,
        };

        const result = await db.query('INSERT INTO books (title, author, publishYear) VALUES ($1, $2, $3) RETURNING *', [newBook.title, newBook.author, newBook.publishYear]);

        res.status(201).json({
            message: 'Book added successfully',
            data: result.rows[0],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
        return;
    }
});

// Route for updating a book
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, publishYear } = req.body;

        if (!title && !author && !publishYear) {
            return res.status(400).json({
                message: "Send at least one field to update",
            });
        }

        let updateFields = '';
        const values = [];

        if (title) {
            updateFields += 'title = $1, ';
            values.push(title);
        }

        if (author) {
            updateFields += 'author = $2, ';
            values.push(author);
        }

        if (publishYear) {
            updateFields += 'publishYear = $3, ';
            values.push(publishYear);
        }

        // Remove the trailing comma and space
        updateFields = updateFields.slice(0, -2);

        const result = await db.query(`UPDATE books SET ${updateFields} WHERE id = $${values.length + 1} RETURNING *`, [...values, id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            message: 'Book updated successfully',
            data: result.rows[0],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Route for deleting a book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            message: 'Book deleted successfully',
            data: result.rows[0],
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

return router;
}




export default createRoutes;