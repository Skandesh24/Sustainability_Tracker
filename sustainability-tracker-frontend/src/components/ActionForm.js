import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";

const ActionForm = ({ onSubmit, editAction }) => {
    const [action, setAction] = useState({ action: "", date: "", points: "" });

    useEffect(() => {
        if (editAction) setAction(editAction);
    }, [editAction]);

    const handleChange = (e) => {
        setAction({ ...action, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(action);
        setAction({ action: "", date: "", points: "" });
    };

    return (
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 400, margin: "20px auto", textAlign: "center" }}>
            <Typography variant="h6">{editAction ? "Edit Action" : "Add New Action"}</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField label="Action" name="action" value={action.action} onChange={handleChange} required />
                <TextField type="date" name="date" value={action.date} onChange={handleChange} required />
                <TextField label="Points" type="number" name="points" value={action.points} onChange={handleChange} required />
                <Button type="submit" variant="contained" color="primary">
                    {editAction ? "Update" : "Add"} Action
                </Button>
            </Box>
        </Paper>
    );
};

export default ActionForm;
