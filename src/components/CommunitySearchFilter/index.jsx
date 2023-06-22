import React from 'react'

import GlobalModal from '../GlobalModal';

import './CommuntiySearchFilter.css'

const CommunitySearchFilter = ({ showAll, showAllPosts, showAllQuestions, filterPost, show, setShow, handleSubmit, setTitle, setContext, isQuestion, setIsQuestion, setSelectedFile }) => {

  function newPostPopup() {
    return (
      <>
        <a className="primary-btn" id="plus" onClick={() => setShow(true)}>
          +
        </a>
        <GlobalModal
          title="Create new post here"
          show={show}
          onClose={() => setShow(false)}
        >
          <form onSubmit={handleSubmit}>
            <label className="label-title">Title: </label>
            <input
              type="text"
              id="input-title"
              onChange={(e) => setTitle(e.target.value)}
              required
            ></input>
            <br />
            <label className="label-content">Content: </label>
            <input
              type="text"
              id="input-content"
              onChange={(e) => setContext(e.target.value)}
              required
            ></input>
            <br />
            <label className="label-question">Question: </label>
            <div className="question-checkbox">
              <label className="label-question"></label>
              <div className="question-checkbox">
                <input
                  type="checkbox"
                  className="sc-gJwTLC ikxBAC"
                  onChange={(e) => setIsQuestion(!isQuestion)}
                ></input>
              </div>
              <br />
              <label className="label-image">Add image: </label>
              <input className="input-image"
                type="file"
                id="input-image"
                accept=".jpg,.png"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              ></input>
              <div className="submit-post">
                <button id="modal-submit" type="submit"> Submit </button>
              </div>
            </div>
            <br />
          </form>
        </GlobalModal>
      </>
    );
  }

  return (
    <div className="filter-and-search-wrapper">
      <h4>Filter and Search Through Community Posts and Questions</h4>
      <div className="cm-search-filter-holder">
       <div className='cm-search-holder'>
          <input
            type="text"
            id="search-posts"
            onChange={filterPost}
          ></input>
          <label htmlFor="search-posts">Search</label>
       </div>
        <div>
          <a className='primary-btn primary-btn-green' onClick={showAll}>All</a>
          <a className='primary-btn primary-btn-green' onClick={showAllPosts}>Post</a>
          <a className='primary-btn primary-btn-green' onClick={showAllQuestions}>Question</a>
          {newPostPopup()}
        </div>
      </div>
    </div >
  )
}

export default CommunitySearchFilter