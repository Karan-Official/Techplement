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

const getQuoteOfTheDayIndex = (totalQuotes) => {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear % totalQuotes;
};

router.get('/qod', async(req, res) => {
  try {
    const quotes = await Quote.find();
    if (quotes.length === 0) {
      return res.status(404).json({ success: false, message: 'No quotes found.' });
    }

    const index = getQuoteOfTheDayIndex(quotes.length);
    const quoteOfTheDay = quotes[index];

    res.status(200).json({success: true, quote: quoteOfTheDay});
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
