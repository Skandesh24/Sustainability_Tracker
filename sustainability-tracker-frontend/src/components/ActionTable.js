import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const ActionTable = ({ actions, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "20px auto", boxShadow: 3 }}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#1976d2" }}>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Points</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {actions.map((action) => (
                        <TableRow key={action.id}>
                            <TableCell>{action.id}</TableCell>
                            <TableCell>{action.action}</TableCell>
                            <TableCell>{action.date}</TableCell>
                            <TableCell>{action.points}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" sx={{ marginRight: 1 }} onClick={() => onEdit(action)}>
                                    Edit
                                </Button>
                                <Button variant="contained" color="error" onClick={() => onDelete(action.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ActionTable;
