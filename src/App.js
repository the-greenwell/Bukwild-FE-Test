import './App.css';
import React, { useState, useEffect } from 'react';
import { NavLink, Route, useHistory } from 'react-router-dom';

import logo from './abc_logo.svg';


const Layout = ({data}) => {
  return(
    <>
      {/* Main Content */}
      <div className='row max-width feature'>
        <p className='headline col col-stack'>{data.headline}</p>
        <p className='subhead col col-stack'>{data.subhead}</p>
      </div>


      {/* Footer */}
      <div className='row max-width footer'>
        <p className='callToAction col col-stack'>{data.cta}</p>
        <p className='col col-stack'>LET'S TALK. <span className='orange'>→</span></p>
      </div>
    </>
  )
};

function App() {
  /* State for initial data fetch */
  const [data, setData] = useState([]);

  /* State tracking current page for styling */
  const [page, setPage] = useState([]);

  /* Use React Router History hook */
  const history = useHistory();

  const getData = () => {
    /* Fetch Data from included json */
    fetch(`${process.env.PUBLIC_URL}/data/content.json`
      ,{
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
      })
      /* Format 'server' response to readable format */
      .then((response) => {
        return response.json();
      })
      /* Making data available to app via state */
      .then((myJson) => {
        setData(myJson.pages);
      });
  }

  const setBackground = (slug) => {
    /* Search for data-set mathing slug */
    var selected = data.find((pages) => {
      if(pages.slug == slug) return true
    })
    /* Won't set state if slug doesn't match data */
    if(selected) {
      /* Sets state for content */
      setPage(selected.blocks[0]);
    }
  }

  /* Get data before initial paint */
  useEffect(()=>{
    getData().then(() => {
      /* Fade in animation to handle flicker from initial render */
      let element = document.querySelector('.App');
      element.classList.add('fade-in');
    });
  },[])

  useEffect(() => {
    let path = window.location.href.replace(/(.*\/)/,'');
    if(data.length > 0){
    /* Handle page refreshes */
      if (path.length > 0) {
        setBackground(path);
      } else {
        /* Handle initial render */
        history.replace('/' + data[0].slug);
        setBackground(data[0].slug);
      }
    }
  }, [data])

  return (
    <div className="App" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/backgrounds/${page.background}')` }}>
        <div className='container'>

          {/* Page Header */}
          <div className='max-width header'>

            {/* Logo and Contact row */}
            <div className='row'>
              <img src={logo} className='logo col' alt='ABC Logo'/>
              <div className='contact col'>
                Contact Us
              </div>
            </div>

            {/* Nav Menu */}
            <ul className='menu'>
              {
                data.map((page)=> <li key={page.slug}>
                                      <NavLink
                                        activeClassName='orange'
                                        to={page.slug}
                                        onClick={() => setBackground(page.slug)}
                                      >
                                          {page.title}
                                      </NavLink>
                                  </li>)
              }
            </ul>
          </div>

          {/* Route to Layout component */}
          <Route
            path='/:slug'
            render={
              () => <Layout data={page} />
            }/>

        </div>
    </div>
  );
}

export default App;
