import React from 'react';
import './Home.scss';
import Button from '../../components/Button/Button';
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () =>{
  return (       
        <section id="home" className="section-padding">
          <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="row mb-4">
                    <div className="col-md-3">
                          <a href="/">
                        <AiOutlineLeft/>
                          </a>
                    </div>
                  </div>
                </div>

                  <div className="card-body">                 
                    <div className="row">
                      <div className="col-md-12 text-center">               
                          
                            <div className="mt-4">     
                              <Link to={"/user"}>
                                <Button className="btn" size="md" text="ORGANIZADOR"/>
                              </Link>               
                            </div>
                      </div>
                    </div>         
                  </div> 
                  </div>
                </div>
           
            
           
          </div>
        </div>
                   
        </section>   
  );
}

export default Home;