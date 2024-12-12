import React, { useState, useEffect } from 'react';

function MagicSpells() {
  const [spellList, setSpellList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchSpells();
  }, []);

  const fetchSpells = async () => {
    const response = await fetch('https://api.example.com/harry-potter/spells');
    const data = await response.json();
    setSpellList(data.spells);
  };

  const filteredSpells = spellList.filter(s => 
    s.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="spell-list">
      <input
        type="text"
        placeholder="Sök efter trolldom"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredSpells.map(spell => (
          <li key={spell.id}>
            <strong>{spell.name}</strong>
            <br />
            {spell.type} {spell.subType && ` (${spell.subType})`}
            <br />
            {spell.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MagicSpells;
