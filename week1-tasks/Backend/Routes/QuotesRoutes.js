const express = require('express');
const router = express.Router();
const Quote = require('../Models/Quote');

router.post('/add', async(req, res) => {
  try {
    const {text, author} = req.body;
    const newQuote = new Quote({text, author});
    await newQuote.save();
    res.status(200).json({success: true});
  } catch(e) {
    res.status(500).json({success: false});
  }
});

router.get('/random', async(req, res) => {
  try {
    const count = await Quote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(random);
    res.status(200).json({success: true, quote: randomQuote});
  } catch(e) {
    res.status(500).json({success: false});
  }
});

router.get('/author/:author', async(req, res) => {
  try {
    const authorName = req.params.author.trim();
    const quotes = await Quote.find({ author: { $regex: authorName, $options: 'i' } });
    if (quotes.length === 0) {
      return res.status(404).json({ quote: 'No quotes found for this author.' });
    }
    res.status(200).json({success: true, quote: quotes});
  } catch(e) {
    res.status(500).json({success: false});
  }
});

module.exports = router;
