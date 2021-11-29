import { Request, Response } from 'express';

import fs from 'fs';
import csv from 'csv-parser';
const results: {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  is_published: string;
  retailer: string;
  category: string;
}[] = [];

export const getRecords = (req: Request, res: Response) => {
  const page = req.query.page || 1;
  const limit = req.query.limit;

  const stream = fs.createReadStream('./public/flyers_data.csv');
  stream
    .pipe(csv())
    .on('data', data => {
      results.push(data);
    })
    .on('end', () => {
      const resultsPaginated = results.slice(
        (Number(page) - 1) * Number(limit),
        (Number(page) - 1) * Number(limit) + Number(limit)
      );

      res.json({
        results: resultsPaginated,
        totalPages: Math.ceil(results.length / 10)
      });

      results.length = 0;
    })
    .on('error', err => {
      res.status(500).json({ results: 'There was an error!' });
    });
};
