import React, { useState, useEffect } from "react";
import axios from "axios";

import { useAuth } from "../../Context";
import { JournalForm, JournalPosts } from "../../components";

import "./MyJournalPage.css";

const MyJournalPage = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEntries = journalEntries.filter((entry) =>
    entry.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getJournalEntries = async () => {
    try {
      const response = await axios.get(
        `https://bump-backend.onrender.com/journals/user/${user.userId}`
      );
      setJournalEntries(response.data.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  const deleteJournalEntry = async (entryId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (!confirmed) return;

    try {
      await axios.delete(
        `https://bump-backend.onrender.com/journals/${entryId}`,
        { withCredentials: true }
      );
      getJournalEntries();
    } catch (err) {
      console.log(err);
    }
  };

  const addJournalEntry = (newEntry) => {
    setJournalEntries([...journalEntries, newEntry]);
  };

  useEffect(() => {
    getJournalEntries();
    console.log(journalEntries);
  }, []);

  return (
    <>
      <div className="container">
        <JournalForm addJournalEntry={addJournalEntry} />
        <div>
          <h2>My Journal Entries</h2>
          <div className="jnp-search-holder">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              id="journal-search-bar"
              min={2}
              maxLength={10}
            />
            <label htmlFor="journal-search-bar">Search</label>
          </div>
          <div className="jn-post-wrapper">
            {filteredEntries.map((entry, index) => (
              <JournalPosts
                key={index}
                entry={entry}
                index={index}
                deleteJournalEntry={deleteJournalEntry}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyJournalPage;
