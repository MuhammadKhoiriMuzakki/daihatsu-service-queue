import React from 'react'

export default async function listQueue(req, res) {
    if (req.method === "POST") {
        const queue = await query({
            query: "SELECT * FROM queue_data WHERE arrival_date = ?",
            values: [req.body.arrival_date],
        });
        res.status(200).json({ data: queue });
    }
}
