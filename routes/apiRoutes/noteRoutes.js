const noteCommands = require('../../controllers/noteController');
const router = require('express').Router();

router.get('/notes', (req, res) => {
  noteCommands
  .getNotes()
  .then((notes) => 
    res.json(notes))
    .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  noteCommands
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

router.delete("/notes/:id", (req, res) => {
  noteCommands
  .deleteNote(req.params.id)
  .then(() => res.json({ ok: true}))
  .catch((err) => res.status(500).json(err));
})

module.exports = router;