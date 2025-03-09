import React, { useState, useEffect } from "react";
import { getActions, addAction, updateAction, deleteAction } from "./services/api";
import ActionTable from "./components/ActionTable";
import ActionForm from "./components/ActionForm";



const App = () => {
    const [actions, setActions] = useState([]);
    const [editAction, setEditAction] = useState(null);

    useEffect(() => {
        loadActions();
    }, []);

    const loadActions = async () => {
        const data = await getActions();
        setActions(data);
    };

    const handleAdd = async (action) => {
        await addAction(action);
        loadActions();
    };

    const handleEdit = (action) => {
        setEditAction(action);
    };

    const handleUpdate = async (updatedAction) => {
        await updateAction(updatedAction.id, updatedAction);
        setEditAction(null);
        loadActions();
    };

    const handleDelete = async (id) => {
        await deleteAction(id);
        loadActions();
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Sustainability Tracker</h1>
            <ActionForm onSubmit={editAction ? handleUpdate : handleAdd} editAction={editAction} />
            <ActionTable actions={actions} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
    
};

export default App;
