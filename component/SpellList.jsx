import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css'

const SpellList = () => {
  const [spells, setSpells] = useState([]);
  const [newSpell, setNewSpell] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [charsPerPage, setCharsPerPage] = useState(10);

  useEffect(() => {
    fetchSpells();
  }, []);

  const fetchSpells = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://hp-api.onrender.com/api/spells');
      const data = await response.json();
      setSpells(data);
      setCurrentPage(1);
      setLoading(false);
    } catch (error) {
      console.error('Error, kunde inte hämta:', error);
      setError('Kunde inte hämta magiska svårigheter.');
      setLoading(false);
    }
  };

  const createSpell = async (spell) => {
    try {
      const response = await fetch('https://hp-api.onrender.com/api/spells', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(spell),
      });
      if (response.ok) {
        setSpells([...spells, spell]);
        setError(null);
        setLoading(true);
        setTimeout(fetchSpells, 100); // Uppdatera spell-listan efter några sekunders tid
      }
    } catch (error) {
      console.error('Error creating spell:', error);
      setError('Kunde inte skapa magisk svårighet.');
      setLoading(false);
    }
  };
//funktion finns men inte används. Krånglar med POST

  const updateSpell = async (updatedSpell) => {
    try {
      const index = spells.findIndex(s => s.id === updatedSpell.id);
      if (index !== -1) {
        const newSpells = [...spells];
        newSpells[index] = updatedSpell;
        setSpells(newSpells);
        setError(null);
        setLoading(true);
        setTimeout(fetchSpells, 100); // Uppdatera spell-listan efter några sekunders tid
      }
    } catch (error) {
      console.error('Error, kunde inte ta bort:', error);
      setError('Kunde inte uppdatera magisk svårighet.');
      setLoading(false);
    }
  };

//funktion finns men inte används. Krånglar med CORS och fetch
  const deleteSpell = async (spellId) => {
    try {
      await fetch(`https://hp-api.onrender.com/api/spells/${spellId}`, {
        method: 'DELETE',
      });
      const filteredSpells = spells.filter(s => s.id !== spellId);
      setSpells(filteredSpells);
      setError(null);
      setLoading(true);
      setTimeout(fetchSpells, 100); // Uppdatera spell-listan efter några sekunders tid
    } catch (error) {
      console.error('Error, kunde inte ta bort:', error);
      setError('Kunde inte ta bort magisk svårighet.');
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const visibleSpells = spells.slice((currentPage - 1) * charsPerPage, currentPage * charsPerPage);

  if (loading) return <div>Läser in magiska svårigheter...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h2>Magiska svårigheter</h2>
      <ul style={{ listStyleType: 'none' }}>
        {visibleSpells.map((spell) => (
          <li key={spell.id} style={{ listStyleType: 'none' }}>
            {spell.name} - {spell.description}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Föregående</button>
        <span>Sida {currentPage}</span>
        <button onClick={handleNextPage} disabled={visibleSpells.length === spells.length}>Nästa</button>
      </div>

    </>
  );
};

export default SpellList;
